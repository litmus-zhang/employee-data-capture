import { Inject, Injectable } from '@nestjs/common';
import { KNEX_CONNECTION } from '@nestjsplus/knex';
import { Knex } from 'knex';

@Injectable()
export class DatabaseService {
  constructor(@Inject(KNEX_CONNECTION) private readonly knex: Knex) {}

  async cleanDB() {
    await this.knex.destroy(() => {
      console.log('Database cleaned');
    });
  }
}
