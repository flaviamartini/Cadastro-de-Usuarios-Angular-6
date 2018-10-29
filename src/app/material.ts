import {MatButtonModule, MatCheckboxModule, } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';



@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule, BrowserAnimationsModule, MatToolbarModule, MatDividerModule, MatListModule, MatGridListModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatSelectModule, MatInputModule],
  // tslint:disable-next-line:max-line-length
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatFormFieldModule , BrowserAnimationsModule, MatToolbarModule, MatDividerModule, MatListModule, MatGridListModule, MatMenuModule, MatCardModule, MatProgressSpinnerModule, MatSelectModule, MatInputModule],
})
export class MaterialModule { }
