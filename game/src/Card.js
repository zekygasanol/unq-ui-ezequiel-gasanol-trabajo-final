import React from "react"

const Card = (props) => {
    return(
        <>
            <div className="card" onClick = {() => {props.onClick(props.value)}}>
                <div className="card-header">
                    <h5>{props.name}</h5>
                </div>
                <img className="card-img-top" id={`${props.name}-img`} src={props.img} alt={props.name}/>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default Card; 