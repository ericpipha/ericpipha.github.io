import * as React from "react";
import * as ReactDOM from "react-dom";
import Section from "./components/Section";
import Banner from "./components/Banner";
import PublicationList from "./components/PublicationList";
import TalkList from "./components/TalkList";
import SoftwareList from "./components/SoftwareList";
import ContactMeGate from "./components/ContactMeGate";
import './index.css';
import './publication.css';
import './talk.css';
// import './pdfs/phd_thesis_eric_pichon_pharabod.pdf'

import talks from "./data/talks";
import publications from "./data/publications";
import software from "./data/software";

ReactDOM.render(
  <div>
    <Banner title="Eric Pichon-Pharabod's personal webpage" />
    <Section title="About me">
      <p>
        I am a postdoctoral researcher at the <a href="https://www.mis.mpg.de/numerical-algebraic-geometry">Numerical algebraic geometry group</a> of the <a href="https://www.mis.mpg.de">Max-Planck institute for Mathematics in the Sciences, Leipzig</a>. 
      </p>
      <p>
        I completed my PhD at Université Paris-Saclay, in <a href="https://mathexp.eu/">team MATHEXP</a> (<a href="https://specfun.inria.fr/">previously SpecFun</a>) at Inria Saclay,
      under the supervision of <a href="http://pierre.lairez.fr/">Pierre Lairez</a> and <a href="https://pierrevanhove.github.io/">Pierre Vanhove</a>.
        I defended my PhD thesis on Friday September 27th.
        You may <a href={require('./pdfs/phd_thesis_eric_pichon_pharabod.pdf')}>read my thesis manuscript here</a>.
        You may <a href={require('./pdfs/slides_defence_eric_pichon_pharabod.pdf')}>read the slides of the defence here</a>.
      </p>
      <p>
        I am coorganising the <a href="https://positive-geometry.com/events/online-seminars">Universe+ online seminar</a>.
      </p>
      <p>
        Aside from mathematics, I enjoy cooking, running and occasionally playing the viola.
      </p>
    </Section>
    <Section title="Research interests">
      <p>
        My interests lie in algebraic geometry and topology, experimental mathematics and computer algebra.
        I am working on efficient algorithms for computing numerical approximations of periods of algebraic varieties.
      </p>
    </Section>
    <Section title="Publications and preprints">
      <PublicationList list={publications} />
    </Section>
    <Section title="Software">
      <SoftwareList list={software} />
    </Section>
    <Section title="Talks">
      <TalkList list={talks} />
    </Section>
    <Section title="Contact me">
      <p> You may contact me at <ContactMeGate />.</p>
    </Section>
  </div>,
  document.getElementById("root")
);
