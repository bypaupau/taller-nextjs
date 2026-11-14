import { Injectable, NotFoundException } from '@nestjs/common';
import type { Foto } from './entities/foto.entity.js';

@Injectable()
export class FotosService {
  private readonly fotos: Foto[] = [
    { id: 1, titulo: 'Atardecer', calificacion: 4.5 },
    { id: 2, titulo: 'Malecón', calificacion: 4.0 },
  ];

  findAll(): Foto[] {
    return this.fotos;
  }

  findOne(id: number): Foto {
    const foto = this.fotos.find((foto) => foto.id === id);

    if (!foto) {
      throw new NotFoundException(`Foto ${id} no encontrada`);
    }

    return foto;
  }

  create(datos: Omit<Foto, 'id'>): Foto {
    const id = this.fotos.length ? Math.max(...this.fotos.map((foto) => foto.id)) + 1 : 1;
    const nueva = { id, ...datos };
    this.fotos.push(nueva);
    return nueva;
  }

  update(id: number, datos: Partial<Omit<Foto, 'id'>>): Foto {
    const foto = this.findOne(id);

    if (datos.titulo !== undefined) foto.titulo = datos.titulo;
    if (datos.descripcion !== undefined) foto.descripcion = datos.descripcion;
    if (datos.calificacion !== undefined) foto.calificacion = datos.calificacion;

    return foto;
  }

  remove(id: number): void {
    const indice = this.fotos.findIndex((foto) => foto.id === id);

    if (indice === -1) {
      throw new NotFoundException(`Foto ${id} no encontrada`);
    }

    this.fotos.splice(indice, 1);
  }
}
