import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';


declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allRestaurant: Restaurant[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private rs: RestaurantService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.rs.get().subscribe((data) => {
      this.allRestaurant = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.rs.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allRestaurant = this.allRestaurant.filter(
          (_) => _.id != this.idTodelete
        );
        this.deleteModal.hide();
      },
    });
  }
}