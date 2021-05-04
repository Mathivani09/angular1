import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathiComponent } from './mathi/mathi.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Project1Component } from './project1/project1.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormComponent } from './form/form.component';
import { ReactComponent } from './react/react.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MathiComponent,
    RegisterComponent,
    Project1Component,
    CalculatorComponent,
    FormComponent,
    ReactComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
