const SearchHeaderOption = ({ title, Icon, type, active, searchBy }) => {
  // const active = title.toLowerCase() === type.toLowerCase();
  return (
    <div
      onClick={() => searchBy(type)}
      className={`flex items-center space-x-1 mx-3 py-2 cursor-pointer text-sm text-gray-500 border-b-4 ${
        active ? "text-blue-500 border-blue-500" : "border-b-transparent"
      }`}
    >
      <Icon className="h-5" />
      <span>{title}</span>
    </div>
  );
};
export default SearchHeaderOption;
