import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../contact';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getList()
      .subscribe(list => {
        this.contacts = list;
        this.filteredContacts = list;
      });
  }

  onSearchChange(searchText: string): void {
    searchText = searchText.toLowerCase();

    this.filteredContacts = this.contacts.filter(item => {
      return item.firstName.toLowerCase().indexOf(searchText) != -1 ||
             item.lastName.toLowerCase().indexOf(searchText) != -1;
    });
  }

  filteredContacts: Contact[];
}
