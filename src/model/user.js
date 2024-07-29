
import mongoose from 'mongoose';

const userShema = mongoose.Schema({
    id: { type: String, required: true},
    name: {type: String, required: true, min: 3},
    email: {type: String, required: true, min: 1},
    password: {type: String, required: true},
   
});
export default mongoose.model("User", userShema);