import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { Observable } from 'rxjs';
import { CountriesService, Country } from 'src/app/countries.service';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {

  model: Contact = new Contact();

  countries: Observable<Country[]>;

  constructor(private countriesService: CountriesService, private contactService: ContactService) { }

  submitForm(form: NgForm) {
    if (!form.valid) {
      return false;
    } else {
      this.contactService.addContact(this.model)
        .subscribe(item => {
          this.model = new Contact()
          form.onReset();
        });
    }
  }

  ngOnInit() {
    this.countries = this.getCountries();
  }

  private getCountries(): Observable<Country[]> {
    return this.countriesService.getList();
  }

}
