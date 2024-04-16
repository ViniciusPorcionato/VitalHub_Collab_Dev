namespace WebAPI.Utils.Mail
{
    public class EmailSettings
    {
        // email do remetente
        public string? Email { get; set; }

        // senha do remetente
        public string? Password { get; set; }

        // host do servidor SMTP (simple mail transference protocol)
        public string? Host { get; set; }

        // nome exibido do remetente
        public string? DisplayName { get; set; }

        // porta do servidor SMTP
        public int Port { get; set; }
    }
}
