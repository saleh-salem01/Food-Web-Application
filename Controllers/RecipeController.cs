using FoodApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace FoodApplication.Controllers
{
    public class RecipeController : Controller
    {
        public IActionResult Index()
        {
            return View("/Views/Home/Recipe/Index.cshtml");
        }
       // [HttpPost]
        //public IActionResult GetPecipeCard([FromBody]List<Recipe> recipes)
        //{
         //   return PartialView("_RecipeCard", recipes);
        //}
    }
}
