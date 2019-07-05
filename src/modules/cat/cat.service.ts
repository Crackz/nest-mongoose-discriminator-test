import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CAT_MODEL_NAME } from '../../common/constants';
import { CreateCatDto } from './dtos/create-cat.dto';

@Injectable()
export class CatService {
	constructor(
		@InjectModel(CAT_MODEL_NAME) private _catModel 
	) {}
	async create(createCatDto: CreateCatDto){
		return this._catModel.create(createCatDto);
	}
}
