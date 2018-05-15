using SPA_AngularJs.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace SPA_AngularJs.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddStudent()
        {
            return PartialView("AddStudent");
        }

        public ActionResult ShowAllStudent()
        {
            return PartialView("ShowAllStudent");
        }

        public ActionResult EditStudent()
        {
            return PartialView("EditStudent");
        }

        public ActionResult DeleteStudent()
        {
            return PartialView("DeleteStudent");
        }
    }
}