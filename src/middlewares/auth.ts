import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import publicRoutes from '../config/publicRoutes';

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {

    console.log(req.headers);
    

    const isPublic = publicRoutes.includes(req.path)
    if (isPublic) {
        next()
        return
    }

    // Get token from headers
    const token = req.headers['authorization']?.split(' ')[1];

    // If no token, return an error
    if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return
    }

    // Verify the token
    jwt.verify(token as string, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
        res.status(403).json({ message: 'Invalid token' });
        return
    }

    next();
    });
};

export default authMiddleware;