import { NgModule } from '@angular/core';
import { HeaderComponent } from '../admin/header/header.component';
import { LeftPanelComponent } from '../admin/left-panel/left-panel.component';
import { RightPanelComponent } from '../admin/right-panel/right-panel.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
console.log('AdminModule loaded');

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    LeftPanelComponent,
    RightPanelComponent
  ],
  imports: [
    AdminRoutingModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule, 
    MatInputModule, 
    ReactiveFormsModule,
    CommonModule,
    MatTableModule
  ],
  exports:[
  ],
  providers: [],

})
export class AdminModule { }
