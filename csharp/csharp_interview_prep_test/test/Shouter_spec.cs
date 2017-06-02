using NSpec;

namespace csharp_interview_prep 
{
	public class Shouter_spec : nspec
	{
		void it_should_shout()
		{
			new Shouter().Shout("Hello").should_be("Hello!");
		}
	}
}

