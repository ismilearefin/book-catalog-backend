import { Request, Response } from 'express'
import createBookService from './books.service'


const createBook =async (req:Request,res:Response) => {
    try{
        const {book} = req.body;
        const result = await createBookService.createBook(book)
        res.status(200).json({
            success:true,
            message:'Books created successfully',
            data:result
        })
    }catch(err){
        res.status(400).json({
            success:false,
            message:'Failed to create Book'
        })
    }
}
const getAllBook =async (req:Request,res:Response) => {
    try{
        
        const result = await createBookService.getAllBook()
        res.status(200).json({
            success:true,
            message:'Get All Books successfully',
            data:result
        })
    }catch(err){
        res.status(400).json({
            success:false,
            message:'Failed to get all Book'
        })
    }
}
const getSingleBook =async (req:Request,res:Response) => {
    try{
        const params = req.params.id
        const result = await createBookService.getSingleBook(params)
        res.status(200).json({
            success:true,
            message:'Get All Books successfully',
            data:result
        })
    }catch(err){
        res.status(400).json({
            success:false,
            message:'Failed to get all Book'
        })
    }
}

export default {
    createBook,
    getAllBook,
    getSingleBook
};