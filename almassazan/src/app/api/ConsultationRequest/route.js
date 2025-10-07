import connectToDB from "@/configs/db";
import ConsultationRequestModel from "@/models/ConsultationRequest";
import { cookies } from "next/headers";
export async function GET(req) {
  const cookieStore = cookies();
  try {
    await connectToDB();
    const consultation = await ConsultationRequestModel.find({});
  
    return Response.json(
      { message: ["ok"], data: consultation },

      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `ConsultationRequest (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `ConsultationRequest (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
