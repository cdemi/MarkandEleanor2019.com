using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.Text.RegularExpressions;

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

        [HttpGet]
        public IActionResult Photos()
        {
            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Photos(string password)
        {
            if (isPasswordCorrect(password))
                return View();
            else
                return RedirectToAction("Index");
        }

        private bool isPasswordCorrect(string password)
        {
            return password != null && sanitizePassword(password).Equals(sanitizePassword(configuration.GetValue<string>("GalleryPassword")), StringComparison.InvariantCultureIgnoreCase);
        }

        private string sanitizePassword(string password)
        {
            return String.Join("", Regex.Matches(password, "\\w").Select(r => r.Value));
        }
    }
}
