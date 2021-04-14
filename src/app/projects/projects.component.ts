import { Component, OnInit } from '@angular/core';

import { Project } from './project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('NASA - Daily Picture', 'This is a Test', 'https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18905_hires.jpg','https://tomreifenberg.github.io/vanilla-apod/'),
    new Project('Abstract Art Canvas', 'This is a Test', 'https://cdn.pixabay.com/photo/2015/01/31/05/05/background-618226_960_720.png','https://tomreifenberg.github.io/draw/program.html'),
    new Project('Meteor Dodge!', 'This is a Test', 'https://www.universetoday.com/wp-content/uploads/2011/11/Leonids-NASA.jpg','https://tomreifenberg.github.io/draw/program.html'),
    new Project('Image Carousel', 'This is a Test', 'https://i.imgur.com/toD7trX.jpg','https://tomreifenberg.github.io/draw/program.html'),
  

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
