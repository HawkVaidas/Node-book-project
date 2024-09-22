

import { v4 as uuidv4 } from 'uuid';
import BookModel from "../model/book.js"


const INSERT_BOOK = async (req, res) => {
   try {
    const book = {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        year: req.body.year,
        imgUrl: req.body.imgUrl,
        id: uuidv4(),
        userId: req.body.userId,
    };
    const response = await new BookModel(book);
    await response.save();
    return res.status(201).json({ message: "Book was insert", response: response});
} catch (err) {
    console.log(err);
    return res.status(500).json({message: "errorA in application"});
}
};

const GET_BOOK = async (req, res) => {
    try {
        const response = await BookModel.find();
        return res.status(200).json({ book: response});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }
};

const GET_USER_BOOK = async (req, res) => {
    try {

        //---cia pataisome vietoj params.body.---find({userId: req.body.userId}) nes Route pridesim auth,vietoj userId---
        // const response = await BookModel.find({userId: req.params.userId});

        const response = await BookModel.find({userId: req.body.userId});
        return res.status(200).json({ book: response});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }
};


const GET_BOOK_BY_ID = async (req, res) => {
    try {
        const response = await BookModel.findOne({id: req.params.id});
        return res.status(200).json({book: response});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }
};


const DELETE_BOOK_BY_ID = async (req, res) => {
    try {
        const response = await BookModel.findOneAndDelete({id: req.params.id});

        // if (!response.userId !== req.body.userId) {
        //     return res.status(403).json({message: "We can only delete your own books"});
        // }

        if (!response) {
            return res.status(404).json({message: "This book does not exist"});
        }
        return res.status(200).json({books: response});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "error in application"});
    }
};

export {INSERT_BOOK, GET_BOOK,  GET_USER_BOOK, GET_BOOK_BY_ID, DELETE_BOOK_BY_ID,};