import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { CompanyDetailsComponent } from './company-details/company-details.component'


const routes: Routes = [
	{ path: '', redirectTo: '/companydetails', pathMatch: 'full' },
	{ path: 'companydetails', component: CompanyDetailsComponent },
	{ path: 'employeedetails', component: EmployeeDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  	onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
