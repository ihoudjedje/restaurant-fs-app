import {
  Get,
  Post,
  Body,
  Controller,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { CreateItemDto } from './create-item.dto';
import { Item } from './item.interface';
import { ItemsService } from './items.service';
import { ValidationPipe } from '../comnon/validation.pipe';
import { AdminGuard } from '../comnon/admin.guard';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Post()
  @UseGuards(new AdminGuard())
  @UsePipes(new ValidationPipe())
  async create(@Body() createItemDto: CreateItemDto) {
    this.itemsService.create(createItemDto);
  }
}
