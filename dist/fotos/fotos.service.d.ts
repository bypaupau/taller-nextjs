import type { Foto } from './entities/foto.entity.js';
export declare class FotosService {
    private readonly fotos;
    findAll(): Foto[];
    findOne(id: number): Foto;
    create(datos: Omit<Foto, 'id'>): Foto;
}
