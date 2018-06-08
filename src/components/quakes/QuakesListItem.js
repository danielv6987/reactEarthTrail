import React from "react";
import moment from "moment";

const QuakesListItem = ({datetime, depth, magnitude}) => {
    return (
        <div className="card quakeItem notification is-danger">
            <header className="card-header quakeTitle">
                <p className="card-header-title">
                    {moment(datetime).format("MMMM DD, YYYY - HH:mm A")}
                </p>
                <p></p>
            </header>

            <div className="card-content">
                <div className="content">
                    <p className="subtitle">Magnitude: {magnitude}</p>
                    <p className="subtitle">Depth: {depth}</p>
                </div>
            </div>
        </div>
    )
}

export default QuakesListItem;
