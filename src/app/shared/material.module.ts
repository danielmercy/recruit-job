import { NgModule } from "@angular/core";

import { 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
 } from "@angular/material";

 @NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule
    ]
  })
  export class MaterialModule { }