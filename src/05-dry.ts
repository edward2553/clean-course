class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public size: number = 0
  ) {}

  isProductValid(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if (this[key].length <= 0) throw Error(`${key} cannot be empty`);
          break;
        case 'number':
          if ((this[key] as number) <= 0)
            throw Error(`${key} cannot be empty or zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }
    return true;
  }

  toString() {
    // No Dry
    // if (this.name.length <= 0) throw Error('Name is Empty');
    // if (this.price <= 0) throw Error('Price is Empty');
    // if (this.size <= 0) throw Error('Size is Empty');

    this.isProductValid();

    return `Product: ${this.name}, price: ${this.price} & size: ${this.size}`;
  }
}

(() => {
  const jeans = new Product('Play station', 200, 10);
  console.log(jeans.toString());
})();
