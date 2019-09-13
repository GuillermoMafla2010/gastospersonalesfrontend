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
  constructor(private usuarioservice: UsuariosService) { }

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
