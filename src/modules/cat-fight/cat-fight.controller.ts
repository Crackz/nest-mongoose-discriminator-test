import { Controller, Get, Next, Req, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiUseTags } from '@nestjs/swagger';
import { CAT_MODEL_NAME } from '../../common/constants';

@ApiUseTags('Cat Fight')
@Controller('cat-fights')
export class CatFightController {
	constructor(@InjectModel(CAT_MODEL_NAME) private _catModel) {}

	@Get('/bad-cats')
	async getAllBadCats() {
		return await this._catModel.find({ bad: true });
	}
}
