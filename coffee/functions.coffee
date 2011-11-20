# Funktionen werden mit einer optionalen Liste von Parametern in Klammern
# einem Pfeil und nachfolgend dem Funktionskörper definiert
square = (x) -> x * x
cube   = (x) -> square(x) * x

# Funktionen können Default Argumente definieren
fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}..."


# Mit Hilfe von ... Splats kann eine Funktion eine variable Anzahl von
# Argumenten entgegen nehmen
gold = silver = rest = "unknown"

awardMedals = (first, second, others...) ->
  gold   = first
  silver = second
  rest   = others

contenders = [
  "Michael Phelps"
  "Liu Xiang"
  "Yao Ming"
  "Allyson Felix"
  "Shawn Johnson"
  "Roman Sebrle"
  "Guo Jingjing"
  "Tyson Gay"
  "Asafa Powell"
  "Usain Bolt"
]

awardMedals contenders...

alert "Gold: " + gold
alert "Silver: " + silver
alert "The Field: " + rest
