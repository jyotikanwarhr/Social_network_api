import { Router } from 'express';
const router = Router();
import { getAllThoughts, getThoughtById, createThought, updateThoughtById, deleteThoughtById, addReactions, deleteReactions } from '../../controllers/thoughtController.js';
//api/thoughts
router.route('/').get(getAllThoughts).post(createThought);
// /api/thoughts/:thoughtId
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById);
router.route('/:thoughtId/reactions')
    .post(addReactions)
    .delete(deleteReactions);
export { router as thoughtRouter };
