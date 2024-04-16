using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly VitalContext _context;
        private readonly EmailSedingService _emailSedingService;
        public RecuperarSenhaController(VitalContext context, EmailSedingService emailSedingService)
        {
            _context = context;
            _emailSedingService = emailSedingService;
        }

        [HttpPost]
        public async Task<IActionResult> sendRecoveryCodePassword(string email)
        {
            try
            {
                // verifica se email buscado é igual do usuario
               var usuario = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (usuario == null)
                {
                    return NotFound("Usuario não encontrado");
                }


               // gerar um codigo com 4 algarismos
               Random random = new Random();

                // vai pegar quatro numeros entre 1000 e 9999 e criar um conjunto de 4 digitos aleatoriamente
               int recoveryCode = random.Next(1000, 9999);

                // atribuir o valor do codigo gerado, para a propriedade que irá armazenar o codigo no banco
                usuario.CodRecupSenha = recoveryCode;

                // salva alteracoes
                await _context.SaveChangesAsync();

                // manda email de recuperacao
                await _emailSedingService.SendRocovery(usuario.Email!, recoveryCode);

                return Ok("Código enviado com secesso");


            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("Confirmar Codigo")]
        public async Task<IActionResult> ConfirmSendCode(string email, int codigo)
        {
            try
            {
                var user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuario não encontrado");
                }

                if (user.CodRecupSenha != codigo)
                {
                    return Ok("codigo invalido");
                }

                user.CodRecupSenha = null;
                
                    await _context.SaveChangesAsync();

                    return Ok("codigo de recuperacao valido");
                



            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
