import { NextResponse } from "next/server";
import getZodiacSignFromDate from "../../libs/zodiac.js"
 
export const POST = async (request: Request) => {
    try{
        const {yourName, yourDOB, partnerName, partnerDOB} = await request.json();
        const user_zodiac = await getZodiacSignFromDate(yourDOB);
        const partner_zodiac = await getZodiacSignFromDate(partnerDOB);
        return new NextResponse(JSON.stringify({ user: user_zodiac, partner: partner_zodiac}), { status: 201});
    }catch (error:any){
        return new NextResponse(error.message)
    }
}