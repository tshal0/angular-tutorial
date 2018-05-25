import { Component, OnInit } from '@angular/core';

import {Person} from  '../person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html' ,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  // Add an array of Person 
  people: Person[] = [
    {name: 'Luke Skywalker', height:177, weight: 70},
    {name: 'Han Solo', height:200, weight: 100},
    {name: 'Leia Skywalker', height:140, weight: 50}
  ];

  // You can ignore these for now
  constructor() { }
  ngOnInit() {  }

}
