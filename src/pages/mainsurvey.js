import { useParams } from "react-router-dom"
import Navigation from "../components/navigation";
import {manStyles, womenStyles} from "../dummy/stylesdummy"
import { manPallete, womenPallete } from "../dummy/palletedummy";
import { manChlotes, womanChlotes } from "../dummy/chlotesdummy";
import ImageCheckBox from "../components/imagecheckBox";

const budgets = ["Baju", "celana", "Gamis", "Rok", "Jilbab", "Sepatu"]


export default function MainSurvey() {
  const {id} = useParams();
  const styles = id === 'women'? womenStyles: id === 'man' ? manStyles : manStyles.concat(womenStyles);
  const chlotes = id === 'women'? womanChlotes: id === 'man' ? manChlotes : manChlotes.concat(womanChlotes);
  const palette = id === 'women'? womenPallete: id === 'man' ? manPallete : manPallete
  return (
    <>
      <Navigation />
      <main className="grid min-h-full  bg-white px-6 py-24 sm:py-32 lg:px-24">
        <div className="text-center">
          <p className=" font-quicksand font-bold text-xl leading-7 text-gray-600">Quickly choose your preference!</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
          </div>
        </div>
        
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 lg:py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold tracking-tight text-gray-600">Style that represents you</h2>

            <div className="mt-2 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
              {styles.map((styles) => (
                  <ImageCheckBox product={styles} key={styles.id}  />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mt-10">
          <div className="mx-auto max-w-2xl px-4 lg:py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold tracking-tight text-gray-600">Color Palette you likes</h2>

            <div className="mt-2 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
              {palette.map((palette) => (
                <ImageCheckBox product={palette} key={palette.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mt-10">
          <div className="mx-auto max-w-2xl px-4 lg:py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold tracking-tight text-gray-600">Kind of clothes that suits you</h2>

            <div className="mt-2 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
              {chlotes.map((klambi) => (
                <ImageCheckBox product={klambi} key={klambi.id} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mt-10">
          <div className="mx-auto max-w-2xl px-4 lg:py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold tracking-tight text-gray-600">Ranges of your budget</h2>

            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
              {budgets.map((name) => (
                <div key={name} className="group">
                  <div  className="max-w-sm p-3 outline outline-1 outline-gray-200 rounded">
                    <div className="  mb-3">
                      <p className="font-medium text-lg ">{name}</p>
                    </div>
                    <hr></hr>
                    <div className=" pt-4">
                      <div className="mb-4">
                        <p className=" mb-2"><label htmlFor={name+ "_from"} className="text-gray-700 text-base ">From</label></p>
                        <input id={name + "_from"} type="number" placeholder="From" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
                      </div>
                    </div>
                    <div className=" pb-2">
                      <div className="mb-4">
                        <p className=" mb-2"><label htmlFor={name+ "_to"} className="text-gray-700 text-base ">To</label></p>
                        <input id={name + "_to"} type="number" placeholder="To" className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mt-10">
          <div className="mx-auto max-w-2xl px-4 lg:py-1 sm:px-6 sm:py-1 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold tracking-tight text-gray-600">
              <label htmlFor="sizechart">
                Size that fits yours
              </label>
            </h2>
            <div className="max-w-xs p-3 mt-3 outline outline-1 outline-gray-200 rounded">
              <img src="/assets/Images/SIZE_CHART.png" alt="size chart"></img>
            </div>
            <div className="mt-5">
              <select defaultValue={'Size'} id="sizechart" className=" bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:text-gray-700 focus:border-gray-500" >
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
                <a href={"/shop?gender=" + id } className="rounded-3xl bg-primary px-7 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">End Survey</a>
        </div>
      </main>
      
    </>
  )
}