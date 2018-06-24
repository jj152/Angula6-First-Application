import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './server.component.html'
})
export class ServerComponent1 {
  
  constructor(){
    
  }
  ngOnInit(){

  }
  
serverId :number = 1;
serverStatus:string = "down";
getServerStatus(){
  return this.serverStatus;
}
}