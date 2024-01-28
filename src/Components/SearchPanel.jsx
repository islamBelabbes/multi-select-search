export const SearchPanel = ({ data, isLoading, onClick, isSelected }) => {
  return (
    <div className="bg-white max-h-60 overflow-auto w-full px-1 py-2 flex flex-col gap-1">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((user) => (
          <span
            key={user.id}
            className="cursor-pointer flex justify-between"
            style={{ opacity: isSelected(user) ? "0.5" : "1" }}
            onClick={() => onClick(user)}
          >
            {user.firstName}
            <img
              src={user.image}
              className="w-[35px] h-[35px] rounded"
              alt=""
            />
          </span>
        ))
      )}
    </div>
  );
};
export default SearchPanel;
