import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { catProviders as catProviders } from './cat.providers';
import { CatService } from './cat.service';
import { AnimalModule } from '../animal/animal.module';

@Module({
	imports: [AnimalModule],
	providers: [ CatService, ...catProviders ],
	controllers: [ CatController ],
	exports: [ CatService, ...catProviders ]
})
export class CatModule {}
