import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ItemDTO } from './ItemDTO';
import { Item } from './Item';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

@Controller()
export class AppController {
  constructor(private cardsService: InMemoryDBService<Item>) {
  }

  @Get()
  getAll(): Item[] {
    return this.cardsService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number): Item {
    return this.cardsService.get(id);
  }

  @Post('seed')
  seed(): Item[] {
    const recordFactory = (idx: number): Partial<Item> => (
      {
        id: idx,
        name: `Item-${idx}`,
        price: idx * 100,
      }
    );

    this.cardsService.seed(recordFactory, 5);

    return this.cardsService.getAll();
  }

  @Post()
  create(@Body() model: ItemDTO): Item {
    return this.cardsService.create(model);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.cardsService.delete(id);
  }
}
