import React from 'react'

function CardFailed(props) {
  return (
    <div className='mx-3 my-2'>
                <div className="">
                    <div className={" rounded order-" + props.order}>
                         <div className="card shadow-lg  text-center">
                            <div className="card-header  h4">
                                {props.name.toUpperCase()}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title bg-danger text-white p-1"> {props.message}</h5>
                                <p className="card-text text-danger h5">{props.errMessage}</p>
                            </div>
                            <div className="card-footer text-muted">
                                {props.status} 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
  )
}

export default CardFailed
