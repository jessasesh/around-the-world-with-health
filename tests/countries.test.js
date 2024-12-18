const request = require('supertest');
const app = require('../src/app');

describe('GET /api/countries', () => {
    it('should return a list of countries', async () => {
        const response = await request(app).get('/api/countries');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return 500 if an error occurs', async () => {
        jest.spyOn(console, 'error').mockImplementation(() => {});
        const originalFind = jest.spyOn(require('../src/models/Country'), 'find').mockRejectedValue(new Error('Failed to fetch countries'));
        const response = await request(app).get('/api/countries');
        expect(response.statusCode).toBe(500);
        expect(response.body.error).toBe('Failed to fetch countries');

        originalFind.mockRestore();
    });
});
