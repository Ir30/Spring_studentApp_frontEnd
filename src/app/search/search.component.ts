import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private api:ApiService){}

  adm=""

  serchData:any=[]
  readValues = ()=>{
    let data:any={
      "adm":this.adm
    }
    console.log(data)

    this.api.searchStudent(data).subscribe(
      (res:any)=>{
        this.serchData=res
      }
    )
    
  }

}
