import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {

  restaurantForm: Restaurant = {
    id:0,
    name:'',
    imageUrl:'',
    address:'',
    phone:0,
  };

  constructor(
    private Restaurantervice: RestaurantService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  create() {
    this.Restaurantervice.create(this.restaurantForm).subscribe({
      next: (data) => {
        this.router.navigate(['/restaurants/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}