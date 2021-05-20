import { Router } from 'express';
import { HTTP_NOT_FOUND, HTTP_OK } from '../utils/constants/status';

const router = Router();

router.get('/', (req, res) => res.status(HTTP_OK).render('pages/welcome'));

router.use((req, res) => res.status(HTTP_NOT_FOUND).render('pages/404'));

export default router;
