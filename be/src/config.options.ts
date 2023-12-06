import * as Joi from 'joi'

export const CONFIG_OPTIONS = {
  isGlobal: true,
  cache: true,
  validationSchema: Joi.object({
    DATABASE_URL: Joi.string().required(),
    PORT: Joi.string().optional(),
    TWILIO_ACCOUNT_SID: Joi.string().required(),
    TWILIO_AUTH_TOKEN: Joi.string().required(),
    TWILIO_SERVICE_SID: Joi.string().required()
  })
}
