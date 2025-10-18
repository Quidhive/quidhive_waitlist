// 

import { FastifyPluginAsync } from "fastify";
import { waitlistOpts } from "./schema";


const waitlistRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post("/waitlist", waitlistOpts)
}

export default waitlistRoutes