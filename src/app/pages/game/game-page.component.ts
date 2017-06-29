import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mh-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  private groupNumber: number;
  private gameMinutes: number;
  constructor(public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.groupNumber = params['groupNumber'];
      this.gameMinutes = params['gameMinutes'];
    });
  }

}
