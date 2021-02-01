import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://192.168.31.208:4001";

export default function ClientComponent() {
    const [response, setResponse] = useState("");
    const socket = socketIOClient(ENDPOINT);
    
    useEffect(() => {
        socket.on("FromAPI", data => {
            setResponse(data);
        });

       

    }, []);

    function HandlerSendMessageServer() {
        const data = { message: "Hello word", status: "ok" }
        socket.emit("message", data);
    }

    return (
        <View>
            <Text> Time its {response} </Text>
            <Button
                title="Send message"
                onPress={()=> HandlerSendMessageServer()}
            />
        </View>
    );
}