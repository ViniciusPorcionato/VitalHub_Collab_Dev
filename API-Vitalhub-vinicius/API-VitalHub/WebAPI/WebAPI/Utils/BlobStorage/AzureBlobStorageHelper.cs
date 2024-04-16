using Azure.Storage.Blobs;

namespace WebAPI.Utils.BlobStorage
{
    public static class AzureBlobStorageHelper
    {
        public static async Task<string> UploadImageBlobAsync(IFormFile fileImage, string connectionString, string urlContainer)
        {
			try
			{
				// verifica se existe um arquivo
				if (fileImage != null)
				{
                    // gera um nome unico + extensao do arquivo
                    var blobName = Guid.NewGuid().ToString().Replace("-","") + Path.GetExtension(fileImage.FileName);

					// cria uma instancia do Client Blob Service e passa a string de conexao
					var blobServiceClient = new BlobServiceClient(connectionString);

					// obtem um container client usando o nome do container do blob
					var blobContainerClient = blobServiceClient.GetBlobContainerClient(urlContainer);

					// obtem um blob client usando blob nome
					var blobClient = blobContainerClient.GetBlobClient(blobName);


					// abre fluxo de entrada do arquivo(foto)
					using (var stream = fileImage.OpenReadStream())
					{
						// carrega o arquivo para o blob storage de forma assincrona
						await blobClient.UploadAsync(stream, true);
					}

					// retorna a uri do blob como uma string
					return blobClient.Uri.ToString();
				}

				else
				{
					// retorna imagem padrao caso nenhum arquivo seja enviado/upado
					return "https://blobvitalhubgp11vinicius.blob.core.windows.net/conteinervitalhubgp11vinicius/profilepattern.png";
				}
			}
			catch (Exception)
			{

				throw;
			}
        }
    }
}
