const Header = ({ title, black = true }) => {
  return (
    <div className="flex items-center justify-center gap-4 px-12 2xl:mb-2">
      <h2
        className={`header text-center text-xl font-bold sm:text-xl lg:text-2xl  ${
          black ? "text-gray-700" : "text-gray-100"
        }`}
      >
        {title.toUpperCase()}
      </h2>
    </div>
  );
};

export default Header;
