import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { toPromise } from 'rxjs/add/operator/toPromise';

@Injectable()
export class BasicService{

    constructor(private htt : HttpClient){

    }

    configAdd = 'http://jsonplaceholder.typicode.com/posts/1';

    getData(){
        return this.htt.get(this.configAdd)
        //return true
    }

}