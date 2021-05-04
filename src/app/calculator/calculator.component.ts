import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
   public symbol="";
  public equal="";
  public result: number | undefined;
  public model="";
  public model1="";
  constructor() { }
  
  sum(val:any,val1:any)
  {
    
    this.symbol="+";
    this.equal="=";
    var a=Number(val);
    var b=Number(val1);
    this.result=a+b;
    
    
  }
 
  sub(val:any,val1:any)
  {
    this.symbol="-";
    this.equal="=";
     var a=Number(val);
     var b=Number(val1);
     if(a>=b){
      this.result=a-b;}
      else{
      this.result=-(b-a);
      }
  }

mul(val:any ,val1:any)
  {
    this.symbol="*";
    this.equal="=";
     var a=Number(val);
     var b=Number(val1);
     this.result=a*b;
}
div(val:any ,val1:any)
  {
     this.symbol="/";
     this.equal="=";
     var a=Number(val);
     var b=Number(val1);
     this.result=+((a/b).toFixed(2));

  }


  ngOnInit(): void {
  }

}
