import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  
  
  constructor() { }

  @Input() public name: any;

@Output() public child= new EventEmitter();
onclick()
{
  this.child.emit("heyyyyy");
}
  ngOnInit(): void {
  }

}
