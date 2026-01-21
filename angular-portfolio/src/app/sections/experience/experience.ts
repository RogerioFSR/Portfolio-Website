import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  readonly heading = 'Experience';
  readonly description =
    'Roles and responsibilities held in professional settings.';

  readonly items: ExperienceItem[] = [
    {
      role: 'Something 1',
      company: 'Something 1',
      period: '2000 - 2000',
      highlights: [
        'Something 1',
        'Something 2',
        'Something 3'
      ]
    },
    {
      role: 'Something 2',
      company: 'Something 2',
      period: '2000 - 2000',
      highlights: [
        'Something 1',
        'Something 2',
        'Something 3'
      ]
    }
  ];
}
