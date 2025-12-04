import { phyreMiddleware } from "../middleware/phyre.js";

export function GET(req, res) {
    res.json({message: req.middleware});
}

GET.middleware = [phyreMiddleware];