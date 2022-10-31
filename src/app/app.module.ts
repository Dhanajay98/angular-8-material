import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { HomeComponent } from './component/home/home.component';
import {NavBarComponent } from './component/nav-bar/nav-bar.component';
import {MatButtonModule,} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule,MatButtonModule,MatSnackBarModule]
,
  declarations: [AppComponent,HomeComponent,NavBarComponent],
  bootstrap: [AppComponent],
  providers:[MatSnackBar]
})
export class AppModule {}
