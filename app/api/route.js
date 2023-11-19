import connectDB from "@/config/db";
import user from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

await connectDB()
export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {
    const {username} = JSON.parse(await req.text());
    if(!username){
        return NextResponse.json({error: "No username provided"}, { status: 400 });
    }
    const model = new user({
        username: username
    })
    const data = await model.save()
  return NextResponse.json(data, { status: 200 });
}
