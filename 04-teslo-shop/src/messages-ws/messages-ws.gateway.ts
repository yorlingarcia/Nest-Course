import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesWsService } from './messages-ws.service';
import { Server, Socket } from 'socket.io';
import { newMesssageDto } from './dtos/new-message.dto';

@WebSocketGateway({ cors: true, namespace: '/' })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  constructor(private readonly messagesWsService: MessagesWsService) {}
  handleConnection(client: Socket) {
    // console.log('Client conected!', client.id);
    this.messagesWsService.registerClient(client);
    // console.log({ conecatdos: this.messagesWsService.getConnectedClients() });
    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }
  handleDisconnect(client: Socket) {
    // console.log('Client disconnected!', client.id);
    this.messagesWsService.removeClient(client.id);
    this.wss.emit(
      'clients-updated',
      this.messagesWsService.getConnectedClients(),
    );
  }

  @SubscribeMessage('message-from-client')
  onMessagFromClient(client: Socket, payload: newMesssageDto) {
    console.log({ id: client.id, payload });
  }
}
