import { Schema } from 'mongoose';

export const DogSchema: Schema = new Schema(
	{
		friendly: {
			type: Boolean,
			default: true
		}
	},
	{ discriminatorKey: 'type' }
);
