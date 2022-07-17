import { SearchForm } from "./components/SearchForm/SearchForm";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { useState } from "react";

function App() {
  const [userState, setUserState] = useState(null);

  const handleOnSubmit = (choosenUser) => {
    setUserState(choosenUser);
  }
  const clearSearch = () => {
    setUserState(null);
  }

  return (
    <div className="App">
      {!userState && <SearchForm username={handleOnSubmit}></SearchForm>}
      {userState && <UserInfo reset={clearSearch} user={userState}></UserInfo>}
    </div>
  );
}
export default App;