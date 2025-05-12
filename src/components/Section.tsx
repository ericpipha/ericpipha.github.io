import * as React from "react";

type SectionProp = {
    children?: JSX.Element | JSX.Element[],
    title: string
}

let Section = ({ children, title }: SectionProp): JSX.Element => {
    return (
        <div className="section">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

export default Section