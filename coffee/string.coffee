# CoffeeScript interpoliert in Strings mit doppelten Anführungszeichen wie
# Ruby die Werte in #{..}, Strings in einfachen Anführungszeichen werden nicht ersetzt

name = "Peter"
msg1 = "hello #{name}"
msg2 = 'hello #{name}'

alert msg1
alert msg2

# Mehrzeilige Strings sind erlaubt
mobyDick = "Call me Ishmael. Some years ago --
 never mind how long precisely -- having little
 or no money in my purse, and nothing particular
 to interest me on shore, I thought I would sail
 about a little and see the watery part of the
 world..."

