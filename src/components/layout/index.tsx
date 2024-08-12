import RootLayout from "@/app/layout";
import Header from "../header";
import Footer from "../footer";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootLayout>
      <Header></Header>
      {children}
      <Footer></Footer>
    </RootLayout>
  );
}
