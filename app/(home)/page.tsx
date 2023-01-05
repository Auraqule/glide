import React from "react";
import { NavCategories, ProductList, SideBar } from "../../components";

const Home = async () => {
  return (
    <section>
      <NavCategories />

      <main className="flex w-[95%] xl:w-[80%] mx-auto">
        <div className=" hidden sm:block py-6 rounded-md px-6 h-[480px] bg-white mx-2 xl:mx-4">
          <SideBar />
        </div>
        {/* @ts-ignore */}
        <ProductList />
      </main>
    </section>
  );
};

export default Home;
