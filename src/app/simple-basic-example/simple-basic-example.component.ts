import { Component, OnInit } from '@angular/core';
import { BasicService } from '../services/BasicServices.service';



@Component({
  selector: 'app-simple-basic-example',
  templateUrl: './simple-basic-example.component.html',
  styleUrls: ['./simple-basic-example.component.css']
})

export class SimpleBasicExampleComponent implements OnInit {
  data: Object;
  loading: boolean;
  constructor(private ser : BasicService) {

   }

  ngOnInit() {
  }

    makeRequest(): void {
     this.loading = true;
     this.ser.getData().subscribe((res: Response) => {
     this.data = res;
     this.loading = false;
     console.log("res is", this.data)
     }, err => {
       console.log("errorrr is", err);
     });
     }


}
