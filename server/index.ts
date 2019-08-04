import dotenv from 'dotenv';
import next from 'next';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { authenticated } from './middlewares/auth';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(morgan('tiny'));
    server.use(cookieParser());

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query);
    });
    server.get('/about', (req, res) => {
        return app.render(req, res, '/about', req.query);
    });
    server.get('/pokemons', (req, res) => {
        return app.render(req, res, '/pokemons', req.query);
    });
    server.get('/pokemons/:name', (req, res) => {
        return app.render(req, res, '/pokemons/[name]', { ...req.query, name: req.params.name });
    });
    server.get('/profile', authenticated, (req, res) => {
        return app.render(req, res, '/profile', req.query);
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Server running on port ${port}`);
    });
});