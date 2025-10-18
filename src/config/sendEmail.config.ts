// 


// 

import nodemailer from 'nodemailer'
import Handlebars from 'handlebars'
import { envHelper } from './envHelper.config'
const fs = require('fs')
const path = require('path')

type EmailType = {
  to: string,
  subject: string,
  html: object,
  htmlPath?: string,
  htmlTemplate?: string
}


export const sendEmail = ({ to, subject, html, htmlPath }: EmailType) => {
  let template: HandlebarsTemplateDelegate

  const templatePath = path.join(__dirname, htmlPath)
  const templateSource = fs.readFileSync(templatePath, 'utf8')
  template = Handlebars.compile(templateSource)

  const mailOptions = {
    from: `Quidhive ${envHelper.email.email}`,
    to: to,
    subject: subject,
    html: template(html),
  }

  const transporter = nodemailer.createTransport({
    host: envHelper.email.host,
    port: 465,
    secure: true,
    auth: {
      user: envHelper.email.user,
      pass: envHelper.email.pass
    }
  })
  return transporter.sendMail(mailOptions)
}

// export const ses