import { GAME_LEVEL } from "constants";
import type { DaySchedule } from "types";

export const MOCK_GAMES: DaySchedule[] = [
  {
    date: new Date(),
    timeSlots: [
      {
        timeSlotsPeriod: "Утро",
        games: [
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [
              { name: "WH 40K", level: Object.keys(GAME_LEVEL)[0] },
              { name: "KT", level: Object.keys(GAME_LEVEL)[1] },
            ],
          },
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [{ name: "WH 40K", level: Object.keys(GAME_LEVEL)[2] }],
          },
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [{ name: "AOS", level: Object.keys(GAME_LEVEL)[2] }],
          },
        ],
      },
      {
        timeSlotsPeriod: "День",
        games: [
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [
              { name: "WH 40K", level: Object.keys(GAME_LEVEL)[0] },
              { name: "KT", level: Object.keys(GAME_LEVEL)[1] },
            ],
          },
        ],
      },
      {
        timeSlotsPeriod: "Вечер",
        games: [
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [
              { name: "WH 40K", level: Object.keys(GAME_LEVEL)[0] },
              { name: "KT", level: Object.keys(GAME_LEVEL)[1] },
            ],
          },
        ],
      },
    ],
  },
  {
    date: new Date(),
    timeSlots: [
      {
        timeSlotsPeriod: "Утро",
        games: [
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [
              { name: "WH 40K", level: Object.keys(GAME_LEVEL)[0] },
              { name: "KT", level: Object.keys(GAME_LEVEL)[1] },
            ],
          },
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [{ name: "WH 40K", level: Object.keys(GAME_LEVEL)[2] }],
          },
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [{ name: "AOS", level: Object.keys(GAME_LEVEL)[2] }],
          },
        ],
      },
      {
        timeSlotsPeriod: "День",
        games: [
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [
              { name: "WH 40K", level: Object.keys(GAME_LEVEL)[0] },
              { name: "KT", level: Object.keys(GAME_LEVEL)[1] },
            ],
          },
        ],
      },
      {
        timeSlotsPeriod: "Вечер",
        games: [
          {
            userAvatar: "https://placehold.co/48x48/000000/FFFFFF/svg",
            userName: "Петя Васькин",
            systems: [
              { name: "WH 40K", level: Object.keys(GAME_LEVEL)[0] },
              { name: "KT", level: Object.keys(GAME_LEVEL)[1] },
            ],
          },
        ],
      },
    ],
  },
];
