import React from "react";
import "./paragraph.css";

const Paragraph = ({ children, color }) => {
    return (
        <p style={{ textTransform: "uppercase", color: color }}>
            { children }
        </p>
    );
};

Paragraph.defaultProps = {
    color: 'lightcoral'
}

export default Paragraph;