import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteService } from './cliente/cliente.service';
import { GerenteService } from './gerente/gerente.service';
import { ContaService } from './conta/conta.service';
import { ClienteController } from './cliente/cliente.controller';
import { GerenteController } from './gerente/gerente.controller';
import { ContaController } from './conta/conta.controller';

@Module({
  imports: [],
  controllers: [AppController, ClienteController, GerenteController, ContaController],
  providers: [AppService, ClienteService, GerenteService, ContaService],
})
export class AppModule {}
