import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useMultiSelectSearch() {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedVal = useDebounce(searchTerm, 500);

  const handleSelect = (user) => {
    if (selectedUsers.some((userItem) => userItem.id === user.id)) return;
    setSelectedUsers([...selectedUsers, user]);
  };

  const handleRemoveSelected = (userId) => {
    const newSelected = [...selectedUsers].filter((user) => user.id !== userId);
    return setSelectedUsers(newSelected);
  };

  const isSelected = (user) => {
    return selectedUsers.some((userItem) => userItem.id === user.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetch(
        `https://dummyjson.com/users/search?q=${debouncedVal}`
      );
      const dataJson = await data.json();
      setData(dataJson.users);
      setIsLoading(false);
    };

    fetchData();
  }, [debouncedVal]);

  return {
    data,
    isLoading,
    searchTerm,
    setSearchTerm,
    handleSelect,
    handleRemoveSelected,
    isSelected,
    selectedUsers,
    debouncedVal,
  };
}

export default useMultiSelectSearch;
