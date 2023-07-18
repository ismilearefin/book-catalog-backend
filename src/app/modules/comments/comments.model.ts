import mongoose from "mongoose";
import { IComment } from "./comments.interface";

const CommentSchema = new mongoose.Schema<IComment>({
  id: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  
},{
    timestamps: true,
});

const CommentModel = mongoose.model<IComment>("Comment", CommentSchema);

export default CommentModel;