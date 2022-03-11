import React from 'react'

function CardFailed(props) {
  return (
    <div className={"col h-100 mx-1 my-2 rounded order-" + props.order}>
                         <div className="card h-100 w-100 shadow-lg  text-center">
                            <div className="card-header h5">
                                {props.name.toUpperCase()}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title bg-danger text-white p-1"> {props.message}</h5>
                                <p className="card-text text-danger h6">{props.errMessage}</p>
                            </div>
                            <div className="card-footer text-muted">
                                {props.status} 
                            </div>
                        </div> 
            </div>
  )
}

export default CardFailed
