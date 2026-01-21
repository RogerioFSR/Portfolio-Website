import { Component } from '@angular/core';
import {NgFor, NgIf, NgClass} from '@angular/common';

type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
};

@Component({
  selector: 'app-projects',
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly heading = 'Projects';
  readonly description =
    'A list of past projects that demonstrate my skills and experience in software development, alongside what technologies I am proficient in.';

  readonly tagStyles: Record<string,string> = {
    Angular: 'bg-purple-100 text-red-800 ring-purple-200',
    TypeScript: 'bg-indigo-100 text-indigo-800 ring-indigo-200',
    Tailwind: 'bg-cyan-100 text-cyan-800 ring-cyan-200',
    'Node.js': 'bg-green-100 text-green-800 ring-green-200',
    CSS: 'bg-pink-100 text-pink-800 ring-pink-200',
    C: 'bg-blue-200 text-blue-900 ring-blue-300',
    Python: 'bg-yellow-100 text-yellow-800 ring-yellow-200',
    Flask: 'bg-gray-100 text-gray-800 ring-gray-200',
    Java: 'bg-red-100 text-red-800 ring-red-200',
    Javascript: 'bg-yellow-200 text-yellow-900 ring-yellow-300'
  }

  readonly items: Project[] = [
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: 'https://github.com/RogerioFSR/Portfolio-Website'
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Node.js','CSS', 'C'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: ''
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Python', 'Flask'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: ''
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Description',
      tags: ['Java','Javascript'],
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
