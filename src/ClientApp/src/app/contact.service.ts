import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('/api/contact', contact);
  }

  getList(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contact');
  }
}
