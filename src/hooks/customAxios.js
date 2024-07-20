import axios from "axios";
import {useState} from "react";

export function useAxios() {

    const [response, setResponse] = useState("");

    function axois123() {
        axios.get('/username.json')
            .then(function(response) {
                console.log(response.data.name)
                setResponse(response.data.namexc);
            })
            .catch(function(error) {
                console.error('Error posting data:', error);
            })
    }
    return [response,axois123]
}