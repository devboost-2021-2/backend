import { describe, expect, it } from '@jest/globals';
import { InvalidPasswordError, UserNotFoundError } from '../errors.js';
import { create, login } from './user-service.js';

describe('User create', () => {
  describe('When user creation is successful', () => {
    it('adds new user in DB', () => {
      const user = {
        username: 'devboost',
        password: 'senhaforte',
        realname: 'João',
        email: 'joaozinho@gmail.com',
        course: 'BCC',
      };
      const list = [];
      create(user, list);
      expect(list).toEqual([user]);
    });
  });

  describe('When user creation fails', () => {
    it('throws an error for user with same username and email', () => {
      const user = {
        username: 'devboost',
        password: 'senhaforte',
        realname: 'João',
        email: 'joaozinho@gmail.com',
        course: 'BCC',
      };
      const list = [{ ...user }];
      expect(() => create(user, list)).toThrowError(
        'Usuário e email já existentes'
      );
    });

    it('throws an error for user with same username', () => {
      const user = {
        username: 'devboost',
        password: 'senhaforte',
        realname: 'João',
        email: 'joaozinho@gmail.com',
        course: 'BCC',
      };
      const list = [{ ...user }];
      expect(() =>
        create({ ...user, email: 'devboost@gmail.com' }, list)
      ).toThrowError('Usuário já existente');
    });

    it('throws an error for user with same email', () => {
      const user = {
        username: 'devboost',
        password: 'senhaforte',
        realname: 'João',
        email: 'joaozinho@gmail.com',
        course: 'BCC',
      };
      const list = [{ ...user }];
      expect(() =>
        create({ ...user, username: 'joaozinho' }, list)
      ).toThrowError('Email já existente');
    });
  });
});

describe('User login', () => {
  describe('When user login is successful', () => {
    it('signs in the user', () => {
      const credentials = {
        user: 'vini@usp.com',
        password: 'erick',
      };

      const list = [
        {
          username: 'devboost',
          password: 'erick',
          realname: 'João',
          email: 'vini@usp.com',
          course: 'BCC',
        },
      ];

      const profile = login(credentials, list);

      expect(profile).toEqual({
        username: 'devboost',
        realname: 'João',
        email: 'vini@usp.com',
        course: 'BCC',
      });
    });
  });
  describe('When user login fails', () => {
    it('Throws an user not found error', () => {
      const credentials = {
        user: 'vini@usp.com',
        password: 'erick',
      };

      const list = [
        {
          username: 'devboost',
          password: 'erick',
          realname: 'João',
          email: 'erickão@usp.com',
          course: 'BCC',
        },
      ];

      expect(() => login(credentials, list)).toThrow(UserNotFoundError);
    });
    it('Throws an invalid password error', () => {
      const credentials = {
        user: 'vini@usp.com',
        password: 'erick',
      };

      const list = [
        {
          username: 'devboost',
          password: 'erickLindão',
          realname: 'João',
          email: 'vini@usp.com',
          course: 'BCC',
        },
      ];

      expect(() => login(credentials, list)).toThrow(InvalidPasswordError);
    });
  });
});
