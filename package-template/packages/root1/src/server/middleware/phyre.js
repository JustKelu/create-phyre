export function phyreMiddleware(req, res, next) {
    req.middleware = 'Middleware example';

    next();
}