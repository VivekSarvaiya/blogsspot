import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    tags: {
        type: Array,
        required: [true, "Tags are required"]
    },
    image: {
        type: String,
        required: [true, "Image is required"]
    },
})


const Blog = models.Blog || model("Blog", BlogSchema)

export default Blog