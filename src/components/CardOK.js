import React from 'react'

function CardOK(props) {
    return (
        <div className={"col h-100 mx-1 my-2 rounded order-" + props.order}>
                <div className="card h-100 w-100 shadow-lg text-center">
                    <div className="card-header h5">
                        {props.name.toUpperCase()}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title bg-success text-white p-1 rounded-2"> {props.apiHealthStatus}</h5>
                        <p className="card-text">{props.hostname}</p>
                    </div>
                    <div className="card-footer text-muted">
                        {props.time}
                    </div>
                </div>
        </div>
    )
}

export default CardOK
