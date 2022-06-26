import Parser from "html-react-parser";
import ToggleSearchSettings from "./ToggleSearchSettings";

const Footer = (props) => {
  return (
    <div className="p-5 relative flex justify-center items-center text-sm text-gray-500 flex-col sm:flex-row">
      <p>Copyright &copy; {new Date().getFullYear()} Ahmed Bass</p>
      <div className="sm:absolute right-4 bottom-4">
        <ToggleSearchSettings />
      </div>
    </div>
  );
};

export default Footer;
