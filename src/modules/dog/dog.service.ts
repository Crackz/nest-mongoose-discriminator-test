import { Injectable } from '@nestjs/common';
import { DOG_MODEL_NAME } from '../../common/constants';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDogDto } from './dtos/create-dog.dto';

@Injectable()
export class DogService {
	constructor(@InjectModel(DOG_MODEL_NAME) private _dogModel) {}
	async create(createDogDto: CreateDogDto) {
		return await this._dogModel.create(createDogDto);
	}
}
