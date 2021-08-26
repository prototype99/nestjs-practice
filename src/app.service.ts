//import libs
import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as kramed from 'kramed';
import * as path from 'path';

//resolve posts directory
const postDir = path.resolve(__dirname, '../posts');
//access posts directory, heavy inspiration from https://www.codegrepper.com/code-examples/javascript/nodejs+read+all+files+in+directory
fs.readdir(postDir, function (err, files) {
  //catch failure
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //loop through files
  files.forEach(function (file) {
    //read file, based on https://nodejs.dev/learn/reading-files-with-nodejs
    fs.readFile(postDir + '/' + file, 'utf8', (err, data) => {
      //catch failure
      if (err) {
        console.error(err);
        return;
      }
      console.log(kramed(data));
    });
    //strip file extension
    console.log(file.slice(0, -3));
  });
});

@Injectable()
export class AppService {
  getAllPosts(): string {
    return 'Hello World!';
  }
}
