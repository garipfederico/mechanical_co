import Card from './card'

export default function Cards() {
    let API_NAMES = ["accounts", "assets", "customers", "datapoints",
        "devices", "documents", "forms", "invites", "media", "messages",
        "namespaces", "orders", "patients", "relationships", "rules", "templates",
        "users", "workflows"]

    return (
        <div>
        <div className="d-flex align-content-start justify-content-start flex-wrap">
            {API_NAMES.map((names, index) => <Card name={names} order={index} />)}
            </div>
        </div>
    )
}


