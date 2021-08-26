//import libs
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

//read file
/*fs.readFile('./', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});*/
const postDir = path.resolve(__dirname, '../posts');
fs.readdir(postDir, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
  });
});

@Injectable()
export class AppService {
  getAllPosts(): string {
    return 'Hello World!';
  }
}
