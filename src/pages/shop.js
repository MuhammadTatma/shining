import Navigation from "../components/navigation";
import Slider from "../components/slider";
import SearchComponent from "../components/searchbar";
import { womenproducts, manproducts } from "../dummy/productdummy";
import LikeButton from "../components/likeBtn";
import toRupiah from "../utils/rupiahformat";
import React from "react";
import { useLocation } from "react-router-dom";

const filter = ["All", "Baju", "Celana", "Gamis", "Rok", "Sepatu", "Jilbab"];

function useQuery(){
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Shop(){
  const query = useQuery();
  const gender = query.get("gender")
  const products = gender === 'women' ? womenproducts : gender === 'man' ? manproducts : manproducts.concat(womenproducts)

  return (
    <>
      <Navigation />
      <main className="mt-20 pb-10 sm:px-16 md:pt-24  lg:px-24 lg:pt-0">   
        <Slider />
        <div className="flex justify-center pt-6">
          <SearchComponent />
        </div>
        <div className="px-6 py-6 mt-6">
          <h2 className="text-lg font-semibold tracking-tight text-gray-600">For You</h2>
          <div className="mt-2 grid grid-cols-3 gap-x-2 gap-y-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:gap-x-8">
          {filter.map((name) => (
                <div className="group cursor-pointer">
                  <div class="max-w-sm p-1 outline outline-1 outline-gray-200 rounded hover:bg-gray-200">
                      <p class="text-center text-base">{name}</p>
                  </div>
                </div>
              ))}
          </div>

        </div>

        <div className="py-6 mb-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className=" border-2 border-gray-200 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div className="h-full">
                  <h3 className="text-md font-semibold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-700">{product.description}</p>
                  <p className="mt-2 text-md text-gray-500">{toRupiah(product.price*1000)}</p>
                </div>
                <LikeButton />
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}