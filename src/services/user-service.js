export function create({ username, password, realname, email, course }, list) {
  const has_user = list.find(
    (user) => user.username === username || user.email === email
  );
  if (has_user) {
    throw new Error(
      has_user.username === username
        ? has_user.email === email
          ? 'Usuário e email já existentes'
          : 'Usuário já existente'
        : 'Email já existente'
    );
  }
  list.push({
    username,
    password,
    realname,
    email,
    course,
  });
}
