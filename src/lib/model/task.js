import mongoose from "mongoose";

const todotask = new mongoose.Schema({
    task:String,
    desc:String
})

export const Task = mongoose.models.tasks || mongoose.model("tasks",todotask);