import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navbar";
import Home from "./Home.js";
import Create from "./Create.js";
import MyListedItems from "./MyListedItems.js";
import MyPurchases from "./MyPurchases.js";
import MarketplaceAbi from "../contractsData/Marketplace.json";
import MarketplaceAddress from "../contractsData/Marketplace-address.json";
import NFTAbi from "../contractsData/NFT.json";
import NFTAddress from "../contractsData/NFT-address.json";
import { useState } from "react";
import { ethers } from "ethers";
import GettingStarted from "./GetS";
import Claim from "./Claim";
import Purchase from "./Purchase";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();

    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
  };
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation web3Handler={web3Handler} account={account} />
        <div>
          {loading ? (
            <>
              <div className="h-20"></div>
              <GettingStarted web3Handler={web3Handler} account={account} />
            </>
          ) : (
            <div>
              <Routes>
                <Route
                  path="/"
                  element={<Home marketplace={marketplace} nft={nft} />}
                />
                <Route
                  path="/create"
                  element={
                    <>
                      {" "}
                      <div className="h-24"></div>
                      <Create marketplace={marketplace} nft={nft} />{" "}
                    </>
                  }
                />
                <Route
                  path="/purchase"
                  element={
                    <>
                      <div className="h-24"></div>{" "}
                      <Purchase marketplace={marketplace} nft={nft} />
                    </>
                  }
                />
                <Route
                  path="/my-listed-items"
                  element={
                    <>
                      <div className="h-24"></div>{" "}
                      <MyListedItems
                        marketplace={marketplace}
                        nft={nft}
                        account={account}
                      />
                    </>
                  }
                />
                <Route
                  path="/my-purchases"
                  element={
                    <>
                      <div className="h-24"></div>{" "}
                      <MyPurchases
                        marketplace={marketplace}
                        nft={nft}
                        account={account}
                      />
                    </>
                  }
                />
                <Route
                  path="/GetS"
                  element={
                    <>
                      <div className="h-24"></div>{" "}
                      <GettingStarted
                        marketplace={marketplace}
                        nft={nft}
                        account={account}
                      />
                    </>
                  }
                />
                <Route
                  path="/claim"
                  element={
                    <>
                      <div className="h-24"></div> <Claim />
                    </>
                  }
                />
              </Routes>
            </div>
          )}
        </div>
        <div className="h-20"></div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
