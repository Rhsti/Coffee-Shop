
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import HotBeverages from "../../assets/flying-cup-of-coffee.png";

// Menu data
const menuItems = [
  {
    id: 1,
    name: "Hot Beverages",
    category: "hot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: HotBeverages,
  },
  {
    id: 2,
    name: "Coffee",
    category: "coffee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: HotBeverages,
  },
  {
    id: 3,
    name: "Hot Water",
    category: "water",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: HotBeverages,
  },
  {
    id: 4,
    name: "Refreshment",
    category: "refreshment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: HotBeverages,
  },
  {
    id: 5,
    name: "Cold Beverages",
    category: "cold",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: HotBeverages,
  },
];

function Menu() {
 
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Search + filter
  const filteredItems = menuItems.filter((item) => {
    // Check if name matches search
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    // Check if category matches filter
    const matchesFilter =
      filter === "all" || item.category === filter;

    // Item must match BOTH
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-950 text-white">

        <Header />

        <main className="flex-1 mt-20">

     
          <section className="flex justify-center">
            <form
              className="flex gap-4 mx-5"
              onSubmit={(e) => e.preventDefault()}
            >

         
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="relative left-4 lg:px-10 md:px-6 px-2 rounded-l-xl bg-amber-400 text-black outline-0"
              >
                <option value="all">
                  All
                </option>

                <option value="hot">
                  Hot Beverages
                </option>

                <option value="coffee">
                  Coffee
                </option>

                <option value="water">
                  Hot Water
                </option>

                <option value="refreshment">
                  Refreshment
                </option>

                <option value="cold">
                  Cold Beverages
                </option>
              </select>

            
              <input
                className="w-full p-3 lg:px-20 md:px-10 px-5 bg-gray-800 border border-gray-600 text-white text-sm rounded-base outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 placeholder:text-gray-400"
                type="search"
                name="search"
                placeholder="Search menu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

          
              <button
                type="submit"
                className="bg-amber-500 text-black relative right-5 lg:px-10 md:px-6 px-4 py-3.5 rounded-r-xl flex items-center gap-2"
              >
                <FaSearch />
                Search
              </button>

            </form>
          </section>

      
          <div
            className="flex justify-center mt-25 text-3xl
            font-bold tracking-wider italic uppercase
            underline decoration-amber-200"
          >
            <h1>Our Menu</h1>
          </div>

      
          <section
            className="grid lg:grid-cols-4 md:grid-cols-3
            grid-cols-2 mx-15 mt-30 mb-20 gap-20"
          >

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="text-center"
              >

                <img
                  src={item.image}
                  className=""
                  alt={item.name}
                />

                <h3 className="font-bold py-2">
                  {item.name}
                </h3>

                <p className="hidden md:block min-w-50">
                  {item.description}
                </p>

              </div>
            ))}

          </section>


        </main>

        <Footer />

      </div>
    </>
  );
}

export default Menu 
