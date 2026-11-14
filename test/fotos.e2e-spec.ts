import type { INestApplication } from '@nestjs/common';
import { Test, type TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module.js';

describe('Fotos API (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('crea, actualiza parcialmente y elimina una foto', async () => {
    await request(app.getHttpServer()).get('/api/fotos').expect(200);

    const creada = await request(app.getHttpServer())
      .post('/api/fotos')
      .send({ titulo: 'Laguna de Quilotoa', calificacion: 5 })
      .expect(201);

    expect(creada.body).toMatchObject({ id: 3, titulo: 'Laguna de Quilotoa' });

    await request(app.getHttpServer())
      .patch('/api/fotos/3')
      .send({ calificacion: 4 })
      .expect(200)
      .expect({ id: 3, titulo: 'Laguna de Quilotoa', calificacion: 4 });

    await request(app.getHttpServer()).delete('/api/fotos/3').expect(204).expect('');
    await request(app.getHttpServer()).get('/api/fotos/3').expect(404);
  });

  it('rechaza un identificador no numérico', () => {
    return request(app.getHttpServer()).get('/api/fotos/abc').expect(400);
  });
});
