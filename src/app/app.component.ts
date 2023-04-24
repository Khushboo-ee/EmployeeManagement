import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagement';

  constructor(private _dialog: MatDialog){}

  openEmpForm(){
    this._dialog.open(EmpAddEditComponent) //pass the component you want to open as the dialog box
    //also bind this button function with click even 
  }
}
