import {InMemoryDBEntity} from '@nestjs-addons/in-memory-db';

export interface Item extends InMemoryDBEntity {
    name: string;
    price: number;
}
