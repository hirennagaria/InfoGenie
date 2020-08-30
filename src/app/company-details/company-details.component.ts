import { Component, OnInit } from '@angular/core';
import { COMPANY } from '../Company'

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: any;
  constructor() { }

  ngOnInit() {
  	this.company = COMPANY;
  }

}
