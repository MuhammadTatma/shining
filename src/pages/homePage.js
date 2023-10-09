import Navigation from "../components/navigation"


export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen isolate overflow-hidden  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-10">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md  text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-[#2C2525] sm:text-4xl">
              Shines!
            </h2>
            <p className="mt-6 text-lg leading-8 font-quicksand text-[#2C2525]">
              Di sini, kamu bisa dapatkan produk fesyen terkini sesuai keinginanmu.
            </p>
            <p className="mt-6 text-lg font-bold   font-quicksand leading-8 text-[#2C2525]">
              We Bring You Products,
            </p>
            <p className="font-extrabold font-quicksand text-xl ">
              ON-STYLE 🌟 ON-BUDGET 🌟 ON-TIME
            </p>
            <p className="mt-6 text-lg font-quicksand leading-8 text-[#2C2525]">
              Take a short survey so we can bring yours
            </p>
            <div className="mt-3 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/survey"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Now
              </a>
              
              
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-6 top-10 w-[40rem] h-[27rem]   max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="/assets/Images/happy-lady.png"
              alt="hero"
              width={1824}
              height={1080}
            />
          </div>
      </main>

      

    </>
  )
}
