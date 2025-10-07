import connectToDB from "@/configs/db";
import ConsultationRequestModel from "@/models/ConsultationRequest";
import { cookies } from "next/headers";
export async function GET(req, { params }) {
  const cookieStore = cookies();
  const id = params.id;
  try {
    await connectToDB();
    const consultation = await ConsultationRequestModel.findOne({ _id: id });
    if (!consultation) {
      return Response.json(
        { message: ["Consultation not found !!"], data: null },
        { status: 404 }
      );
    }
    return Response.json(
      { message: ["ok"], data: consultation },

      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `ConsultationRequest / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `ConsultationRequest / [id] (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
export async function PUT(req, { params }) {
  const cookieStore = cookies();
  const id = params.id;
  try {
    await connectToDB();
    const consultation = await ConsultationRequestModel.findOne({ _id: id });
    if (!consultation) {
      return Response.json(
        { message: ["Consultation not found !!"], data: null },
        { status: 404 }
      );
    }

    const consultationUpdated = await ConsultationRequestModel.findOneAndUpdate(
      { _id: id },
      { isAnswered: !consultation.isAnswered }
    );
    if (!consultationUpdated) {
      throw new Error({
        message: " Unexpected error in consultation model !! ",
      });
    }
    return Response.json(
      {
        message: [
          `Order status successfully changed to ${
            !consultation.isAnswered ? '"answered"' : '"not answered"'
          }`,
          `وضعیت سفارش باموفقیت به ${
            !consultation.isAnswered ? '"پاسخ داده شده"' : '"پاسخ داده نشده"'
          } تغییر یافت`,
        ],
        data: null,
      },

      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(
      `ConsultationRequest / [id] (GET) : The request encountered a server error ==>${err.message}`
    );
    return Response.json(
      {
        message: [
          `ConsultationRequest / [id] (GET) : The request encountered a server error ==>${err.message}`,
        ],
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
