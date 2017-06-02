import org.scalatest.{ WordSpec, Matchers }

class LibrarySpec extends WordSpec with Matchers {
  "excite" should {
    "shout everything" in {
      Library.excite("Hello") should be ("Hello!")
    }
  }
}