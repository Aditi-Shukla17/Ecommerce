import React from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/Redux/Store";
import { closeDialog } from "@/Redux/CartSlice";

const CartDialog: React.FC = () => {
  const open = useSelector((state: RootState) => state.cart.open);
  const selectedProduct = useSelector(
    (state: RootState) => state.cart.selectedProduct
  );
  const count = useSelector((state: RootState) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      open={open}
      onClose={() => dispatch(closeDialog())}
    >
      <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
      <DialogPanel className="relative z-10 p-4 max-w-lg mx-auto mt-20">
        <div className="bg-gray-800 rounded p-6 shadow-lg">
          <DialogTitle className="text-white text-lg">
            Cart ({count} items)
          </DialogTitle>
          {selectedProduct ? (
            <div className="mt-4">
              <h3 className="text-white text-md">{selectedProduct.name}</h3>
              <p className="text-gray-400">{selectedProduct.description}</p>
              <p className="text-gray-300">{selectedProduct.price}</p>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-32 h-32 mt-4"
              />
            </div>
          ) : (
            <p className="text-gray-400">No product selected.</p>
          )}
          <div className="mt-6">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded"
              onClick={() => dispatch(closeDialog())}
            >
              Close
            </button>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default CartDialog;
