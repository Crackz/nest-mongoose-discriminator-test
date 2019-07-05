import { Schema } from 'mongoose';

const AnimalSchema = new Schema(
	{
		color: { type: String, required: true },
		name: { type: String, required: true }
	},
	{ timestamps: true, discriminatorKey: 'type' }
);

export { AnimalSchema };
