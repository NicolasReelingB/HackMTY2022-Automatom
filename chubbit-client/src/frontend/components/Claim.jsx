import React from "react";
import QRCode from "react-qr-code";

export default function Claim() {
  const [id, setId] = React.useState("");
  const [addr, setAddr] = React.useState("");
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-center my-4">Claim your purchase</h1>
        <form className="grid grid-cols-2">
          <label htmlFor="tid" className="text-left">
            Transaction ID:
          </label>
          <input
            type="text"
            name="tid"
            id="tid"
            className="text-input"
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="addr" className="text-left">
            Address:
          </label>
          <input
            type="text"
            name="addr"
            id="addr"
            className="text-input"
            onChange={(e) => setAddr(e.target.value)}
          />
        </form>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded m-2"
          disabled={!id}
          onClick={() => setLoaded(true)}
        >
          Claim
        </button>
        {loaded && (
          <>
            <div className="m-2 p-8 bg-white rounded-lg">
              <QRCode
                value={id}
                size={256}
                bgColor="#282c34"
                fgColor="#fff"
                level="H"
              />
            </div>
            <p className="text-center">
              Claim your purchase in the closest store from {addr} showing the
              following QR code.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
