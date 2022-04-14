import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';
import { userRoutes } from './user.routes';

const router = Router(); 

router.use('/categories', categoriesRoutes)
router.use('/specification', specificationRoutes);
router.use('/user', userRoutes);

export { router }
