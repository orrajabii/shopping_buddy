import { Component, OnInit } from '@angular/core';

interface InavbarLink {
  title: string;
  href: string;
  active?: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems: InavbarLink[];
  constructor() { }

  ngOnInit() {
    this.navItems = [
      {'title': 'Home', 'href': 'home', 'active': false},
      {'title': 'Products', 'href': 'products', 'active': false},
      {'title': 'My Shop', 'href': 'signout', 'active': false},
      {'title': 'Services', 'href': '#', 'active': false},
      {'title': 'Flyers & Deals', 'href': '#', 'active': false},
      {'title': 'My Account', 'href': 'checkout', 'active': false}
    ];
  }

}
