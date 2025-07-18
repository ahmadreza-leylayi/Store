
export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number | string;
  image: string;
qty?: number;
}



export const  productDatabase ={
    "product": [
    {
      "id": "1",
      "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 1",
      "description": "This is a product description",
      "price": 100
    },
    {
      "id": "2",
      "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 2",
      "description": "This is a product description",
      "price": 500
    },
    {
      "id": "3",
      "image": "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 3",
      "description": "This is a product description",
      "price": 132
    },
    {
      "id": "4",
      "image": "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 4",
      "description": "This is a product description",
      "price": 654
    },
    {      "id": "5",
      "title": "Product 5",
      "price": 321,
      "image": "https://searchengineland.com/wp-content/seloads/2014/08/photos-images-pictures-ss-1920-1536x864.jpg",
      "description": "This is a product description"
    },
    {
      "id": "6",
      "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 6",
      "description": "This is a product description",
      "price": 100
    },
    {
      "id": "7",
      "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 7",
      "description": "This is a product description",
      "price": 500
    },
    {
      "id": "8",
      "image": "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 8",
      "description": "This is a product description",
      "price": 132
    },
    {
      "id": "9",
      "image": "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=600",
      "title": "Product 9",
      "description": "This is a product description",
      "price": 654
    },
    {      "id": "10",
      "title": "Product 10",
      "price": 321,
      "image": "https://searchengineland.com/wp-content/seloads/2014/08/photos-images-pictures-ss-1920-1536x864.jpg",
      "description": "This is a product description"
    },
    {      "id": "44",
      "title": "Product Mansour",
      "price": 256,
      "image": "https://www.ximilar.com/wp-content/uploads/2021/12/ImageUspcaler_featured-image.png",
      "description": ""
    }
  ],  "discount": [
    {
      "id": "1",
      "code": "OFF10",
      "percentage": 10
    },
    {
      "id": "2",
      "code": "OFF20",
      "percentage": 20
    },
    {
      "id": "3",
      "code": "SAVE30",
      "percentage": 30
    }
  ]
}