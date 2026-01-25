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
    'A list of my most notable projects that demonstrate my skills and experience in software development, alongside what technologies I am proficient in.';

  readonly tagStyles: Record<string,string> = {
    Angular: 'bg-purple-100 text-red-800 ring-purple-200',
    TypeScript: 'bg-indigo-100 text-indigo-800 ring-indigo-200',
    Tailwind: 'bg-cyan-100 text-cyan-800 ring-cyan-200',
    'Node.js': 'bg-green-100 text-green-800 ring-green-200',
    CSS: 'bg-pink-100 text-pink-800 ring-pink-200',
    HTML: 'bg-orange-100 text-orange-800 ring-orange-200',
    C: 'bg-blue-200 text-blue-900 ring-blue-300',
    Python: 'bg-yellow-100 text-yellow-800 ring-yellow-200',
    Flask: 'bg-gray-100 text-gray-800 ring-gray-200',
    Java: 'bg-red-100 text-red-800 ring-red-200',
    Javascript: 'bg-yellow-200 text-yellow-900 ring-yellow-300',
    SQL: 'bg-white-100 text-green-800 ring-blue-200',
    Bash: 'bg-gray-200 text-gray-900 ring-gray-300',
    Network: 'bg-teal-100 text-teal-800 ring-teal-200',
    Android: 'bg-green-200 text-green-900 ring-green-300',
    Arduino: 'bg-red-200 text-red-900 ring-red-300',
    Jupyter: 'bg-orange-200 text-orange-900 ring-orange-300',
    'Machine Learning': 'bg-lime-100 text-lime-800 ring-lime-200',
    Data: 'bg-blue-100 text-blue-400 ring-blue-200',
    Blockchain: 'bg-pink-200 text-gray-600 ring-gray-400',
    HuggingFace: 'bg-yellow-300 text-yellow-900 ring-yellow-400'
  }

  readonly items: Project[] = [
    {
      title: 'Thesis - Classification of Youtube Videos using Textual Information in the Portuguese Language',
      description:
        'The final project for my Master\'s degree, which involved building a machine learning model to classify Youtube videos based on their transcripts. Paper will be made available soon.',
      tags: ['Python', 'Machine Learning', 'Data','HuggingFace'],
      repoUrl: '',
      liveUrl: 'https://huggingface.co/RogerioRocha/bert-base-portuguese-cased-political'
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'The very page you\'re looking at.',
      tags: ['Angular', 'TypeScript', 'Tailwind'],
      repoUrl: 'https://github.com/RogerioFSR/Portfolio-Website',
      liveUrl: 'https://github.com/RogerioFSR/Portfolio-Website'
    },
    {
      title: 'Clipboard Management Extension',
      description:
        'A simple clipboard management browser extension to store and quickly access frequently used text snippets and images.',
      tags: ['Javascript','HTML', 'CSS'],
      repoUrl: '',
      liveUrl: 'https://chromewebstore.google.com/detail/ihidbabjcamenighnbibmmajcnokjgbm?utm_source=item-share-cb'
    },
    {
      title: 'Simple Flask Framework Website',
      description:
        'A project showcasing a basic website built using the Flask framework in Python in order to learn the framework fundamentals and structure.',
      tags: ['Python', 'Flask','SQL'],
      repoUrl: 'https://github.com/RogerioFSR/FlaskTutorial',
      liveUrl: ''
    },
    {
      title: 'XDP Packet Filter Research',
      description:
        'This project aimed to demonstrate the use of XDP in Linux to accelerate packet processing and filtering.',
      tags: ['C','Bash','Network'],
      repoUrl: 'https://github.com/TelmoRibeiro/ANT',
      liveUrl: ''
    },
    {
      title: 'Mouse Trap Embedded System',
      description:
        'A small project consisting of an embedded system that detects and traps mice using sensors and actuators controlled by a mobile application.',
      tags: ['Python', 'Android', 'Arduino'],
      repoUrl: 'https://github.com/TelmoRibeiro/EmbSyse',
      liveUrl: ''
    },
    {
      title: 'Predict Cardiac Pathologies in Children',
      description:
        'A machine learning and data mining project that aims to predict cardiac pathologies in children using a dataset of medical records.',
      tags: ['Python', 'Data', 'Machine Learning','Jupyter'],
      repoUrl: 'https://github.com/RogerioFSR/FCUP-DataMining',
      liveUrl: ''
    },
    {
      title: 'Java Virtual Machine Assembler',
      description:
        'This project had as aim the development of a new Java Virtual Machine Assembler that provides a number of useful features.',
      tags: ['Java'],
      repoUrl: 'https://github.com/DioCGomes/JVM-Assembler',
      liveUrl: ''
    },
    {
      title: 'Public Ledger Auction System',
      description:
        'A simple auction system that utilizes blockchain technology to ensure transparency and security in the auction process.',
      tags: ['Blockchain','Java'],
      repoUrl: 'https://github.com/up201910223/PublicLedgerAuction',
      liveUrl: ''
    }
  ];
}
