import { Component } from '@angular/core';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent1 {
    age;
    ageStatus :String = ""
    allowServer:boolean = false;
    serverCreationMessage:string = "";
    onInputAge(){
      console.log("Hello world");
      if (this.age <18) { 
        this.ageStatus  = "You can't enter as your age is less than 18 years"
        this.allowServer = false;
        this.serverCreationMessage = "";
     } else {
      this.ageStatus  = "You can proceed";
      this.allowServer = true;
      this.serverCreationMessage = "";
     }

      }
      onCreateServer(){
          this.serverCreationMessage = "Server created successfully";
      }
}