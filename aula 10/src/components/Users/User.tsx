interface UserProps {
  user: User;
}

const User = ({ user }: UserProps) => {
  return (
    <>
      <h2>Nome: {user.name}</h2>
      <h4>Idade: {user.age}</h4>
      {user.email ? (
        <h4>E-mail: {user.email}</h4>
      ) : (
        `O usuário ${user.id} não possui e-mail!`
      )}
    </>
  );
};

export default User;
