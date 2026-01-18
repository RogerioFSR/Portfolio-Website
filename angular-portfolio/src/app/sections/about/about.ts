import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  readonly heading = 'About Me';
  readonly intro =
    "I'm a Software and Network Engineer with a passion for efficiency and automation challenges.";

  readonly highlights: { label: string; value: string }[] = [
    { label: 'Location', value: 'Porto, Portugal' },
    { label: 'Focus', value: 'Network and Software Engineering' },
    { label: 'Interests', value: 'Things' }
  ];
}
