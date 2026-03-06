import { AddButton, Layout } from "components";
import { useAppNavigation } from "navigation";

import { Header, TimeSlotsList } from "./components";

export const HomePage = () => {
  const { goToCreateGame } = useAppNavigation();
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
