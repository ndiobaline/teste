import { NgModule } from '@angular/core';
import {MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'

@NgModule({
    imports: [
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      BrowserAnimationsModule,
      FormsModule,
      CommonModule
    ],
    exports: [
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      BrowserAnimationsModule,
      FormsModule,
      CommonModule
    ],
    providers: [ MatDatepickerModule ],
  })
  
  export class MaterialModule {}

