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
      institution: 'Faculdade de Engenharia da Universidade do Porto',
      period: '2018 - 2022',
      details: 'Software and Computing Engineering'
    },
    {
      degree: 'Master',
      institution: 'Faculdade de Ciências da Universidade do Porto',
      period: '2022 - 2025',
      details: 'Networks and Informatic Systems Engineering'
    }
  ]
}