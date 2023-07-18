import { IComment } from "./comments.interface";
import CommentModel from "./comments.model";



const createComment = async(comment:IComment):Promise<IComment|null>=>{
    const createdBook = await CommentModel.create(comment)
    if(!createdBook){
        throw new Error('Could not create Comment')
    }

    return createdBook;
}
const getComment = async(id:string):Promise<IComment[]|null>=>{
    const result = await CommentModel.find({'id':id})
    if(!result){
        throw new Error('Could not find Comment')
    }

    return result;
}


export default {
    createComment,
    getComment
}