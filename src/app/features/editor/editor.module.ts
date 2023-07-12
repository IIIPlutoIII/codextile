import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    // Material Module
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    TextFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
})
export class EditorModule {}
