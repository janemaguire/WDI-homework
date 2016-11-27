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
  puts "3 : Add a client"
  puts "4 : List clients"
  puts "5 : Give up an animal"
  puts "6 : Adopt an animal"
  puts "Q : Quit\n\n"
  print "--> "
  gets.chomp
end

def list_animals(shelter)
  shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
  end
end

def list_clients(shelter)
  shelter.clients.each_with_index do |client, index|
    puts "#{index}.\t#{client}"
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

  when "3" # Add a client
    puts "First name?"
    first_name = gets.chomp
    puts "Last name?"
    last_name = gets.chomp
    puts "Pets?"
    pets = gets.chomp
    new_client = Client.new first_name, last_name, pets
    # puts @shelter.add_client new_client
    gets

  when "4" # List clients
    puts "Here is a list of the clients:"
    list_clients @shelter
    gets
  when "5" # Give up an animal
  when "6" # Adopt an animal
  end

  response = menu
end
