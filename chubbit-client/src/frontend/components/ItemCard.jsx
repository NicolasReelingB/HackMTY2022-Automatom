import React from "react";

export default function ItemCard({
  item,
  buyMarketItem,
  bought,
  price,
  listed,
  received,
}) {
  return (
    <div className="purple-glass col-span-1 min-h-40 p-2 m-2">
      <img src={item.image} alt="" className="w-full min-h-20 rounded-lg" />
      <div className=" w-full p-2 flex flex-col justify-center items-start">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        {buyMarketItem && (
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
            onClick={() => buyMarketItem(item)}
          >
            Comprar por {price} CHBT
          </button>
        )}
        {bought && <h2>Comprado por {price} CHBT</h2>}
        {received && <h2>Vendido por {price} CHBT - Recibido {received} CHBT</h2>}
      </div>
    </div>
  );
}
