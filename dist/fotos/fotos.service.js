var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
let FotosService = class FotosService {
    fotos = [
        { id: 1, titulo: 'Atardecer', calificacion: 4.5 },
        { id: 2, titulo: 'Malecón', calificacion: 4.0 },
    ];
    findAll() {
        return this.fotos;
    }
    findOne(id) {
        const foto = this.fotos.find((foto) => foto.id === id);
        if (!foto) {
            throw new NotFoundException(`Foto ${id} no encontrada`);
        }
        return foto;
    }
    create(datos) {
        const nueva = { id: this.fotos.length + 1, ...datos };
        this.fotos.push(nueva);
        return nueva;
    }
};
FotosService = __decorate([
    Injectable()
], FotosService);
export { FotosService };
//# sourceMappingURL=fotos.service.js.map