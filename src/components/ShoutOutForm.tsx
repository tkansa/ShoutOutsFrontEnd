import { FormEvent, useState } from "react";
import { ShoutOut } from "../models/ShoutOut";

interface Props {
    onSubmit: (shoutOut: ShoutOut) => void;
}

function ShoutOutForm({onSubmit}: Props) {
    let [ to, setTo ] = useState("");
    let [ from, setFrom ] = useState("");
    let [ message, setMessage ] = useState("");
    function handleAdd(e: FormEvent){
        e.preventDefault();
        let shoutOut: ShoutOut = {to: to, from: from, message: message};
        onSubmit(shoutOut);
        setTo("");
        setFrom("");
        setMessage("");
    }
    return (
      <div className="ShoutOutForm">
          <form onSubmit={handleAdd}>
              To:<input type="text" value={to} onChange={e => setTo(e.target.value)}/>
              From:<input type="text" value={from} onChange={e => setFrom(e.target.value)}/>
              Message:<input type="text" value={message} onChange={e => setMessage(e.target.value)}/>
              <button type="submit">Submit Shout Out!</button>
          </form>
        
      </div>
    );
  }
  
  export default ShoutOutForm;