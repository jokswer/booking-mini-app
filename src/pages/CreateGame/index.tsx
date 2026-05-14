import React from "react";

import plusIcon from "assets/plus.svg";

import {
  AddedTimeSlote,
  AddSystem,
  Button,
  CloseButton,
  GameSystemsSellercot,
  Header,
  Layout,
  Modal,
  Select,
} from "components";
import type { IGameSystemsType } from "types";

const gameSystemsMOCK: IGameSystemsType[] = [
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
]

const gameLevelsMOCK = [
  {
    lvlId: "0",
    title: "Легкий уровень",
  },
  {
    lvlId: "1",
    title: "Средний уровень",
  },
  {
    lvlId: "2",
    title: "Тяжёлый уровень",
  },

]

type IGameSystem = {
  typesId: string;
  lvlId: string;
  description: string;
}



export const CreateGamePage = () => {
  const [showModalTimeSlote, setShowModalTimeSlote] =
    React.useState<boolean>(false);
  const [showModalGameSystems, setShowModalGameSystems] =
    React.useState<boolean>(false);

  const [gameSystems, setGameSystems] = React.useState<{
    [key: string]: IGameSystem
  }>({})

  const hendlerSelectSystems = (types: IGameSystemsType[]) => {
    setShowModalGameSystems(false)
    const newSystems = types.reduce<{ [key: string]: IGameSystem }>((acc, type) => {
      if (!acc[type.typesId]) {
        acc[type.typesId] = {
          typesId: type.typesId,
          lvlId: "0",
          description: ""
        }
      }
      return acc
    }, gameSystems)
    setGameSystems(newSystems)
  }

  return (
    <Layout>
      <Header />
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
          {Object.keys(gameSystems).map(systemKey => {
            const systemData = gameSystems[systemKey];
            const systemInfo = gameSystemsMOCK.find(system => system.typesId === systemKey);
            return (
              <AddSystem
                key={systemKey}
                onDelete={() => {
                  const newGameSystems = { ...gameSystems };
                  delete newGameSystems[systemKey];
                  setGameSystems(newGameSystems);
                }}
                title={systemInfo?.fullName ?? ""}
                level={systemData.lvlId}
                description={systemData.description}
                onChange={(level, description) => {
                  const newGameSystems = { ...gameSystems };
                  newGameSystems[systemKey] = {
                    ...systemData,
                    lvlId: level,
                    description: description,
                  };
                  setGameSystems(newGameSystems);
                }}
              />
            )
          })}
          <div>
            {Object.keys(gameSystems).length < Object.keys(gameSystemsMOCK).length
              && <button
                style={styles.button}
                onClick={() => setShowModalGameSystems(true)}
              >
                <img src={plusIcon} width={24} height={24} />
                <p>Добавить игровую систему</p>
              </button>}
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
              onClick={() => setShowModalTimeSlote(true)}
            >
              <img src={plusIcon} width={24} height={24} />
              <p>Добавить дату</p>
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1
          }}
        >
          <Button
            title="Создать игру"
            onClick={() => { }}
          />
        </div>
      </div>
      <Modal
        onClose={() => {
          setShowModalGameSystems(false);
        }}
        isOpen={showModalGameSystems}
      >
        <GameSystemsSellercot
          types={gameSystemsMOCK}
          selected={Object.keys(gameSystems)}
          onClose={() => setShowModalGameSystems(false)}
          onSelect={hendlerSelectSystems}
          canDelete={false}
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
