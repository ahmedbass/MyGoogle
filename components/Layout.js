import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">{props.children}</main>
    </div>
  );
};

export default Layout;
