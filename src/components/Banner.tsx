import * as React from "react";

type BannerProp = {
    title: string
}

let Banner = ({title }: BannerProp): JSX.Element => {
    return (
        <div className="banner">
            <h1>{title}</h1>
        </div>
    );
}

export default Banner