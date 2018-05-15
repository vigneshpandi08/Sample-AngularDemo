using SPA_AngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SPA_AngularJs.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult getcategories()
        {
            using (SkillsEntities dc = new SkillsEntities())
            {
                return new JsonResult { Data = dc.Categories.ToList(), JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            }
        }
        [HttpPost]
        public JsonResult savedata(int[] categoryIds)
        {
            //for make the application simple I am just sending back the selected categories from here
            // but you can do additional work here with categoryIds parameter
            List<Category> list = new List<Category>();
            if (categoryIds != null)
            {
                using (SkillsEntities dc = new SkillsEntities())
                {
                    list = dc.Categories.Where(a => categoryIds.Contains(a.CategoryID)).ToList();
                }

                // do your additional work here
            }
            return new JsonResult { Data = list };
        }
    }
}
