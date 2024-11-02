import { NextResponse } from "next/server";
import getZodiacSignFromDate from "../../libs/zodiac.js"
import getRandomMessage from "../../libs/messages.js"
 
export const POST = async (request: Request) => {
    try{
        const {yourName, yourDOB, partnerName, partnerDOB} = await request.json();
        const user_zodiac = await getZodiacSignFromDate(yourDOB);
        const partner_zodiac = await getZodiacSignFromDate(partnerDOB);
        const message = await getRandomMessage();
        
        return new NextResponse(JSON.stringify({ yourName: yourName, yourSign: user_zodiac, partnerName:partnerName, partnerSign: partner_zodiac, message:message}), { status: 201});
    }catch (error:any){
        return new NextResponse(error.message)
    }
}