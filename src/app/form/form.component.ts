import { createElementCssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public dept=["CSE","ECE","EEE","IT","MECH"];
  public dpt=true;
  constructor() {}
  validatedept(val:any)
  {
  if(val =='default')
  {
    this.dpt=true;
  }
  else{
    this.dpt=false;
  }
  }
  onSubmit(value:any)
  {
    console.log(value);
  }
  

  ngOnInit(): void {
  }

}
