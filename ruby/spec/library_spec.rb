require "library"

describe Library do
  it "should shout everything" do
    expect(Library.new.excite("foo")).to eq("Hello foo!")
  end
end
