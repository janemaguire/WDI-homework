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

  def to_s
  "#{name}, #{breed}, #{gender}, #{toys}"
  end

  def add_toys(toys)
    @toys << toys
  end

end
