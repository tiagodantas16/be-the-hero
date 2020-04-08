const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); // Codigo zera os dados do banco de dados.
    await connection.migrate.latest(); // Codigo gera as migrações para o DB.
  });

  afterAll(async () => {
    await connection.destroy(); // Codigo encerra conexão com o banco de dados.
  });

  it('should be able to create a new ONG', async () => {
    const response =  await request(app)
      .post('/ongs')
      .send({
        name: "AA",
        email: "contato@live.com.br",
        whatsapp: "11977377688",
        city: "São Paulo",
        uf: "SP"
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});