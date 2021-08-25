import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  render() {
    const message = this.appService.getAllPosts();
    return { message };
  }
  @Get('post/:blogName')
  getBlogName(@Param() blogName): string {
    const aaaaa = 'heogaeg';
    return aaaaa;
  }
}
