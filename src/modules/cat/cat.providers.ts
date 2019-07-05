import { Provider } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { CAT_MODEL_NAME, ANIMAL_MODEL_NAME } from '../../common/constants';
import { CatSchema } from './schemas/cat.schema';

export const catProviders: Provider[] = [
	{
		provide: getModelToken(CAT_MODEL_NAME),
		useFactory: (animalModel) => animalModel.discriminator(CAT_MODEL_NAME, CatSchema),
		inject: [ getModelToken(ANIMAL_MODEL_NAME) ]
	}
];
