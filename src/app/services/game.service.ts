import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  getImageList(groupNumber: number) {
    return this.http.get('/api/getListFiles/' + groupNumber).map(res =>
      res.json()
    );
  }
}
