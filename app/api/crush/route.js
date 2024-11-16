import connect from "@/app/libs/db";
import Crush from "@/app/libs/modals/crush";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";


export const POST = async (request) => {
  try {
    await connect();
    console.log("workiing")
    const uniqueId = uuidv4();

    const body = await request.json();

    const newLink = new Crush({
      id: uniqueId,
      user: body.name,
      submissions: [],
    });

    await newLink.save();

    return new NextResponse(JSON.stringify({ id: uniqueId }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error in creating link", error }),
      { status: 500 }
    );
  }
};
