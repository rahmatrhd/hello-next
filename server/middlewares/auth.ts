import { RequestHandler } from 'express';

export const authenticated: RequestHandler = (req, res, next) => {
    const token: string = req.cookies['token'];

    if (!token) {
        res.redirect('/');
        res.end();
        return;
    }

    next();
};