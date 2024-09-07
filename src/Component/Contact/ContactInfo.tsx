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
  // function OpenDial() {
  //   window.open("tel:900300400");
  // }

  return (
    <>
      <div className="bg-black text-white p-8 md:p-16">
        {/* Contact Information */}
        <div className="mb-12">
          <h1 className="text-3xl text-center md:text-left mb-8">
            Contact Information
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border-dotted border-2 flex flex-col items-center p-6 border-gray-600">
              <img className="mb-6 h-16 md:h-20" src={Email.src} alt="Email" />
              <p className="text-lg">Email</p>
              <a
                href="mailto:support@StyleLoom.com"
                className="text-lg bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 mt-4 rounded border-dotted border-2 border-gray-600"
              >
                support@StyleLoom.com
              </a>
            </div>
            <div className="border-dotted border-2 flex flex-col items-center p-6 border-gray-600">
              <img className="mb-6 h-16 md:h-20" src={Phone.src} alt="Phone" />
              <p className="text-lg">Phone</p>
              <a
                // href="1(555) 123-4567"
                className="text-lg bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 mt-4 rounded border-dotted border-2 border-gray-600 cursor:pointer "
                // onClick={OpenDial()}
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div className="border-dotted border-2 flex flex-col items-center p-6 border-gray-600">
              <img
                className="mb-6 h-16 md:h-20"
                src={Location.src}
                alt="Location"
              />
              <p className="text-lg">Location</p>
              <button className="text-lg bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 mt-4 rounded border-dotted border-2 border-gray-600">
                Get Direction
              </button>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="flex flex-col md:flex-row justify-between items-center border-dotted border-2 border-gray-600 p-6 md:p-8">
          <h2 className="text-3xl mb-4 md:mb-0 text-center md:text-left">
            Return Policy
          </h2>
          <button className="text-lg bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded border-dotted border-2 border-gray-600">
            Read Return Policy
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="border-dotted border-2 p-6 flex items-start space-x-4 border-gray-600">
            <img
              className="h-16 md:h-20"
              src={Eligibility.src}
              alt="Eligibility"
            />
            <div>
              <p className="text-lg font-medium">Eligibility</p>
              <p className="text-sm">
                Items must be unused, with tags attached, and returned within 30
                days of delivery.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 p-6 flex items-start space-x-4 border-gray-600">
            <img className="h-16 md:h-20" src={Process.src} alt="Process" />
            <div>
              <p className="text-lg font-medium">Process</p>
              <p className="text-sm">
                Initiate returns through our Return Center for a smooth and
                efficient process.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 p-6 flex items-start space-x-4 border-gray-600">
            <img className="h-16 md:h-20" src={Refund.src} alt="Refund" />
            <div>
              <p className="text-lg font-medium">Refund</p>
              <p className="text-sm">
                Expect a refund to your original payment method within 7-10
                business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 md:p-16">
        {/* Cancellation Policy */}
        <div className="flex flex-col md:flex-row justify-between items-center border-dotted border-2 border-gray-600 p-6 md:p-8">
          <h2 className="text-3xl mb-4 md:mb-0 text-center md:text-left">
            Cancellation Policy
          </h2>
          <button className="text-lg bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded border-dotted border-2 border-gray-600">
            Read Cancellation Policy
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="border-dotted border-2 p-6 flex items-start space-x-4 border-gray-600">
            <img
              className="h-16 md:h-20"
              src={Cancel.src}
              alt="Cancellation Window"
            />
            <div>
              <p className="text-lg font-medium">Cancellation Window</p>
              <p className="text-sm">
                Orders can be canceled within 24 hours of placement for a full
                refund.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 p-6 flex items-start space-x-4 border-gray-600">
            <img
              className="h-16 md:h-20"
              src={CancelP.src}
              alt="Cancellation Process"
            />
            <div>
              <p className="text-lg font-medium">Cancellation Process</p>
              <p className="text-sm">
                Visit our Order Management section to cancel your order
                effortlessly.
              </p>
            </div>
          </div>
          <div className="border-dotted border-2 p-6 flex items-start space-x-4 border-gray-600">
            <img
              className="h-16 md:h-20"
              src={RefundT.src}
              alt="Refund Timeline"
            />
            <div>
              <p className="text-lg font-medium">Refund Timeline</p>
              <p className="text-sm">
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
