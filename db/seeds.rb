# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Video.destroy_all 

require 'open-uri'

ford3 = User.create!(username: "ford3", email: "ford3@gmail.com", password: "123456")
ford3vid = Video.create!(title: "Prest", description: "Whacky wizard", user_id: ford3.id)

file = open('https://dicebox-seeds.s3.us-east-2.amazonaws.com/d%26d.mp4')

ford3vid.vid.attach(io: file, filename: 'd&d.mp4')


ford2 = User.create!(username: "ford2", email: "ford2@gmail.com", password: "123456")
ford2vid = Video.create!(title: "Find Cat", description: "Or something else", user_id: ford2.id)

file = open('https://dicebox-seeds.s3.us-east-2.amazonaws.com/d%26d2.mp4')

ford2vid.vid.attach(io: file, filename: 'd&d2.mp4')


ford1 = User.create!(username: "ford1", email: "ford1@gmail.com", password: "123456")
ford1vid = Video.create!(title: "CritIntro", description: "Some music", user_id: ford1.id)

file = open('https://dicebox-seeds.s3.us-east-2.amazonaws.com/CritRole.mp4')

ford1vid.vid.attach(io: file, filename: 'CritRole.mp4')

