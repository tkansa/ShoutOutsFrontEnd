import { fetchShoutOuts, postShoutOut } from "../ShoutOutService";
import { useEffect, useState } from "react";
import { ShoutOut } from "../models/ShoutOut";
import ShoutOutForm from "./ShoutOutForm";
import { Link } from "react-router-dom";

function ShoutOuts() {

    let [shoutOuts, setShoutouts] = useState<ShoutOut[]>([]);

    useEffect(() => {
        fetchShoutOuts().then(data => {
            setShoutouts(data);
        })
    }, [])

    function handleSubmit(shoutOut: ShoutOut): void {
        setShoutouts(prev => [ ...prev, shoutOut]);
        postShoutOut(shoutOut);
    }
    return (
        <div className="ShoutOuts">
            <p>Shoutouts</p>
            <ul>
                {shoutOuts.map((s, i) =>
                <li key={i}>To:<Link to={`/user/${s.to}`}>{s.to}</Link>  - {s.message}, From: {s.from}</li>
                )

                }
            </ul>
            <ShoutOutForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default ShoutOuts;
