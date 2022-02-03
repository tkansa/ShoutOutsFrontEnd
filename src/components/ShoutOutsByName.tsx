import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ShoutOut } from "../models/ShoutOut";
import { fetchShoutOutsByName } from "../ShoutOutService";

function ShoutOutsByName() {
    let [shoutOuts, setShoutouts] = useState<ShoutOut[]>([]);
    const name: string = useParams().name!;

    useEffect(() => {
        fetchShoutOutsByName(name).then(data => {
            setShoutouts(data);
        })
    }, [name])
  return (
    <div className="ShoutOutsByName">
        <h1>Shout Outs for {name}</h1>
      <ul>
          {shoutOuts.map((s, i) =>
            <li key={i}>To:<Link to={`/user/${s.to}`}>{s.to}</Link>  - {s.message}, From: {s.from}</li>
          )
          }
      </ul>
    </div>
  );
}

export default ShoutOutsByName;