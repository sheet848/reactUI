import { Link, useLocation } from "react-router-dom";

const Bread = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
    <nav className="text-gray-600 text-sm my-4">
      <ul className="flex">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} className="ml-2">
              <span className="mx-2">/</span>
              <Link to={to} className="text-blue-600 hover:underline capitalize">
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </>
  )
}

export default Bread
