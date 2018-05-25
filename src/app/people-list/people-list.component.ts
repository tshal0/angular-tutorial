import { Component, OnInit } from '@angular/core';


import {Person} from  '../person';
import {PeopleService} from '../people.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html' ,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  // // Add an array of Person 
  // people: Person[] = [
  //   {name: 'Luke Skywalker', height:177, weight: 70},
  //   {name: 'Han Solo', height:200, weight: 100},
  //   {name: 'Leia Skywalker', height:140, weight: 50}
  // ];

  people: Person[];

  // Modified constructor to inject people service
  // Syntatically similar to 

  // private peopleService: PeopleService;
  // people: Person[] = [];

  // constructor(peopleService : PeopleService){
  //   this.peopleService = peopleService
  //   this.people = this.peopleService.getAll();
  // }

  // moved people service call from constructor to OnInit 
  // for unit testing purposes (constructor wont do any heavy lifting)
  constructor(private _peopleService: PeopleService) { 
  }
  ngOnInit() { 
    this.people = this._peopleService.getAll();
   }

}
