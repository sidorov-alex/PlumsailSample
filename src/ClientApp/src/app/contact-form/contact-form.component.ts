import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { Observable } from 'rxjs';
import { CountriesService, Country } from 'src/app/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {

  model: Contact = new Contact();

  countries: Observable<Country[]>;

  isSubmitted = false;

  constructor(private countriesService: CountriesService) { }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
    if (!form.valid) {
      return false;
    } else {
      alert(JSON.stringify(form.value))
    }
  }

  ngOnInit() {
    this.countries = this.getCountries();
  }

  private getCountries(): Observable<Country[]> {
    return this.countriesService.getList();
  }

}
