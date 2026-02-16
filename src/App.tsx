import { Routes, Route } from "react-router";
import WebApp from "@twa-dev/sdk";

import { CREATE_GAME, HOME, PROFILE } from "navigation";
import { HomePage, ProfilePage, CreateGamePage } from "pages";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <Routes>
      <Route index path={HOME} element={<HomePage />} />
      <Route path={PROFILE} element={<ProfilePage />} />
      <Route path={CREATE_GAME} element={<CreateGamePage />} />
    </Routes>
  );
};

export default App;
