import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import * as pactum from 'pactum';

describe('App E2E test)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    app.listen(3001);
    pactum.request.setBaseUrl('http://localhost:3001');
    await app.init();
  });

  afterAll(async () => {
    // database teardown
    app.close();
  });

  describe('Employee modules', () => {
    describe('personal details', () => {});
    describe('next of kin details/emergency contact', () => {});
    describe('previous work history', () => {});
    describe('references/ recommendation details', () => {});
    describe('Education history', () => {});
    describe('Certification', () => {});
  });
  describe('Company modules', () => {
    describe('Company details', () => {});
    describe('Onboard new employee', () => {});
  });
  describe('User Management modules', () => {});
});
