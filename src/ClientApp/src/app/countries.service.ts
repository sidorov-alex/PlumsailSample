import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private list: Observable<Country[]>;

  constructor(private http: HttpClient) { }

  getList(): Observable<Country[]> {

    if (!this.list) {
      this.list = this.http.get<Country[]>('/assets/countries.json').pipe(
        shareReplay(1)
      );
    }

    return this.list;
  }
}

export class Country {
  name: string;
  code: string;
}
