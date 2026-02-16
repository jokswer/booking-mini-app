import { Layout, AddButton } from "components";
import { useAppNavigation } from "navigation";

import { GamesList, Header } from "./components";

export const HomePage = () => {
  const { goToCreateGame } = useAppNavigation();
  return (
    <Layout>
      <Header />
      <GamesList />
      <AddButton
        className="fixed bottom-5 right-5 z-50"
        onClick={goToCreateGame}
      />
    </Layout>
  );
};
