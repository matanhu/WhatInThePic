import { GameService } from '../../services/game.service';

import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'mh-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  @Input()
  private groupNumber: number;
  @Input()
  private gameMinutes: string;

  private image: any = 0;
  private endGame: boolean = false;
  private countDownDate: Date;
  private timer: Subscription;
  private imagesName: string[];


  constructor(private elm: ElementRef, private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getImageList(this.groupNumber).subscribe(res => {
      this.imagesName = res;
      this.gameMinutes = this.gameMinutes !== 'undefined' ? this.gameMinutes : '2';
      this.countDownDate = new Date();
      this.countDownDate.setMinutes(this.countDownDate.getMinutes() + Number(this.gameMinutes));
      this.initTimer();
    });

  }

  next() {
    this.image++;
  }

  prev() {
    this.image--;
  }

  stopTimer() {
    this.timer.unsubscribe();
    document.getElementById('timer').innerHTML = 'הזמן נגמר';
    this.image = 'theEnd';
    this.endGame = true;
  }

  initTimer() {
    this.timer = Observable.interval(1000).subscribe(() => {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = this.countDownDate.getTime() - now;
      console.log(distance);

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById('timer').innerHTML =  minutes + ' דקות ' + seconds + ' שניות ' ;
      if ( distance < 30000) {
        document.getElementById('timer').style.color = 'red';
      }
      // If the count down is finished, write some text
      if (distance < 0) {
        this.stopTimer();
      // clearInterval(x);
      }
    });
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }
}
