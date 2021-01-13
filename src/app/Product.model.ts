export class Product{

    constructor(
        public productId: string,
        public name: string,
        public tags: string ,
        public category: string,
        public color: string,
        public brand: string,
        public price: number,
        public quantity: number,
        public discountInPercent: number,
        public status: boolean,
        public updatedDate: Date,
        public searchDescriptionjson: string,
        public retailer: string,
    ){}
}