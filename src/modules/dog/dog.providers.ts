import { Provider } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { ANIMAL_MODEL_NAME, DOG_MODEL_NAME } from '../../common/constants';
import { DogSchema } from './schemas/dog.schema';

export const dogProviders: Provider[] = [
	{
		provide: getModelToken(DOG_MODEL_NAME),
		useFactory: (animalModel) => animalModel.discriminator(DOG_MODEL_NAME, DogSchema),
		inject: [ getModelToken(ANIMAL_MODEL_NAME) ]
	}
];
