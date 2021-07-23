import { Component, OnInit } from '@angular/core';
import {Product } from '../app-services/products.service';
import {ProductsService} from '../app-services/products.service';

export	interface	CartItem	{
    product:	Product;
    count:		number;
    amount:	number;
}
export	class	Cart	{
    count:	number	=	0;
    amount:	number	=	0;
    items:	CartItem[]	=	[];
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart: Cart;

    constructor(private productsServices: ProductsService) {
    }

    ngOnInit() {
    }
    randomProducts(number:number=4) {
        return this.productsServices.getProducts().slice(0,number);
    }

    addItemToCart(title, price, imageSrc) {
        var cartRow = document.createElement('div')
        cartRow.classList.add('cart-row')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
        for (var i = 0; i < cartItemNames.length; i++) {
            if (cartItemNames[i].innerHTML == title) {
                alert('This item is already added to the cart')
                return
            }
        }
        var cartRowContents = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.appendChild
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', this.removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', this.quantityChanged)
    }
    
    updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0]
        var cartRows = cartItemContainer.getElementsByClassName('cart-row')
        var total = 0
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerHTML.replace('$', ''))
            var quantity = quantityElement
            total = total + (price)
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total
    }
    ready() {
        var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i]
            button.addEventListener('click', this.removeCartItem)
        }
    
        var quantityInputs = document.getElementsByClassName('cart-quantity-input')
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i]
            input.addEventListener('change', this.quantityChanged)
        }
    
        var addToCartButtons = document.getElementsByClassName('shop-item-button')
        for (var i = 0; i < addToCartButtons.length; i++) {
            var button = addToCartButtons[i]
            button.addEventListener('click', this.addToCartClicked)
        }
    
        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', this.purchaseClicked)
    }
    
    purchaseClicked() {
        alert('Thank you for your purchase')
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        this.updateCartTotal()
    }
    
    removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        this.updateCartTotal()
    }
    
    quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        this.updateCartTotal()
    }
    
    addToCartClicked(event) {
        var button = event.target
        var shopItem = button.parentElement.parentElement
        var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        this.addItemToCart(title, price, imageSrc)
        this.updateCartTotal()
    }
    
    
}


