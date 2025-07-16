import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({

    text:{
        type:String,
        required:true,

    },
    sendBy:{
        type:String,
        default:"Anonymous"

    },
    createdAt: {
        type: Date,

    },

})

const message = mongoose.models.message || mongoose.model("message", messageSchema)
export default message