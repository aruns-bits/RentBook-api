import mongoose from "mongoose"
import { BooksSchema, CartSchema } from "../models/model"

const Books = mongoose.model("Books", BooksSchema)
const Cart = mongoose.model("Cart", CartSchema)

export const getBooks = (req, res) => {
  Books.find({}, (err, books) => {
    if (err) res.send(err)
    res.json(books)
  })
}

export const addCart = (req, res) => {
  let newBook = new Cart({ Books: [...req.body] })

  newBook.save((err, books) => {
    if (err) res.send(err)
    res.json(books)
  })
}

export const getCart = (req, res) => {
  Cart.find({}, (err, books) => {
    if (err) res.send(err)
    res.json(books)
  })
}
