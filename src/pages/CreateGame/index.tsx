import React from "react";

import { BackButton } from "@twa-dev/sdk/react";

import plusIcon from "assets/plus.svg";

import {
  AddedTimeSlote,
  GameSystemsSellercot,
  Layout,
  Modal,
} from "components";
import { useAppNavigation } from "navigation";

export const CreateGamePage = () => {
  const [showModalTimeSlote, setShowModalTimeSlote] =
    React.useState<boolean>(false);
  const [showModalGameSystems, setShowModalGameSystems] =
    React.useState<boolean>(false);

  const { goBack } = useAppNavigation();
  return (
    <Layout>
      <BackButton onClick={goBack} />
      <div
        style={{
          gap: 24,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: "700",
            verticalAlign: "middle",
          }}
        >
          Создать игру
        </p>
        <div
          style={{
            gap: 12,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={styles.title}>Игровые системы</p>
          <div>
            <button
              style={styles.button}
              onClick={() => setShowModalGameSystems(true)}
            >
              <img src={plusIcon} width={24} height={24} />
              <p>Добавить игровую систему</p>
            </button>
          </div>
        </div>
        <div
          style={{
            gap: 12,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={styles.title}>Желаемое время игры</p>
          <div>
            <button
              style={styles.button}
              onClick={() => setShowModalGameSystems(true)}
            >
              <img src={plusIcon} width={24} height={24} />
              <p>Добавить дату</p>
            </button>
          </div>
        </div>
      </div>
      <Modal
        onClose={() => {
          setShowModalGameSystems(false);
        }}
        isOpen={showModalGameSystems}
      >
        <GameSystemsSellercot
          types={[
            {
              typesId: "1",
              shortName: "wh 40k",
              fullName: "Warhammer 40k",
            },
            {
              typesId: "2",
              shortName: "KT",
              fullName: "Kill Team",
            },
            {
              typesId: "3",
              shortName: "AoS",
              fullName: "Age of Sigmar",
            },
          ]}
          selected={[]}
          onClose={() => setShowModalGameSystems(false)}
          onSelect={(types) => setShowModalGameSystems(false)}
        />
      </Modal>
      <Modal
        onClose={() => {
          setShowModalTimeSlote(false);
        }}
        isOpen={showModalTimeSlote}
      >
        <AddedTimeSlote
          date={"10 февраля"}
          dayWeek={"Чт"}
          timeSlotes={[
            {
              id: "0",
              title: "Утро",
            },
            {
              id: "1",
              title: "День",
            },
            {
              id: "2",
              title: "Вечер",
            },
          ]}
          selected={["1", "2"]}
          onSelect={() => {
            setShowModalTimeSlote(false);
          }}
          onDelete={() => {
            setShowModalTimeSlote(false);
          }}
        />
      </Modal>
    </Layout>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#919EAB52",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    verticalAlign: "middle",
  },
  blokContainer: {
    gap: 12,
    display: "flex",
    flexDirection: "column",
  },
};
