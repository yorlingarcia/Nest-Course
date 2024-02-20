import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';

import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from './helpers/filFilter.helper';
import { diskStorage } from 'multer';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('product')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: fileFilter,
      limits: { fileSize: 60000 }, //conteo en bits
      storage: diskStorage({
        destination: './static/uploads',
      }),
    }),
  )
  uploadProductImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException(`Make sure that file is an image`);
    return { fileName: file.originalname };
  }
}
