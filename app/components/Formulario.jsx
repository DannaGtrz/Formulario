"use client";
import React, { useState, useEffect } from "react";

export default function HtmlFormulario() {
  const [formData, setFormData] = useState({
    folio: "",
    vigencia: "",
    correo: "",
    telefono: "",
    tipoPresupuesto: "",
    tiempoEntrega: "",
    observaciones: "",
  });

 const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl text-gray-900">Nuevo presupuesto</h1>
      <h2 className="text-s text-gray-900">Uriel Arriaga</h2>
      <p className="text-s text-gray-600">
        urielarriaga@medicalbuy.mx | 55254165585
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="folio"
              id="folio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.folio}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="folio"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Folio<span className="text-red-500">*</span>
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="date"
              name="vigencia"
              id="vigencia"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.vigencia}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="vigencia"
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
              name="correo"
              id="correo"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.correo}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="correo"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Correo<span className="text-red-500">*</span>
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              name="telefono"
              id="telefono"
              pattern="[0-9]{10}"
              maxLength="10"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={formData.telefono}
              onChange={handleInputChange}
              required
            />
            <label
              htmlFor="telefono"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Teléfono<span className="text-red-500">*</span>
            </label>
          </div>
      

        <div className="relative z-0 mb-6 w-full group">
          <select
            name="tipoPresupuesto"
            id="tipoPresupuesto"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={formData.tipoPresupuesto}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona el tipo de presupuesto</option>
            <option value="basico">Básico</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
          <label
            htmlFor="tipoPresupuesto"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tipo de presupuesto<span className="text-red-500">*</span>
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <select
            name="tiempoEntrega"
            id="tiempoEntrega"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={formData.tiempoEntrega}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecciona el tiempo de entrega</option>
            <option value="1 semana">1 Semana</option>
            <option value="2 semanas">2 Semanas</option>
            <option value="1 mes">1 mes</option>
          </select>
          <label
            htmlFor="tiempoEntrega"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Tiempo de entrega<span className="text-red-500">*</span>
          </label>
        </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
  <textarea
    name="observaciones"
    id="observaciones"
    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    placeholder=" "
    value={formData.observaciones}
    onChange={handleInputChange}
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          type="submit"
        >
          Enviar
        </button>
      </form>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">Datos capturados</h2>
            <ul className="space-y-2">
              <li><strong>Folio:</strong> {formData.folio}</li>
              <li><strong>Vigencia:</strong> {formData.vigencia}</li>
              <li><strong>Correo:</strong> {formData.correo}</li>
              <li><strong>Teléfono:</strong> {formData.telefono}</li>
              <li><strong>Tipo de presupuesto:</strong> {formData.tipoPresupuesto}</li>
              <li><strong>Tiempo de entrega:</strong> {formData.tiempoEntrega}</li>
              <li><strong>Observaciones:</strong> {formData.observaciones}</li>
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
