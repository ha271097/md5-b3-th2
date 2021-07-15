import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
pet: Pet = {
  name : 'anh hoang xinh xeo',
  image : 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/182409093_1996009200538851_4855695055092029164_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=rDWd0l1wKlEAX8wjYyt&_nc_ht=scontent.fhan3-2.fna&oh=d068bf7f19b31b09d4ae92f7cb1de6db&oe=60F5BC4C'
}
  constructor() { }

  ngOnInit(): void {
  }

}
