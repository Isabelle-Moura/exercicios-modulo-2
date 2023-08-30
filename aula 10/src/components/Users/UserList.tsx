import User from "./User";

interface Users {
  users: User[];
}

const UserList = ({ users }: Users) => {
  return (
    <div>
      {users.map((item) => (
        <User user={item} key={item.id} />
      ))}
    </div>
  );
};

export default UserList;
