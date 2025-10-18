// 

import Fastify, { FastifyRequest } from 'fastify'
import { AppDataSource } from './data-source'
import cors from '@fastify/cors'
// import { envHelper } from './config/envHelper.config'
const fastify = Fastify({
  logger: true
})


fastify.register(cors, () => {
  return (_: FastifyRequest, callback: Function) => {
    const corsOptions = {
      origin: true,
      methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization'
      ],
      credentials: true
    }
    callback(null, corsOptions)
  }
})

fastify.register(require('./waitlist/route'), { prefix: `` })

async function main() {
  try {
    await AppDataSource.initialize()
    console.log('🛢️  Database connected')

    await fastify.listen({ port: 7014, host: '0.0.0.0' })
    console.log('🚀 Server running');
  } catch (e) {
    fastify.log.error(e as string)
    process.exit(1)
  }
}

main()