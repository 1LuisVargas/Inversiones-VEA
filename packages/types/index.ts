export type EstadoSalud = 'Bueno' | 'Atencion' | 'Critico';

export type TipoEquipo = 'Computadora' | 'Servidor';

export interface Empresa {
  id: string;
  nombre: string;
  contacto: string;
  correo?: string;
  telefono?: string;
  sector?: string;
}

export interface Equipo {
  id: string;
  nombre: string;
  tipo: TipoEquipo;
  empresaId: string;
  cpu: string;
  ram: string;
  almacenamiento: string;
  estado: EstadoSalud;
  ultimaRevision: Date;
  observaciones?: string;
}

export interface Reporte {
  id: string;
  empresaId: string;
  fechaGeneracion: Date;
  token: string;
  equipos: Equipo[];
}

export interface Usuario {
  id: string;
  email: string;
  rol: 'admin' | 'cliente';
  empresaId?: string;
}