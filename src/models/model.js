import mongoose from "mongoose"
const Schema = mongoose.Schema

export const BooksSchema = new Schema({
  name: String,
  author: String,
  language: String,
  type: String,
  description: String,
})

export const CartSchema = new Schema({
  Books: [BooksSchema],
})
