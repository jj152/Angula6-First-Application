import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent1 } from './app.component';
import { ServerComponent1 } from './server/server.component';
import { WarningComponent1 } from './Warning/warning.component';
import { SuccessComponent1 } from './Success/success.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent1,
    ServerComponent1,
    ServersComponent,
    WarningComponent1,
    SuccessComponent1
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent1]
})
export class AppModule { }
