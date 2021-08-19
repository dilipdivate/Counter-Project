import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  @Input('counters') counters: number[] = [0];
  @Input() counter: number = 0;

  ngOnInit() {}
}
