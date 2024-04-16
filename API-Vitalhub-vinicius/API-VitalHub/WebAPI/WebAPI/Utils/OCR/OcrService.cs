using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {
        private readonly string _subscriptKey = "afcdd41f62384fb5aaaeb4137a09732e";

        private readonly string _endpoint = "https://cvvitalhubvinicius.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync (Stream imageStream)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    Endpoint = _endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult(ocrResult) ;

            }
            catch (Exception)
            {

                throw;
            }
        }

        private static string ProcessRecognitionResult (OcrResult result)
        {
            try
            {
                string recognizedText = "";

                foreach (var region in result.Regions)
                {
                    foreach (var line in region.Lines)
                    {
                        foreach (var word in line.Words)
                        {
                            recognizedText += word.Text + " ";
                        }

                        recognizedText += "\n";

                    }
                }

                return recognizedText;


            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
