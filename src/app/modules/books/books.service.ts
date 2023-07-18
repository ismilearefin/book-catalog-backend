import { IBook } from "./books.interface"
import Book from "./books.model"


const createBook = async(book:IBook):Promise<IBook|null>=>{
    const createdBook = await Book.create(book)
    if(!createdBook){
        throw new Error('Could not create book')
    }

    return createdBook;
}
const getAllBook = async():Promise<IBook[]|null>=>{
    const createdBook = await Book.find()
    if(!createdBook){
        throw new Error('Could not find any book')
    }

    return createdBook;
}
const getSingleBook = async(params:string):Promise<IBook|null>=>{
    const createdBook = await Book.findById(params)
    if(!createdBook){
        throw new Error('Could not find any book')
    }

    return createdBook;
}


export default{
    createBook,
    getAllBook,
    getSingleBook
}