using Microsoft.ProjectOxford.Face;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

//TODO: Steg 1 gör knapp
//TODO: Steg 2 klicka på knappen allert "hej"
//TODO: Steg 3 gör ett anrop FaceNewApi - skall returnera "hello world".

namespace FaceRecognitionAPI.FaceApi
{
    public class FaceNewApiController : ApiController
    {
        private FaceServiceClient faceServiceClient;

        // GET: api/FaceNewApi
        //[Route("myroute")]
        public string Get()
        {
            return "Hello World";
        }

        // GET: api/FaceNewApi/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FaceNewApi
        public async Task<Microsoft.ProjectOxford.Face.Contract.Face[]> Post(string urlFace) // Är Face[] en returtyp av två dimensionella matriser med ansikten?
        {
            faceServiceClient = new FaceServiceClient("3455a13fefb347f6aebff7162aa7a005");
            var requiredFaceAttributes = new FaceAttributeType[] {  // Varför finns vare sig id eller attributes medtagen som de gör i foreach (var face in faces)?
                FaceAttributeType.Age,
                FaceAttributeType.Gender,
                FaceAttributeType.Smile,
                FaceAttributeType.FacialHair,
                FaceAttributeType.HeadPose,
                FaceAttributeType.Glasses
            };
            string imageUrl = urlFace;
            var faces = await faceServiceClient.DetectAsync(imageUrl,
                returnFaceLandmarks: true,                      // Varför är det inte returnFaceLandmark = true?
                returnFaceAttributes: requiredFaceAttributes);  // Returneras värdena från Microsoft api.projectoxford.com till instansen requiredFaceAttributes?

            foreach (var face in faces)  // Är detta en tvådimensionell matris där varje rad är ett ansikte med id, attributes en array osv?
            {
                var id = face.FaceId;
                var attributes = face.FaceAttributes;
                var age = attributes.Age;
                var gender = attributes.Gender;
                var smile = attributes.Smile;
                var facialHair = attributes.FacialHair;
                var headPose = attributes.HeadPose;
                var glasses = attributes.Glasses;
            }
            return faces;
        }

        // PUT: api/FaceNewApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FaceNewApi/5
        public void Delete(int id)
        {
        }
    }
}
