import { Component, OnInit } from '@angular/core';

import { Project } from './project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('NASA - Picture of the Day', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg','https://tomreifenberg.github.io/vanilla-apod/'),
    new Project('Abstract Art Canvas', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg','https://tomreifenberg.github.io/draw/program.html'),
    new Project('Meteor Dodge!', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg','https://tomreifenberg.github.io/draw/program.html'),
    new Project('Image Carousel', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg','https://tomreifenberg.github.io/draw/program.html'),
  

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
