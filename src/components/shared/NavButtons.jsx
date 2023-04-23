import { Link, useLocation } from "react-router-dom";

export default function NavButtons({ children }) {
  const location = useLocation();
  const currentUrlID = location.pathname.split("/100DaysCSS/")[1]++;

  return (
    <>
      {currentUrlID > 1 && (
        <Link
          className="text-5xl bg-blue-500 text-white hover:text-green-500 rounded-tl rounded-bl flex flex-col justify-center"
          to={`/100DaysCSS/${currentUrlID - 1}`}
        >
          &lt;{" "}
        </Link>
      )}
      {children}
      {currentUrlID < 100 && (
        <Link
          className="text-5xl bg-blue-500 text-white hover:text-green-500 rounded-tr rounded-br flex flex-col justify-center"
          to={`/100DaysCSS/${currentUrlID + 1}`}
        >
          &gt;{" "}
        </Link>
      )}
    </>
  );
}
