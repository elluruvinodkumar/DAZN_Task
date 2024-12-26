import request from 'supertest';
import app from '../src/app';

describe('GET /movies', () => {
  it('should return all movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
