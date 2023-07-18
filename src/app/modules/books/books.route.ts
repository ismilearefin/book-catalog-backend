import express  from 'express';
import createBookController from './books.controller';

const router = express.Router();

router.post('/create-book', createBookController.createBook )
router.get('/getall-book', createBookController.getAllBook )
router.get('/getSingle-book/:id', createBookController.getSingleBook )

export default router;