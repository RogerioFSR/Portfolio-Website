import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  readonly heading = 'About Me';
  readonly intro =
    "I'm a Software and Network Engineer with a passion for efficiency and automation challenges.";

  readonly highlights: { label: string; value: string }[] = [
    { label: 'Nationality', value: 'Portuguese' },
    { label: 'Focus', value: 'OOP Languages and Artificial Intelligence' },
    { label: 'Interests', value: 'Software Development, Automotive Industry, Video Game Development' }
  ];
}
