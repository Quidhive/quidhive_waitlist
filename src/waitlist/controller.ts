// 

import { FastifyReply, FastifyRequest } from "fastify";
import { WaitlistService } from "./service";
import { failureData, successData } from "../utils/response.helper";


export class WaitlistContrl {

  static JoinWaitlist = async (req: FastifyRequest<{ Body: { email: string } }>, reply: FastifyReply) => {
    try {
      const response = await WaitlistService.JoinWaitlist(req.body)
      const data = { ...successData, message: response }
      reply.code(201).send(data)
    } catch (e: unknown) {
      const errorMessage = (e instanceof Error) ? "You are already on the waitlist" : 'Something went wrong';
      const error = { ...failureData, error: errorMessage }
      reply.code(400).send(error)
    }
  }
}