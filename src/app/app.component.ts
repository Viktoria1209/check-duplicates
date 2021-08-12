import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data!: string;
  results!: any[];

  findRepeatedLetters(data: string) {
    this.data = data;
    let result: any[] = [];
    let lines = data.split('\n');

    lines.forEach(line => {
      let letter = line.split('');
      let repeat = '';
      for (let i = 0; i < line.length; i++) {
        for (let j = i + 1; j < line.length; j++) {
          if (line.split(letter[i]).length - 1 === 2 && line.split(letter[j]).length - 1 === 2) {
            repeat += line.charAt(i);
          }
        }
      }
      if (repeat) {
        result.push(line);
      }
    })
    this.results = result;
  }
}

