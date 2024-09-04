import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import img2 from "@/Component/Product_details/img/image.png";
import img3 from "@/Component/Product_details/img/img3.png";
import img4 from "@/Component/Product_details/img/img3.png";
import kidimg from "@/Component/Product/img/kid-img.webp";
import menimg from "@/Component/Product/img/men-img.webp";
import hatimg from "@/Component/Product/img/hat-img.jpg";
import bagimg from "@/Component/Product/img/bags.webp";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface CartState {
  products: Product[];
  selectedProduct: Product | null;
  open: boolean;
}

const initialState: CartState = {
  products: [
    // your product data here
    {
      id: 1,
      name: "Dress 1",
      category: "Womens",
      image: img2.src,
      description: "Fit: Description 1",
      price: "$54.99",
    },
    {
      id: 2,
      name: "Dress 2",
      category: "Kids",
      image: kidimg.src,
      description: "Fit: Description 2",
      price: "$64.99",
    },
    // Add other products here
  ],
  selectedProduct: null,
  open: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
      state.open = true;
    },
    closeDialog: (state) => {
      state.open = false;
      state.selectedProduct = null;
    },
  },
});

export const { openDialog, closeDialog } = productsSlice.actions;

export default productsSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import img2 from "@/Component/Product_details/img/image.png";
// import img3 from "@/Component/Product_details/img/img3.png";
// import img4 from "@/Component/Product_details/img/img3.png";
// import kidimg from "@/Component/Product/img/kid-img.webp";
// import menimg from "@/Component/Product/img/men-img.webp";
// import hatimg from "@/Component/Product/img/hat-img.jpg";
// import bagimg from "@/Component/Product/img/bags.webp";

// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: string;
//   image: string;
//   category: string;
// }

// const initialState: Product[] = [
//   // your product data here
//   // as shown in the original example
//   {
//     id: 1,
//     name: "Dress 1",
//     category: "Womens",
//     image: img2.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
//   {
//     id: 2,
//     name: "Dress 2",
//     category: "Kids",
//     image: kidimg.src,
//     description: "Fit: Description 2",
//     price: "$64.99",
//   },
//   {
//     id: 3,
//     name: "Dress 3",
//     category: "Mens",
//     image: menimg.src,
//     description: "Fit: Description 3",
//     price: "$14.99",
//   },
//   {
//     id: 4,
//     name: "Dress 4",
//     category: "Mens",
//     image: menimg.src,
//     description: "Fit: Description 4",
//     price: "$94.99",
//   },
//   {
//     id: 5,
//     name: "Dress 5",
//     category: "Womens",
//     image: img3.src,
//     description: "Fit: Description 5",
//     price: "$64.99",
//   },
//   {
//     id: 6,
//     name: "Dress 6",
//     category: "Kids",
//     image: kidimg.src,
//     description: "Fit: Description 6",
//     price: "$55.99",
//   },
//   {
//     id: 7,
//     name: "Dress 7",
//     category: "Mens",
//     image: menimg.src,
//     description: "Fit: Description 7",
//     price: "$104.99",
//   },
//   {
//     id: 8,
//     name: "Dress 8",
//     category: "Womens",
//     image: img2.src,
//     description: "Fit: Description 8",
//     price: "$23.99",
//   },
//   {
//     id: 9,
//     name: "Dress 9",
//     category: "Womens",
//     image: img4.src,
//     description: "Fit: Description 9",
//     price: "$34.99",
//   },
//   {
//     id: 10,
//     name: "Dress 10",
//     category: "Mens",
//     image: menimg.src,
//     description: "Fit: Description 10",
//     price: "$59.99",
//   },
//   {
//     id: 11,
//     name: "Dress 11",
//     category: "Kids",
//     image: kidimg.src,
//     description: "Fit: Description 11",
//     price: "$510.99",
//   },
//   {
//     id: 12,
//     name: "Womens",
//     category: "Womens",
//     image: img2.src,
//     description: "Fit: Description 12",
//     price: "$14.99",
//   },
//   {
//     id: 13,
//     name: "Dress 13",
//     category: "Mens",
//     image: menimg.src,
//     description: "Fit: Description 13",
//     price: "$24.99",
//   },
//   {
//     id: 14,
//     name: "Dress 14",
//     category: "Womens",
//     image: img4.src,
//     description: "Fit: Description 14",
//     price: "$234.99",
//   },
//   {
//     id: 15,
//     name: "Dress 15",
//     category: "Womens",
//     image: img3.src,
//     description: "Fit: Description 15",
//     price: "$54.99",
//   },
//   {
//     id: 16,
//     name: "Dress 16",
//     category: "Bags",
//     image: bagimg.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
//   {
//     id: 17,
//     name: "Dress 17",
//     category: "ACCESSORIES",
//     image: hatimg.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
//   {
//     id: 18,
//     name: "Dress 18",
//     category: "Bags",
//     image: bagimg.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
//   {
//     id: 19,
//     name: "Dress 19",
//     category: "Bags",
//     image: bagimg.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
//   {
//     id: 20,
//     name: "Dress 20",
//     category: "ACCESSORIES",
//     image: hatimg.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
//   {
//     id: 21,
//     name: "Dress 21",
//     category: "ACCESSORIES",
//     image: hatimg.src,
//     description: "Fit: Description 1",
//     price: "$54.99",
//   },
// ];

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
// });

// export default productsSlice.reducer;
