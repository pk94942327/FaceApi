//using System.Collections.Generic;
//using System.Net.Http;
//using System.Web.Http;
//using System.Net.Http.Headers;
//using System.Text;
//using System.Web;
//using System.Threading.Tasks;

//namespace FaceRecognitionAPI.FaceApi
//{
//    public class FaceApiController : ApiController
//    //{
//    // GET api/<controller>
//    //[Route("myroute")]
//    //        //public async Task<IHttpActionResult> GetFaceDataAsync(string imageUrl)
//    //        {
//    //            //return new string[] { "value1", "value2" };


////                var client = new HttpClient();

////                var queryString = HttpUtility.ParseQueryString(string.Empty);

////                // Request headers
////                client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", "{subscription key}");

////                // Request parameters
////                queryString["returnFaceId"] = "true";
////                queryString["returnFaceLandmarks"] = "false";
////                queryString["returnFaceAttributes"] = "{string}";
////                var uri = "https://westus.api.cognitive.microsoft.com/face/v1.0/detect?" + queryString;

////            //HttpResponseMessage response;
////            //IHttpActionResult response;
////                // Request body
////                byte[] byteData = Encoding.UTF8.GetBytes("{body}");

////                using (var content = new ByteArrayContent(byteData))
////                    {
////                        content.Headers.ContentType = new MediaTypeHeaderValue("< your content type, i.e. application/json >");
////                //response = await client.PostAsync(uri, content);
////                //response = await client.PostAsync(uri, content);
////                //HttpResponseMessage response = await MakeRequestAsync(imageUrl);
////                //HttpResponseMessage response = await MakeRequestAsync(imageUrl);
////            }
////            //return { response };
////        }

////        // GET api/<controller>/5
////        public string Get(int id)
////        {
////            return "value";
////        }

////        // POST api/<controller>
////        public void Post([FromBody]string value)
////        {
////        }

////        // PUT api/<controller>/5
////        public void Put(int id, [FromBody]string value)
////        {
////        }

////        // DELETE api/<controller>/5
////        public void Delete(int id)
////        {
////        }
////    }
////}