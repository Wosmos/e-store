// Navbar.tsx
import React, { useState } from "react";
import { LuMenu, LuSearch } from "react-icons/lu";
import Profile from "../../assets/Profile.png";
import Basket from "../../assets/Basket.png";
import MenuDrawer from "./MenuDrawer";
import CartDrawer from "./CartDrawer";
import ProfileDrawer from "./ProfileDrawer";
import SearchDrawer from "./SearchDrawer";
import { IoLogInOutline } from "react-icons/io5";
import img from "../../assets/Top.png"
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const navItems = [
  { name: "Home", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Product", href: "#" },
  { name: "Contact Us", href: "#" },
];

const searchSuggestions = [
  "Sofa",
  "Chair",
  "Table",
  "Lamp",
  "Bed",
  "Dresser",
  "Bookshelf",
  "Rug",
  "Mirror",
  "Clock",
];

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      quantity: 2,
      image: img,
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      quantity: 1,
      image: img,
    },
  ]);

  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleCart = () => setCartOpen(!cartOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const incrementQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrementQuantity = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      <section className="fixed left-0 z-50 w-full bg-white shadow-sm">
        <div className="flex h-12 w-full flex-row items-center justify-between px-6 md:px-8">
          <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
            <LuMenu
              className="mr-1 cursor-pointer md:hidden"
              onClick={toggleDrawer}
            />
            3legant
            <span className="ml-[2px] inline-block h-1 w-1 animate-bounce rounded-full font-poppins text-xl font-bold text-[#6c7275]">
              .
            </span>
          </h1>
          <nav>
            <ul className="hidden flex-row gap-10 md:flex">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-[14px] text-[#6c7275] hover:scale-105 hover:font-[500] hover:text-[#141718]"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="flex flex-row items-center gap-4">
            <LuSearch
              className="h-6 w-6 cursor-pointer text-[#141718]"
              onClick={toggleSearch}
            />
            {isLoggedIn ? (
              <>
                <img
                  src={Profile}
                  alt="profile"
                  className="h-6 w-6 cursor-pointer"
                  onClick={toggleProfile}
                />
                <ul>
                  <button
                    type="button"
                    className="relative -ml-2 inline-flex items-center rounded-full bg-transparent p-3 text-center text-sm font-medium text-white focus:outline-none"
                    onClick={toggleCart}
                  >
                    <img
                      className="h-6 w-6 text-black"
                      src={Basket}
                      alt="basket"
                    />
                    <div className="absolute right-[6px] top-[6px] flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
                      {cartItems.reduce(
                        (total, item) => total + item.quantity,
                        0,
                      )}
                    </div>
                  </button>
                </ul>
              </>
            ) : (
              <IoLogInOutline className="h-8 w-8 -ml-2 cursor-pointer" onClick={handleLogin} />
            )}
          </nav>
        </div>
      </section>

      <SearchDrawer
        isOpen={searchOpen}
        onClose={toggleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchSuggestions={searchSuggestions}
      />

      <MenuDrawer
        isOpen={drawerOpen}
        onClose={toggleDrawer}
        navItems={navItems}
      />
      <CartDrawer
        isOpen={cartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />
      {isLoggedIn && (
        <ProfileDrawer
          isOpen={profileOpen}
          onClose={toggleProfile}
          onLogout={handleLogout}
        />
      )}

      {/* Backdrop */}
      {(drawerOpen || cartOpen || profileOpen || searchOpen) && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={() => {
            if (drawerOpen) toggleDrawer();
            if (cartOpen) toggleCart();
            if (profileOpen) toggleProfile();
            if (searchOpen) toggleSearch();
          }}
        ></div>
      )}
    </>
  );
};

export default Navbar;
