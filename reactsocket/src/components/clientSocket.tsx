import React, {  useMemo, useState } from 'react';
import Socket from '../services/socket'

const ClientSocket = () => {
    const [response, setResponse] = useState("");
  const socketConnect =  useMemo(()=>{
        const socket = Socket();
        socket.on("FromAPI", (data: string) => {
            setResponse(data)
        })
    },[])


    return (
        <div>
            <h2>Contando : {response}</h2>
        </div>
    )
}

export default ClientSocket;