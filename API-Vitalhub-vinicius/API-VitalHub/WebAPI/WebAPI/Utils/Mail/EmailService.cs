
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;

namespace WebAPI.Utils.Mail
{
    public class EmailService : IEmailService
    {
        // variavel que armazena as configs de emailSettings
        private readonly EmailSettings emailSettings;

        // construtor que recebe a dependence injection de emailSettings, que é armazenada por sua  vez, na "options"
        public EmailService(IOptions<EmailSettings> options)
        {
            emailSettings = options.Value;
        }


        // metodo de envio de email
        public async Task SendEmailAsync(MailRequest mailRequest)
        {
            try
            {
                // objeto que representa o email
                var email = new MimeMessage();

                // definimos o remetente
                email.Sender = MailboxAddress.Parse(emailSettings.Email);

                // definimos o destinatario do email
                email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));

                // define o assunto do email
                email.Subject = mailRequest.Subject;

                // cria o corpo do email
                var builder = new BodyBuilder();

                // define o corpo do email como html
                builder.HtmlBody = mailRequest.Body;

                // define o corpo do email no obj MimeMessage
                email.Body = builder.ToMessageBody();

                // cria um client SMT para envio de email
                using (var smtp = new SmtpClient())
                {
                    // conecta-se ao servidor SMTP usando os dados de emailSetting
                    smtp.Connect(emailSettings.Host, emailSettings.Port, MailKit.Security.SecureSocketOptions.StartTls);

                    // autentica-se no servidor SMTP usando os dados do emailSettings
                    smtp.Authenticate(emailSettings.Email, emailSettings.Password);
                    
                    // envia o email
                    await smtp.SendAsync(email);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
