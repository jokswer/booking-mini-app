import { Routes, Route } from "react-router";
import WebApp from "@twa-dev/sdk";

import { CREATE_GAME, HOME, PROFILE, SLOT } from "navigation";
import { HomePage, ProfilePage, CreateGamePage } from "pages";
import { useEffect } from "react";
import { Slot } from "pages/Slotes";

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
      <Route path={SLOT} element={<Slot />} />
    </Routes>
  );
};

export default App;
