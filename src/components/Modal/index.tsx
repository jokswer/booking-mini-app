import React, { type ReactNode } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#161C24CC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
            }}
            onClick={onClose}
        >
            <div
                style={{
                    maxWidth: '90%',
                    maxHeight: '80vh',
                    overflow: 'auto'
                }}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};