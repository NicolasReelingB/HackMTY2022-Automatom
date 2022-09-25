import { useState } from "react";
import { ethers } from "ethers";
import { Row, Form, Button } from "react-bootstrap";
import { Buffer } from "buffer";
import { useNavigate } from "react-router-dom";

const ipfsClient = require("ipfs-http-client");
const projectId = "2FEKhKaLf3WXwbZrwdl5gE0mvny";
const projectSecret = "d98c23a16888740e851815a34abfd2f1";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = ipfsClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

const Create = ({ marketplace, nft }) => {
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();
  const uploadToIPFS = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (typeof file !== "undefined") {
      try {
        const result = await client.add(file);
        console.log(result);
        setImage(`https://chubbyt.infura-ipfs.io/ipfs/${result.path}`);
      } catch (error) {
        console.log("ipfs image upload error: ", error);
      }
    }
  };
  const createNFT = async () => {
    if (!image || !price || !name || !description) return;
    try {
      const result = await client.add(
        JSON.stringify({ image, price, name, description })
      );
      mintThenList(result);
      nav("/");
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }
  };
  const mintThenList = async (result) => {
    const uri = `https://chubbyt.infura-ipfs.io/ipfs/${result.path}`;
    // mint nft
    await (await nft.mint(uri)).wait();
    // get tokenId of new nft
    const id = await nft.tokenCount();
    // approve marketplace to spend nft
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString());
    await (await marketplace.makeItem(nft.address, id, listingPrice)).wait();
  };
  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <label htmlFor="file" className="my-1 mx-2 text-white text-lg">
          File
        </label>
        <input
          type="file"
          required
          name="file"
          onChange={uploadToIPFS}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2 "
          id="file"
        />
        <label htmlFor="name" className="m-1 text-white text-lg my-1 mx-2">
          Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          size="lg"
          required
          type="text"
          placeholder="Name"
          className="text-input"
          id="name"
        />
        <label
          htmlFor="description"
          className="m-1 text-white text-lg my-1 mx-2"
        >
          Description
        </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          size="lg"
          required
          as="textarea"
          placeholder="Description"
          className="text-input"
        />
        <label htmlFor="price" className="m-1 text-white text-lg my-1 mx-2">
          Price
        </label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          size="lg"
          required
          type="number"
          placeholder="Price in CHBT"
          className="text-input"
        />
        <button
          onClick={createNFT}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Create & List NFT!
        </button>
      </div>
    </div>
  );
};

export default Create;
