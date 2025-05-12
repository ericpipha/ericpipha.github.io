import * as React from "react";
const ContactMeHref = React.lazy(() => import("./ContactMeHref"));

export interface IContactMeGateProps { }

// Make user click a button to show email adderss via lazy loading
export const ContactMeGate: React.FC<IContactMeGateProps> = props => {
    const [showingEmail, setShowingEmail] = React.useState(false);

    let email = showingEmail ? (
        <ContactMeHref />
    ) : (
        <a
            onClick={() => setShowingEmail(true)}
            className="btn"
        >
            Click to reveal
        </a>
    );
    return (
        <React.Suspense fallback={<span>loading...</span>}>
            {email}
        </React.Suspense>
    );
};

export default ContactMeGate;