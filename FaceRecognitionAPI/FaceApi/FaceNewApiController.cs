using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

//TODO: Steg 1 gör knapp
//TODO: Steg 2 klicka på knappen allert "hej"
//TODO: Steg 3 gör ett anrop FaceNewApi - skall returnera "hello world".

namespace FaceRecognitionAPI.FaceApi
{
    public class FaceNewApiController : ApiController
    {
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
        public void Post([FromBody]string value)
        {
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
