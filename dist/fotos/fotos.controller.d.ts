import type { Foto } from './entities/foto.entity.js';
import { FotosService } from './fotos.service.js';
export declare class FotosController {
    private readonly fotosService;
    constructor(fotosService: FotosService);
    findAll(): Foto[];
    findOne(id: number): Foto;
    create(datos: Omit<Foto, 'id'>): Foto;
}
