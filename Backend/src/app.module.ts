import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AgencyModule } from './agency/agency.module';
import { VolunteerModule } from './volunteer/volunteer.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorMiddleware } from './Middleware/error.middleware';
import { PostagencyModule } from './postagency/postagency.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ruthalemfanta:RUzhHpZmurDTtWXC@cluster0.4sdzlj8.mongodb.net/?retryWrites=true&w=majority'),
    AgencyModule,
    VolunteerModule,
    PostagencyModule,

  ],
  controllers: [AppController],
  providers: [AppService, 
   { provide: APP_FILTER,
    useClass: ErrorMiddleware,}],
})
export class AppModule {}
