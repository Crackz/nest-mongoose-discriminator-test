import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatFightModule } from '../cat-fight/cat-fight.module';
import { CatModule } from '../cat/cat.module';
import { DogModule } from '../dog/dog.module';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017/nest-monoogse-discriminator", {
			useFindAndModify: false,
			useCreateIndex: true,
			useNewUrlParser: true
		}),
		CatModule,
		DogModule,
		CatFightModule
	]
})

export class CoreModule {}
