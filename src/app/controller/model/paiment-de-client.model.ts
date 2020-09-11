import {client} from "./client.model";

export class PaimentDeClient {
  id: number;
  montantRestantes: number;
  montantpaye: number;
  montantTotal: number;
  date: Date;
  client: client;
}
