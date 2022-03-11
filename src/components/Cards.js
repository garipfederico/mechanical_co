import Card from './card'

export default function Cards() {
    // SET VARIABLES FROM HERE
    // Name of API´S
    const API_Names = ["accounts", "assets", "customers", "datapoints",
        "devices", "documents", "forms", "invites", "media", "messages",
        "namespaces", "orders", "patients", "relationships", "rules", "templates",
        "users", "workflows"]

    // Time to refresh/update the info from server (in seconds)
    const secondsToUpdate = 15


    return (
        <div className="d-flex align-content-start justify-content-start flex-wrap">
        {/* <div className="container "> */}
            {API_Names.map((names, index) =>
            <Card   name={names}
                    secondsToUpdate={secondsToUpdate}
                    order={index}
                    key={index} />)}
        </div>
    )
}


