import { create } from '../services/user-service.js';
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
    const { user, password } = req.body;
    const has_user = UserController.list.find(
      (item) =>
        (item.username === user || item.email === user) &&
        item.password == password
    );
    if (!has_user) {
      return res.status(404).json({ message: 'Usuário e/ou senha errados' });
    }
    const response = Object.assign({}, has_user);
    delete response.password;
    return res.status(200).json(response);
  }
}

export default UserController;
