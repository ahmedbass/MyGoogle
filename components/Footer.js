import Parser from "html-react-parser";
import ToggleSearchSettings from "./ToggleSearchSettings";

const Footer = (props) => {
  return (
    <div
      className="mt-10 p-6 relative flex justify-center items-center text-sm text-gray-500
     flex-col sm:flex-row border-t bg-gray-50">
      <p className="order-2 mt-4">Copyright &copy; {new Date().getFullYear()} Ahmed Bass</p>
      <ToggleSearchSettings />
    </div>
  );
};

export default Footer;
