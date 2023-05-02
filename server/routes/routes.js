import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { login, signup, fetchUser } from '../controller/user-controller.js';
const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);
router.post('/login',login);
router.post('/signup',signup);
router.get('/fetch-user', fetchUser);

export default router;