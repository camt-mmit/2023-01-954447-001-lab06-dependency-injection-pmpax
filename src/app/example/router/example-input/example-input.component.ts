import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSectionComponent } from '../../dynamic-section/dynamic-section.component';
import { ExampleDataService } from '../../example-data.service';
import { SectionData } from '../../types';

@Component({
  selector: 'app-example-input',
  standalone: true,
  imports: [CommonModule, DynamicSectionComponent],
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.scss'],
})
export class ExampleInputComponent {
  protected readonly dataService = inject(ExampleDataService);

  protected data$ = this.dataService.getData();

  async onDataChanged(sectionData: SectionData): Promise<void> {
    console.debug(sectionData);
    await this.dataService.setData(sectionData);
  }
}
