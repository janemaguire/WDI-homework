class Venue < ApplicationRecord
  has_and_belongs_to_many :queens
end
