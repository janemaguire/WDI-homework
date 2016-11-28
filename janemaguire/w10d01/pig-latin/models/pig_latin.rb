class PigLatin

  # Extract and return the 1-, 2-, or 3-letter prefix from the provided word.
  # Prefix could be any of:
  # - "squ", "sch", etc
  # - "sh", "ch", "th", etc
  # - a single character
  def self.extract_prefix(word)
    first_three = word[0..2]
    first_two = word[0..1]
    first_one = word[0]

    if %w(sch squ thr).include? first_three
      first_three
    elsif %w(sh th qu ch).include? first_two
      first_two
    else
      first_one
    end
  end

  # Check if the string passed in is a vowel.
  # Note the use of the question mark at the end of the method name -
  # indicates that it returns a boolean value.
  def self.is_vowel?(prefix)
    %w(a e i o u).include?(prefix[0])
  end

  # Construct the response from the word according to the prefix & type.
  def self.construct_response(word, prefix, type)
    if type == "vowel"
      "#{word}ay"
    else
      "#{word[prefix.length..-1]}#{prefix}ay"
    end
  end

  def self.translate words
    words.split(" ").map do |word|
      prefix = self.extract_prefix word
      type = self.is_vowel?(word) ? "vowel" : "consonant"
      self.construct_response(word, prefix, type)
    end.join " "
  end
end
