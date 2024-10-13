"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../utils/supabase";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/Redux/ProductSlice";

// Define the Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;  // This stores the image path (from your table)
  category: string;
  type: string;
  quantity:number;
  imageUrl?: string;  // This will store the full image URL from the bucket
}

const Product: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for authentication by checking the token stored in cookies
    const token = Cookies.get("access_token");
    setIsAuthenticated(!!token);  // If token exists, user is authenticated
  
    const fetchProducts = async () => {
   
      // Fetch product data from 'products' table in Supabase
      const { data: products, error: productsError } = await supabase
        .from("products")
        .select("*");
 // console.log(products)
      if (productsError) {
        console.error("Error fetching products: ", productsError);
        return;
      }
  
      // Counter for tracking the number of calls to fetch image URLs
    //  let imageFetchCount = 0;
  
      // Fetch image URLs for each product from the 'products_img' bucket
      const productWithImages = await Promise.all(
        
        products.map(async (product: Product) => {
          console.log("map1")
          const { data: imageUrlData } = supabase.storage
            .from("products_img")  // Bucket name where images are stored
            .getPublicUrl(product.image);
          
          // Increment the counter each time an image is fetched
          // imageFetchCount++;
          // console.log(`Fetched image URL for product ID ${product.id}: ${imageUrlData?.publicUrl}`);
  
          return {
            ...product,
            imageUrl: imageUrlData?.publicUrl || "",  // Assign the public URL to product
          };
        })
      );
  
      // // Log the total number of image fetch calls made
      // console.log("Total number of image fetches made: ", imageFetchCount);
      // console.log("Number of products fetched: ", products.length);
  
      // Set products with images
      setProducts(productWithImages);
  
      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(products.map((product: Product) => product.type))
      );
      setCategories(uniqueCategories);
    };
  
    fetchProducts();
  }, []);
  
  const handleFilterChange = (type: string) => {
    setFilter(type);
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.type === filter);

  const handleClick = (id: number) => {
    router.push(`/productDetails/${id}`);
  };

  const disabledButtons = useSelector((state:any) => state.cart.disabledButtons);
 // console.log(disabledButtons, "disabledButtons");

  const handleAdd = (product:Product) => {
    if(isAuthenticated)
    dispatch(add(product));
  else
  alert("Please login !!!")
  router.push("/login");  
  };

 

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative border-dotted border-2 border-gray-600 rounded-lg p-4">
        <h2 className="font-roboto text-3xl font-bold mt-2 leading-tight text-white">
          EXPLORE THE LATEST TRENDS AND TIMELESS CLASSICS
        </h2>
        <p className="text-gray-400 mb-4 text-base leading-normal mb-8">
          Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics.
        </p>
        <div className="flex flex-wrap gap-4">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              className={`border rounded px-4 py-2 text-sm sm:text-base hover:cursor-pointer ${filter === category ? "bg-custom-gray" : "border-white"}`}
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-8">
        {filteredProducts && filteredProducts.length > 0 && (
          <div id="Pro">
            <h3 className="text-xl font-semibold mb-4">{filter}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm border-dotted border-2 border-gray-600"
                >
                  <div onClick={() => handleClick(product.id)}>
                    <img
                      src={product.imageUrl}  // Use the imageUrl fetched from bucket
                      alt={product.name}
                      className="w-full h-64 object-cover rounded mb-4"
                    />
                  </div>
                  <div className="text-white p-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {product.description}
                    </p>
                    <p className="text-xl font-bold">{`$${product.price}`}</p>
                    <div className="flex justify-between items-center">
                      <button
                        className="bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200"
                        onClick={() => handleClick(product.id)}
                      >
                        Shop Now
                      </button>
                      <button
                        onClick={() => handleAdd(product)}
                        className={`bg-gray-600 text-white rounded px-3 py-1 text-xs sm:text-base hover:bg-gray-500 transition duration-200 hover:cursor-pointer ${
                          disabledButtons[product.id]
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                        disabled={!!disabledButtons[product.id]}
                      >
                        {disabledButtons[product.id]
                          ? "Already in Cart"
                          : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;
