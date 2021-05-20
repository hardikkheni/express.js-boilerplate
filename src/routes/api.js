import { Router } from 'express';
import { HTTP_NOT_FOUND, HTTP_OK } from '../utils/constants/status';

const router = Router();

router.get('/', (req, res) => {
  res.status(HTTP_OK).json({
    message: 'horray!',
  });
});

router.use((req, res) => {
  res.status(HTTP_NOT_FOUND).json({
    status: HTTP_NOT_FOUND,
    message: `${req.method} ${req.path} Not Found!`,
  });
});

export default router;
