import Formulario from "./components/Formulario";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import '@/app/globals.css'

export default function Page() {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <nav>
          <Navbar /> 
        </nav>

        <main className="flex-1 p-8 bg-gray-100 flex justify-center items-center">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
            <Formulario /> 
          </div>
        </main>
      </div>
    </div>

  );
}


