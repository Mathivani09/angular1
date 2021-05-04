import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactComponent } from './react/react.component';


const routes: Routes = [
{path:' ',component:AppComponent},
{path:'form',component:FormComponent},
{path:'react',component:ReactComponent}

  //{path:'mathi',component:MathiComponent},
  //{path:'project1',component:Project1Component},
  //{ path: '',   redirectTo: 'mathi', pathMatch: 'full' }, //it will redirect to mathicomponent page when path=localhost/4200
  //{path:'**',component:Project1Component},//when other path doesnt match it works
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 


  
}
