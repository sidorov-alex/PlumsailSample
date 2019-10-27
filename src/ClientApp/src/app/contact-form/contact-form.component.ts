import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { Observable } from 'rxjs';
import { CountriesService, Country } from 'src/app/countries.service';
import { ContactService } from 'src/app/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent implements OnInit {

  model: Contact = new Contact();

  countries: Observable<Country[]>;

  constructor(private countriesService: CountriesService, private contactService: ContactService, private route: ActivatedRoute) { }

  submitForm(form: NgForm) {
    if (!form.valid) {
      return false;
    }
    else {

      if (this.model.id) {

        // Send request to edit contact.

        this.contactService.editContact(this.model)
          .subscribe();
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
  }

  ngOnInit() {

    // Get list of countries for combobox.

    this.countries = this.countriesService.getList();

    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        let id = +params.get('id');

        this.contactService.get(id).subscribe(item => this.model = item);
      }
    })
  }

}
