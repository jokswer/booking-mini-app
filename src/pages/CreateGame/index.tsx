import { BackButton } from "@twa-dev/sdk/react";

import { Layout } from "components";
import { useAppNavigation } from "navigation";

export const CreateGamePage = () => {
  const { goBack } = useAppNavigation();
  return (
    <Layout>
      Создать игру
      <BackButton onClick={goBack} />
    </Layout>
  );
};
