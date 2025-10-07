import connectToDB from "@/configs/db";
import ProjectModel from "@/models/Project";
export async function GET(req, { params }) {
  try {
    connectToDB();
    const id = params.id;
    const EnProject = await ProjectModel.findOne(
      { _id: id },
      "-fa_title -fa_employer -fa_startDate -fa_duration -fa_description  -__v"
    );
    const project = {
      _id: EnProject._id,
      title: EnProject.en_title,
      employer: EnProject.en_employer,
      startDate: EnProject.en_startDate,
      duration: EnProject.en_duration,
      description: EnProject.en_description,
      images: EnProject.images,
    };

    return Response.json(
      {
        message: ["ok"],
        data: project,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `projects / en / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `projects / en / [id] (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
