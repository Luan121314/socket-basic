import {io} from 'socket.io-client';
const ENDPOINT = "http://192.168.31.208:4001";

function socket(){
    return io(ENDPOINT);
}

export default socket;