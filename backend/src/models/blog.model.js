import mongoose, { Schema } from "mongoose";

const blogModel = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String, // SEO-friendly URL identifier, derived from title
            required: true,
        },
        content: {
            type: String,
            required: true
        },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        tags: {
            type: [String],
        },
        category: {
            type: String,
        },
        coverImage: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["draft", "published", "archived"],
            default: "draft"
        },
        like: {
            type: Number,
            default: 0
        },
        views: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

export const Blog = mongoose.model("Blog", blogModel);
