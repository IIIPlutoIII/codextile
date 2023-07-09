import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavComponent, MaterialModule],
})
export class SharedModule {}
