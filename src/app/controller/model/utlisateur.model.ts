import {Employe} from './employe.model';

export class Utlisateur {
  id: number;
  employe: Employe;
  login: string;
  modDePasse: string;
  bloqued: boolean;
  nbrTentatifRestant: number;
  dateBloquage: Date;
}
