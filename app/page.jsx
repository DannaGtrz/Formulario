import Formulario from "./components/Formulario";
import '@/app/globals.css'

export default function Page() {
  return (

        <main className="flex-1 p-8 bg-gray-100 flex justify-center items-center">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
            <Formulario /> 
          </div>
        </main>


  );
}


