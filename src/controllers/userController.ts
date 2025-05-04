import { Request, Response } from 'express';
import { User } from '../models/index.js';

export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json({
                user
            });
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOneAndUpdate({ _id: userId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }

        return res.json({ message: 'User successfully updated' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}


export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOneAndDelete({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }

        return res.json({ message: 'User successfully deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}
export const addFriend = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOneAndUpdate({ _id: userId }, {
            $push: { 
                friends: req.params.friendId
             }
        }, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }

        return res.json({ message: 'User successfully updated' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

export const removeFriend = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const user = await User.findOneAndUpdate({ _id: userId }, {
            $pull: { 
                friends: req.params.friendId
             }
        }, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).json({ message: 'No such user exists' });
        }

        return res.json({ message: 'User successfully updated' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

