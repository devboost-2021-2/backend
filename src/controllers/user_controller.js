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
    const { username, password, realname, email, course } = req.body;
    const has_user = UserController.list.find(
      (user) => user.username === username || user.email === email
    );
    if (has_user) {
      return res
        .status(400)
        .json({
          message:
            has_user.username === username
              ? 'Usuário já existente'
              : 'Email já existente',
        });
    }
    UserController.list.push({
      username,
      password,
      realname,
      email,
      course,
    });
    return res.status(201).json({ message: 'Usuário criado com sucesso' });
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
