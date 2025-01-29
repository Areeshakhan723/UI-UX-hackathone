// export interface Product {
//     _id: string;
//     name: string;
//     price: number;
//     description: string;
//     image:{
//         assest:{
//             _ref:string;
//             _type:"image"
//         }
//     },
//     tags: string[];
//     dimensions: number[];
//     quantity: number;
//     features: string[];
//     category:
// }


export interface ProductTypes {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    tags: string[];
    dimensions: {
        height: string;
        width: string;
        depth: string;
    };
    quantity: number;
    features: string[];
    slug:string;
   
}
