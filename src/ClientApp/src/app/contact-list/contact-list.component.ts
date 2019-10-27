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

  private contacts: Contact[];

  private filteredContacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    // Request contacts list.

    this.contactService.getList()
      .subscribe(list => {
        this.contacts = list;
        this.filteredContacts = list;
      });
  }

  private onSearchChange(searchText: string): void {

    // Bring search text and values to lower for case-insensitive compare.

    searchText = searchText.toLowerCase();

    // Filter by First or Last Name.

    this.filteredContacts = this.contacts.filter(item => {
      return item.firstName.toLowerCase().indexOf(searchText) != -1 ||
             item.lastName.toLowerCase().indexOf(searchText) != -1;
    });
  }
}
