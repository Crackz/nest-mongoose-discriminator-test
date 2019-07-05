import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { CreateAnimalDto } from '../../animal/dtos/create-animal.dto';

export class CreateCatDto extends CreateAnimalDto {
	@ApiModelPropertyOptional()
	@IsBoolean()
	readonly bad: boolean;
}
