import express, { Router } from 'express';
import { userValidation, updateUserValidation } from '../middlewares/users';
import UsersController from '../controllers/usersController'

const router: Router = express.Router();
const usersController: UsersController = new UsersController()

router.get('/', usersController.getUsers);

router.get('/:id', usersController.getUserById);

router.post('/', userValidation, usersController.createUser);

router.put('/:id', userValidation, usersController.updateUserTotally);

router.patch('/:id', updateUserValidation, usersController.updateUserPartially);

router.delete('/:id', usersController.deleteUser);


export default router;