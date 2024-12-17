import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen flex">
        <aside>
          <Sidebar />
        </aside>


        <div className="flex-1 flex flex-col">
          <nav>
            <Navbar />
          </nav>

          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

