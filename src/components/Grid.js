import CardGeneric from './CardGeneric'

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
        // <div className="d-flex align-content-start justify-content-start flex-wrap">
        //This will create a grid component and then for each name in the API_Names will create a 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-4 mx-2 p-4 ">
            {API_Names.map((names, index) =>
            <CardGeneric   name={names}
                    secondsToUpdate={secondsToUpdate}
                    order={index}
                    key={index} />)}
        </div>
    )
}


