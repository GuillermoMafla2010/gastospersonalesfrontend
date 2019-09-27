import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.page.html',
  styleUrls: ['./gastos.page.scss'],
})
export class GastosPage implements OnInit {

  constructor(private router:Router,private statusBar: StatusBar) { 
    this.statusBar.backgroundColorByHexString('#fafaf7');
  }

  ngOnInit() {
  }

  verGastos(){
    this.router.navigate(['tabs/ver-gastos'])
  }

  crearGastos(){
    this.router.navigate(['tabs/crear-gastos'])
  }

  verGastosPorFecha(){
    this.router.navigate(['tabs/ver-gastos-fecha'])
  }

}
