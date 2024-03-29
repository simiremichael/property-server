import express from 'express';
import { getPostBySearch, getPosts, createPost, updatePost, deletePost, getPost, likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/search', getPostBySearch);
router.get('/', getPosts);
router.post('/', auth, createPost);
router.get('/:id', getPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id',  auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router; 

