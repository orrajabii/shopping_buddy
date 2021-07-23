import {Injectable } from '@angular/core';
export interface Product {
    id: string;					//	Ref	on	category	belongs	to
    categoryId: string;
    //	The	title
    title: string;
    //	Price
    price: number;
    //	Mark	product	with	specialproce
    isSpecial: boolean;
    //	Description
    desc: string;
    //	Path	to	small	image
    imageS: string;
    //	Path	to	large	image;
    imageL: string;
}
@Injectable()

export class ProductsService {


 products: Product[] = [
    {
        id: '1',
        categoryId: '1',
        title: 'Croissants',
        price: 0.5,
        isSpecial: true,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48ca5679-d9f2-4f8f-a2ba-9615f9e6bb9e.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48ca5679-d9f2-4f8f-a2ba-9615f9e6bb9e.png',
        desc: 'A	croissant	is	a	buttery,	flaky,	viennoiserie-pastry	named	for	its	well-known.'
    },
    {
        id: '2',
        categoryId: '2',
        title: 'Pizza',
        price: 1.2,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c93f4992-b6e3-462b-8828-4f8845bd63a5.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c93f4992-b6e3-462b-8828-4f8845bd63a5.png',
        desc: 'Pizza	is	a	flatbread and baked in oven. Enjoy our best taste. Order now. '
    },
    {
        id: '3',
        categoryId: '3',
        title: 'Milk',
        price: 1.7,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b44d3c20-a6de-4ec3-ab91-3fd656f6d296.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b44d3c20-a6de-4ec3-ab91-3fd656f6d296.png',
        desc: 'Milk	is	a	pale	liquid	produced	by	the	mammary	glands	of	mammals'
    },
    {
        id: '4',
        categoryId: '1',
        title: 'Baguette/French	Bread',
        price: 1.5,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c731d2dc-f1a7-4b1f-95c8-16d7c1bfa06c.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c731d2dc-f1a7-4b1f-95c8-16d7c1bfa06c.png',
        desc: 'Great	eaten	fresh	from	oven.	Used.'
    },
    {
        id: '5',
        categoryId: '3',
        title: 'Cream	Cheese',
        price: 2.35,
        isSpecial: false,
        imageL: 'https://i1.wp.com/understandrussia.com/wp-content/uploads/2014/01/Kroshka-kartoshka.gif',
        imageS: 'https://i1.wp.com/understandrussia.com/wp-content/uploads/2014/01/Kroshka-kartoshka.gif',
        desc: 'Cream	cheese	is	a	soft,	mild-tasting	fresh	cheese	with	a	high	fat	content.'
    },
    {
        id: '6',
        categoryId: '4',
        title: 'Pork loin',
        price: 5.60,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_444cb69b-c350-4f1c-90a3-6ecfd4e4d004.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_444cb69b-c350-4f1c-90a3-6ecfd4e4d004.png',
        desc: ''
    },
    {
        id: '7',
        categoryId: '4',
        title: 'Ribs,	Baby	Back',
        price: 4.85,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9aa5471e-e905-4e50-a978-f7be409c2534.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9aa5471e-e905-4e50-a978-f7be409c2534.png',
        desc: ''
    },
    {
        id: '8',
        categoryId: '4',
        title: 'Ground	Beef',
        price: 9.20,
        isSpecial: false,
        imageL: 'http://www.bhmpics.com/thumbs/plum_fruit_4k-t2.jpg',
        imageS: 'http://www.bhmpics.com/thumbs/plum_fruit_4k-t2.jpg',
        desc: 'Ground	beef,	beef	mince,	been	finely	chopped	with	a	large	knife	or	a	meat	grinder.'
    },
    {
        id: '9',
        categoryId: '5',
        title: 'Tuna',
        price: 3.45,
        isSpecial: false,
        imageL: 'http://www.bhmpics.com/thumbs/pear_fruits-t2.jpg',
        imageS: 'http://www.bhmpics.com/thumbs/pear_fruits-t2.jpg',
        desc: 'A	tuna	is	a	saltwater	finfish	that	belongs	to	the	tribe	Thunnini,	a	sub-grouping	of	the	mackerel	family	-	which	together	with	the	tunas,	also	includes	the	bonitos,	ackerels,	and	Spanish	mackerels.'
    }, {
        id: '10',
        categoryId: '5',
        title: 'Salmon',
        price: 4.55,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_903fa347-5a1f-4fff-a993-a00534a79dff.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_903fa347-5a1f-4fff-a993-a00534a79dff.png',
        desc: 'Salmon	is	the	common	name	for	several	species	of	ray-finned	fish	in	the	family	Salmonidae.'
    },
    {
        id: '11',
        categoryId: '5',
        title: 'Oysters',
        price: 7.80,
        isSpecial: false,
        imageL: 'http://www.aqmeal.com/images/about/diet-food.jpg',
        imageS: 'http://www.aqmeal.com/images/about/diet-food.jpg',
        desc: 'The	word	oyster	is	used	as	a	common	name	for	a	number	of	different	families	of	saltwater	clams,	bivalve	molluscs	that	live	in	marine	or	brackish	habitats.'
    }, {
        id: '12',
        categoryId: '5',
        title: 'Scalops',
        price: 2.70,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5d41fd6e-4fc4-4b1f-8e46-1fa30ab6f56a.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5d41fd6e-4fc4-4b1f-8e46-1fa30ab6f56a.png',
        desc: 'Scallop	is	a	common	name	that	is	primarily	applied	to	any	one	of	numerous	species	of	saltwater	clams	or	marine	bivalve	mollusks	in	the	taxonomic	family	Pectinidae,	the	scallops.'
    },
    {
        id: '13',
        categoryId: '6',
        title: 'Banana',
        price: 1.55,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5d70b4ac-4819-4204-80cf-1e5d5cdec1e7.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5d70b4ac-4819-4204-80cf-1e5d5cdec1e7.png',
        desc: 'The	banana	is	an	edible	fruit,	botanically	a	berry,	produced	by	several	kinds	of	large	herbaceous	flowering	plants	in	the	genus	Musa.'
    },
    {
        id: '14',
        categoryId: '6',
        title: 'Cucumber',
        price: 1.05,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_05be4a82-e76e-49be-a920-1dde7a2d4d3c.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_05be4a82-e76e-49be-a920-1dde7a2d4d3c.png',
        desc: 'Cucumber	is	a	widely	cultivated	plant	in	the	gourd	family,	Cucurbitaceae.	'
    },
    {
        id: '15',
        categoryId: '6',
        title: 'Apple',
        price: 0.80,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_04a38b69-c3bb-4706-85a8-26d7ff2178d0.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_04a38b69-c3bb-4706-85a8-26d7ff2178d0.png',
        desc: 'The	apple	tree	is	a	deciduous	tree	in	the	rose	family	best	known	for	its	sweet,	pomaceous	fruit,	the	apple.'
    },
    {
        id: '16',
        categoryId: '6',
        title: 'Lemon',
        price: 3.20,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8c1e3d58-9ce9-4365-9fbb-986456aa51c0.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8c1e3d58-9ce9-4365-9fbb-986456aa51c0.png',
        desc: 'The	lemon	is	a	species	of	small	evergreen	tree	native	to	Asia.'
    },
    {
        id: '17',
        categoryId: '6',
        title: 'Pear',
        price: 4.25,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9ccc7c45-002e-4568-9bf9-457f4b1397ea.png',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9ccc7c45-002e-4568-9bf9-457f4b1397ea.png',
        desc: 'The	pear	is	any	of	several	tree	and	shrub	species	of	genus	Pyrus,	in	the	family	Rosaceae.'
    },
    {
        id: '18',
        categoryId: '6',
        title: 'Papaya',
        price: 3.49,
        isSpecial: false,
        imageL: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_af5cf719-b689-498f-80ba-c855abed2f24.jpg',
        imageS: 'https://d2d8wwwkmhfcva.cloudfront.net/900x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_af5cf719-b689-498f-80ba-c855abed2f24.jpg',
        desc: 'Eat healthy papaya	and	best for summers.'
    }
];

    getProducts() {
        return this.products;
    }

    getProduct(id: string): Product {

       return this.products.filter((product:Product)=> { return product.id == id})[0]
    }

}
