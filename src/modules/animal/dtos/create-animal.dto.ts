import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateAnimalDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string;


  @ApiModelProperty()
  @IsString()
  readonly color: string;

}
