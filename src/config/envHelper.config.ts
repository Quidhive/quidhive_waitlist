// 
require('dotenv').config()
export const envHelper = {
  db: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
  email: {
    email: process.env.EMAIL,
    user: process.env.AWS_SES_USER,
    pass: process.env.AWS_SES_PASS,
    host: process.env.AWS_SES_HOST,
    port: process.env.AWS_SES_PORT
  }
}