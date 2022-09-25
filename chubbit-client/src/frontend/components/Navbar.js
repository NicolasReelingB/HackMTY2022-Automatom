import { Link } from "react-router-dom";

const Navigation = ({ web3Handler, account }) => {
  return (
    <nav className="flex flex-row justify-between py-4 items-center bg-black">
      <div className="flex flex-row justify-center items-center w-1/4">
        <h1 className="text-2xl font-bold text-white">Chubbit</h1>
      </div>
      <div className="flex flex-row justify-center items-center w-1/2">
        <Link to="/main" className="text-gray-200 text-md mx-4">
          Inicio
        </Link>
        <Link to="/create" className="text-gray-200 text-md mx-4">
          Vender
        </Link>
        <Link to="/my-listed-items" className="text-gray-200 text-md mx-4">
          Mis productos
        </Link>
        <Link to="/my-purchases" className="text-gray-200 text-md mx-4">
          Mis compras
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center w-1/4">
        {account ? (
          <Link
            to={`https://etherscan.io/address/${account}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-white py-2 px-4 text-white text-sm"
          >
            {account.slice(0, 5) + "..." + account.slice(38, 42)}
          </Link>
        ) : (
          <button
            onClick={web3Handler}
            className="rounded-full bg-blue-700 py-2 px-4 text-white text-sm"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
