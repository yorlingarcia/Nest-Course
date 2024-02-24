import { Manager, Socket } from "socket.io-client";

export const connectToServer = () => {
  const manager = new Manager("http://localhost:3000/socket.io/socket.io.js");

  const socket = manager.socket("/");
  addListeners(socket);
};

const addListeners = (socket: Socket) => {
  const serverStatusLabel = document.querySelector("#server-status");

  const clientsLb = document.querySelector("#clients-ul");

  socket.on("connect", () => {
    serverStatusLabel!.innerHTML = "Connected";
  });

  socket.on("disconnect", () => {
    serverStatusLabel!.innerHTML = "Disconnected";
  });

  socket.on("clients-updated", (clients: string[]) => {
    let clientsHtml = "";
    clients.forEach((clientId) => {
      clientsHtml += `
        <li>${clientId}</li>
      `;
    });
    clientsLb!.innerHTML = clientsHtml;
  });
};
