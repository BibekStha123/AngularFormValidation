import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  message: String ="hello";

  constructor(private element : ElementRef){

  }

  ngOnInit(){
    console.log(this.element.nativeElement);
  }


  onLogin(form : NgForm){
    console.log(form);
  }

  validate={
    "textStyle": true,
    "textColor": true
  }

}
