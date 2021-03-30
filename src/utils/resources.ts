export interface IUser {
    id?: number;
    name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone_no: string;
    role: string;
    address: number;
}

export interface IAddress {
    id?: number;
    flat_no: number;
    street: string;
    landmark?: string;
    city: string;
    pincode: number;
    user_id: number
}

export interface ICategory {
    id?: number;
    name: string;
    description: string;
}

export interface IProduct {
    id?: number;
    name: string;
    price: string;
    price_unit: string;
    category: string;
    sub_category: string;
    description?: string;
    image_url?: string;
    user_id: string;
}

export interface ICart {

}

