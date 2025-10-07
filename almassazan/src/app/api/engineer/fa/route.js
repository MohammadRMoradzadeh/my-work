import connectToDB from "@/configs/db";
import EngineerModel from "@/models/Engineer";
import { cookies } from "next/headers";
export async function GET(req) {
  const cookieStore = cookies();
  try {
    connectToDB();
    const faEngineers = await EngineerModel.find(
      {},
      " -en_fullName -en_role -en_evidence -en_workRecords -fa_evidence -fa_workRecords -email -__v"
    );
    const engineers = faEngineers.map((engineer) => {
      return {
        _id: engineer._id,
        fullName: engineer.fa_fullName,
        role: engineer.fa_role,
        image: engineer.image,
      };
    });
    return Response.json(
      {
        message: ["ok"],
        data: engineers,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `engineer / fa (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer / fa (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
