import { InvalidPasswordError, UserNotFoundError } from '../errors';

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

export function login({ user, password }, list) {
  const has_user = list.find(
    (item) => item.username === user || item.email === user
  );

  if (!has_user) {
    throw new UserNotFoundError('Usuário não encontrado.');
  }

  if (has_user.password !== password) {
    throw new InvalidPasswordError('Senha inválida');
  }

  const profile = Object.assign({}, has_user);
  delete profile.password;
  return profile;
}
