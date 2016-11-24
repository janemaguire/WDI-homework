p "Enter your first number and hit return"
input_one = gets.to_i
p "Choose from +, -, * or / and hit return"
operator = gets.chomp
p "Enter your second number and hit return"
input_two = gets.to_i

if operator == "+"
  puts "Your answer is " + (input_one + input_two).to_s
elsif operator == "-"
  puts "Your answer is " + (input_one - input_two).to_s
elsif operator == "*"
  puts "Your answer is " + (input_one * input_two).to_s
elsif operator == "/"
  puts "Your answer is " + (input_one / input_two).to_s
end
