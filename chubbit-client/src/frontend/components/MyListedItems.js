import { useState, useEffect } from "react";
import { ethers } from "ethers";
import ItemCard from "./ItemCard";

function renderSoldItems(items) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="my-4">Sold</h1>
      <div className="px-5 container grid md:grid-cols-3 grid-cols-1">
        {items.map((item, idx) => (
          <ItemCard
            item={item}
            key={idx}
            price={ethers.utils.formatEther(item.totalPrice)}
            received={ethers.utils.formatEther(item.price)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MyListedItems({ marketplace, nft, account }) {
  const [loading, setLoading] = useState(true);
  const [listedItems, setListedItems] = useState([]);
  const [soldItems, setSoldItems] = useState([]);
  const loadListedItems = async () => {
    // Load all sold items that the user listed
    const itemCount = await marketplace.itemCount();
    let listedItems = [];
    let soldItems = [];
    for (let indx = 1; indx <= itemCount; indx++) {
      const i = await marketplace.items(indx);
      if (i.seller.toLowerCase() === account) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        const metadata = await response.json();
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(i.itemId);
        // define listed item object
        let item = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        };
        listedItems.push(item);
        // Add listed item to sold items array if sold
        if (i.sold) soldItems.push(item);
      }
    }
    setLoading(false);
    setListedItems(listedItems);
    setSoldItems(soldItems);
  };
  useEffect(() => {
    loadListedItems();
  }, []);
  if (loading)
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Loading...</h2>
      </main>
    );
  return (
    <div className="flex flex-col justify-center items-center">
      {soldItems.length > 0 && renderSoldItems(soldItems)}

      <h1 className="my-4">Listed</h1>
      {listedItems.length > 0 ? (
        <div className="px-5 container grid md:grid-cols-3 grid-cols-1">
          {listedItems.map((item, idx) => (
            <ItemCard
              item={item}
              key={idx}
              price={ethers.utils.formatEther(item.totalPrice)}
            />
          ))}
        </div>
      ) : (
        <main style={{ padding: "1rem 0" }}>
          <h2>No listed assets</h2>
        </main>
      )}
    </div>
  );
}
