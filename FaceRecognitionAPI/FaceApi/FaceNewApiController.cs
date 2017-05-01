using Microsoft.ProjectOxford.Face;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;

//TODO: Steg 1 gör knapp
//TODO: Steg 2 klicka på knappen allert "hej"
//TODO: Steg 3 gör ett anrop FaceNewApi - skall returnera "hello world".

namespace FaceRecognitionAPI.FaceApi
{
    public class FaceNewApiController : ApiController
    {
        private FaceServiceClient faceServiceClient;
        [System.Web.Mvc.HttpGet]
        [System.Web.Http.Route("api/FaceNewApi")]
        public async Task<string> GetFaceData(string URL) //Funktionsnamnet har ingen betydelse. Det avgörande är [HttpGet].
        {
            FaceServiceClient client = new FaceServiceClient("3455a13fefb347f6aebff7162aa7a005");

            var faces = await client.DetectAsync(URL, true, true);

            var firstFace = faces[0];

            int eyeLeftX = (int)firstFace.FaceLandmarks.EyeLeftInner.X;
            int eyeLeftY = (int)firstFace.FaceLandmarks.EyeLeftInner.Y;
            //int faceRectW = (int)firstFace.FaceLandmarks.EyeLeftInner.Y;
            //int faceRectH = (int)firstFace.FaceLandmarks.EyeLeftInner.Y;
            return $"{"12"},{eyeLeftX},{eyeLeftY}";
        }
    }
}

  

