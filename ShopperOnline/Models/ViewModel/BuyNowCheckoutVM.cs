using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperOnline.Models.ViewModel
{
    public class BuyNowCheckoutVM
    {
        public string salePrice { get; set; }
        public string grandTotal { get; set; }
        public string description { get; set; }
        public string name { get; set; }
        public string qty { get; set; }
        public string sku { get; set; }
    }
}
