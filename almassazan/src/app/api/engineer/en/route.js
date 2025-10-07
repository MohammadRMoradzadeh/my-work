import connectToDB from "@/configs/db";

import EngineerModel from "@/models/Engineer";
import { cookies } from "next/headers";
export async function GET(req) {
  const cookieStore = cookies();
  try {
    connectToDB();
    const enEngineers = await EngineerModel.find(
      {},
      " -fa_fullName -fa_role -fa_evidence -fa_workRecords -en_evidence -en_workRecords -email -__v"
    );
    const engineers = enEngineers.map((engineer) => {
      return {
        _id: engineer._id,
        fullName: engineer.en_fullName,
        role: engineer.en_role,
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
      `engineer / en (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer / en (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
