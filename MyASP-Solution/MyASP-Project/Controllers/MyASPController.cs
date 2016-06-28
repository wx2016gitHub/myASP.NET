using MyASP_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace MyASP_Project.Controllers
{
    public class MyASPController : Controller
    {
        MyASPDB db = new MyASPDB();
        // GET: MyASP
        public ActionResult MyASPList()
        {
            return View(db.MyASPDatas.ToList());
            //return View();
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(MyASPData data)
        {
            ViewBag.Title = "Create";

            if (!ModelState.IsValid)
            {
                return View(data);
            }

            db.MyASPDatas.Add(data);
            db.SaveChanges();
            return RedirectToAction("MyASPList");
        }

        public ActionResult Details(int id)
        {
            ViewBag.Title = "Detail";
            //  if (id == null)
            //  {
            //       return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
 
           //    }
            MyASPData oneItem = db.MyASPDatas.Find(id);
            if (oneItem == null)
                return HttpNotFound();
            else
                return View(oneItem);
        }

        public ActionResult Edit(int id)
        {
            ViewBag.Title = "Edit";
            // if (id == null)
            // {
            //return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            // }
            MyASPData user = db.MyASPDatas.Find(id);
            if (user == null)
                return HttpNotFound();

            return View(user);
        }

        [HttpPost]
        public ActionResult Edit(MyASPData data)
        {
            ViewBag.Title = "Edit";

            if (data == null)
                return HttpNotFound();

            if (ModelState.IsValid)
            {
                MyASPData user = db.MyASPDatas.Find(data.Id);
                user.Name = data.Name;
                user.Description = data.Description;
                db.SaveChanges();
                return RedirectToAction("MyASPList");
            }
            return View(data);
        }

        public ActionResult Remove(int id)
        {
            ViewBag.Title = "Delete";
            // if (id == null)
            // {
            //      return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            //  }
            MyASPData oneItem = db.MyASPDatas.Find(id);
            if (oneItem == null)
                return HttpNotFound();

            db.MyASPDatas.Remove(oneItem);
            db.SaveChanges();
            //return RedirectToAction("MyASPList");
            return View(oneItem);
        }

        [HttpPost]
        public ActionResult Remove(MyASPData data)
        {
            ViewBag.Title = "Delete";
            if (data == null)
                return HttpNotFound();

            if (ModelState.IsValid)
            {
                MyASPData oneItem = db.MyASPDatas.Find(data.Id);
                db.MyASPDatas.Remove(oneItem);
                db.SaveChanges();
                return RedirectToAction("MyASPList");
            }
            return View(data);
        }
    }
}