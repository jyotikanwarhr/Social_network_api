import { Schema, Types } from 'mongoose';
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAt) => createdAt.toString(),
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
}, {
    toJSON: {
        virtuals: true,
    },
    timestamps: true
});
export default reactionSchema;
