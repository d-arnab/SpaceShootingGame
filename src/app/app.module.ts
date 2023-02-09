import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BulletComponent } from './bullet/bullet.component';
import { SpaceMakerComponent } from './space-maker/space-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    BulletComponent,
    SpaceMakerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ BulletComponent, SpaceMakerComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
