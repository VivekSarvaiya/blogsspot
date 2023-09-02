import Blog from "@/models/blog";
import { connectTODB } from "@/utils/database"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connectTODB();
        const blogs = await Blog.find({}).populate('creator');
        return NextResponse.json(blogs)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to fetch data", status: 500 })
    }
}