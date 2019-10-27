import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('/api/contact', contact);
  }

  editContact(contact: Contact) {
    return this.http.put('api/contact/' + contact.id, contact);
  }

  get(id: number): Observable<Contact> {
    return this.http.get<Contact>('api/contact/' + id);
  }

  getList(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contact');
  }

  delete(id: number): Observable<any> {
    return this.http.delete("api/contact/" + id);
  }
}
