import {IsNotEmpty} from 'class-validator';

export class ItemDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number;
}
