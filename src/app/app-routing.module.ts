import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { XlsxToJsonComponent } from './xlsx-to-json/xlsx-to-json.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'xlsx-to-json', component: XlsxToJsonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
