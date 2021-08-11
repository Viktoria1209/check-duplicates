import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data!: string;

  getInputValue(data: string): void {
    this.data = data;
    console.log(this.findRepeat(data))
  }

  findRepeat(data: string) {
    this.data = data;

    const splittedData = data.split('');
    const hash = new Map();
    const result: any[] = [];
    for (let i = 0; i < splittedData.length; i++) {
      if (hash.get(splittedData[i]) === undefined) {
        hash.set(splittedData[i], true);
      } else {
        const value = hash.get(splittedData[i]);
        if (value) {
          hash.set(splittedData[i], !value);
        }
      }
    }
    hash.forEach((value, key) => {
      if (!value)
        result.push(key);
    });
    return result.join('');
  }
}
