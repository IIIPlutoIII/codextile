import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent {
  @Input() control: FormControl = new FormControl();
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() format = '';
}
