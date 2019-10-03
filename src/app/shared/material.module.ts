import { NgModule } from "@angular/core";

import { 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
 } from "@angular/material";

 @NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule
    ]
  })
  export class MaterialModule { }