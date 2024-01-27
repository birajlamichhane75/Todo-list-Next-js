import { connectstr } from "@/lib/db";
import { Task } from "@/lib/model/task";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    const uid = {_id:params.taskid};

    await mongoose.connect(connectstr);
    let data = await Task.findById(uid);
    return NextResponse.json({data,success:true})
}


export async function PUT(req,{params}){
    let payload = await req.json();
    const uid = {_id:params.taskid};

    await mongoose.connect(connectstr);
    let result = await Task.findOneAndUpdate(uid,payload);
    return NextResponse.json({result,success:true})
    
}

export async function DELETE(req,{params}){
    const uid = {_id:params.taskid};

    await mongoose.connect(connectstr)
    let result = await Task.deleteOne(uid)

    return NextResponse.json({success:true})
}