import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/components/nav/side-nav.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss'],
})
export class SectorsComponent {
  constructor(private sidenavService: SidenavService) {}

  togglesidenav = () => this.sidenavService.getSideNav;

  imgUrl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  listLinks = ['Hardware', 'Software', 'Math'];
  imgs = [1, 2, 3, 4, 1, 2, 3, 4];
}
