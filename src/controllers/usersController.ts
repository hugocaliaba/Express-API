import { Request, Response } from 'express'

export default class UsersController {

    getUsers(req: Request, res: Response) {
        const { page, limit } = req.query // Access query string parameters. Ex: ?limit=10&page=2 
        res.status(200).json({
            message: 'Retrieved users successfully.',
            page: Number(page),
            limit: Number(limit),
            users: []
        })
    }

    getUserById(req: Request, res: Response) {
        const { id } = req.params; // Access dynamic params of the url
        res.status(200).json({
            message: `Retrieved user with ID: ${id}`,
            user: { id }
        });
    }

    createUser(req: Request, res: Response) {
        const newUser = req.body; // Accessing the JSON body
        res.status(201).json({
            message: 'User created successfully.',
            user: newUser
        })
    }

    updateUserTotally(req: Request, res: Response) {
        const { id } = req.params;
        const updatedUser = req.body; // Assume this is validated and contains all necessary fields
    
        // Here, you would typically update the user in the database
        res.status(200).json({
            message: `User with ID: ${id} updated successfully.`,
            user: updatedUser // This would contain the updated user data
        });
    }

    updateUserPartially(req: Request, res: Response) {
        const { id } = req.params;
        const partialUpdate = req.body; // Assume this is validated and contains the fields to update
    
        // Here, you would typically apply the partial update to the user in the database
        res.status(200).json({
            message: `User with ID: ${id} updated successfully with partial data.`,
            user: partialUpdate // This would contain the updated fields
        });
    }

    deleteUser(req: Request, res: Response) {
        const { id } = req.params;

        // Here, you would typically delete the user from the database
        // If the user is found and deleted successfully, respond accordingly
    
        res.status(204).json({
            message: `User with ID: ${id} deleted successfully.`
        });
    }
}