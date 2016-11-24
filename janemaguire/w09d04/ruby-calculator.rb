calc = true
while calc do

  p "Enter your first number and hit return"
  input_one = gets.to_f
  p "Choose from +, -, *, /, ^, sq or moon and hit return"
  operator = gets.chomp

  if operator == "sq"
    puts Math.sqrt(input_one).to_s
  elsif operator == "moon"
    puts (input_one) * (0.2)
  else

    p "Enter your second number and hit return"
    input_two = gets.to_f

    if operator == "+"
      puts "Your answer is " + (input_one + input_two).to_s
    elsif operator == "-"
      puts "Your answer is " + (input_one - input_two).to_s
    elsif operator == "*"
      puts "Your answer is " + (input_one * input_two).to_s
    elsif operator == "/"
      puts "Your answer is " + (input_one / input_two).to_s
    elsif operator == "^"
      puts "Your answer is " + (input_one ** input_two).to_s
    end
  end

puts "Do another calculation? (y/n)"
calc = gets.chomp == 'y'
end

puts "Ok, bye then"
