import { Knex } from 'knex';

export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export class UserRepository {
  constructor(private readonly knex: Knex) {}

  async create(user: User) {
    return this.knex('users').insert(user).returning('*');
  }

  async findById(id: number) {
    return this.knex('users').where({ id }).first();
  }

  async findByEmail(email: string) {
    return this.knex('users').where({ email }).first();
  }

  async update(id: number, user: User) {
    return this.knex('users').where({ id }).update(user).returning('*');
  }

  async delete(id: number) {
    return this.knex('users').where({ id }).del();
  }
}
