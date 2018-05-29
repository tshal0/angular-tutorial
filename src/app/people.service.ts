import { Injectable } from '@angular/core';
import {Person} from './person';


const PEOPLE : Person[] = [
  {id: 1, name: 'Luke Skywalker', height:177, weight: 70},
  {id: 2, name: 'Han Solo', height:200, weight: 100},
  {id: 3, name: 'Leia Skywalker', height:140, weight: 50},
  {id: 4, name: 'Anakin Skywalker', height:200, weight: 200}
];

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor() { }


  getAll() : Person[] {
    return PEOPLE;
  }

  get(id){
    return PEOPLE.find(p => p.id === id);
  }
}
