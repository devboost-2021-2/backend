class UserController {
  static list = [
    {
      username: "devboost",
      password: "senhaforte",
      realname: "João",
      email: "joaozinho@gmail.com",
      course: "BCC"
    }
  ];
  static create(req, res) {
    const {
      username,
      password,
      realname,
      email,
      course
    } = req.body
    const has_user = UserController.list.find((user) => 
      user.username === username || user.email === email
    );
    if( has_user ) {
      return res.status(400).json({ message: has_user.username === username ?
	"Usuário já existente" :
	"Email já existente"
      });
    }
    UserController.list.push({
      username,
      password,
      realname,
      email,
      course
    });
    return res.status(201).json({ message: "Usuário criado com sucesso" })
  }
}

export default UserController;
