import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;

  // Hero type variable.
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // Function wich assigns the clicked hero the selectedHero variable.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
