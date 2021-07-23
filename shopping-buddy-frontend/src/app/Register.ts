export class Product {
    tags: any[];
    _id: string;
    title: string;
    description: string;
    price: number;
    imageURL: string;
    date: Date;
}

export class Shop {
    _id: string;
    shopName: string;
    shopDescription: string;
    logoURL: string;
    bannerURL: string;
    address: string;
    phone: string;
    email: string;
    date: Date;
    products: Product[];
}

export class Register {
    isActive: boolean;
    _id: string;
    name: string;
    email: string;
    password: string;
    date: Date;
    shops: Shop[];
    __v: number;
}