import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  friuts=["mango","apple","banana",]
  public allow=false;
  public msg="hey everyone";
  public switch="one";
  open()
  {
    this.allow=!this.allow;
    if("allow")
    {
       this.msg="they allowed me";
       alert("hiiii");
    }
    else
    {
      this.msg="bye";
      alert("bye");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
