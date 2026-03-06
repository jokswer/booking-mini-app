import { useEffect } from "react";
import { Route, Routes } from "react-router";

import WebApp from "@twa-dev/sdk";

import { CREATE_GAME, HOME, PROFILE, SLOT } from "navigation";
import { CreateGamePage, HomePage, ProfilePage, Slot } from "pages";

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
