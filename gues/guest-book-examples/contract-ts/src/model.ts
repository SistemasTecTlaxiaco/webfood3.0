export const POINT_ONE = '100000000000000000000000';


export class cliente {
  nombre: boolean;
  apellidoP: string;
  carrera: string;
  correoElectronico: string;
  direccion: string;
  idcliente: string;
  numTelefono: string;

  constructor({ nombre, apellidoP,carrera,correoElectronico,direccion,idcliente,numTelefono}: cliente) {
    this.nombre=nombre;
    this.apellidoP=apellidoP;
    this.carrera=carrera;
    this.correoElectronico=correoElectronico;
    this.direccion=direccion;
    this.idcliente=idcliente;
    this.numTelefono=numTelefono;
   
  }
}

export class proveedor {
  nombre: boolean;
  apellidoM: string;
  apellidoP: string;
  correoElectronico: string;
  direccion: string;
  empresaProcedencia: string;
  idproveedor: string;
  numTelefono: string;

  constructor({ nombre, apellidoP, apellidoM, correoElectronico,direccion,empresaProcedencia, idproveedor,numTelefono }: proveedor) {
    this.nombre=nombre;
    this.apellidoP=apellidoP;
    this.apellidoM=apellidoM;
    this.correoElectronico=correoElectronico;
    this.direccion=direccion;
    this.empresaProcedencia=empresaProcedencia;
    this.idproveedor=idproveedor;
    this.numTelefono=numTelefono;
   
  }
}

export class negocio{
  nombreEstablecimiento: boolean;
  fechaRegistro: string;
  idNegocio: string;
  ubicacion: string;

  constructor({ nombreEstablecimiento,fechaRegistro,idNegocio,ubicacion }: negocio) {
    this.nombreEstablecimiento=nombreEstablecimiento;
    this.fechaRegistro=fechaRegistro;
    this.idNegocio=idNegocio;
    this.ubicacion=ubicacion;
   
  }
}
