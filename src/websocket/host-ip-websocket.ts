import WebSocket from 'ws';

export default class HostipWebSocket extends WebSocket
{
    tunnelmoleClientId: string;
    connectionStart: number;
    isAlive: boolean;
    ipAddress: string;
    /** Indicates that a websocket connection is used to tunnel a websocket */
    dataTunnel: boolean;
    // stub for websocket
    sendMessage(object : any) {}
}
