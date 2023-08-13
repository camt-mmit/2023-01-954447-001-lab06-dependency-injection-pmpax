import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputData } from '../types';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  @Input({ required: true }) items!: InputData;
  @Input({ required: true }) section!: number;
  @Input() nonDeleteable = false;

  @Output() readonly deleteSelf = new EventEmitter<void>();
  @Output() readonly dataChange = new EventEmitter<void>();

  onChange(index: number, elem: HTMLInputElement): void {
    this.items[index].value = elem.valueAsNumber;
    this.dataChange.emit();
  }

  add(): void {
    this.items.push({ value: 0 });
    this.dataChange.emit();
  }

  delete(index: number): void {
    if (this.items.length > 1) {
      this.items.splice(index, 1);
      this.dataChange.emit();
    }
  }

  getResult(): number {
    return this.items.reduce((sum, item) => sum + item.value, 0);
  }

  doDeleteSelf(): void {
    this.deleteSelf.emit();
  }
}
