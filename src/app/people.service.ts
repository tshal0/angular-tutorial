import { Injectable } from '@angular/core';
import {Person} from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }

  getAll() : Person[] {
    return [
      {name: 'Luke Skywalker', height:177, weight: 70},
      {name: 'Han Solo', height:200, weight: 100},
      {name: 'Leia Skywalker', height:140, weight: 50},
      {name: 'Anakin Skywalker', height:200, weight: 200}
    ];
  }
}
