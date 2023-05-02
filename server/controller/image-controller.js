import File from '../models/file.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import UserModel from '../models/user.js';
import { response } from 'express';

dotenv.config();

export const uploadImage = async (request, response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname,
    }
    const user_id = request.headers?.user_id   
    try {
        if (!user_id){
            response.status(500).json({ error: 'Please Login First' });    
        }else {
            const file = await File.create(fileObj);
            let user = await UserModel.findById(user_id);
            user.files.push(file._id);
            await user.save();
            user = await UserModel.findById(user_id).populate('files');
            response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}`, user:user});
        }
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}

export const getImage = async (request, response) => {
    try {   
        const file = await File.findById(request.params.fileId);
        file.downloadCount++;
        await file.save();
        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}
