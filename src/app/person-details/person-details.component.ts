import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Person } from "../person";
import {ActivatedRoute, Router} from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: '../person-details/person-details.component.html',
  styles: []
})


export class PersonDetailsComponent implements OnInit, OnDestroy {
  @Input() person: Person;
  sub:any;
  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router) {
    
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoPeoplesList(){
    // let link = ['/persons'];
    // this.router.navigate(link);
    window.history.back();
  }

  savePersonDetails(){
    this.peopleService.save(this.person);
  }

}
