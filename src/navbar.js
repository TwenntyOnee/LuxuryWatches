import './App.css';

function Navbar(){

    return(

       
        <nav class="flex justify-between px-20 font-basic py-10 items-center bg-transparent">
          <h1 class="text-3xl text-white  font-semibold">Luxury Watches</h1>
          <div class="flex items-center">
            <div class="flex items-center">
            <ul class="flex items-center space-x-6">
              <li class="font-normal transition-all ease-in-out duration-300 hover:text-[#CCCD7D] cursor-pointer text-white">Watches</li>
              <li class="font-normal  transition-all ease-in-out duration-300 hover:text-[#CCCD7D] cursor-pointer text-white">Store Locator</li>
              <li>
               
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </li>
              <li>
                
              </li>
            </ul>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input class="ml-2 outline-none  text-white bg-transparent font-" type="text" name="search" id="search" placeholder="Search" />
            </div>
          </div>
        </nav>
        

    );

}
export default Navbar;