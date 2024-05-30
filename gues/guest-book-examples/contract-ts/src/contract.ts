//comentaro
import { NearBindgen, near, call, view, Vector } from 'near-sdk-js'
import { POINT_ONE, cliente } from './model'


@NearBindgen({})
class clientes {
  messages: Vector<cliente> = new Vector<cliente>("v-uid");

  @call({ payableFunction: true })
  // Public - Adds a new message.
  add_message({ direccion }: { direccion: string }) {
    // If the user attaches more than 0.1N the message is premium
    const nombre = near.attachedDeposit() >= BigInt(POINT_ONE);
    const apellidoP = near.predecessorAccountId();
    const carrera = near.predecessorAccountId();
    const correoElectronico = near.predecessorAccountId();
    const idcliente = near.predecessorAccountId();
    const numTelefono = near.predecessorAccountId();

    const message: cliente = { nombre,apellidoP,carrera,correoElectronico,direccion,idcliente,numTelefono};
    this.messages.push(message);
    
  }

  @call({})
  // Deletes a message at a given index.
  delete_message({ direccion }: { direccion: number }): void {
    (direccion >= 0 && direccion < this.messages.length, "Index out of bounds");
    this.messages.pop;
  }

 /* @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): cliente[] {
    return this.messages.toArray().slice(from_index, from_index + limit);*/
  

  @view({})
  total_messages(): number { return this.messages.length }

}



/*
@NearBindgen({})
class proveedores {
  messages: Vector<proveedor> = new Vector<proveedor>("v-uid");

  @call({ payableFunction: true })
  // Public - Adds a new message.
  add_message({ numTelefono }: { numTelefono: string }) {
    // If the user attaches more than 0.1N the message is premium
    const nombre = near.attachedDeposit() >= BigInt(POINT_TWO);
    const apellidoP = near.predecessorAccountId();
    const apellidoM = near.predecessorAccountId();
    const empresaProcedencia = near.predecessorAccountId();
    const correoElectronico = near.predecessorAccountId();
    const idproveedor = near.predecessorAccountId();
    const direccion = near.predecessorAccountId();

    const message: proveedor = { nombre,apellidoP,apellidoM,empresaProcedencia,correoElectronico,direccion,idproveedor,numTelefono};
    this.messages.push(message);
  }
  

  @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): proveedor[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { return this.messages.length }

}

@NearBindgen({})
class negocios {
  messages: Vector<negocio> = new Vector<negocio>("v-uid");

  @call({ payableFunction: true })
  // Public - Adds a new message.
  add_message({ ubicacion }: { ubicacion: string }) {
   
    const nombreEstablecimiento = near.attachedDeposit() >= BigInt(POINT_TREE);
    const idNegocio = near.predecessorAccountId();
    const fechaRegistro = near.predecessorAccountId();

    const message: negocio = { fechaRegistro,idNegocio,ubicacion,nombreEstablecimiento};
    this.messages.push(message);
  }
  

  @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): negocio[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { return this.messages.length }

}*/
