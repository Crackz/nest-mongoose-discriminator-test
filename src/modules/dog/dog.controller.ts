import { Body, Controller, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { DogService } from './dog.service';
import { CreateDogDto } from './dtos/create-dog.dto';

@ApiUseTags('Dog')
@Controller('dogs')
export class DogController {
	constructor(private readonly _dogService: DogService) {}

	@Post('/')
	async create(@Body() createDogDto: CreateDogDto) {
		return await this._dogService.create(createDogDto);
	}
}
