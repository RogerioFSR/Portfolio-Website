import { Component } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';

type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
};

@Component({
  selector: 'app-projects',
  imports: [NgFor,NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly heading = 'Projects';
  readonly description =
    'A list of past projects that demonstrate my skills and experience in software development, alongside what technologies I am proficient in.';

  readonly items: Project[] = [
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: ''
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: ''
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: ''
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: ''
    }
  ];
}
