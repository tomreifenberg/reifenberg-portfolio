import { Component, OnInit } from '@angular/core';

import { Project } from './project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project(
      'NASA - Daily Picture', 
      'Take a journey through decades of NASA imagery', 
      'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18905_hires.jpg',
      'https://tomreifenberg.github.io/vanilla-apod/'
      ),
    new Project(
      'Meteor Dodge!', 
      'Dodge your way to safety in a meteor downpour', 
      'https://www.universetoday.com/wp-content/uploads/2011/11/Leonids-NASA.jpg',
      'https://tomreifenberg.github.io/game/'
      ),
    new Project(
      'Image Carousel', 
      'Cycle through images of my good friends, Lenny and Glen', 
      'https://i.imgur.com/toD7trX.jpg',
      'https://tomreifenberg.github.io/carousel/'
      ),
    new Project(
      'Abstract Art Canvas', 
      'Paint bizarre and wonderful art within your browser', 
      'http://www.mepixels.com/cache/af1d45ba/abstract-geometric-background-1140x1140-S5ToJTPV4.jpeg',
      'https://tomreifenberg.github.io/draw/program.html'
      ),  

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
