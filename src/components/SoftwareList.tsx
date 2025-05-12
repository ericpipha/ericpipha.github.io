import * as React from "react";

type softwareListProp = {
    list: publication[]
}

let PublicationList = ({ list }: softwareListProp) => {
    return (
        <div className="list">
            {list.map((software) => (
                <div className="publication">
                    {software.img_url == undefined ? null :
                        <div className="icon">
                            <img
                                src={software.img_url}
                                alt={software.img_description == undefined ? software.img_description : software.title}
                                className="icon"
                            />
                        </div>
                    }
                    <div className="text">
                        <div className="header">
                            <span className="title">
                                {software.url == undefined ? software.title : <a href={software.url}>{software.title}</a>}
                            </span>
                        </div>
                        {software.authors == undefined ? null :
                            <div className="authors">
                                {software.authors.sort((a, b) => a.lastname>b.lastname?1:-1).map(({ firstname, lastname }, index) =>
                                    <span>{firstname} <span className="big">{lastname}</span>{index == software.authors.length - 1 ? '' : ', '}</span>
                                )}
                            </div>
                        }
                        <div className="abstract">
                            <p>{software.abstract}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PublicationList