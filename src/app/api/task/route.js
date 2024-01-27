import { connectstr } from "@/lib/db";
import { Task } from "@/lib/model/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoose.connect(connectstr); 

    let data = await Task.find()
    return NextResponse.json({data,success:true})
}

export async function POST(req){
    let payload = await req.json();

    await mongoose.connect(connectstr)
    let data = new Task(payload);
    const result = await data.save();
    return NextResponse.json({result,success:true})

}

