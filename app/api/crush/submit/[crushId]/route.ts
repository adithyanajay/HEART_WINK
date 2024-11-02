import Crush from "@/app/libs/modals/crush";
import connect from "@/app/libs/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    try{
        const body = await request.json();
        const { searchParams } = new URL(request.url);
        const crushId = searchParams.get('crushId');

        
        if(!crushId ){
            return new NextResponse(JSON.stringify({message: "Invalid or missing crushId"}), { status: 400});
        }

        await connect();

        const submissions = await Crush.find({ id: crushId });
        return new NextResponse(JSON.stringify(submissions), { status:200});

    } catch (error: any) {
        return new NextResponse(JSON.stringify({error: "error in fetching submissions", message: error.message}), { status: 500 });
    }
}

