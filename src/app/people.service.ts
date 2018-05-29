import { Injectable } from '@angular/core';
import {Person} from './person';
import { Observable } from "rxjs";
import { Http, Response, Headers } from "@angular/http";
import { map } from "rxjs/operators";
// // Statics
// import 'rxjs/add/observable/throw';
// // Operators
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toPromise';

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

  private baseUrl: string = 'https://swapi.co/api';

  constructor(private http: Http) {

   }


  // getAll() : Person[] {
  //   return PEOPLE.map(p => this.clone(p));
  // }

  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people/`, {headers: this.getHeaders()})
      .pipe(map(mapPersons))
      return people$;
  }

  // get(id){
  //   return this.clone(PEOPLE.find(p => p.id === id));
  // }

  get(id): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
      .pipe(map(mapPerson));
      return person$;
  }

  save(person: Person){
    let originalPerson = PEOPLE.find(p => p.id === person.id);
    if (originalPerson) Object.assign(originalPerson, person);
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private clone(object: any){
    return JSON.parse(JSON.stringify(object));
  }
}

function mapPersons(response:Response): Person[]{
  return response.json().results.map(toPerson);
}

function mapPerson(response:Response): Person{
  // toPerson looks just like in the previous example
  return toPerson(response.json());
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
// that's because the Starwars API doesn't have an id field
function extractId(personData:any){

 let extractedId = personData.url.replace('https://swapi.co/api/people/','').replace('/','');
 
 return parseInt(extractedId);
}