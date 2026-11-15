import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module.js';

@Module({
  imports: [FoodsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
