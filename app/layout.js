import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
     
      </body>
    </html>
  );
}
