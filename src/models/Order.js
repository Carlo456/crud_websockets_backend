import { Schema, model } from "mongoose";

const schema = new Schema({
    owner: {
        type: String,
        required: true
    },
    drink: {
        type: String,
        required: false
    },
    food: {
        type: String,
        required: true
    },  
},{ 
    timestamps: true 
});

export default model('Order', schema);