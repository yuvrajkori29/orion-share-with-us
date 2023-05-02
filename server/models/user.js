import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    files: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'file',
        default: []
    }
})

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;