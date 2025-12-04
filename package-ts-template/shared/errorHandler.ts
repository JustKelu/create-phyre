// Edit phyre.config.js to enable custom errorHandler

import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err) {
        console.error('Error: ', err);
    }
    res.status(500).send(`<h1>Check console to see the error</h1>`);
}