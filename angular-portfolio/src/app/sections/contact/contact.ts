import { Component } from '@angular/core';
import {NgFor} from '@angular/common';

type ContactItem = {
  label: string;
  value: string;
  href: string;
  iconSrc: string;
}

@Component({
  selector: 'app-contact',
  imports: [NgFor],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly heading = 'Contact Me';
  readonly description = "Feel free to reach out through any of the following platforms:";

  readonly items: ContactItem[] = [
    {
      label: 'Email',
      value: 'Reach me via email.',
      href: 'mailto:rogerio.sf.rocha@gmail.com',
      iconSrc: 'icons/mail.png'
    },
    {
      label: 'GitHub',
      value: 'A code library of my projects.',
      href: 'https://github.com/RogerioFSR',
      iconSrc: 'icons/github.svg'
    },
    {
      label: 'LinkedIn',
      value: 'Fastest way to reach me.',
      href: 'https://www.linkedin.com/in/rogerio-rocha-55975b262/',
      iconSrc: 'icons/linkedin.png'
    }
  ];
}
