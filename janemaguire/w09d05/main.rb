require_relative "animal"
require_relative "client"
require_relative "shelter"

@shelter = Shelter.new "Jane's Shelter", [], 10
bob = Animal.new "Bob", "Raccoon", "m", ["bat", "ball"]

def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name} ***\n\n"
  puts "1 : Add an animal"
  puts "2 : List animals"
  puts "3 : List clients"
  puts "4 : Give up an animal"
  puts "5 : Adopt an animal"
  puts "Q : Quit\n\n"
  print "--> "
  gets.chomp
end

def list_animals(shelter)
  shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
  end
end

response = menu

while response.upcase != "Q"
  case response
  when "1" # Add an animal
    puts "Name?"
    name = gets.chomp
    puts "Breed?"
    breed = gets.chomp
    puts "Gender?"
    gender = gets.chomp
    puts "Favourite toys?"
    toys = gets.chomp
    new_animal = Animal.new name, breed, gender, toys
    puts @shelter.add_animal new_animal
    gets
when "2" # List animals
    puts "Here is a list of the animals:"
    list_animals @shelter
    gets

  when "3" # List clients
  when "4" # Give up an animal
  when "5" # Adopt an animal
  end

  response = menu
end
