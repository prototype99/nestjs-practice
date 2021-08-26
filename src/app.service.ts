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
//resolve posts directory
const postDir = path.resolve(__dirname, '../posts');
//access posts directory
fs.readdir(postDir, function (err, files) {
  //catch failure
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //loop through files
  files.forEach(function (file) {
    console.log(postDir + '/' + file);
  });
});

@Injectable()
export class AppService {
  getAllPosts(): string {
    return 'Hello World!';
  }
}
