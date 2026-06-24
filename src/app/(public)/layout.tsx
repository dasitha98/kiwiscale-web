import TopBar from "@/components/layout/topbar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
