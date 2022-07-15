import { SearchUser } from "../components/SearchUser";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export function SearchUserPage() {
  const { storeUser } = useContext(AppContext);

  const handleSubmit = (formState) => {
    storeUser(formState);
  };

  return (
    <div className="sign-in-page">
      <SearchUser onSubmit={handleSubmit} />
    </div>
  );
}
