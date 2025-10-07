import connectToDB from "@/configs/db";
import ProjectModel from "@/models/Project";
export async function GET(req, { params }) {
  try {
    connectToDB();
    const id = params.id;
    const FaProject = await ProjectModel.findOne(
      { _id: id },
      "-en_title -en_employer -en_startDate -en_duration -en_description  -__v"
    );
    const project = {
      _id: FaProject._id,
      title: FaProject.fa_title,
      employer: FaProject.fa_employer,
      startDate: FaProject.fa_startDate,
      duration: FaProject.fa_duration,
      description: FaProject.fa_description,
      images: FaProject.images,
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
      `projects / fa / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `projects / fa / [id] (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
