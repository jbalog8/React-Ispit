import { useContext, useState } from "react";
import { SearchUserPage } from "./pages/SearchUserPage";
import { AppContext } from "./contexts/AppContext";

function App() {
  const { user } = useContext(AppContext);

  const isSignedIn = user !== null;

  return (
    <div>

      {!isSignedIn && <SearchUserPage />}
    </div>
  );
}

export default App;
