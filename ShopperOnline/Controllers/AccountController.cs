using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ShopperOnline.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperOnline.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult LoginAsSeller()
        {
            return View();
        }
        public IActionResult SignupAsSeller()
        {
            return View();
        }

        public IActionResult LoginAsBuyer()
        {
            return View();
        }

        public IActionResult SignupAsBuyer()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Signup()
        {
            return View();
        }

        public IActionResult PersonalInformation()
        {
            return View();
        }

        public IActionResult MyUser()
        {
            return View();
        }

        public IActionResult ShowPageslist(string data)
        {
            var json = JsonConvert.DeserializeObject<PageList[]>(data);
            //return Content(result.ToString());
            return View(json);
        }
        public IActionResult ShowSellerPanel()
        {
            return View();
        }
        public IActionResult ShowBuyerPanel()
        {
            return View();
        }
        //[HttpPost]
        //public IActionResult ShowPageslist([FromBody]List<PageList> model)
        //{
        //    return View(model);
        //}
    }
}
