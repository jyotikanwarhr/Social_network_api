import { Router } from 'express';
const router = Router();
import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById, addFriend, removeFriend } from '../../controllers/userController.js';
// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);
// /api/users/:userId
router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
export { router as userRouter };
