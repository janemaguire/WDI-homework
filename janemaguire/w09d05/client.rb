class Client

  attr_accessor :first_name
  attr_accessor :last_name
  attr_accessor :pets

  def initialize(first_name, last_name, pets)
    @first_name  = first_name
    @last_name  = last_name
    @pets = []
  end

  def to_s
  "#{first_name}, #{last_name}, #{pets}"
  end

end
