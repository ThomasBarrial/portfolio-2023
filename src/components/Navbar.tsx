import Link from "next/link";

function Navbar() {
  const navBarLinks = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "WORK",
      link: "/work",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];
  return (
    <div className="font-Antonio px-20 py-3 flex items-center justify-between w-screen z-20 fixed top-0">
      <div>
        <h2>Thomas Barrial</h2>
        <p className="text-xs opacity-50">@Biarritz France</p>
      </div>
      <div>
        {navBarLinks.map((item) => {
          return (
            <Link className="ml-10" key={item.name} href={item.link}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
