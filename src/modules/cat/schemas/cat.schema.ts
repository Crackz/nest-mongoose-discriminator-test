import { Schema } from 'mongoose';

export const CatSchema: Schema = new Schema(
	{
		bad: { 
			type: Boolean,
			default: false
		}
	},
	{ discriminatorKey: 'type' }
);
