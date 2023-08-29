import Blog from "@/models/blog";
import { connectTODB } from "@/utils/database";
import { imageUplaod } from "@/utils/imageUpload";

export const POST = async (req, res) => {
    const data = await req.formData()
    const creator = data.get("userId");
    const title = data.get("title");
    const description = data.get("description");
    const tags = data.get("tags");
    const file = data.get("image")
    const image = await imageUplaod(file, "thumbnails")

    try {
        await connectTODB()
        const newBlog = new Blog({
            creator,
            title,
            description,
            tags,
            image
        })
        await newBlog.save();
        console.log(newBlog);
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed", { status: 500 })
    }
}