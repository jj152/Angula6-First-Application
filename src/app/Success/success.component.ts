import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent1 {
   
    name = '';
    welcomeMessage = '';
    //-- code for event binding -- //
    getUserName(event : Event){
      this.name = '';
      this.welcomeMessage = '';
      if((<HTMLInputElement>event.target).value.length>0){
        
        this.name = (<HTMLInputElement>event.target).value;
        this.welcomeMessage = this.name + " - you are welcome";
      }
    }
    // -- code for data binding using NgModel -- //
   // welcomeMessage = name + " - you are welcome";
}
