using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;

namespace DemoAspDN5
{
	[Route( "api/[controller]" )]
	public class TasksController : Controller
	{
		// GET: api/tasks
		[HttpGet]
		public IEnumerable<Task> Get()
		{
			return _data;
		}

		// GET api/tasks/5
		[HttpGet( "{id}" )]
		public Task Get(int id)
		{
			return _data.SingleOrDefault( d => d.Id == id );
		}

		// POST api/tasks
		[HttpPost]
		public void Post(Task task)
		{

		}

		// PUT api/tasks/5
		[HttpPut( "{id}" )]
		public void Put(int id, Task value)
		{
		}

		// DELETE api/values/5
		[HttpDelete( "{id}" )]
		public void Delete(int id)
		{
		}

		private Task[] _data =
		{
			new Task()
			{
				Id = 1,
				Content = "Vacuum bedrooms",
				Accomplished = true
			},
			new Task
			{
				Id = 2,
				Content = "Get rid of leaves before cluttering up garage",
				Deadline = DateTime.Now.AddDays(1)
			},
			new Task
			{
				Id = 3,
				Content = "Finish reading 'The Thorn Bird'",
				Deadline = DateTime.Now.AddMonths(1)
			},
			new Task
			{
				Id = 4,
				Content = "Swim breaststroke for two miles",
				Deadline = DateTime.Now.AddYears(1)
			}
		};
	}
}
