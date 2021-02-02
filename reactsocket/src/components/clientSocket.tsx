import React, {  useMemo, useState } from 'react';
import Socket from '../services/socket'

interface UserProps {
    name:string,
    nickname: string
}

const ClientSocket = () => {
    const [response, setResponse] = useState("");
    const [showNewUser, setNewShowNewUser] = useState<UserProps>();
   useMemo(()=>{
        const socket = Socket();
        socket.on("FromAPI", (data: string) => {
            setResponse(data)
        })

        socket.on("sendOthersUsers", (data: UserProps) =>{
            setNewShowNewUser(data)
        })
    },[])


    return (
        <div>
            <h2>Cont : {response}</h2>
            <h3>New user: {showNewUser?.name} <p>
                </p> <strong>nickname: {showNewUser?.nickname}</strong></h3>
        </div>
    )
}

export default ClientSocket;