const SearchInput = ({ onChange, value }) => {
  return (
    <input
      type="text"
      className="border border-transparent  focus:outline-none py-2 flex-1 min-w-0 "
      onChange={(e) => onChange(e)}
      value={value}
    />
  );
};

export default SearchInput;
