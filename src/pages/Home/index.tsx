// import { useEffect } from "react";
import { AddButton, Layout } from "components";
import { useAppNavigation } from "navigation";

import { Header, TimeSlotsList } from "./components";

export const HomePage = () => {
  const { goToCreateGame } = useAppNavigation();
  // const test = async () => {
  //   const response = await fetch(
  //     "https://2.62.124.124:35000/WahaKem/hs/v1/test",
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Basic 0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YA6fWpEZX4/YTZ8QUQ3`,
  //       },
  //     },
  //   );

  //   console.log({response});
  // };

  // useEffect(() => {
  //   test();
  // }, []);

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
