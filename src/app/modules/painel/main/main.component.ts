import { Component, OnInit } from '@angular/core';
import { ServeService } from 'src/app/backend/serve.service';
import { Chart } from 'chart.js';
import moment from 'moment-timezone';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.styl']
})
export class MainComponent implements OnInit {
  public bitcoinMes: number;
  public proftMes: number;
  public bitcoinDia: number;
  public proftDia: number;
  public grafico: any;

  constructor(
    public wallet: ServeService
  ) { }

  ngOnInit() {

    this.acumuladoMes();
    this.acumuladoDia();
    this.createGrafico();
  }

  acumuladoMes() {
    this.bitcoinMes = this.wallet.wallet.reduce((total, numero) => {
      if (numero.type === 'Trading') {
        return total + numero.profit;
      } return total;
    }, 0);
    this.proftMes = this.wallet.wallet.reduce((total, numero) => total + numero.result, 0);
  }

  acumuladoDia() {
    this.bitcoinDia = this.wallet.wallet[0].montante;
    this.proftDia = this.wallet.wallet[0].result;
  }

  createGrafico() {
    const graficoValores = this.graficoValores();
    const graficolabels = this.graficolabels();
    this.grafico = new Chart('canvas', {
      type: 'line',
      data: {
        labels: graficolabels,
        datasets: [{
          data: graficoValores,
          backgroundColor: 'rgba(134, 175, 71, 0.5)',
          borderColor: '#86af47',
          borderWidth: 4
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          xAxes: [{ display: true }],
          yAxes: [{ display: true }],
        }
      }
    });
  }

  graficoValores() {
    let index = 0;
    return this.wallet.wallet
      .filter((transact) => transact.type === 'Trading')
      .map((transact) => {
        index++;
        return {
          x: index,
          y: transact.result.toFixed(2),
        };
      });
  }
  graficolabels() {
    return this.wallet.wallet
      .filter((transact) => transact.type === 'Trading')
      .map((transact) => {
        return transact.date.substr(0, 5);
      });
  }


}
