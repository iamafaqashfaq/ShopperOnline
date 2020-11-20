using Microsoft.AspNetCore.Mvc;
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
    }
}
