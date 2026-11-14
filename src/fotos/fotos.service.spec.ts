import { NotFoundException } from '@nestjs/common';
import { beforeEach, describe, expect, it } from 'vitest';
import { FotosService } from './fotos.service.js';

describe('FotosService', () => {
  let service: FotosService;

  beforeEach(() => {
    service = new FotosService();
  });

  it('no repite el id después de eliminar una foto', () => {
    service.remove(1);

    expect(service.create({ titulo: 'Nueva foto', calificacion: 5 })).toMatchObject({ id: 3 });
  });

  it('informa 404 cuando una foto no existe', () => {
    expect(() => service.findOne(99)).toThrow(NotFoundException);
  });
});
