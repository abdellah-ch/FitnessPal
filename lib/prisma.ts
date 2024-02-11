
import { PrismaClient } from "@prisma/client";

declare global{
    var prisma : PrismaClient | undefined; //add prisma propretie to the global scope
};

export const db = globalThis.prisma || new PrismaClient();//export new PrismaClient() if globalThis.prisma is undefined 

if(process.env.NODE_ENV != "production") globalThis.prisma = db //assigns the db object to the globalThis.prisma variable.

/*
import { PrismaClient } from '@prisma/client'
declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

 let db: PrismaClient

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
     db = new PrismaClient()
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient()
    }

    db = global.prisma
  }
}
//@ts-ignore

*/