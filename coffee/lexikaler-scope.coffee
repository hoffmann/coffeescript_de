# Der CoffeeScript Compiler sorgt dafür das Variablen immer im richtigen Scope
# definiert werden. Man braucht nicht mehr von Hand var hinzufügen
outer = 1
changeNumbers = ->
  inner = -1
  outer = 10
inner = changeNumbers()
