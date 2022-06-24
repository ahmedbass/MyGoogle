import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
