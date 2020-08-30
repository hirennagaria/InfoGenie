import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EMPLOYEES, Employee, SearchEmployee } from '../Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
	searchControl = new FormControl();

	employeeCards = EMPLOYEES;
	searchEmployees: SearchEmployee[];
	showBackBtn: boolean = true;

	filteredOptions: Observable<SearchEmployee[]>;

  constructor(private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
  	this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  	const employeeId = this.route.snapshot.paramMap.get('id');
  	if(employeeId) {
  		this.showBackBtn = true;
  		let arrayIndex = this.employeeCards.findIndex(function (element) { 
        return element.empId == employeeId; 
    	}); 
  		this.employeeCards = [this.employeeCards[arrayIndex]];
  	}
  	else {
  		this.showBackBtn = false;
	  	this.searchEmployees = this.employeeCards.map(({ empId, name }) => ({empId, name}));
	  }
  	//this.searchEmployees = this.employeeCards.map(({ name }) => ({name}));
  	this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        //map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.searchEmployees.slice()),
        //map(name => name ? this._select(name) : this.searchEmployees.slice())
      );

  }

  displayFn(employee: SearchEmployee): string {
    return employee && employee.name ? employee.name : '';
  }

  private _filter(name: string|any): SearchEmployee[] {
  	console.log(name);
  	if(name.hasOwnProperty('empId')) {
  		this.router.navigate(['/employeedetails', { id: name.empId }]);
  	}
    const filterValue = name.toLowerCase();

    return this.searchEmployees.filter(searchEmployee => searchEmployee.name.toLowerCase().indexOf(filterValue) === 0);
  }



}
