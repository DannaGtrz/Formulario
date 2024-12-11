export default function DatosPage() {
    return (
      <div>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold text-gray-900">Nuevo presupuesto</h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Folio</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">datos</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Vigencia</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">datos</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Correo</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
                margotfoster@example.com
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Teléfono</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">datos</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Tipo de presupuesto</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">datos</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Tiempo de entrega</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">datos</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium text-gray-900">Observaciones</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">datos</dd>
            </div>
          </dl>
        </div>
      </div>
    );
  }
  