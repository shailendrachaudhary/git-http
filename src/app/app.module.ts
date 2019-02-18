import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BasicService } from "./services/BasicServices.service";

import { AppComponent } from './app.component';
import { SimpleBasicExampleComponent } from './simple-basic-example/simple-basic-example.component';
import { youTubeSearchInjectables } from './models/you-tube-search.injectable';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBasicExampleComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
  ],
  providers: [BasicService , youTubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
