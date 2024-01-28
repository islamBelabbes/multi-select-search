import SearchPanel from "./SearchPanel";
import SearchInput from "./SearchInput";
import Selected from "./Selected";
import useMultiSelectSearch from "../hooks/useMultiSelectSearch";

export const MultiSelectSearch = () => {
  const {
    data,
    isLoading,
    searchTerm,
    setSearchTerm,
    handleSelect,
    handleRemoveSelected,
    isSelected,
    selectedUsers,
    debouncedVal,
  } = useMultiSelectSearch();

  return (
    <div className="my-2 flex flex-col max-w-[50%] mx-auto w-full">
      <div className="bg-white  px-1 py-2 flex gap-2 flex-wrap">
        {selectedUsers.length > 0 && (
          <Selected
            selectedUsers={selectedUsers}
            onClick={handleRemoveSelected}
          />
        )}
        <SearchInput
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      {debouncedVal && (
        <SearchPanel
          data={data}
          isLoading={isLoading}
          onClick={handleSelect}
          isSelected={isSelected}
        />
      )}
    </div>
  );
};

export default MultiSelectSearch;
