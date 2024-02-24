import { connectToServer } from "./socket-client";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Websocket - Client</h1>
    <input id="jwt-token" palceholder="Json Web Token"/>
    <button id="btn-connect">Connect</button>
    <br>
    <span id="server-status">Offline</span>
    <ul id="clients-ul">
      <li>...</li>
    </ul>
    <form id="message-form">
      <input placeholder="message" id="message-input" />
    </form>
    <h3>Messages</h3>
    <ul id="messages"></ul>
  </div>
`;
// connectToServer();
// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
const jwtToken = document.querySelector<HTMLInputElement>("#jwt-token")!;
const btnconnect = document.querySelector<HTMLButtonElement>("#btn-connect")!;

btnconnect.addEventListener("click", () => {
  if (jwtToken.value.trim().length <= 0) return alert("Enter a valid JWT");
  connectToServer(jwtToken.value.trim());
});
