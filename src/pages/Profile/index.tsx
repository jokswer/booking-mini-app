import WebApp from "@twa-dev/sdk";
import { BackButton } from "@twa-dev/sdk/react";

import { Layout } from "components";
import { useAppNavigation } from "navigation";

export const ProfilePage = () => {
  const { goBack } = useAppNavigation();
  return (
    <Layout>
      {Object.entries(WebApp.initDataUnsafe.user ?? {}).flatMap(
        ([key, value]) => (
          <div className="flex gap-1.5 text-primary-text">
            <div>{key}:</div>
            <div>{String(value)}</div>
          </div>
        ),
      )}
      <BackButton onClick={goBack} />
    </Layout>
  );
};
