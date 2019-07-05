import { Module } from '@nestjs/common';
import { CatFightController } from './cat-fight.controller';
import { CatFightService } from './cat-fight.service';
import { CatModule } from '../cat/cat.module';

@Module({
	imports: [CatModule],
	providers: [ CatFightService ],
	controllers: [ CatFightController ],
	exports: [ CatFightService ]
})
export class CatFightModule {}
