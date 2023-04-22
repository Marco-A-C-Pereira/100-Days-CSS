import { Link, useLocation } from "react-router-dom";

export default function NavButtons() {
  const location = useLocation();
  const currentUrlID = location.pathname.split("/100DaysCSS/")[1]++;

  return (
    <>
      {currentUrlID < 100 && (
        <Link
          className="absolute left-0 top-1/2 -translate-y-1/2 text-5xl bg-blue-500 text-white hover:text-green-500 rounded-tr rounded-br h-1/4 flex flex-col justify-center"
          to={`/100DaysCSS/${currentUrlID + 1}`}
        >
          &gt;{" "}
        </Link>
      )}
      {currentUrlID > 1 && (
        <Link
          className="absolute right-0 top-1/2 -translate-y-1/2 text-5xl bg-blue-500 text-white hover:text-green-500 rounded-tl rounded-bl h-1/4 flex flex-col justify-center"
          to={`/100DaysCSS/${currentUrlID - 1}`}
        >
          &lt;{" "}
        </Link>
      )}
    </>
  );
}
