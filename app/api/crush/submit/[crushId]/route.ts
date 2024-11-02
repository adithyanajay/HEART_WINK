import Crush from "@/app/libs/modals/crush";
import connect from "@/app/libs/db";
import { NextResponse } from "next/server";


export const GET = async (request: Request, context: { params: any}) => {
  try {
    const crushId  = context.params.crushId;

    if (!crushId) {
      return NextResponse.json({ message: "Invalid or missing crushId" }, { status: 400 });
    }

    await connect();

    const submissions = await Crush.find({ id: crushId }).exec();
    return NextResponse.json(submissions, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching submissions:", error);
    return NextResponse.json({ error: "Error in fetching submissions", message: error.message }, { status: 500 });
  }
};




export const POST = async(request: Request, context: { params: any}) =>{
    try{
        const {friendName, crushName} = await request.json();
        const crushId = context.params.crushId;
    
        await connect();
    
        const list = await Crush.findOne({id: crushId});
        if(!list)
        {
          return new NextResponse(JSON.stringify({ message: 'id not found please try again with another id.' }));
        }
        list.submissions.push({friendName: friendName, crushName: crushName});
        await list.save();
        return new NextResponse(JSON.stringify({ message: 'Submission successful' , name: list.user}));
    
    } catch(error:any) {
        
        return new NextResponse(JSON.stringify({ error: error.message}));
    }
 
}