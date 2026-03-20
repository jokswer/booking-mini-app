import React from 'react'
import { BackButton } from "@twa-dev/sdk/react";

import { GameSystemsSellercot, Layout, Modal, AddedTimeSlote } from "components";
import { useAppNavigation } from "navigation";

export const CreateGamePage = () => {

  const [showModal, setShowModal] = React.useState<boolean>(false)

  const { goBack } = useAppNavigation();
  return (
    <Layout>
      Создать игру
      <BackButton onClick={goBack} />
      <button
        onClick={() => setShowModal(true)}
      >
        Выбрать типы игры
      </button>
      <Modal
        onClose={() => {
          setShowModal(false)
        }}
        isOpen={showModal}
      >
        {/* <GameSystemsSellercot
          types={[{
            typesId: "1",
            shortName: "wh 40k",
            fullName: "Warhammer 40k"
          },
          {
            typesId: "2",
            shortName: "KT",
            fullName: "Kill Team"
          },
          {
            typesId: "3",
            shortName: "AoS",
            fullName: "Age of Sigmar"
          }]}
          selected={[]}
          onClose={() => setShowModal(false)}
          onSelect={(types) => setShowModal(false)}
        /> */}
        <AddedTimeSlote
          date={'10 февраля'}
          dayWeek={'Чт'}
          timeSlotes={[
            {
              id: "0",
              title: 'Утро'
            }, {
              id: "1",
              title: 'День'
            }, {
              id: "2",
              title: 'Вечер'
            },
          ]}
          selected={["1", "2"]}
          onSelect={() => {

          }}
          onDelete={() => {

          }}
        />
      </Modal>
    </Layout>
  );
};
