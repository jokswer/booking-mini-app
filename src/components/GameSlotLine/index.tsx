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
}

export const GameSlotLine: React.FC<Props> = ({
    title,
    describtion,
    onAction,
    colorLevel,
    titleLevel,
    actionTitle,
    enableAction = true
}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

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
            <button
                onClick={toggleCollapse}
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
                        alignItems: 'center',
                        flex: 1,
                        gap: 4,
                    }}
                >
                    {title}
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
            </button>
            <div
                className={`collapse-content ${isExpanded ? 'expanded' : 'collapsed'}`}
                style={{
                    gap: 12,
                }}
            >
                <h3
                    style={{
                        color: colorLevel,
                        marginTop: 12
                    }}
                >
                    {titleLevel}
                </h3>
                <div >
                    {describtion}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        marginTop: 16,
                        marginBottom: 16
                    }}
                >
                    <Button
                        title={actionTitle}
                        onClick={onAction}
                        enabled={enableAction}
                    />
                </div>
            </div>
        </div>
    )
}