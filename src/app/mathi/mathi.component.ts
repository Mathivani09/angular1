import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathi',
  templateUrl: './mathi.component.html',
  styleUrls: ['./mathi.component.css']
})
export class MathiComponent implements OnInit {
 
 onclick(value1: any,value2:any)
 {
   console.log(value1,value2);
   console.log("submitted");
 }
  
  constructor() {}
  

  


  ngOnInit(): void {
  }

}
