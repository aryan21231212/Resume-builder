import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { template, data } = body;

    

    console.log("Received template:", template);
    console.log("Received data:", data);


    return NextResponse.json({ success: true, message: "PDF generation started" });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
