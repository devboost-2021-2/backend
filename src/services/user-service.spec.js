// import { describe, expect, it } from '@jest/globals';
const { describe, expect, it } = require('@jest/globals');
// import { create } from './user-service.js';
const { create } = require('./user-service.js');

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
    it('throws an error for user with same username', () => {
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
  });
});
