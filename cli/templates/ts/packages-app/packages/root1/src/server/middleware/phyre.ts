import type { Request, Response, NextFunction } from 'express';

type RequestWithMiddleware = Request & { data: any };

export function phyreMiddleware(req: Request, res: Response, next: NextFunction) {
    (req as RequestWithMiddleware).data = 'Middleware example';

    next();
}