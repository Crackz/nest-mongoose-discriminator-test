import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';
import { CreateAnimalDto } from '../../animal/dtos/create-animal.dto';

export class CreateDogDto extends CreateAnimalDto {
  @ApiModelPropertyOptional()
  @IsBoolean()
  readonly friendly: boolean;
}
