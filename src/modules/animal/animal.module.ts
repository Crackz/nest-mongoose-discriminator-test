import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalSchema } from './schemas/animal.schema';
import { ANIMAL_MODEL_NAME } from '../../common/constants';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: ANIMAL_MODEL_NAME, schema: AnimalSchema }]),	
	],

	exports: [
		MongooseModule.forFeature([{ name: ANIMAL_MODEL_NAME, schema: AnimalSchema }]),	
	]
})
export class AnimalModule { }
