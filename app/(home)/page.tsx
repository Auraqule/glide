import React from "react";
import { Footer, NavCategories, ProductList, SideBar } from "../../components";

const Home = async () => {
  return (
    <section>
      <NavCategories />

      <main className="flex w-[80%] mx-auto">
        <div className=" py-6 rounded-md px-6 h-[480px] bg-white mx-4">
          <SideBar />
        </div>
        {/* @ts-ignore */}
        <ProductList />
      </main>
      <Footer />
    </section>
  );
};

export default Home;
