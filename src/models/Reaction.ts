import { Schema, type Document, Types } from 'mongoose';

interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string,
    username: string,
    createdAt: Schema.Types.Date
}

const reactionSchema = new Schema<IReaction>(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAt: Date) => createdAt.toString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        }
            
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true
    },
);

export default reactionSchema;
