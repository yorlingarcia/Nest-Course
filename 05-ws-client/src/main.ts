import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">Offline</span>
  </div>
`;
connectToServer();
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
