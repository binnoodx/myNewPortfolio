import { dbConnect } from "@/mongo_connect/dbConnect";
import message from "@/model/messageSchema";
import { NextResponse , NextRequest } from "next/server";

export async function POST(req:NextRequest) {

    await dbConnect()

    const message_text = await req.json();
    console.log(message_text.message)

    const newMessage  = new message({
        text:message_text.message,
        createdAt : Date.now(),
        sendBy:message_text.user
    })
    await newMessage.save()


    return NextResponse.json({
        success:true
    })

    

    
}
