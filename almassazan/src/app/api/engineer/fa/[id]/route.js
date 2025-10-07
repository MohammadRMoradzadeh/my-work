import connectToDB from "@/configs/db";

import EngineerModel from "@/models/Engineer";
export async function GET(req, { params }) {
  const id = params.id;
  try {
    connectToDB();
    const engineer = await EngineerModel.findOne(
      { _id: id },
      "-en_fullName -en_role -en_evidence -en_workRecords  -__v"
    );
    return Response.json(
      {
        message: ["ok"],
        data: {
          _id: engineer._id,
          fullName: engineer.fa_fullName,
          role: engineer.fa_role,
          evidence: engineer.fa_evidence,
          workRecords: engineer.fa_workRecords,
          email: engineer.email,
          image: engineer.image,
        },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `engineer / fa / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `engineer / fa / [id] (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
