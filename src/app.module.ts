import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsController } from './items/items.controller';
import { AppService } from './app.service';
import { ItemsService } from './items/items.service';

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
