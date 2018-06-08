import React from "react";

const TrailActivitiesListItem = ({name,state,city}) => {
    return (
        <div className="card quakeItem notification is-primary">
            <header className="card-header trailTitle">
                <p className="card-header-title">
                    {name}
                </p>
                <p></p>
            </header>

            <div className="card-content">
                <div className="content">
                    <p className="subtitle">State: {state}</p>
                    <p className="subtitle">City: {city}</p>
                </div>
            </div>
        </div>
    )
}

export default TrailActivitiesListItem;