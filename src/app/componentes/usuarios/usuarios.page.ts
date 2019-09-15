import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UsuariosService } from './../../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public usuario: any;
  public ingresos: any;
  public gastos: any;
  public total: any;
  constructor(private usuarioservice: UsuariosService,private statusBar: StatusBar) { 

    // let status bar overlay webview
this.statusBar.overlaysWebView(true);

// set status bar to white
this.statusBar.backgroundColorByHexString('#ffffff');
  }

  ngOnInit() {
    this.getUsuario();
  }


  getUsuario() {
    this.usuarioservice.getUsuariosPorId(1).subscribe(x => {
      this.usuario = x.usuario;
      this.ingresos = x.totalingreso;
      this.gastos = x.totalgasto;
      this.total = (this.ingresos - this.gastos);

      console.log(x);
    });
  }

}
