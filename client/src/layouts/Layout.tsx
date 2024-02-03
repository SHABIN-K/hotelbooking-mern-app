import { Header, Hero } from "../components";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default Layout;
