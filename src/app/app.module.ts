import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxElectronModule } from 'ngx-electron-fresh';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileDropModule } from 'ngx-file-drop';

//import { MaterialFileInputModule } from 'ngx-material-file-input';
//import { MatFileUploadModule } from 'angular-material-fileupload';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

import { HomeComponent } from './home/home.component';
import { XlsxToJsonComponent } from './xlsx-to-json/xlsx-to-json.component';
import { TableExcelComponent } from './table-excel/table-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    XlsxToJsonComponent,
    TableExcelComponent
  ],
  imports: [
    MatTableModule,
    MatExpansionModule,
    MatGridListModule,
    NgxFileDropModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxElectronModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
