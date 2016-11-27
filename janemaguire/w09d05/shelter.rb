class Shelter

  attr_accessor :name
  attr_accessor :animals
  attr_accessor :capacity

  def initialize(name, animals, capacity)
    @name  = name
    @animals  = []
    @capacity = capacity
  end

end
