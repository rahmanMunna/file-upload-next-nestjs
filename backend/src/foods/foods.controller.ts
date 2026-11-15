import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FoodsService } from './foods.service.js';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get()
  findAll() {
    return this.foodsService.findAll();
  }

  @Post('upload')
  @UseInterceptors(
  FileInterceptor('image', { // name of the field in the form
    storage: diskStorage({
      destination: './uploads', // where to store the uploaded files

      filename: (req, file, callback) => {

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

        const filename = uniqueSuffix + extname(file.originalname);

        callback(null, filename);
      },
    }),
  }),
)
  upload(@UploadedFile() file: Express.Multer.File) {
    // return { filename: file.filename, originalName: file.originalname, size: file.size };
    // return file;
    // ->
    /**
     *
    "fieldname": "image",
    "originalname": "burger.jpg",
    "encoding": "7bit",
    "mimetype": "image/jpeg",
    "path": "uploads\\1794729626344-900441200.jpg",
    "destination": "./uploads",
    "filename": "1794729626344-900441200.jpg",
    "size": 57540
     */
  }
}