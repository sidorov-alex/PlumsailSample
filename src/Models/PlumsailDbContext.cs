using Microsoft.EntityFrameworkCore;

namespace PlumsailSample.Models
{
	public class PlumsailDbContext : DbContext
	{
		public DbSet<Contact> Contacts { get; set; }

		public PlumsailDbContext(DbContextOptions<PlumsailDbContext> options)
			: base(options)
		{
		}
	}
}
