import * as React from "react";
import { dateToString, sortDates } from "./Util";

type publicationListProp = {
    list: publication[]
}

let PublicationList = ({ list }: publicationListProp) => {
    return (
        <div className="list">
            {list.sort((p1, p2) => sortDates(p1.date, p2.date)).map((publication, index) => (
                <div className="publication">
                    {publication.img_url == undefined || index%2==1 ? null :
                        <div className="icon">
                            <img
                                src={publication.img_url}
                                alt={publication.img_description == undefined ? publication.img_description : publication.title}
                                className="icon"
                            />
                        </div>
                    }
                    <div className="text">
                        <div className="header">
                            <span className="title">
                                {publication.url == undefined ? publication.title : <a href={publication.url}>{publication.title}</a>}
                            </span>
                        </div>
                        {publication.authors == undefined ? null :
                            <div className="authors">
                                {publication.authors.sort((a, b) => a.lastname>b.lastname?1:-1).map(({ firstname, lastname, homepage_url }, index) => {
                                    const name = <span>{firstname} <span className="big">{lastname}</span></span>;
                                    return <span>
                                        {homepage_url == undefined ? name: <a href={homepage_url}>{name}</a>}
                                        {index == publication.authors.length - 1 ? '' : ', '}
                                    </span>
                                })}
                            </div>
                        }
                        <div className="abstract">
                            <p>{publication.abstract}</p>
                        </div>
                        <div className="footer">
                            {publication.status == undefined ? null : <span className="date">{publication.status}</span>}
                            <span className="date">{publication.date == undefined ? "TBA": dateToString(publication.date)}</span>
                            {publication.pdf == undefined ? null : <span className="pdf"><a href={publication.pdf}>(pdf)</a></span>}
                        </div>
                    </div>
                    {publication.img_url == undefined || index%2==0 ? null :
                        <div className="icon">
                            <img
                                src={publication.img_url}
                                alt={publication.img_description == undefined ? publication.img_description : publication.title}
                                className="icon"
                            />
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default PublicationList