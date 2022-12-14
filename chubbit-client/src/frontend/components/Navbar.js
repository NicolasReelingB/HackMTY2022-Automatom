import { Link } from "react-router-dom";

const Navigation = ({ web3Handler, account }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-4 fixed top-0 left-0 w-full z-50">
      <nav className="flex flex-row justify-between py-4 items-center purple-glass w-full h-18 z-50 rounded-full">
        <div className="flex flex-row justify-center items-center w-1/4">
          <h1 className="text-3xl font-bold text-white logo-text">Chubbit</h1>
        </div>
        <div className="flex flex-row justify-center items-center w-1/2 navlinks">
          <Link to="/" className="text-gray-200 text-md mx-4">
            Main
          </Link>
          <Link to="/purchase" className="text-gray-200 text-md mx-4">
            Purchase
          </Link>
          <Link to="/create" className="text-gray-200 text-md mx-4">
            Sell
          </Link>
          <Link to="/my-listed-items" className="text-gray-200 text-md mx-4">
            My items
          </Link>
          <Link to="/my-purchases" className="text-gray-200 text-md mx-4">
            My purchases
          </Link>
          <Link to="/claim" className="text-gray-200 text-md mx-4">
            Claim
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center w-1/4">
          {account ? (
            <Link to={`/`} target="_blank" rel="noopener noreferrer">
              <span className="rounded-lg border-white py-2 px-4 text-white text-sm text-bold">
                {account.slice(0, 5) + "..." + account.slice(38, 42)}
              </span>
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
    </nav>
  );
};

export default Navigation;
