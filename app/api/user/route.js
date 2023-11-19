import connectDB from "@/config/db";
import user from "@/models/user";
import { NextResponse } from "next/server";

await connectDB()
export async function POST(req) {
  try {
    const { name, email, password } = JSON.parse(await req?.text());
    if (!(name && email && password)) {
      return NextResponse.json(
        { message: "Invalid request", status: false },
        { status: 400 }
      );
    }
    const model = new user({
      name: name,
      email: email, 
      password: password,
    });
    const data = await model.save();
    return NextResponse.json({message: "User created", status:true}, { status: 200 });
  } catch (err) {
    if(err.code === 11000) {
      return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
