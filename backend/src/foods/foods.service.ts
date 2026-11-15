import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodsService {
  findAll() {
    return [{ id: 'demo-1', name: 'Sushi', imageUrl: null }];
  }
}