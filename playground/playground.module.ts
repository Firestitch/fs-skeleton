import './styles.scss';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FsSkeletonModule } from '../src';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app/material.module';
import { FsExampleModule } from '@firestitch/example';
import {  ExampleComponent,
          ExamplesComponent,
          BannerComponent,
          FormComponent } from './app/components';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule,
    FsSkeletonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsExampleModule,
    RouterModule.forRoot(routes),
  ],
  entryComponents: [
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    FormComponent,
    BannerComponent
  ],
  providers: [
  ],
})
export class PlaygroundModule {
}
