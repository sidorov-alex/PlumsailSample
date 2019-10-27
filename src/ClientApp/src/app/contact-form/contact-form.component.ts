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

  private model: Contact = new Contact();

  private countries: Observable<Country[]>;

  constructor(private countriesService: CountriesService, private contactService: ContactService) { }

  private submitForm(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    else {

      // Send request to add contact.

      this.contactService.addContact(this.model)
        .subscribe(item => {

          // Reset the fields.

          this.model = new Contact()
          form.onReset();
        });
    }
  }

  ngOnInit() {

    // Get list of countries for combobox.

    this.countries = this.countriesService.getList();
  }

}
