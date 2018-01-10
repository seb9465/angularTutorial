import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  // Method that returns the mock heroes.
  getHeroes(): Hero[] {
    return HEROES;
  }
}
