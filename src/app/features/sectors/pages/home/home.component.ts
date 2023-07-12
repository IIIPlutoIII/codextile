import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imgUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  listLinks = ['Hardware', 'Software', 'Math'];
  imgs = [1, 2, 3, 4, 1, 2, 3, 4];
}
