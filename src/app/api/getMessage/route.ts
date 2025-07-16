import { dbConnect } from "@/mongo_connect/dbConnect";
import message from "@/model/messageSchema";
import { NextResponse } from "next/server";


export async function GET() {

    await dbConnect()

    const searchMessage = await message.find({})

    return NextResponse.json(searchMessage)
    
}