'use client';
import React from "react";

export default function htmlFormulario() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl text-gray-900">Nuevo presupuesto</h1>
      <h2 className="text-s text-gray-900">Uriel Arriaga</h2>
      <p className="text-s text-gray-600">
        urielarriaga@medicalbuy.mx | 55254165585
      </p>
      <form>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_folio"
              id="floating_folio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_folio"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Folio<span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="date"
              name="floating_vigencia"
              id="floating_vigencia"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_vigencia"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Vigencia<span className="text-red-500">*</span>
            </label>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="floating_correo"
              id="floating_correo"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_correo"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo
              <span className="text-red-500">*</span>
            </label>
          </div>
		  <div className="relative z-0 mb-6 w-full group">
  <input
    type="tel"
    name="floating_phone"
    id="floating_phone"
    pattern="[0-9]{10}"
    maxLength="10"
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    required
    onInvalid={(e) => e.target.setCustomValidity("No es un número válido")}
    onInput={(e) => e.target.setCustomValidity("")} 
  />
  <label
    htmlFor="floating_phone"
    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    Teléfono <span className="text-red-500">*</span>
  </label>
  <span className="text-red-500 text-sm hidden peer-invalid:block">No es un número válido</span>
</div>


          <div className="relative z-0 mb-6 w-full group">
            <select
              name="tipo_presupuesto"
              id="tipo_presupuesto"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              defaultValue=""
            >
              <option>Selecciona el tipo de presupuesto</option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>
            </select>
            <label
              htmlFor="tipo_presupuesto"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tipo de presupuesto <span className="text-red-500">*</span>
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <select
              name="tiempo_entrega"
              id="tiempo_entrega"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              defaultValue=""
            >
              <option>Selecciona el tiempo de entrega</option>
              <option value="1_semana">1 semana</option>
              <option value="2_semanas">2 semanas</option>
              <option value="3_semanas">3 semanas</option>
              <option value="1_mes">1 mes</option>
            </select>
            <label
              htmlFor="tiempo_entrega"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Tiempo de entrega <span className="text-red-500">*</span>
            </label>
          </div>
        </div>

        <div className="relative z-0 mb-6 w-full group">
          <textarea
            name="observaciones"
            id="observaciones"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="observaciones"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-1"
          >
            Observaciones: <span className="text-red-500">*</span>
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar 
        </button>
      </form>
    </div>
  );
}
