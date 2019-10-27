import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { GenderPipe } from './gender.pipe';
import { CountryNamePipe } from './country-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    GenderPipe,
    CountryNamePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'AddContact', pathMatch: 'full' },
      { path: 'ContactList', component: ContactListComponent, pathMatch: 'full' },
      { path: 'AddContact', component: ContactFormComponent, pathMatch: 'full' },      
      { path: 'EditContact/:id', component: ContactFormComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }