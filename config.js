require('dotenv').config();

const API_VERSION = process.env.API_VERSION || 'v1';
const PORT = process.env.PORT || 3977;
const IP_SERVER = process.env.IP_SERVER || 'http://localhost';
const CORS = process.env.CORS;

const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;

module.exports = {
    API_VERSION,
    IP_SERVER,
    PORT,
    CORS,
    DB_PORT,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_HOST,
};
