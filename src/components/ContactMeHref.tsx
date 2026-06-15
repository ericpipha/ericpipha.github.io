import * as React from "react";

export interface IContactMeHrefProps { }

export const ContactMeHref: React.FC<IContactMeHrefProps> = props => {
    return (
        <a href="mailto:eric.pichon-pharabod@maths.ox.ac.uk">
            eric.pichon-pharabod@maths.ox.ac.uk
        </a>
    );
};

export default ContactMeHref;