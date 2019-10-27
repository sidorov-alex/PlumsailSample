import { Pipe, PipeTransform,  } from '@angular/core';
import { CountriesService, Country } from 'src/app/countries.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'countryName'
})
export class CountryNamePipe implements PipeTransform {

  constructor(private countriesService: CountriesService) { }

  transform(code: string): Observable<string> {
    return this.countriesService.getList().pipe(
      map (list => {
        for (let i = 0; i < list.length; i++) {
          if (list[i].code === code) {
            return list[i].name;
          }
        }

        return 'Unknown';
      })
    );
  }

}
