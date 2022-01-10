import car from "../assets/img/pngwing.png";
import house from "../assets/img/simplehouse.png";
import business from "../assets/img/business.png";
import placa from "../assets/img/placa.png";

const Feature = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container text-xl font-light text-center text-blue-400">Servicios</div>
      <div className="container text-3xl text-blue-600 font-semibold text-center">
        Tu agente cercano: en Hammer Insurance nadie se queda atrás
      </div>
      <div className="container text-xl font-medium text-blue-500 text-center">
        En Hammer Insurance siempre hablamos tu idioma, conocemos tu comunidad,
        somos vecinos.
      </div>

      <div className="flex justify-center ml-5">
        <div class="relative flex flex-col items-start justify-between col-span-2 px-8 py-12 m-4 overflow-hidden bg-gray-100 sm:rounded-xl">
          <h4 class="text-base font-medium text-blue-600">Auto</h4>
          <p class="text-sm text-left text-blue-500">
            Multiples opciones y descuentos, SR-22. Te ofrecemos la cobertura
            perfecta ¡siempre a tu lado cuando nos necesites!{" "}
          </p>
          <div className="flex justify-between">
          <button class="h-8 px-4 mt-3 text-sm transition ease-in-out delay-150 bg-transparent focus:shadow-outline hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">Ver más</button>
            <img width={95} src={car} alt="" />
          </div>
        </div>
        <div class="relative flex flex-col items-start justify-between col-span-2 px-8 py-12 space-y-4 m-4 overflow-hidden bg-gray-100 sm:rounded-xl">
          <h4 class="text-base font-medium text-blue-600">Hogar</h4>
          <p class="text-sm text-left text-blue-500">
            Protege tu casa, propiedad en alquiler, casa móvil o seguro de
            inquilino. Elige entre múltiples opciones.{" "}
          </p>
          <div className="flex justify-between">
          <button class="h-8 px-4 mt-7 text-sm transition ease-in-out delay-150 bg-transparent focus:shadow-outline hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">Ver más</button>
            <img width={95} src={house} alt="" />
          </div>
        </div>
        <div class="relative flex flex-col items-start justify-between col-span-2 px-8 py-12 space-y-4 m-4 overflow-hidden bg-gray-100 sm:rounded-xl">
          <h4 class="text-base font-medium text-blue-600">Negocio</h4>
          <p class="text-sm text-left text-blue-500">
            Asegura tus negocio, tus trabajadores, y cualquier vehiculo
            comercial. General Liability, Workers Comp, Bonds, etc.{" "}
          </p>
          <div className="flex justify-between">
          <button class="h-8 px-4 mt-7 text-sm transition ease-in-out delay-150 bg-transparent focus:shadow-outline hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">Ver más</button>
            <img width={95} src={business} alt="" />
          </div>
        </div>
        <div class="relative flex flex-col items-start justify-between col-span-2 px-8 py-12 space-y-4 m-4 overflow-hidden bg-gray-100 sm:rounded-xl">
          <h4 class="text-base font-medium text-blue-600">Placas</h4>
          <p class="text-sm text-left text-blue-500">
            Hammer renueva las placas y calcomanias de su auto además de
            gestionar el cambio de propietario y demás tramitaciones.{" "}
          </p>
          <div className="flex justify-between">
          <button class="h-8 px-4 m-2 text-sm transition ease-in-out delay-150 bg-transparent focus:shadow-outline hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">Ver más</button>
            <img width={95} src={placa} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feature;
