import * as React from "react";

export interface IContactMeHrefProps { }

export const ContactMeHref: React.FC<IContactMeHrefProps> = props => {
    return (
        <a href="mailto:eric.pichon@mis.mpg.de">
            eric.pichon@mis.mpg.de
        </a>
    );
};

export default ContactMeHref;