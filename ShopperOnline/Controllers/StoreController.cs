using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperOnline.Controllers
{
    public class StoreController : Controller
    {
        public IActionResult Cart()
        {
            return View();
        }

        public IActionResult ComponentInput()
        {
            return View();
        }

        public IActionResult PaymentDetail()
        {
            return View();
        }

        public IActionResult Invoice()
        {
            return View();
        }

        public IActionResult MyProduct()
        {
            return View();
        }

        public IActionResult AddProduct()
        {
            return View();
        }
    }
}
