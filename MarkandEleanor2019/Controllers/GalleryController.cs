using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace MarkandEleanor2019.Controllers
{
    public class GalleryController : Controller
    {
        private readonly IConfiguration configuration;

        public GalleryController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public IActionResult Photos(string password)
        {
            if (password != null && password.Equals(configuration.GetValue<string>("GalleryPassword")))
                return View();
            else
                return RedirectToAction("Index");
        }
    }
}
