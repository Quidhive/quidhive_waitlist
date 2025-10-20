// 

import { sendEmail } from "../config/sendEmail.config"
import { AppDataSource } from "../data-source"
import { Waitlist } from "./entity"

const waitlistRepo = AppDataSource.getRepository(Waitlist)

export class WaitlistService {

  static JoinWaitlist = async (payload: { email: string }) => {
    const newWaitlist = waitlistRepo.create({
      email: payload.email.toLowerCase()
    })
    await waitlistRepo.save(newWaitlist)
    sendEmail({ to: payload.email.toLowerCase(), htmlPath: "../email_templates/waitlist.html", subject: "You are on the waitlist", html: {} })
    return "You have been added to waitlist"
  }
}