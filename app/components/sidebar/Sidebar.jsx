import { MdDashboard } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import { Bs0CircleFill } from "react-icons/bs";
import { MdFace6 } from "react-icons/md";

import Formulario from "../Formulario";

export default function SidebarPage() {
  return (
    <div className="flex">
      <aside
        className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-blue-500 p-2"
        style={{ height: "90.5vh" }}
      >

        <a
          href="#"
          className="flex items-center space-x-1 rounded-md px-2 py-3 text-blue-600 bg-white hover:bg-gray-100 hover:text-blue-700"
        >
          <span className="text-2xl">
            <MdDashboard />
          </span>
          <span>Dashboard</span>
        
        </a>

        <a
          href="#"
          className="flex items-center space-x-1 rounded-md px-2 py-3 text-blue-400 bg-white hover:bg-gray-100 hover:text-blue-700"
        >
          <span className="text-2xl">
          <MdFace6 />
          </span>
          <span>Prospectos</span>
          <Bs0CircleFill />
        </a>

        <a
          href="#"
          className="flex items-center space-x-1 rounded-md px-2 py-3 text-red-600 bg-white hover:bg-gray-100 hover:text-red-700"
        >
          <span className="text-2xl">
          <FaFileSignature />
          </span>
          <span>Presupuestos</span>
          <Bs0CircleFill />
        </a>
      </aside>
      <div className="flex-1 p-8">
      <Formulario />
      </div>

    </div>
  );
}