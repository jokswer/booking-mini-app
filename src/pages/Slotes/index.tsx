import { Layout } from "components";
import React from "react";
import arrowDown from "assets/arrowDown.svg";
import arrowUp from "assets/arrowUp.svg";

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

const GameCollapsis: React.FC<ISlotGame> = (game: ISlotGame) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const onConnectToGame = (game: ISlotGame) => {

    }

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

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
        <div
            style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: "rgba(145, 158, 171, 0.08)",
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* The button or div that triggers the collapse on click */}
            <button
                onClick={toggleCollapse}
                // className="toggle-button"
                aria-expanded={isExpanded}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 1,
                        gap: 4,
                    }}
                >
                    {game.type_title}
                    {!isExpanded ?
                        <div
                            style={{
                                height: 6,
                                width: 6,
                                borderRadius: 6,
                                backgroundColor: colorForLevel(game.level)
                            }}
                        />
                        :
                        <div />
                    }
                </div>
                <img
                    src={isExpanded ? arrowUp : arrowDown}
                    height={3.33 * 2}
                    width={6.66 * 2}
                />
            </button>
            <div
                className={`collapse-content ${isExpanded ? 'expanded' : 'collapsed'}`}
                style={{
                    gap: 12,
                }}
            >
                <h3
                    style={{
                        color: colorForLevel(game.level),
                        marginTop: 12
                    }}
                >
                    {titleForLevel(game.level)}
                </h3>
                <div >
                    {game.describtion}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        marginTop: 16,
                        marginBottom: 16
                    }}
                >
                    <button
                        onClick={() => onConnectToGame(game)}
                        style={{
                            flex: 1,
                            backgroundColor: '#E94817',
                            height: 48,
                            padding: 7,
                            borderRadius: 8
                        }}
                    >
                        Подключиться
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Slot: React.FC = () => {
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
                                        <img
                                            src={autor.avatar}
                                            width={48}
                                            height={48}
                                            style={{
                                                borderRadius: 24,
                                                height: 48,
                                                objectFit: 'contain'
                                            }}

                                        />
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
                                                <GameCollapsis {...gameSlot} />
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
