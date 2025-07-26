import React from 'react';

const BoxSx: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
    // Apply your styles here, for example:
    return <div style={{
        backgroundColor: "#f5f5f5",
        width: "100vw",
        height: "100vh",
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
    }}>{children}</div>;
};

export default BoxSx;