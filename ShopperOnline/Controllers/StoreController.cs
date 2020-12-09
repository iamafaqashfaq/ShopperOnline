using Microsoft.AspNetCore.Mvc;
using ShopperOnline.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace ShopperOnline.Controllers
{
    public class StoreController : Controller
    {

        public IActionResult ComponentInput()
        {
            return View();
        }
        public IActionResult Checkout()
        {
            return View();
        }
        public IActionResult BuyNowCheckout(string sku,string Q, string P, string N, string D,string GT)
        {
            var buyNowCheckoutVM = new BuyNowCheckoutVM
            {
                sku = sku,
                name = N,
                qty=Q,
                salePrice=P,
                description=D,
                grandTotal=GT
            };
            return View(buyNowCheckoutVM);
        }
        public IActionResult BuyerPageProduct()
        {
            return View();
        }
        public IActionResult Storecart()
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
        public IActionResult AddProduct(string uid, string tid, string systemPageId, string pageId)
        {
            var showProductVM = new ShowProductVM
            {
                Uid = uid,
                Tid = tid,
                PageId = pageId,
                SystemPageId = systemPageId
            };
            return View(showProductVM);
        }
        public IActionResult Cart(string uid, string tid, string pageId, string systemPageId, string accesstoken)
        {
            var showProductVM = new ShowProductVM
            {
                Uid = uid,
                Tid = tid,
                PageId = pageId,
                SystemPageId = systemPageId,
                AccessToken = accesstoken
            };
            return View(showProductVM);
        }
        public IActionResult ShowProduct(string uid, string tid, string pageId, string systemPageId, string accesstoken)
        {
            var showProductVM = new ShowProductVM
            {
                Uid = uid,
                Tid = tid,
                PageId = pageId,
                SystemPageId = systemPageId,
                AccessToken = accesstoken
            };
            return View(showProductVM);
        }

    }
}
