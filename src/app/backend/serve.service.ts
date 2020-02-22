import { Wallet } from './wallet';
import { Dados } from './dados';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  public user = Dados.user;

  public wallet = Wallet.wallet;
  public operacoes = Wallet.operacoes;
  public stopLoss = Wallet.stopLoss;
  public stopGain = Wallet.stopGain;

  constructor() { }

}
