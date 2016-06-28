using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MyASP_Project.Models
{
    public class MyASPData
    {
        public int Id { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        [StringLength(20)]
        public string Name { get; set; }
        [Required]
        [StringLength(10)]
        public string PhotoID { get; set; }
        [Required]
        [StringLength(60)]
        public string Description { get; set; }
    }

    public class MyASPDB : DbContext
    {
        public DbSet<MyASPData> MyASPDatas { get; set; }

    }
}