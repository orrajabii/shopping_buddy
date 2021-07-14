import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//TODO: 1: (DONE) make the products list in row card desc
//TODO: 2: (DONE) inject service to entire app
//TODO: 3: (DONE) fix category router by using query string routing
//TODO: 4: (DONE) fetch a real photos of products
//TODO: 5: fix bugs in styles in navbar and so on
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Shopping Buddy';
  hideAnchor:boolean = true;

  @ViewChild(NavbarComponent)
      ChildProducts: NavbarComponent ;

  constructor() {

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    //console.log(this.ChildNavbar.navItems);
      console.log("After view init", this.ChildProducts.navItems)
  }


    toTop(subtract:number):void {
        subtract = window.scrollY / 40;
        let scrollInterval= setInterval(function(){
            let windowScroll = window.scrollY;

            if (windowScroll > 0) {
                windowScroll -= subtract;
                window.scrollTo(0, windowScroll);
            } else {
                clearInterval(scrollInterval);
            }
        },5)

    }

    CheckBrowser() {
      if ('localStorage' in window && window['localStorage'] !== null) {
          // we can use localStorage object to store data
          return true;
      } else {
              return false;
      }
    }
    doShowAll() {
      if (this.CheckBrowser()) {
          var key = "";
          var list = "<tr><th>Item</th><th>Value</th></tr>\n";
          var i = 0;
          //for more advance feature, you can set cap on max items in the cart
          for (i = 0; i <= localStorage.length-1; i++) {
              key = localStorage.key(i);
              list += "<tr><td>" + key + "</td>\n<td>"
                      + localStorage.getItem(key) + "</td></tr>\n";
          }
          //if no item exists in the cart
          if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
              list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
          }
          //bind the data to html table
          //you can use jQuery too....
          document.getElementById('list').innerHTML = list;
      } else {
          alert('Cannot save shopping list as your browser does not support HTML 5');
      }
  }
}
