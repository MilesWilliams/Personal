import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { WorkComponent } from './Components/work/work.component';
import { BlogComponent } from './Components/blog/blog.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent,
    WorkComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		// tslint:disable-next-line:indent
		FormsModule,
		ReactiveFormsModule,
		// tslint:disable-next-line:indent
		HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
