import { useEffect } from "react";

import { get } from "services";

import { AddButton, Layout } from "components";
import { useAppNavigation } from "navigation";

import { Header, TimeSlotsList } from "./components";

export const HomePage = () => {
  const { goToCreateGame } = useAppNavigation();

  useEffect(() => {
    get("hs/v1/test")
      .then((r) => console.log({ r }))
      .catch((e) => console.log({ e }));
  }, []);

  return (
    <Layout>
      <Header />
      <TimeSlotsList />
      <AddButton
        className="fixed bottom-5 right-5 z-50"
        onClick={goToCreateGame}
      />
    </Layout>
  );
};
