import { Controller, Next, Post, Req, Res, Body } from '@nestjs/common';
import { ApiUseTags, ApiImplicitBody } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CreateCatDto } from './dtos/create-cat.dto';

@ApiUseTags('Cat')
@Controller('cats')
export class CatController {
	constructor(private readonly _catService: CatService) {}

	@Post('/')
	async create(@Body() createCatDto: CreateCatDto) {
		return await this._catService.create(createCatDto);
	}
}
