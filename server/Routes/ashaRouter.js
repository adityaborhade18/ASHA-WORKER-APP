import express from 'express';
import { getProfile, login, logout, register } from '../Controllers/ashaController.js';

const ashaRouter=express.Router();

ashaRouter.post('/register',register);
ashaRouter.post('/login',login);
ashaRouter.post('/logout',logout);
ashaRouter.get('/getProfile',getProfile);

export default ashaRouter;
