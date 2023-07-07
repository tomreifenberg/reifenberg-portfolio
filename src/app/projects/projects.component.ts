import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project(
      'Riparian - UX Case Study',
      'A deep dive into the design process of Riparian, an app built for safe days on the water.',
      'https://i.imgur.com/rRWHlzi.jpg',
      'https://www.figma.com/proto/HgBlvASPwFnB3NLQ7c7L1s/6.4-Case-Study-(Essentials)---Riparian?page-id=2%3A55&node-id=404-3804&viewport=861%2C436%2C0.15&scaling=scale-down'
    ),
    new Project(
      'Housekey - UI Case Study',
      'Exploring the design of property research',
      'https://i.imgur.com/UUAa8t9.jpg',
      'https://www.figma.com/proto/LTrJLNGjhVbtLoS32nIZmY/Case-Study---Housekey?page-id=648%3A609&type=design&node-id=648-611&viewport=470%2C-2423%2C0.12&scaling=contain&mode=design&t=vL8fWuSxwRnJhShx-1'
    ),
    new Project(
      'NASA - Daily Picture',
      'Take a journey through decades of NASA imagery',
      'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18905_hires.jpg',
      'https://tomreifenberg.github.io/vanilla-apod/'
      ),
    new Project(
      'Image Carousel',
      'Cycle through images of my good friends, Lenny and Glen',
      'https://i.imgur.com/toD7trX.jpg',
      'https://tomreifenberg.github.io/carousel/'
      ),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
