const SearchResultImage = ({ searchItem }) => {
  return (
    <a href={searchItem.image.contextLink} className="group flex flex-col text-center space-y-2">
      <img
        src={searchItem.link}
        alt={searchItem.displayLink}
        className="h-64 object-cover group-hover:shadow-xl"
      />
      <div className="hover:underline">
        <p className="text-sm font-semibold truncate">{searchItem.title}</p>
        <p className="text-sm text-gray-500 truncate">
          {searchItem.displayLink}
        </p>
      </div>
    </a>
  );
};
export default SearchResultImage;
