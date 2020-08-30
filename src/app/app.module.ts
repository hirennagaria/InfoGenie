import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule, MatIconModule, MatButtonModule, MatGridListModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material/'
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    EmployeeDetailsComponent,
    EmployeeCardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
