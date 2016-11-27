class Shelter

  attr_reader :name
  attr_accessor :animals
  attr_reader :capacity

  def initialize(name, animals, capacity)
    @name  = name
    @animals  = []
    @capacity = 10
  end

  def add_animal(animal)
  @animals << animal
  end

end
