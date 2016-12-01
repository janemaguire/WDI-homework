class Bird < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :breed, presence: true
  validates :image, presence: true
end
