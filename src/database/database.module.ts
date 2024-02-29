import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { KnexModule } from '@nestjsplus/knex';
@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
  imports: [
    KnexModule.register({
      client: 'pg',
      connection: process.env.DATABASE_URL,
    }),
  ],
})
export class DatabaseModule {}
