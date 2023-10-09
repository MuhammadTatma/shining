import Navigation from "../components/navigation"
import { Link } from "react-router-dom"

export default function Survey() {
  return (
    <>
        <Navigation />
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="mt-6 font-quicksand font-semibold text-base leading-7 text-gray-600">What’s your gender?</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="/survey/man" className="rounded-md w-24 bg-primary  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Man</a>
            <a href="/survey/women" className="rounded-md w-24 bg-primary  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Women</a>
            <a href="/survey/both" className="rounded-md w-24 bg-primary  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Both</a>        
          </div>
        </div>
      </main>
    </>
  )
}