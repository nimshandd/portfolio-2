import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="bg-[#0B0B0B] min-h-screen text-white flex flex-col selection:bg-[#A855F7]/30 selection:text-[#A855F7]">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
