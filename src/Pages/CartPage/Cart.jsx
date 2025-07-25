import './Cart.css';
import { useEffect, useState } from 'react';

function CartPage() {
    const [productsInCart, setProductsInCart] = useState([
        {
            "id": 1,
            "title": "Essence Mascara Lash Princess",
            "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category": "beauty",
            "price": 9.99,
            "discountPercentage": 10.48,
            "rating": 2.56,
            "stock": 99,
            "tags": [
                "beauty",
                "mascara"
            ],
            "brand": "Essence",
            "sku": "BEA-ESS-ESS-001",
            "weight": 4,
            "dimensions": {
                "width": 15.14,
                "height": 13.08,
                "depth": 22.99
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships in 3-5 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 3,
                    "comment": "Would not recommend!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Eleanor Collins",
                    "reviewerEmail": "eleanor.collins@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Very satisfied!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Lucas Gordon",
                    "reviewerEmail": "lucas.gordon@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Eleanor Collins",
                    "reviewerEmail": "eleanor.collins@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 48,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "5784719087687",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
        },
        {
            "id": 2,
            "title": "Eyeshadow Palette with Mirror",
            "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
            "category": "beauty",
            "price": 19.99,
            "discountPercentage": 18.19,
            "rating": 2.86,
            "stock": 34,
            "tags": [
                "beauty",
                "eyeshadow"
            ],
            "brand": "Glamour Beauty",
            "sku": "BEA-GLA-EYE-002",
            "weight": 9,
            "dimensions": {
                "width": 9.26,
                "height": 22.47,
                "depth": 27.67
            },
            "warrantyInformation": "1 year warranty",
            "shippingInformation": "Ships in 2 weeks",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Savannah Gomez",
                    "reviewerEmail": "savannah.gomez@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Awesome product!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Christian Perez",
                    "reviewerEmail": "christian.perez@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Poor quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Nicholas Bailey",
                    "reviewerEmail": "nicholas.bailey@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 20,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "9170275171413",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
        },
        {
            "id": 3,
            "title": "Powder Canister",
            "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
            "category": "beauty",
            "price": 14.99,
            "discountPercentage": 9.84,
            "rating": 4.64,
            "stock": 89,
            "tags": [
                "beauty",
                "face powder"
            ],
            "brand": "Velvet Touch",
            "sku": "BEA-VEL-POW-003",
            "weight": 8,
            "dimensions": {
                "width": 29.27,
                "height": 27.93,
                "depth": 20.59
            },
            "warrantyInformation": "3 months warranty",
            "shippingInformation": "Ships in 1-2 business days",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Would buy again!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Alexander Jones",
                    "reviewerEmail": "alexander.jones@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Highly impressed!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Elijah Cruz",
                    "reviewerEmail": "elijah.cruz@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Very dissatisfied!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Avery Perez",
                    "reviewerEmail": "avery.perez@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 22,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "8418883906837",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp"
        },
        {
            "id": 4,
            "title": "Red Lipstick",
            "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
            "category": "beauty",
            "price": 12.99,
            "discountPercentage": 12.16,
            "rating": 4.36,
            "stock": 91,
            "tags": [
                "beauty",
                "lipstick"
            ],
            "brand": "Chic Cosmetics",
            "sku": "BEA-CHI-LIP-004",
            "weight": 1,
            "dimensions": {
                "width": 18.11,
                "height": 28.38,
                "depth": 22.17
            },
            "warrantyInformation": "3 year warranty",
            "shippingInformation": "Ships in 1 week",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 4,
                    "comment": "Great product!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Liam Garcia",
                    "reviewerEmail": "liam.garcia@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Ruby Andrews",
                    "reviewerEmail": "ruby.andrews@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Would buy again!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Clara Berry",
                    "reviewerEmail": "clara.berry@x.dummyjson.com"
                }
            ],
            "returnPolicy": "7 days return policy",
            "minimumOrderQuantity": 40,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "9467746727219",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
        },
        {
            "id": 5,
            "title": "Red Nail Polish",
            "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
            "category": "beauty",
            "price": 8.99,
            "discountPercentage": 11.44,
            "rating": 4.32,
            "stock": 79,
            "tags": [
                "beauty",
                "nail polish"
            ],
            "brand": "Nail Couture",
            "sku": "BEA-NAI-NAI-005",
            "weight": 8,
            "dimensions": {
                "width": 21.63,
                "height": 16.48,
                "depth": 29.84
            },
            "warrantyInformation": "1 month warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Poor quality!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Benjamin Wilson",
                    "reviewerEmail": "benjamin.wilson@x.dummyjson.com"
                },
                {
                    "rating": 5,
                    "comment": "Great product!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Liam Smith",
                    "reviewerEmail": "liam.smith@x.dummyjson.com"
                },
                {
                    "rating": 1,
                    "comment": "Very unhappy with my purchase!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Clara Berry",
                    "reviewerEmail": "clara.berry@x.dummyjson.com"
                }
            ],
            "returnPolicy": "No return policy",
            "minimumOrderQuantity": 22,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "4063010628104",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp"
        },
        {
            "id": 6,
            "title": "Calvin Klein CK One",
            "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
            "category": "fragrances",
            "price": 49.99,
            "discountPercentage": 1.89,
            "rating": 4.37,
            "stock": 29,
            "tags": [
                "fragrances",
                "perfumes"
            ],
            "brand": "Calvin Klein",
            "sku": "FRA-CAL-CAL-006",
            "weight": 7,
            "dimensions": {
                "width": 29.36,
                "height": 27.76,
                "depth": 20.72
            },
            "warrantyInformation": "1 week warranty",
            "shippingInformation": "Ships overnight",
            "availabilityStatus": "In Stock",
            "reviews": [
                {
                    "rating": 2,
                    "comment": "Very disappointed!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Layla Young",
                    "reviewerEmail": "layla.young@x.dummyjson.com"
                },
                {
                    "rating": 4,
                    "comment": "Fast shipping!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Daniel Cook",
                    "reviewerEmail": "daniel.cook@x.dummyjson.com"
                },
                {
                    "rating": 3,
                    "comment": "Not as described!",
                    "date": "2025-04-30T09:41:02.053Z",
                    "reviewerName": "Jacob Cooper",
                    "reviewerEmail": "jacob.cooper@x.dummyjson.com"
                }
            ],
            "returnPolicy": "90 days return policy",
            "minimumOrderQuantity": 9,
            "meta": {
                "createdAt": "2025-04-30T09:41:02.053Z",
                "updatedAt": "2025-04-30T09:41:02.053Z",
                "barcode": "2451534060749",
                "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
            },
            "images": [
                "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
                "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/2.webp",
                "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/3.webp"
            ],
            "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
        },
        {
      "id": 7,
      "title": "Chanel Coco Noir Eau De",
      "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
      "category": "fragrances",
      "price": 129.99,
      "discountPercentage": 16.51,
      "rating": 4.26,
      "stock": 58,
      "tags": [
        "fragrances",
        "perfumes"
      ],
      "brand": "Chanel",
      "sku": "FRA-CHA-CHA-007",
      "weight": 7,
      "dimensions": {
        "width": 24.5,
        "height": 25.7,
        "depth": 25.98
      },
      "warrantyInformation": "3 year warranty",
      "shippingInformation": "Ships overnight",
      "availabilityStatus": "In Stock",
      "reviews": [
        {
          "rating": 4,
          "comment": "Highly impressed!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Ruby Andrews",
          "reviewerEmail": "ruby.andrews@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Awesome product!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Leah Henderson",
          "reviewerEmail": "leah.henderson@x.dummyjson.com"
        },
        {
          "rating": 5,
          "comment": "Very happy with my purchase!",
          "date": "2025-04-30T09:41:02.053Z",
          "reviewerName": "Xavier Wright",
          "reviewerEmail": "xavier.wright@x.dummyjson.com"
        }
      ],
      "returnPolicy": "No return policy",
      "minimumOrderQuantity": 1,
      "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "4091737746820",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
      },
      "images": [
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/2.webp",
        "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/3.webp"
      ],
      "thumbnail": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
    },
    ])

    const [orderValue, setOrderValue] = useState(0)
    useEffect(() => {
        if (productsInCart && productsInCart.length > 0) {
            productsInCart.map(product=>{
                setOrderValue(prev=>prev+product.price)
            })
        }
    }, [])
    return (
        <div className='d-flex'>
            <div className='listOfProducts w-75 d-flex flex-column row-gap-3 py-3'>
                {productsInCart && productsInCart.length > 0 && productsInCart.map((product) => {
                    return <div className='productInCart'>
                        <img src={product.thumbnail} alt="" width={'250px'} />
                        <div className='productInCartDetails'>
                            <h1>{product.title}</h1>
                            <h6>{product.description}</h6>
                            <h6>Quantity 1</h6>
                        </div>
                    </div>
                })}
            </div>
            <div className='orderSummary w-25'>
                <h1>Order Summary</h1>
                <div className='productsInOrder'>
                    {productsInCart && productsInCart.length > 0 && productsInCart.map((product) => {
                        return <div className='d-flex'>
                            <img src={product.thumbnail} alt="" width={'150px'} />
                            <div className='productInCartDetails'>
                                <h1>{product.title}</h1>
                                <h6>Quantity 1</h6>
                                <h6>Price: {product.price}</h6>
                            </div>
                        </div>
                    })}

                    <h1>Order Total: ${orderValue}</h1>

                </div>
            </div>
        </div>
    )
}
export default CartPage;