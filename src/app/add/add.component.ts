import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private api:ApiService){}
  name=""
  adm=""
  roll_nO=""
  place=""
  college=""
  age=""

  readValues=()=>{
    let data:any={
      "name":this.name,
      "adm":this.adm,
      "roll_nO":parseInt(this.roll_nO),
      "place":this.place,
      "college":this.college,
      "age":parseInt(this.age)
    }
    console.log(data)

    this.api.addStudents(data).subscribe(
      (res:any)=>{
        console.log(res)
        if (res.status=="succes") {
            this.adm=""
            this.age=""
            this.college=""
            this.name=""
            this.place=""
            this.roll_nO=""
            alert("Student added succes fully")
        } else {
          alert("some thing went wrong")
        }
      }
    )

  }

}
