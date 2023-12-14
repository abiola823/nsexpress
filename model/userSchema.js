import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    track: {
        type: String,
        required: true
    },
    programmingLanguage: {
        type: String,
        required: true
    },
    currentStage: {
            type: Number,
            required: true
    }
}, {
    timestamps: true
});

const usersModel = mongoose.model("stage2", userSchema) 

export default usersModel;