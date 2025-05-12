import * as React from "react";
import { dateToString, sortDates } from "./Util";

type talkListProp = {
    list: talk[]
}

let TalkList = ({ list }: talkListProp) => {
    return (
        <div className="list">
            {list.sort((t1,t2) => sortDates(t1.date, t2.date)).map((talk) => (
                <div className="talk">
                    {talk.img_url == undefined ? null :
                        <div className="icon">
                            <img
                                src={talk.img_url}
                                alt={talk.img_description == undefined ? talk.img_description : talk.title}
                                className="icon"
                            />
                        </div>
                    }
                    <div className="text">
                        <div className="header">
                            <span className="title">
                                {talk.url == undefined ? talk.title : <a href={talk.url}>{talk.title}</a>}
                            </span>
                        </div>
                        <div className="footer">
                            {talk.status == undefined ? null : <span className="date">{talk.status}</span>}
                            {talk.location == undefined ? null : talk.location_url == undefined ? <span className="location">{talk.location}</span> : <span className="location"><a href={talk.location_url}>{talk.location}</a></span>}
                            <span className={talk.date!=undefined && talk.date.getTime()>Date.now()?"date future":"date"}>{talk.date == undefined ? "TBA" : dateToString(talk.date)}</span>
                            {talk.pdf == undefined ? null : <span className="pdf"><a href={talk.pdf}>(pdf)</a></span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TalkList