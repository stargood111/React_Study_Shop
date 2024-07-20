import {useState} from "react";

export function useLike(){
    const [like, setLike] = useState(0);
    function addLike(){
        setLike(a => a + 1)
    }
    return [like, addLike];
}

