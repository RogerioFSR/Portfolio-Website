import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

@Component({
  selector: 'app-education',
  imports: [NgFor],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  readonly heading = 'Education';
  readonly description = 'Academic background and Certifications';

  readonly items: EducationEntry[] = [
    {
      degree: 'Bachelor',
      institution: 'University A',
      period: '2000 - 2000',
      details: 'Something'
    },
    {
      degree: 'Master',
      institution: 'University B',
      period: '2000 - 2000',
      details: 'Something'
    }
  ]
}