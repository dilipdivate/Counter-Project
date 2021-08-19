import { Component, OnInit } from '@angular/core';

import { Observable, fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentCount: number = 0;
  updateArrayCounter: number[] = [0];
  setStateCounter: number[] = [0];


  ngOnInit() {
    this.currentCount = 0;
    const click = fromEvent(document, 'click');
    const ClickObs$ = click.pipe(tap(tappedFn => this.onClick()));
    ClickObs$.subscribe();

  }

  onReset() {
    this.currentCount = -1;
    this.setStateCounter = [0];
    this.updateArrayCounter = this.setStateCounter.filter(a => a);
  }


  onClick() {

    this.currentCount++;

    const ones = Math.floor(this.currentCount % 10),
        tens = Math.floor(this.currentCount/10 % 10),
        hundreds = Math.floor(this.currentCount/100 % 10),
        thousands = Math.floor(this.currentCount/1000 % 10),
        tenThousands = Math.floor(this.currentCount/ 10000 % 10),
        hundredThousands = Math.floor(this.currentCount / 100000 % 10),
        millions = Math.floor(this.currentCount / 1000000 % 10),
        tenMillions = Math.floor(this.currentCount / 10000000 % 10),
        hundredMillions = Math.floor(this.currentCount / 100000000 % 10);


    switch (true) {

      case hundredMillions > 0 :
        this.setStateCounter.splice(0, 9, hundredMillions, tenMillions, millions, hundredThousands, tenThousands, thousands, hundreds, tens, ones);
        break;
      case tenMillions > 0 :
        this.setStateCounter.splice(0, 8, tenMillions, millions, hundredThousands, tenThousands, thousands, hundreds, tens, ones);
        break;
      case millions > 0 :
        this.setStateCounter.splice(0, 7, millions, hundredThousands, tenThousands, thousands, hundreds, tens, ones);
        break;
      case hundredThousands > 0 :
        this.setStateCounter.splice(0, 6, hundredThousands, tenThousands, thousands, hundreds, tens, ones);
        break;
      case tenThousands > 0 :
        this.setStateCounter.splice(0, 5, tenThousands, thousands, hundreds, tens, ones);
        break;
      case thousands > 0 :
        this.setStateCounter.splice(0, 4, thousands, hundreds, tens, ones);
        break;

      case hundreds > 0 :
        this.setStateCounter.splice(0, 3, hundreds, tens, ones);
        break;

      case tens > 0 :
        this.setStateCounter.splice(0, 2, tens, ones)

        break;

      default:
        this.setStateCounter.splice(0, 1, ones);

       }

    this.updateArrayCounter = [...this.setStateCounter];


  }

}
