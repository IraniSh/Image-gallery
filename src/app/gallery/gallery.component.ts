import { Component, OnInit } from '@angular/core';
import { Placeholder} from '../shared/placeholder';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  places: Placeholder[] = 
  [
    {
      id: '0',
      name: 'Burleigh Beach',
      image: '/assets/images/burleighBeach.png',
      category: 'beach',
      featured: true,
      label: 'popular',
      // tslint:disable-next-line:max-line-length
      description: 'Burleigh beach is typical of the Gold Coast - superb beach, enough surf to attract local and visiting surfers.'
    },
    {
      id: '1',
      name: 'Main Beach',
      image: '/assets/images/mainBeach.png',
      category: 'beach',
      featured: true,
      label: 'popular',
      description: 'Main Beach is a family friendly beach which is patrolled all year round by lifeguards.'
    },
    {
      id: '2',
      name: 'Surfers Paradise',
      image: '/assets/images/surfersParadise.jpg',
      category: 'city',
      featured: true,
      label: 'popular',
      description: 'Surfers Paradise is a coastal town and suburb in the City of Gold Coast, Queensland.'
    },
    {
      id: '3',
      name: 'Kirra Beach',
      image: '/assets/images/kirraBeach.png',
      category: 'city',
      featured: true,
      label: 'popular',
      description: 'Kirra is world famous as one of the Gold Coast\'s most iconic surfing spots.'
    }


  ]

  constructor() { }

  ngOnInit() {
  }

}
