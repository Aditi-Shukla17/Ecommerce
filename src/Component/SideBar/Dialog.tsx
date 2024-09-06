"use client";
import React from "react";
import { remove } from "@/Redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Dialog = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.Cart);

  // console.log("Cart Items:", cartitems);

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div>
        <h1>Cart Page</h1>
        <div className="cartWrapper">
          {cartitems.length > 0 ? (
            cartitems.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="img" />
                <h5>{item.name}</h5>
                <h5>{item.description}</h5>
                <h5>{item.price}</h5>
                <button className="btn" onClick={() => handleremove(item.id)}>
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialog;
