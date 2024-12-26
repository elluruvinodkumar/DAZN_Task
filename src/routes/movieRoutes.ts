import { Router } from 'express';
import * as movieController from '../controllers/movieController';

const router = Router();

router.get('/', movieController.getMovies);
router.get('/search', movieController.searchMovies);
router.post('/', movieController.addMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

export default router;
