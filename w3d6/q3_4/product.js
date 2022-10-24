
const products = [];

class Product{
    constructor(id, name, description, quantity, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    save(){
        products.push(this);
    }
    static getAll(){
        return products;
    }
}
module.exports = Product;