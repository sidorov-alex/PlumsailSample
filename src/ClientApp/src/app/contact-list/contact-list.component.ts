import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../contact';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: Contact[];

  filteredContacts: Contact[];

  searchText: string = "";

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.refresh();   
  }

  refresh() {

     // Request contacts list.

    this.contactService.getList()
      .subscribe(list => {
        this.contacts = list;
        this.filteredContacts = this.filterContacts(this.searchText);
      });
  }

  private filterContacts(searchText: string): Contact[] {

    searchText = searchText.toLowerCase();

    // Filter by First or Last Name.

    return this.contacts.filter(item => {
      return item.firstName.toLowerCase().indexOf(searchText) != -1 ||
        item.lastName.toLowerCase().indexOf(searchText) != -1;
    });
  }

  onSearchChange(searchText: string): void {
     this.filteredContacts = this.filterContacts(searchText);
  }
  
  private onDeleteClick(item: Contact) {
    this.contactService.delete(item.id).subscribe(
      () => this.removeItem(item)
    )
  }

  private removeItem(item: Contact) {
    for (var i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i] === item) {
        this.contacts.splice(i, 1);
      }
    }

    for (var i = 0; i < this.filteredContacts.length; i++) {
      if (this.filteredContacts[i] === item) {
        this.filteredContacts.splice(i, 1);
      }
    }
  }
}
