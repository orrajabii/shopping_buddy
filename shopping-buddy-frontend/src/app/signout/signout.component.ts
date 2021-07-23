
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    
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

SaveItem() {
			
  var name = document.getElementById("pname");
  var data = document.getElementById("data");
  localStorage.setItem(name.innerHTML, data.innerHTML);
  this.doShowAll();
  
}

// async logout() {
//   await axios.post(apiUrl+
// }

ModifyItem() {
  var name1 = document.getElementById("pname1");
  var data1 = document.getElementById("data1");
  var data = document.getElementById("data");
  //check if name1 is already exists
  
//check if key exists
          if (localStorage.getItem(name1.innerHTML) !=null)
          {
            //update
            localStorage.setItem(name1.innerHTML,data1.innerHTML);
            data.innerHTML = localStorage.getItem(name1.innerHTML);
          }
      
  
  this.doShowAll();
}
  
RemoveItem() {
  var name = document.getElementById("pname");
  var data = document.getElementById("data");
  // name.innerHTML = localStorage.removeItem(data);
  this.doShowAll();
}

ClearAll() {
  localStorage.clear();
  this.doShowAll();
}

}
