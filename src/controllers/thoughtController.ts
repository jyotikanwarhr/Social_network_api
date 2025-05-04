import { Request, Response } from 'express';
import { Thought } from '../models/index.js';

export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        if (thought) {
            res.json({
                thought
            });
        } else {
            res.status(404).json({
                message: 'Thought not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateThoughtById = async (req: Request, res: Response) => {
    try {
        const { thoughtId } = req.params;
        const thought = await Thought.findOneAndUpdate({ _id: thoughtId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        });

        if (!thought) {
            return res.status(404).json({ message: 'No such thought exists' });
        }

        return res.json({ message: 'Thought successfully updated' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}


export const deleteThoughtById = async (req: Request, res: Response) => {
    try {
        const { thoughtId } = req.params;
        const thought = await Thought.findOneAndDelete({ _id: thoughtId });

        if (!thought) {
            return res.status(404).json({ message: 'No such thought exists' });
        }

        return res.json({ message: 'Thought successfully deleted' });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
}

export const addReactions = async (req: Request, res: Response) => {
  try {
      const { thoughtId } = req.params;
      const thought = await Thought.findOneAndUpdate({ _id: thoughtId }, {
          $push: { reactions: req.body }
      }, {
          new: true,
          runValidators: true
      });

      if (!thought) {
          return res.status(404).json({ message: 'No such thought exists' });
      }

      return res.json({ message: 'Thought successfully updated' });
  } catch (err) {
      console.log(err);
      return res.status(500).json(err);
  }
}

export const deleteReactions = async (req: Request, res: Response) => {
  try {
      const { thoughtId } = req.params;
      const thought = await Thought.findOneAndUpdate({ _id: thoughtId }, {
          $pull: { reactions: req.body }
      }, {
          new: true,
          runValidators: true
      });

      if (!thought) {
          return res.status(404).json({ message: 'No such thought exists' });
      }

      return res.json({ message: 'Thought successfully updated' });
  } catch (err) {
      console.log(err);
      return res.status(500).json(err);
  }
}
