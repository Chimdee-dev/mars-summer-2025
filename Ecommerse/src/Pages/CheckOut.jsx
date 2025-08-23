import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { useLikedProducts } from "../components/OrderProduct";

export default function Checkout() {
  const { likedProducts } = useLikedProducts();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p className="text-gray-500 mb-10">Homepage / Checkout</p>

      <div className="flex flex-col-reverse lg:flex-row gap-10">
        {/* Left: Form */}
        <div className="flex-1 space-y-8">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FaRegUserCircle className="text-gray-600" />
              <h2 className="font-semibold text-gray-600">CONTACT INFO</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone number"
                className="p-3 border rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email address"
                className="p-3 border rounded-md w-full"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FaRegAddressBook className="text-gray-600" />
              <h2 className="font-semibold text-gray-600">SHIPPING ADDRESS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="p-3 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 border rounded-md w-full"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Address line 1</label>
                <input
                  type="text"
                  placeholder="Address line 1"
                  className="p-3 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Apt, Suite</label>
                <input
                  type="text"
                  placeholder="Apt, Suite"
                  className="p-3 border rounded-md w-full"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm font-medium">Address line 2</label>
                <input
                  type="text"
                  placeholder="Address line 2"
                  className="p-3 border rounded-md w-full"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">City</label>
                <input type="text" placeholder="City" className="p-3 border rounded-md w-full" />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  className="p-3 border rounded-md w-full"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">State/Province</label>
                <input
                  type="text"
                  placeholder="State/Province"
                  className="p-3 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Postal code</label>
                <input
                  type="text"
                  placeholder="Postal code"
                  className="p-3 border rounded-md w-full"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-semibold mb-4 text-gray-600 flex items-center gap-2">
              <span className="text-gray-600">💳</span> PAYMENT
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Card number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="p-3 border rounded-md w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name on the card</label>
              <input
                type="text"
                placeholder="John Doe"
                className="p-3 border rounded-md w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiration date (MM/YY)
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="p-3 border rounded-md w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input type="text" placeholder="CVC" className="p-3 border rounded-md w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:w-96 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Order Summary</h2>
          {
            likedProducts.length > 0 ? (
              likedProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.thumbnail}
                      alt="Black Automatic Watch"
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">{product.title}</h3>
                      <p className="text-gray-500 text-sm">One size</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2 border rounded">-</button>
                    <span>1</span>
                    <button className="px-2 border rounded">+</button>
                    <RiDeleteBin6Line className="ml-2 text-red-500 cursor-pointer" />
                  </div>
                  <span className="font-medium">$169.99</span>
                </div>
              ))
            )
              : (
                <div>

                </div>
              )
          }

          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$169.99</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span>$24.90</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Order total</span>
              <span>$199.89</span>
            </div>

            <button className="w-full mt-4 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition">
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
