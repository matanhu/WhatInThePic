import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  getImageList(groupNumber: number) {
    return this.http.get('http://localhost:3000/api/getListFiles/' + groupNumber).map(res =>
      res.json()
    );
  }
}
