import { example } from "./connstant"

export default function Home() {
  return (
    <>
      {/* navber Part start */}
      <div>
        <div className="flex p-1 md:space-x-50 lg:space-x-80">
          <div className="ml-7 text-2xl">
            <img src="https://pbs.twimg.com/profile_images/1295043157889921026/NmpeR_dg_400x400.jpg" className="h-8 w-10 py-1" />
          </div>
          <div>
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 right-0 px-2 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input class="placeholder:italic  placeholder:text-slate-400 block bg-gray w-90 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </label>
          </div>
          <div className="md:space-x-3 lg:space-x-7">
            <button>Contact Us</button>
            <button className="border-2 border-gray py-1 px-5 text-black ">SIGN UP</button>
            <button className="border-2 border-gray py-1 px-5">SIGN IN</button>
          </div>
        </div>
      </div>
      {/* Keypoint part Start */}
      <div className="flex bg-black text-white p-0 space-x-3 text-sm">
        <h6 className="mx-4">50</h6>
        <h6 className="text-red-600">0.21%</h6>
        <h6>NIFTY BANK</h6>
        <h6>41,559.40</h6>
        <h6 className="text-green-600">0.01%</h6>
        <h6>BAJFINANCE</h6>
        <h6>6,435.50</h6>
        <h6 className="text-red-600">0.30%</h6>
        <h6>BHARTIARTL</h6>
        <h6>771.95</h6>
        <h6 className="text-green-600">0.69%</h6>
        <h6>HDFCBANK</h6>
        <h6>1,657.10</h6>
        <h6 className="text-green-600">0.40%</h6>
        <h6>HINDUNILVR</h6>
        <h6>2,577.50</h6>
        <h6 className="text-red-600">0.36%</h6>
        <h6>INDIGO</h6>
        <h6>2,043.50</h6>
      </div>
      {/* companies part start */}
      <div>
        <h2 className=" text-red-500 font-bold p-2">FEATURED COMPANIES</h2>
        <div className="bg-blue-50 p-2 h-20 grid grid-cols-6">
          <img className="w-20 h-20 pb-2 col-sm-3" src="./companeyLogo1.png" />
          <img className="w-20 h-20 pb-2 col-sm-3" src="./companeyLogo2.png" />
          <img className="w-20 h-20 pb-2 col-sm-3" src="./companeyLogo3.png" />
          <img className="w-20 h-20 pb-2 col-sm-3" src="./companeyLogo4.png" />
          <img className="w-20 h-20 pb-2 col-sm-3" src="./companeyLogo5.png" />
          <img className="w-20 h-20 pb-2 col-sm-3" src="./companeyLogo6.png" />
        </div>
      </div >
      {/* Filters start */}

      <div className="grid lg:grid-cols-4 ">
        {/* side navigtion bar start */}
        <div className="">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>
          <aside id="logo-sidebar" class="fixed top-50 left-0 z-40 w-64  bg-blue-600 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-cyan-950 text-white dark:bg-gray-800">
              <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">Hello,User</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="relative  left-20 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </a><hr />
              <ul class="space-y-2 font-medium">
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    <span class="ml-3">Disscussion Form</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span class="flex-1 ml-3 whitespace-nowrap">Market Stories</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Sentiment</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Market</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Sector</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Watchlist</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">Event</span>
                  </a>
                </li>
                <li>
                  <a href="#" class="flex items-center p-2   text-white hover:bg-cyan-700 dark:hover:bg-gray-700">
                    <span class="flex-1 ml-3 whitespace-nowrap">News/Interview</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="w-200  col-span-2 pt-5 pr-5">
          <h2 className=" right-50 relative p-2 font-bold text-red-500  ">DISSCUSSION FOURM</h2>
          <h4 className="font-bold ">Filters</h4>
          <div class="flex items-center  shadow-xl bg-slate-50 p-4 gap-4 w-120 bg-white-900">
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 text-sm rounded-full">Sector1</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 text-sm rounded-full">Sector2</button>
            <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 text-sm rounded-full">Secto3</button>

            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 right-0 px-2 flex items-center pl-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              </span>
              <input className="placeholder:text-slate-400 block p-2 bg-zinc-100 w-30 h-7 shadow-inner rounded-full text-sm" placeholder="Search here" type='text' />
            </label>
          </div>&nbsp;
          <div className="py-5 items-center h-60 overflow-y-auto shadow-xl bg-slate-50 p-4  w-120 bg-white-900">
            <div className="grid grid-cols-2">
              <div>
                <img src="./companeyLogo7.png" className=" ml-30 " />
                {/* <h6 className=" text-blue-500  mr-90">2 min ago</h6> */}
              </div>
            </div>
            <div className="flex space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                <path fill-rule="evenodd" className=" col-span-1 mt-0" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
              </svg>
              <h5 className="col-span-1 mt-2 ml-0  ">Lorem Ipsum</h5>
              <button class="bg-red-500 mt-1 hover:bg-red-700 text-white col-span-1 h-8 w-50 font-bold py-1 px-3 text-sm rounded-full">Sector1</button>
            </div>&nbsp;
            <p className="px-8 ml-6">Lorem Ipsum is simply dummy text of the printing and typestting industry.Lorem Ipsum is</p>
            <div className="grid grid-cols-4 ml-10 p-5" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </div>
            <div className="py-5 items-center  shadow-xl bg-slate-50 p-4  w-120 bg-white-900">
              <div className="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                  <path fill-rule="evenodd" className=" col-span-1 mt-0" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                  <span>2K</span>
                </svg>
                <h5 className="col-span-1 mt-2 ml-0  ">Lorem Ipsum</h5>
                <button class="bg-blue-500 hover:bg-blue-700 text-white col-span-1 h-8 w-50 font-bold py-1 px-3 text-sm rounded-full">Sector1</button>
              </div>&nbsp;
              <p className="px-8 ml-6">Lorem Ipsum is simply dummy text of the printing and typestting industry.Lorem Ipsum is</p>
              <div className="grid grid-cols-4 ml-10 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
            </div>&nbsp;
            <div className="py-5 items-center  shadow-xl bg-slate-50 p-4  w-120 bg-white-900">
              <div className="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10">
                  <path fill-rule="evenodd" className=" col-span-1 mt-0" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>
                <h5 className="col-span-1 mt-2 ml-0  ">Lorem Ipsum</h5>
                <button class="bg-yellow-500 hover:bg-yellow-700 text-white col-span-1 h-8 w-50 font-bold py-1 px-3 text-sm rounded-full">Sector1</button>
              </div>&nbsp;
              <p className="px-8 ml-6">Lorem Ipsum is simply dummy text of the printing and typestting industry.Lorem Ipsum is</p>
              <div className="grid grid-cols-4 ml-10 p-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
            </div>
          </div>&nbsp;



        </div>
        <div className="w-200  col-span-1 r-0">
          <h2 className=" p-3 text-red-500 text-center  font-bold ">MARKET STORIES</h2>
          <div className="grid grid-flow-row ">
            {
              example.map((path) => (
                <div className="w-30 h-15 p-5">
                  <img src={path.img} className="rounded-2xl" />
                </div>

              ))
            }
          </div>
          <div className=" mr-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-20 h-20">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
            </svg>

          </div>
        </div>
      </div>
    </>
  )
}
