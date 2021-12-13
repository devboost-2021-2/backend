import { InvalidPasswordError, UserNotFoundError } from '../errors.js';
import { create, login } from '../services/user-service.js';
class UserController {
  static list = [
    {
      username: 'devboost',
      password: 'senhaforte',
      realname: 'João',
      email: 'joaozinho@gmail.com',
      course: 'BCC',
    },
  ];
  static create(req, res) {
    try {
      create(req.body, UserController.list);
      return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }

  static login(req, res) {
    try {
      const user = login(req.body, UserController.list);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof InvalidPasswordError)
        return res.status(401).json({
          message: error.message,
        });

      if (error instanceof UserNotFoundError) {
        return res.status(404).json({
          message: error.message,
        });
      }
    }
  }
}

export default UserController;
