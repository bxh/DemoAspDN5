using System;

namespace DemoAspDN5
{
	// This project can output the Class library as a NuGet Package.
	// To enable this option, right-click on the project and select the Properties menu item. In the Build tab select "Produce outputs on build".
	public class Task
	{
		public int Id { get; set; }
		public string Content { get; set; }
		public DateTime? Deadline { get; set; }
		public bool Accomplished { get; set; }
	}
}
