import { Component, OnInit } from '@angular/core';

import { Project } from './project.model'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
    new Project('A Test Project', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg','https://tomreifenberg.github.io/vanilla-apod/'),
    new Project('A New Project', 'This is a Test', 'https://get.pxhere.com/photo/natural-foods-food-superfood-Food-group-vegetable-plant-dish-produce-cuisine-fruit-ingredient-legume-vegetarian-food-vegan-nutrition-recipe-1556245.jpg','')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
