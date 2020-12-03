using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperOnline.Models.ViewModel
{
    public class PageList
    {
        public string Id { get; set; }
        public string AccessToken { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string tenantId { get; set; }
        public string userId { get; set; }
    }
}
