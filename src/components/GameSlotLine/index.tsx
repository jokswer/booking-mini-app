import { Button } from 'components';
import * as React from 'react';
import arrowDown from "assets/arrowDown.svg";
import arrowUp from "assets/arrowUp.svg";

type Props = {
    title: string;
    describtion: string;
    onAction: () => void;
    enableAction?: boolean;
    actionTitle: string;
    colorLevel: string;
    titleLevel: string;
    isAutor: boolean;
}

export const GameSlotLine: React.FC<Props> = ({
    title,
    describtion,
    onAction,
    colorLevel,
    titleLevel,
    actionTitle,
    isAutor,
    enableAction = true
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <button
            onClick={toggleCollapse}
            aria-expanded={isExpanded}
            style={{
                paddingTop: 16,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: isExpanded ? "rgba(145, 158, 171, 0.08)" : undefined,
                display: 'flex',
                flexDirection: 'column',
                borderTopWidth: 1,
                borderTopColor: "rgba(145, 158, 171, 0.16)",
            }}
        >
            <div
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
                        alignItems: 'center',
                        flex: 1,
                        gap: 4,
                    }}
                >
                    <span
                        style={{
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontWeight: 'bold',
                            verticalAlign: 'middle'
                        }}
                    >
                        {title}
                    </span>
                    {!isExpanded ?
                        <div
                            style={{
                                height: 6,
                                width: 6,
                                borderRadius: 6,
                                backgroundColor: colorLevel
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
            </div>
            <div
                className={`collapse-content ${isExpanded ? 'expanded' : 'collapsed'}`}
                style={{
                    gap: 12,
                }}
            >
                <h3
                    style={{
                        color: colorLevel,
                        marginTop: 2,
                        marginBottom: 12,
                        textAlign: 'left',
                        fontSize: 12,
                        fontWeight: 'bold',
                    }}
                >
                    {titleLevel}
                </h3>
                <p
                    style={{
                        whiteSpace: 'pre-line',
                        wordBreak: 'break-word',
                        textAlign: 'left',
                        fontSize: 14,
                        color: '#919EAB',
                        fontWeight: '500',
                    }}
                >
                    {describtion}
                </p>
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        marginTop: 16
                    }}
                >
                    <Button
                        title={actionTitle}
                        onClick={onAction}
                        enabled={enableAction}
                        grey={isAutor}
                    />
                </div>
            </div>
        </button>
    )
}