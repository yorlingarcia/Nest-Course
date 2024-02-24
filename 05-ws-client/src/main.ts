import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <span id="server-status">Offline</span>
    <ul id="clients-ul">
      <li>...</li>
    </ul>
    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>
  </div>
`;
connectToServer();
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
