import mongoose from "mongoose";

export interface IComment {
  _id: mongoose.Types.ObjectId;
    id: string;
    comment: string;
  }