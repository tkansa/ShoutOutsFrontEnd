import axios from "axios";
import { ShoutOut } from "./models/ShoutOut";

const baseUrl: string = "http://localhost:5001/fir-lab-a63e7/us-central1/api/shoutouts";

export function fetchShoutOuts(): Promise<ShoutOut[]>{
    // axios
    // .get<ShoutOut[]>(baseUrl)
    // .then(response => console.log(response.data));
    return axios
    .get<ShoutOut[]>(baseUrl)
    .then(response => response.data);
} 

export function fetchShoutOutsByName(name: string): Promise<ShoutOut[]>{
    return axios
    .get<ShoutOut[]>(baseUrl + "/user/" + name)
    .then(response => response.data);

}
export function postShoutOut(shoutOut: ShoutOut): Promise<ShoutOut>{
    return axios.post<ShoutOut>(baseUrl, shoutOut)
    .then(response => response.data);
}