import Blog from "@/models/blog";
import { connectTODB } from "@/utils/database";

const handler = async (req, res) => {
    const { userId, title, description, tags, } = await req.json();

    console.log(userId, title, description, tags,);
    try {
        await connectTODB()
        const newBlog = new Blog({
            creator: userId,
            title,
            description,
            tags
        })
        await newBlog.save();
        return new Response(JSON.stringify(newBlog), { status: 201 })
    } catch (error) {
        console.log(error);
        return new Response("Failed", { status: 500 })
    }
}
export { handler as POST }