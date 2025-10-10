import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    const saltos: number = 10; // Quantidade de vezes que a senha é criptografada. Para produção o ideal é 12. Mas quanto mais salto tiver mais lento sera para criptografar
    return await bcrypt.hash(senha, saltos);
  }

  async compararSenhas(
    senhaDigitada: string,
    senhaBanco: string,
  ): Promise<boolean> {
    return await bcrypt.compare(senhaDigitada, senhaBanco);
  }
}
