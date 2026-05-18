import React from "react";

import plusIcon from "assets/plus.svg";

import {
  AddedTimeSlote,
  AddSystem,
  Button,
  Calendar,
  CloseButton,
  GameSystemsSellercot,
  Header,
  Layout,
  Modal,
  Select,
  type ITimeSloteItem,
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

const timeSlotsMOCK: ITimeSloteItem[] = [
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
]

type IGameSystem = {
  typesId: string;
  lvlId: string;
  description: string;
}

type ITimeSlote = {
  date: string;
  timeSlots: string[];
};

function parseISOLocalDate(isoDate: string): Date {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDateLong(isoDate: string): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
  }).format(parseISOLocalDate(isoDate));
}

function formatWeekdayShort(isoDate: string): string {
  const label = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(
    parseISOLocalDate(isoDate),
  );
  const trimmed = label.replace(/\.$/, "");
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export const CreateGamePage = () => {
  const [showModalTimeSlote, setShowModalTimeSlote] =
    React.useState<boolean>(false);
  const [showModalGameSystems, setShowModalGameSystems] =
    React.useState<boolean>(false);

  const [gameSystems, setGameSystems] = React.useState<{
    [key: string]: IGameSystem
  }>({})

  const [timeSlotes, setTimeSlotes] = React.useState<ITimeSlote[]>([]);

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
          {timeSlotes.map(timeSlote => (
            <AddedTimeSlote
              key={timeSlote.date}
              date={formatDateLong(timeSlote.date)}
              dayWeek={formatWeekdayShort(timeSlote.date)}
              timeSlotes={timeSlotsMOCK}
              selected={timeSlote.timeSlots}
              onSelect={(slot) => {
                setTimeSlotes(
                  timeSlotes.map((entry) => {
                    if (entry.date !== timeSlote.date) return entry;
                    const isSelected = entry.timeSlots.includes(slot.id);
                    return {
                      ...entry,
                      timeSlots: isSelected
                        ? entry.timeSlots.filter((id) => id !== slot.id)
                        : [...entry.timeSlots, slot.id],
                    };
                  }),
                );
              }}
              onDelete={() => {
                setTimeSlotes(
                  timeSlotes.filter((entry) => entry.date !== timeSlote.date),
                );
              }}
            />
          ))}
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
        <Calendar
          onClose={() => {
            setShowModalTimeSlote(false);
          }}
          onAdd={(dates) => {
            setTimeSlotes(dates.map(date => ({
              date: date,
              timeSlots: timeSlotes.find(timeSlote => timeSlote.date === date)?.timeSlots ?? [],
            })));
            setShowModalTimeSlote(false);
          }}
          value={timeSlotes.map(timeSlote => timeSlote.date)}
          defaultValue={[]}
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
