import React, { createContext ,useState} from 'react'
export const UserContext =createContext();
const UseContext = (props) => {
    const [data,setdata]=useState([
        
            {
                "name": "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
                "productId": "EURO19938201",
                "brandName": "EUROLINE",
                "category": "Pop Up Toasters",
                "companyAssured": false,
                "rating": "4.2",
                "price": "12232",
                "discount": "50%",
                "imageURL": "https://rukminim1.flixcart.com/image/416/416/k5lcvbk0/pop-up-toaster/2/j/w/euroline-820-pop-up-810-pop-up-original-imafz8h3duveqgh7.jpeg?q=70",
                "sellerName": "telform inc.",
                "isNewProduct": true
              },
              {
                "name": "Morphy Richards 25 L Convection Microwave Oven  (MWO 25CG, Steel)",
                "productId": "EURO19938202",
                "brandName": "Morphy",
                "category": "Microwave Ovens",
                "companyAssured": true,
                "rating": "3.9",
                "price": "10999",
                "discount": "11%",
                "imageURL": "https://rukminim1.flixcart.com/image/416/416/microwave-new/v/q/y/morphy-richard-25cg-original-imaec2ddymudmze3.jpeg?q=70",
                "sellerName": "Kwitch Retails",
                "isNewProduct": false
              },
              {
                "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
                "productId": "EURO19938203",
                "brandName": "Fitbit",
                "category": "Smart Bands",
                "companyAssured": true,
                "rating": "3.9",
                "price": "17992",
                "discount": "",
                "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
                "sellerName": "RetailNet",
                "isNewProduct": true
              },
              {
                "name": "Lost Mountains Half Sleeve T-Shirt",
                "productId": "EURO19938204",
                "brandName": "Lost Mountains",
                "category": "Tshirt",
                "companyAssured": true,
                "rating": "3.9",
                "price": "399",
                "discount": "",
                "imageURL": "https://images.bewakoof.com/t540/lost-mountains-half-sleeve-t-shirt-272010-1651248011-1.jpg",
                "sellerName": "Bewakoof",
                "isNewProduct": true
            },
            {
                "name": "iPhone 13",
                "productId": "EURO19938205",
                "brandName": "Apple",
                "category": "Mobile",
                "companyAssured": true,
                "rating": "4.9",
                "price": "47900",
                "discount": "",
                "imageURL": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-green-select?wid=470&hei=556&fmt=png-alpha&.v=1645036275894",
                "sellerName": "Retailnet",
                "isNewProduct": true
            },
            {
                "name": "Oliver Green Leather Men's Wallet",
                "productId": "EURO19938206",
                "brandName": "Wildhorn ",
                "category": "wallet",
                "companyAssured": true,
                "rating": "4.9",
                "price": "900",
                "discount": "",
                "imageURL": "https://m.media-amazon.com/images/I/91zgGGTSWHL._SX679_.jpg",
                "sellerName": "Retailnet",
                "isNewProduct": true
            },
            {
                "name": "Kids Black Flex Essential Junior Training Shoes",
                "productId": "EURO19938207",
                "brandName": "puma ",
                "category": "shoes",
                "companyAssured": true,
                "rating": "4.5",
                "price": "800",
                "discount": "",
                "imageURL": "https://tse3.mm.bing.net/th?id=OIP.AZ_wW9sKxUuyh1N39awldwHaHa&pid=Api&P=0&w=173&h=173",
                "sellerName": "Retailnet",
                "isNewProduct": true
            }
        
    ])
  return (
    <div>
        <UserContext.Provider value={[data,setdata]}>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}

export default UseContext