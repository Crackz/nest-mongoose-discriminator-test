import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { dogProviders } from './dog.providers';
import { DogService } from './dog.service';
import { AnimalModule } from '../animal/animal.module';

@Module({
	imports: [AnimalModule],
	providers: [ DogService, ...dogProviders ],
	controllers: [ DogController ],
	exports: [ DogService, ...dogProviders ]
})
export class DogModule {}
