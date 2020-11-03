import { Get, Post, Body, Controller, UsePipes } from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { Item } from './item.interface';
import { ItemsService } from './items.service';
import { ValidationPipe } from '../comnon/validation.pipe';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() item: CreateItemDto) {
    this.itemsService.create(item);
  }
}
