using System;
using System.ComponentModel.DataAnnotations;

namespace PlumsailSample.Models
{
	public class Contact
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public string FirstName { get; set; }

		[Required]
		public string LastName { get; set; }

		[Required]
		public Gender Gender { get; set; }

		[Required]
		public DateTime DateOfBirth { get; set; }

		[Required]
		public string CountryCode { get; set; }

		[Required]
		public bool IsStudent { get; set; }
	}
}
