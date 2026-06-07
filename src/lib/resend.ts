import { Resend } from 'resend'
import { RESEND_API_KEY } from '$env/static/private'

const resend = new Resend(RESEND_API_KEY)

await resend.emails.send({
  from:    'onboarding@resend.dev',
  to:      'kubeczkova.n@gmail.com',
  subject: 'Potvrďte váš příhoz',
  html:    `<p>Klikněte <a href="...">zde</a></p>`
})