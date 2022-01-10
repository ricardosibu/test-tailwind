import carCollage from '../assets/img/carcollage.png';
const Header = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className='text-xl text-blue-400 font-sans font-light pb-2'>Seguro integral en el que puedes confiar</h2>
          <h1 class="title-font sm:text-3xl text-5xl mb-4 font-medium text-blue-700">
            Confía en Hammer
            <br class="hidden text-blue-700 text-5xl font-bold lg:inline-block" />
            Insurance !Somos Vecinos!
          </h1>
          <p class="text-lg text-blue-400 font-normal leading-relaxed">
            Calidad en el trato al cliente y los mejores precios del mercado.
          </p>
          <p class="mb-4 text-lg text-blue-400 font-normal leading-relaxed">
            amplias coberturas y facilidad en los pagos.
          </p>
          <div class="flex justify-center">
            <button class="transition ease-in-out delay-150 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 rounded text-lg">
              Servicios
            </button>
            <button class="ml-4 inline-flex text-blue-400 bg-gray-100 border border-blue-400 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Solicitar Presupuesto
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={carCollage}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
