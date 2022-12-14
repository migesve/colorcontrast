webdir <- "https://rafael.laboissiere.net/m1-miashs-2022-s1/Dohw5OhT/data/"

page <- readLines (con = webdir)
page

### ** Extraction des noms des fichiers

for (line in page) {
  m <- regexpr ("[-0-9]+.json", line)
  if (m > 0) {
    filename <- regmatches (line, m)
    print (filename)
  }
}

files <- c ()
for (line in page) {
  m <- regexpr ("[-0-9]+.json", line)
  if (m > 0) {
    filename <- regmatches (line, m)
    files <- c (files, filename)
  }
}

str (files)

length (files)

### ** Composition des URLs pour les fichiers de chaque participant

for (f in files) {
  url <- paste (webdir, f, sep = "")
  print (url)
}

### ** Extraction du timestamp

for (f in files) {
  print (strsplit (f, "\\.") [[1]] [1])
}
  

### ** Récupération des données au format JSON

### Initialise une liste vide

library(rjson)

exp.data <- list ()
for (f in files) {
  ## Compose URL
  url <- paste (webdir, f, sep = "")
  ## Extrait timestamp
  timestamp <- strsplit (f, "\\.") [[1]] [1]
  mois = substr(timestamp, start = 6, stop = 7)
  jour = substr(timestamp, start = 9, stop = 10)
  if ( mois == "12" && as.numeric(jour)>=2 ){
    ## Sauvegarde dans la liste sous le champ "timestamp"
    exp.data [[timestamp]] <- fromJSON (file = url)
  }

  ## Indicateur de progression
  cat (sprintf ("Read file %s\r", f))
}
cat ("\n")

length (exp.data)

str (exp.data)

### ** Mise en forme des données

### *** Data frame avec les informations des participants

### **** Avec boucle for

participant.info <- data.frame (timestamp = character (),
                                tailleEcran = character (),
                                gender0 = logical (),
                                gender1 = logical (),
                                gender2 = logical (),
                                yearOfBirth = character (),
                                motATrouver = character (),
                                id = integer(),
                                motClicke = character (),
                                ClassName = character (),
                                BackGroundColor = character (),
                                TextColor = character (),
                                TR = numeric())

for (n in names (exp.data)) {
  dat <- exp.data [[n]]
  participant.info <- rbind (participant.info,
                             data.frame (timestamp = n,
                                         tailleEcran = dat$tailleEcran,
                                         gender0 = dat$Sexe0,
                                         gender1 = dat$Sexe1,
                                         gender2 = dat$Sexe2,
                                         yearOfBirth = dat$AnneeNaissance,
                                         motATrouver = dat$MotATrouver,
                                         id = dat$id,
                                         motClicke = dat$moClicke,
                                         ClassName = dat$ClassName,
                                         BackGroundColor = dat$BGC,
                                         TextColor = dat$TC,
                                         TR = dat$tempsdeReponse))
}
