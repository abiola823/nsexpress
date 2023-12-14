import express from 'express';
import {updateUser, createUser, findUser, findAll, findbyemail} from '../controllers/userControllers.js';
const router = express.Router();

router.post('/create-user', createUser);
router.patch('/update-user/:id', updateUser);
router.get('/find-user/:id', findUser);
router.get('/find-userbymail/:email', findbyemail);
router.get('/find-all-users', findAll);

export default router;
