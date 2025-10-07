import connectToDB from "@/configs/db";
import ProjectModel from "@/models/Project";
import { cookies } from "next/headers";
export async function GET() {
  const cookieStore = cookies();
  try {
    connectToDB();
    const FaProjects = await ProjectModel.find(
      {},
      "-en_title -en_employer -en_startDate -en_duration -en_description -fa_employer -fa_startDate -fa_duration -fa_description  -__v"
    );
    const projects = FaProjects.map((project) => {
      return {
        _id: project._id,
        title: project.fa_title,
        image: project.images[0],
      };
    });
    return Response.json(
      {
        message: ["ok"],
        data: projects,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `projects / fa (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `projects / fa (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
