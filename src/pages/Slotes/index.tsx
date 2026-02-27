import { Avatar, Layout, GameSlotLine } from "components";
import React from "react";

interface ISlot {
    user_id: string;
    username: string;
    avatar: string;
    date: string;
    games: ISlotGame[]
}

interface ISlotGame {
    id: string;
    type: string;
    type_title: string;
    level: number;
    max_gamers: number;
    current_gamers: number;
    describtion: string;
}

const data: ISlot[] = [
    {
        user_id: "1212",
        username: "Игрок автор",
        avatar: "https://m.media-amazon.com/images/I/41npFt3HB1L.jpg",
        date: "13.02.2026",
        games: [
            {
                id: "121212",
                type: "wh_40",
                type_title: "Warhammer 40k",
                level: 1,
                max_gamers: 2,
                current_gamers: 1,
                describtion: "Великий пожиратель хочет кушать, скидываемся на поёк"
            },
            {
                id: "1333",
                type: "kt",
                type_title: "Kill Team",
                level: 1,
                max_gamers: 2,
                current_gamers: 1,
                describtion: "Пу-пу-пу, у меня только терраниды, больше ни кем не играю"
            }
        ]
    },
    {
        user_id: "1521",
        username: "Игрок автор 2",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh68xHpPnRUqYPpHd2qR45McvM2zOi-f3MPg&s",
        date: "13.02.2026",
        games: [
            {
                id: "121212",
                type: "wh_40",
                type_title: "Warhammer 40k",
                level: 1,
                max_gamers: 2,
                current_gamers: 1,
                describtion: "Великий пожиратель хочет кушать, скидываемся на поёк"
            },
            {
                id: "1333",
                type: "kt",
                type_title: "Kill Team",
                level: 1,
                max_gamers: 2,
                current_gamers: 1,
                describtion: "Пу-пу-пу, у меня только терраниды, больше ни кем не играю"
            }
        ]

    }
]

export const Slot: React.FC = () => {

    const colorForLevel = (level: number) => {
        switch (level) {
            case 0:
                return '#22C55E'
            case 1:
                return '#FFAB00'
            case 2:
                return '#FF5630'
            default:
                return 'black'
        }
    }

    const titleForLevel = (level: number) => {
        switch (level) {
            case 0:
                return 'Начальный уровень'
            case 1:
                return 'Средний уровень'
            case 2:
                return 'Экстерминатус на ножках'
            default:
                return ''
        }
    }

    return (
        <Layout>
            <div className="mt-6">
                <h1 className="text-lg text-primary-text font-semibold">
                    13 февраля - Вечер
                </h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16
                    }}
                >
                    {
                        data.map((autor) => {
                            return (
                                <section
                                    style={{
                                        backgroundColor: "#26303A",
                                        padding: 16,
                                        gap: 16,
                                        borderRadius: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: 14
                                        }}
                                    >
                                        <Avatar url={autor.avatar} />
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <h2

                                            >
                                                {autor.username}
                                            </h2>
                                        </div>
                                    </div>
                                    <section
                                        style={{
                                            display: 'flex',
                                            gap: 8,
                                            flexDirection: 'column'
                                        }}
                                    >
                                        {autor.games.map((gameSlot) => {
                                            return (
                                                <GameSlotLine
                                                    title={gameSlot.type_title}
                                                    describtion={gameSlot.describtion}
                                                    onAction={() => { }}
                                                    colorLevel={colorForLevel(gameSlot.level)}
                                                    titleLevel={titleForLevel(gameSlot.level)}
                                                    actionTitle={"Принять вызов"}
                                                />
                                            )
                                        })}
                                    </section>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    );
};
