
import mongoose from "mongoose";

 const bookSchema = mongoose.Schema ({
    id: { type: String, required: true},
    title: { type: String, required: true},
    author: { type: String, required: true},
    publisher: { type: String, required: true},
    genre: { type: String, required: true},
    year: { type: Number, required: true},
    imgUrl: { type: String, required: true},
    userId: { type: String, required: true},
    
 });
export default mongoose.model("book", bookSchema);