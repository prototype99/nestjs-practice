//import libs
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

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
    //read file
    fs.readFile(postDir + '/' + file, 'utf8', (err, data) => {
      //catch failure
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    });
  });
});

@Injectable()
export class AppService {
  getAllPosts(): string {
    return 'Hello World!';
  }
}
