import React from "react";
import Phone from "@/assets/Phone.png";
import Location from "@/assets/Location.png";
import Email from "@/assets/Email.png";
import Eligibility from "@/assets/Eligibility.png";
import Process from "@/assets/Process.png";
import Refund from "@/assets/Refund.png";
import Cancel from "@/assets/Cancel.png";
import CancelP from "@/assets/cancelP.png";
import RefundT from "@/assets/RefundTimeLine.png";

const ContactAndReturnPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-black  text-white p-16">
        {/* Contact Information */}
        <div className="mb-12 justify-center items-center col-span-2 ">
          <h1 className="text-3xl  mb-8">Contact Information</h1>
          <div className=" grid grid-cols-1 justify-center sm:grid-cols-3 gap-4">
            <div className="border-dotted border-2 flex flex-col justify-center items-center col-span-1 border-gray-600  ">
              <img
                className=" mb-12 item-center space-x-12 mt-14 block h-20"
                src={Email.src}
                alt=""
              />
              <div className=" flex flex-col justify-center gap-6 items-center col-span-1">
                <p className=" ">Email</p>
                <a
                  href="mailto:support@StyleLoom.com"
                  className="text-lg bg-gray-900 hover:bg-gray-700 text-white  py-4 px-6 rounded border-dotted border-2 center item-center border-gray-600"
                >
                  support@StyleLoom.com
                </a>
              </div>
            </div>
            <div className="border-dotted border-2 flex flex-col justify-center items-center col-span-1 border-gray-600 p-8  space-x-4">
              <img
                className="mb-12 item-center space-x-12 mt-14 block h-20"
                src={Phone.src}
              ></img>
              <div className="flex flex-col justify-center items-center gap-6 col-span-1">
                <p className="">Phone</p>
                <p className="text-lg bg-gray-900 hover:bg-gray-700 text-white  py-4 px-6 rounded border-dotted border-2 center item-center border-gray-600">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="border-dotted border-2 border-gray-600 p-8 flex flex-col justify-center items-center col-span-1 space-x-4">
              <img
                className="mb-12 item-center space-x-12 mt-14 block h-20"
                src={Location.src}
              ></img>
              <div className="flex flex-col justify-center items-center gap-6 col-span-1">
                <p className="">Location</p>
                <button className="text-lg bg-gray-900 hover:bg-gray-700 text-white  py-4 px-6 rounded border-dotted border-2 center item-center border-gray-600">
                  Get Direction
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-between border-dotted border-2 center item-center border-gray-600 p-8">
          <h2 className="text-3xl   mb-10">Return Policy</h2>
          <div className="mt-6">
            <button className="text-lg bg-gray-900 hover:bg-gray-700 text-white  py-4 px-6 rounded border-dotted border-2 center item-center border-gray-600">
              Read Return Policy
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border-dotted border-2  item-center border-gray-600 py-10 px-5  flex items-center space-x-4">
            <img
              className="ml-10 mb-20 space-x-12 mt-20 block h-20"
              src={Eligibility.src}
            ></img>
            <div>
              <p className="text-large font-medium">Eligibility</p>
              <p className="text-sm">
                Items must be unused, with tags attached, and returned within 30
                days of delivery.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 center item-center border-gray-600 p-8   flex text-xl items-center space-x-4">
            <img
              className="ml-10 mb-20 space-x-12 mt-20 block h-20"
              src={Process.src}
            ></img>
            <div>
              <p className="text-sm font-medium">Process</p>
              <p className="text-lg">
                Initiate returns through our Return Center for a smooth and
                efficient process.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 center item-center border-gray-600 p-8   flex items-center space-x-4">
            <img
              src={Refund.src}
              className="ml-10 mb-20 space-x-12 mt-20 block h-20"
            ></img>
            <div>
              <p className="text-sm font-medium">Refund</p>
              <p className="text-lg">
                Expect a refund to your original payment method within 7-10
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8   ">
        {/* Cancellation Policy */}
        <div className=" flex justify-between border-dotted border-2 center item-center border-gray-600 p-8">
          <h2 className="text-3xl   mb-10">Cancellation Policy</h2>
          <div className="mt-6">
            <button className="text-lg bg-gray-900 hover:bg-gray-700 text-white  py-4 px-6 rounded border-dotted border-2 center item-center border-gray-600">
              Read Cancellation Policy
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="border-dotted border-2  item-center border-gray-600 py-10 px-5  flex items-center space-x-4">
            <img
              className="ml-10 mb-20 space-x-12 mt-20 block h-20"
              src={Cancel.src}
            ></img>
            <div>
              <p className="text-large font-medium">Cancellation Window</p>
              <p className="text-sm">
                Orders can be canceled within 24 hours of placement for a full
                refund.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 center item-center border-gray-600 p-8   flex text-xl items-center space-x-4">
            <img
              className="ml-10 mb-20 space-x-12 mt-20 block h-20"
              src={CancelP.src}
            ></img>
            <div>
              <p className="text-sm font-medium">Cancellation Process</p>
              <p className="text-lg">
                Visit our Order Management section to cancel your order
                effortlessly.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 center item-center border-gray-600 p-8   flex items-center space-x-4">
            <img
              src={RefundT.src}
              className="ml-10 mb-20 space-x-12 mt-20 block h-20"
            ></img>
            <div>
              <p className="text-sm font-medium">Refund Timeline</p>
              <p className="text-lg">
                Refunds for canceled orders are processed within 5-7 business
                days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAndReturnPolicy;