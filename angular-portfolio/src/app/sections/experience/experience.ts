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
      role: 'Assistant Mechanic',
      company: 'FAS Auto',
      period: 'Jul 2019 - Nov 2020',
      highlights: [
        'Handling simple vehicle maintenance and servicing tasks',
        'Documentation and customer service',
        'Aiding in international vehicle deals'
      ]
    },
    {
      role: 'IT Intern at Evalution Center',
      company: 'Continental Mabor, Lousado',
      period: 'Jun 2020 - Aug 2020',
      highlights: [
        'Automation and digitalization of document databases',
        'Visual Basic scripting for Microsoft Excel for data streamlining/cleaning'
      ]
    },
    {
      role: 'Junior Community Executive',
      company: 'Duelbits',
      period: 'Jul 2022 - Feb 2025',
      highlights: [
        'Scheduling and team disputes resolution',
        'Autonomous development of small scale applications in Python and Javascript in order to automate and ease internal and external processes',
        'Creation, deployment and maintenance of marketing and customer support campaings/initiatives alongside media content'
      ]
    },
    {
      role: 'Community Executive',
      company: 'Duelbits',
      period: 'Feb 2025 - Present',
      highlights: [
        'Responsible for the community team',
        'Scheduling, team disputes resolution and maintaining processes intra and inter teams',
        'Creation, management and delegation of Key Performance Indicators (KPIs) within the team',
        'Autonomous development of small scale applications in Python and Javascript in order to automate and ease internal and external processes',
        'Creation, deployment and maintenance of marketing and customer support campaings/initiatives alongside media content'
      ]
    }
  ];
}
