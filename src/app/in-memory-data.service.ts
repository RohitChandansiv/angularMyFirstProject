import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mahesh', designation:'Project head' },
      { id: 2, name: 'Amruta', designation:'Admin' },
      { id: 3, name: 'Rohit',designation:'Lead dev' },
      { id: 4, name: 'Prashant', designation:'Dev' },
      { id: 5, name: 'Shiwanee',designation:'Tester' },
      { id: 6, name: 'Arav',designation:'Head of Noise Prevention' },
    ];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
  // constructor() { }
}
