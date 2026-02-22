import { Layout } from "components";
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

const GameCollapsis: React.FC<ISlotGame> = (game: ISlotGame) => {
    const [isExpanded, setIsExpanded] = React.useState(false);


    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="collapsible-section">
            {/* The button or div that triggers the collapse on click */}
            <button onClick={toggleCollapse} className="toggle-button" aria-expanded={isExpanded}>
                {game.type_title}
                <span>{isExpanded ? ' ▼' : ' ►'}</span>
            </button>

            {/* The content div - visibility controlled by the state */}
            <div className={`collapse-content ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <div className="content-inner">
                    {game.describtion}
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
                {
                    data.map((autor) => {
                        return (
                            <section>
                                <div>
                                    <img src={autor.avatar} width={48} height={48}/>
                                    <h2>{autor.username}</h2>
                                </div>
                                <section>
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
        </Layout>
    );
};
