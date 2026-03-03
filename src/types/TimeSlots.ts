import type { GAME_LEVEL } from "constants";

export type GameLevelKey = keyof typeof GAME_LEVEL;

export type GameSystem = {
  name: string;
  level: GameLevelKey; // "JUNIOR" | "MIDDLE" | "SENIOR"
};

export type PlayerEntry = {
  userAvatar: string;
  userName: string;
  systems: GameSystem[];
};

export type TimePeriod = "Утро" | "День" | "Вечер";

export type TimeSlot = {
  timeSlotsPeriod: TimePeriod;
  games: PlayerEntry[];
};

export type DaySchedule = {
  date: Date;
  timeSlots: TimeSlot[];
};
