import { Controller } from '@nestjs/common';
import { AnimalService } from './animal.service';

@Controller('animals')
export class AnimalController {
	constructor(private readonly _animalService: AnimalService) {}
}
