import React, { useEffect, useState } from "react";
import x from "../assets/image/x.svg";
import up from "../assets/image/up_Arrow.svg";
import down from "../assets/image/down_Arrow.svg";
import { useMenuContext } from "../context/MenuContext";

const Cart = () => {
  const { cartArray, handleChange, setCartArray } = useMenuContext();
  const [subtotal, setSubtotal] = useState(null);
  const handlePrice = () => {
    let ans = 0;
    cartArray.map((item) => {
      ans += item.price * item.amount;
    });
    setSubtotal(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const removeItem = (id) => {
    const filtered = cartArray.filter((item) => item.id !== id);
    setCartArray(filtered);
  };
  const DeliveryFee = 50;
  const VAT = subtotal * 0.1;
  const Total = subtotal + DeliveryFee + VAT;
  return (
    <div>
      {cartArray.length < 1 ? (
        <p
          className="my-10
         text-center text-5xl"
        >
          Empty Cart
        </p>
      ) : (
        <div
          className="container mx-auto flex
       flex-col gap-10 px-3 py-10 xl:flex-row xl:items-center  "
        >
          <table className="h-fit flex-1 ">
            <thead>
              <tr className="  bg-blue-50 text-lg">
                <th className=" py-2">Product</th>
                <th>Price</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((item, index) => (
                <tr
                  key={index}
                  className="  border-b-2 border-orange_primary bg-slate-700  text-white"
                >
                  <td className=" p-3">
                    <div className="flex items-center gap-5 ">
                      <img className="h-24" src={item.image} />
                      <div className=" space-y-3">
                        <p className=" sm:text-2xl">
                          {item.menuName.slice(0, 11) + "..."}
                        </p>
                        <div className=" flex w-20 items-center justify-between overflow-hidden rounded-md bg-orange_primary">
                          <p className="flex-1 text-center text-lg">
                            {item.amount}
                          </p>
                          <div className=" flex flex-col gap-y-1 rounded-md bg-white">
                            <button onClick={() => handleChange(item, +1)}>
                              <img className=" m-1 h-2 " src={up} />
                            </button>
                            <button onClick={() => handleChange(item, -1)}>
                              <img className=" m-1 h-2 " src={down} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" text-center text-sm sm:text-base">
                    {" "}
                    ${item.price}{" "}
                  </td>
                  <td className=" text-center text-sm sm:text-base">
                    {" "}
                    ${item.amount * item.price}{" "}
                  </td>
                  <td className=" px-1 text-center">
                    <button onClick={() => removeItem(item.id)}>
                      {" "}
                      <img className=" w-5 sm:w-6" src={x} />{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" flex-1 text-center">
            <div className="flex">
              <div className=" flex-1">
                <strong className="block  p-3">Subtotal</strong>
                <strong className="block border-y-2 border-orange_primary p-3">
                  Delivery Fee
                </strong>
                <strong className="block   p-3">Vat</strong>
                <strong className="block border-y-2 border-orange_primary p-3">
                  Total
                </strong>
              </div>
              <div className=" flex-1">
                <p className=" border-l-2 border-orange_primary p-3">
                  {subtotal}
                </p>
                <p className="border-y-2 border-l-2 border-orange_primary p-3">
                  {DeliveryFee}
                </p>
                <p className="border-l-2 border-orange_primary p-3">{VAT}</p>
                <p className="border-y-2 border-l-2  border-orange_primary p-3">
                  {Total}
                </p>
              </div>
            </div>
            <button className="mt-5 w-[360px] rounded-md border-2 border-orange_primary p-3  font-bold ">
              Confirm & Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
