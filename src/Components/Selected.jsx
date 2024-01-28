export const Selected = ({ selectedUsers, onClick }) => {
  return selectedUsers.map((user) => (
    <span
      className="bg-amber-100 p-2 cursor-pointer select-none flex gap-1 items-center"
      key={user?.id}
      onClick={() => onClick(user.id)}
    >
      <img src={user.image} className="w-[25px] h-[25px] rounded" alt="" />
      {user?.firstName}
    </span>
  ));
};
export default Selected;
