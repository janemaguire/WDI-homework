calc = true
while calc do

  p "Enter your first number"
  input_one = gets.to_f
  p "Choose from +, -, *, /, ^, sq, moon or sugar"
  operator = gets.chomp

  if operator == "sq"
    puts Math.sqrt(input_one).to_s
  elsif operator == "moon"
    puts (input_one) * (0.2)
  else

    p "Enter your second number"
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
    elsif operator == "sugar"
      if input_one > 5
        puts (input_two * 0.18).to_s + "p"
      elsif input_one > 8
        puts (input_two * 0.24).to_s + "p"
      else
        puts "0p"
      end
    end
  end

puts "Do another calculation? (y/n)"
calc = gets.chomp == 'y'
end

puts "Ok, bye then"
