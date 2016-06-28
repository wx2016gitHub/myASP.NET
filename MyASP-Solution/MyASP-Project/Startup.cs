using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyASP_Project.Startup))]
namespace MyASP_Project
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
