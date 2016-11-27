class Animal

  attr_accessor :name
  attr_accessor :breed
  attr_accessor :gender
  attr_accessor :toys

  def initialize(name, breed, gender, toys)
    @name  = name
    @breed = breed
    @gender = gender
    @toys = []
  end

end

animal = Animal.new "bob", "raccoon", "m", ["bat", "ball"]

puts animal.name
puts animal.breed
puts animal.gender
puts animal.toys
