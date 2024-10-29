import {Request, Response, NextFunction} from 'express'
import { body, validationResult } from 'express-validator'

export const userValidation = [
    body('username')
        .isString()
        .isLength({ min: 3 }),
    body('email')
        .isEmail(),
    body('age')
        .optional()
        .isInt({ min: 0 }),
    (req: Request, res: Response, next: NextFunction) => {
        // Check for extra fields
        const allowedFields = ['username', 'email', 'age']
        const keys = Object.keys(req.body);
        const hasExtraFields = keys.some(key => !allowedFields.includes(key));
        if (hasExtraFields) {
            res.status(400).json({ error: 'Request contains extra fields that are not allowed.' });
            return
        }
        // Validate
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400).json({ errors: result.array() });
            return
        }
        next();
    },
];


export const updateUserValidation = [
    body('username')
        .optional()
        .isString()
        .isLength({ min: 3 }),  
    body('email')
        .optional()
        .isEmail(),
    body('age')
        .optional()
        .isInt({ min: 0 }),
    (req: Request, res: Response, next: NextFunction) => {
        // Check for extra fields
        const allowedFields = ['username', 'email', 'age']
        const keys = Object.keys(req.body);
        const hasExtraFields = keys.some(key => !allowedFields.includes(key));
        if (hasExtraFields) {
            res.status(400).json({ error: 'Request contains extra fields that are not allowed.' });
            return
        }
        // Validate
        const result = validationResult(req);
        if (!result.isEmpty()) {
            res.status(400).json({ errors: result.array() });
            return
        }
        next();
    },
];