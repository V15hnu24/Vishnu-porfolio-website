import express from 'express';
import {getPosts, homepage, submitPage} from '../controllers/posts.js';
import ex from '../models/postMessage.js';

const router = express.Router();
router.post('/submit' , getPosts);
router.get('/', homepage);
// router.get('/submit', submitPage);
export default router;