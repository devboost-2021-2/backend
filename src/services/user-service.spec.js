import { describe, expect, it } from '@jest/globals';
import { create } from './user-service.js';

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
