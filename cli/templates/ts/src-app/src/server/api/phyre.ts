import type { Request, Response } from 'express';
import { phyreMiddleware } from "../middleware/phyre.ts";

export function GET(req: Request, res: Response) {
    const data = (req as any).data
    res.json({message: data});
}

GET.middleware = [phyreMiddleware];