import mongoose, { Schema } from "mongoose";

const commentModel = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        authorId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        blogId: {
            type: Schema.Types.ObjectId,
            ref: "Blog",
            required: true
        },
        status: {
            type: String,
            enum: ["approved", "pending", "rejected"],
            default: "pending"
        },
        parentCommentId: {
            type: Schema.Types.ObjectId,
            ref: "Comment",
            default: null
        }
    },
    {
        timestamps: true
    }
);

export const Comment = mongoose.model("Comment", commentModel);
    