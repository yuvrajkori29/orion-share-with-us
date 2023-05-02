import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
<<<<<<< HEAD
import { login, signup, fetchUser } from '../controller/user-controller.js';
=======
import { login, signup } from '../controller/user-controller.js';
>>>>>>> origin/master
const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);
router.post('/login',login);
router.post('/signup',signup);
<<<<<<< HEAD
router.get('/fetch-user', fetchUser);
=======
>>>>>>> origin/master

export default router;