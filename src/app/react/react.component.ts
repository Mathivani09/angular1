import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {
  
  constructor(private f: FormBuilder) { }
  registrationform=this.f.group(
    {
       name:['',[Validators.required, Validators.minLength(5)]],
       password:['',Validators.minLength(8)],
       confirmpassword:[''],
       address: this.f.group(
         {
           city:[''],
           street:[' '],
         }
       )
    }
  )
 /*registrationform= new FormGroup({
     name: new FormControl('mathivani'),
     password:new FormControl(''),
     confirmpassword: new FormControl(''),
     address:new FormGroup({
         city:new FormControl(''),
         street:new FormControl('')
       })
  });*/
  onsubmit(val:any)
  {
    console.log(val);
  }

  
 load()
 {
   this.registrationform.setValue({
      name: 'mathi',
      password:'helo',
      confirmpassword:'helo',
      address:{
        city:'pondy',
        street:'rk street'
      }
   });
   
 }
  ngOnInit(): void {
  }

}
