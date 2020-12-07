using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperOnline.Models.ViewModel
{
    public class ShowProductVM
    {
        public string Uid { get; set; }
        public string Tid { get; set; }
        public string PageId { get; set; }
        public string SystemPageId { get; set; }
        public string AccessToken { get; set; }
    }
}
