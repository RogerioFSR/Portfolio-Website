import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'
import { Landing } from './sections/landing/landing'
import { About } from './sections/about/about'
import { Education } from './sections/education/education'
import { Experience } from './sections/experience/experience'
import { Projects } from './sections/projects/projects'
import { Contact } from './sections/contact/contact'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Header,Landing,About,Education,Experience,Projects,Contact],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-portfolio');
}
