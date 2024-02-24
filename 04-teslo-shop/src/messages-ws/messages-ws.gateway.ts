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
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces';

@WebSocketGateway({ cors: true, namespace: '/' })
export class MessagesWsGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  constructor(
    private readonly messagesWsService: MessagesWsService,
    private readonly jwtService: JwtService,
  ) {}
  handleConnection(client: Socket) {
    // console.log('Client conected!', client);
    const token = client.handshake.headers.authentication as string;
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(token);
    } catch (error) {
      client.disconnect();
      return;
    }
    console.log({ payload });

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
    // console.log({ id: client.id, payload });

    //! emite solo al cliente
    // client.emit('message-from-server', {
    //   fullName: 'Yorlin-Server',
    //   messsage: payload.message || 'no message!!',
    // });
    //! a todos menos al cliente inicial
    // client.broadcast.emit('message-from-server', {
    //   fullName: 'Yorlin-Server',
    //   messsage: payload.message || 'no message!!',
    // });

    //! emite a todos
    this.wss.emit('message-from-server', {
      fullName: 'Yorlin-Server',
      message: payload.message || 'no message!!',
    });
  }
}
