import { Schema, model, type Document } from 'mongoose';


interface IUser extends Document {
    username: string,
    email: string,
    thoughts: string,
    friends: Schema.Types.ObjectId[]
}


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],

    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    ],
},
    
    
 {
        toJSON: {
            getters: true,
        },
        timestamps: true
    }
);

const User = model('User', userSchema);

export default User;
