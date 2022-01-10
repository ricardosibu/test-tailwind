import React from "react";

const NavBar = () => {
  return (
    <header className="text-blue-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-xl text-blue-700 font-bold">HAMMER</span>
          <br />
          <p className="ml-6 text-base text-blue-700">INSURANCE</p>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="#_"
            className="mr-14 text-base font-medium text-blue-400 hover:text-blue-500"
          >
            Servicios
          </a>
          <a
            href="#_"
            className="mr-14 text-base font-medium text-blue-400 hover:text-blue-500"
          >
            Pagos
          </a>
          <a
            href="#_"
            className="mr-14 text-base font-medium text-blue-400 hover:text-blue-500"
          >
            Oficinas
          </a>
          <a
            href="#_"
            className="mr-14 text-base font-medium text-blue-400 hover:text-blue-500"
          >
            Blog
          </a>
          <a
            href="#_"
            className="mr-14 text-base font-medium text-blue-400 hover:text-blue-500"
          >
            Nosotros
          </a>
          <a
            href="#_"
            className="mr-14 text-base font-medium text-blue-400 hover:text-blue-500"
          >
            Contacto
          </a>
        </nav>
        <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-medium hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded">
          Pedir Presupuesto
        </button>
        {/* <button class="bg-transparent mr-5 text-blue-700 font-semibold hover:text-white py-2 px-4">
          SPA
        </button> */}
        <div className="flex flex-row">
          <div className="basis-0 ml-10 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14.905"
            height="14.905"
            viewBox="0 0 14.905 14.905"
          >
            <path
              id="Icon_material-language"
              data-name="Icon material-language"
              d="M10.445,3a7.453,7.453,0,1,0,7.46,7.453A7.449,7.449,0,0,0,10.445,3ZM15.61,7.472h-2.2a11.663,11.663,0,0,0-1.028-2.653A5.984,5.984,0,0,1,15.61,7.472ZM10.453,4.52a10.5,10.5,0,0,1,1.423,2.951H9.029A10.5,10.5,0,0,1,10.453,4.52ZM4.684,11.943a5.83,5.83,0,0,1,0-2.981H7.2a12.308,12.308,0,0,0-.1,1.491,12.308,12.308,0,0,0,.1,1.491ZM5.3,13.434h2.2a11.663,11.663,0,0,0,1.028,2.653A5.952,5.952,0,0,1,5.3,13.434Zm2.2-5.962H5.3A5.952,5.952,0,0,1,8.522,4.818,11.663,11.663,0,0,0,7.494,7.472Zm2.959,8.913a10.5,10.5,0,0,1-1.423-2.951h2.847A10.5,10.5,0,0,1,10.453,16.385ZM12.2,11.943H8.709a10.965,10.965,0,0,1-.119-1.491,10.869,10.869,0,0,1,.119-1.491H12.2a10.87,10.87,0,0,1,.119,1.491A10.965,10.965,0,0,1,12.2,11.943Zm.186,4.144a11.663,11.663,0,0,0,1.028-2.653h2.2a5.984,5.984,0,0,1-3.227,2.653ZM13.7,11.943a12.308,12.308,0,0,0,.1-1.491,12.308,12.308,0,0,0-.1-1.491h2.519a5.83,5.83,0,0,1,0,2.981Z"
              transform="translate(-3 -3)"
              fill="#d1e6f7"
            />
          </svg>
          </div>
          <div className="basis-0">
          <a
          href="#_"
          className="ml-2 text-base font-medium text-blue-400 hover:text-blue-500"
        >
          SPA
        </a>
          </div>
        </div>
        
        
      </div>
    </header>
  );
};

export default NavBar;
