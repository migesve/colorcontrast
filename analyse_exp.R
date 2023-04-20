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
  if ( mois == "12" && as.numeric(jour)>2 ){
    ## Sauvegarde dans la liste sous le champ "timestamp"
    exp.data [[timestamp]] <- fromJSON (file = url)
  }
  if (mois == "01"){
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
                                gender = logical(),
                                yearOfBirth = character (),
                                versionOS = character ()
                                # motATrouver = character (),
                                # id = integer(),
                                # motClicke = character (),
                                # ClassName = character (),
                                # BackGroundColor = character (),
                                # TextColor = character (),
                                # TR = numeric()
                                )

exp.data = exp.data[-c(1,3,4,5,6,10)]
for (i in names(exp.data)){
                      
    if (exp.data[[i]][[1]]$Sexe0 == TRUE){
      sexe = "Masculin"
    }
    else if (exp.data[[i]][[1]]$Sexe1 == TRUE){
      sexe = "Féminin"
    }
    else {sexe = "autre"}
    
    participant.info <- rbind (participant.info, data.frame (timestamp = i,
                                 tailleEcran = exp.data[[i]][[1]]$tailleEcran,
                                 gender =  sexe,
                                 yearOfBirth = exp.data[[i]][[1]]$AnneeNaissance,
                                 versionOS = exp.data[[i]][[1]]$OsVersion

                                           ))

}




participant.data <- data.frame (timestamp = character (),
                                motATrouver = character (),
                                id = integer(),
                                motClicke = character (),
                                ClassName = character (),
                                BackGroundColor = character (),
                                TextColor = character (),
                                TR = numeric())

for (t in names(exp.data)) {
  df = data.frame (timestamp = character (),
                   motATrouver = character (),
                   id = integer(),
                   motClicke = character (),
                   ClassName = character (),
                   BackGroundColor = character (),
                   TextColor = character (),
                   TR = numeric())
  for (trial in (2:length(exp.data[[t]]))) {
    df <- rbind (df,
                 data.frame(timestamp = t,
                            motATrouver = exp.data[[t]][[trial]]$motATrouver,
                            id = exp.data[[t]][[trial]]$id,
                            motClicke = exp.data[[t]][[trial]]$motClicke,
                            ClassName = exp.data[[t]][[trial]]$ClassName,
                            BackGroundColor = exp.data[[t]][[trial]]$BGC,
                            TextColor = exp.data[[t]][[trial]]$TC,
                            TR = exp.data[[t]][[trial]]$tempsDeReponse))
  }
  participant.data <- rbind (participant.data, df)
}


### **** Consistence des données

table(participant.data [, c ("BackGroundColor", "TextColor")])

table(participant.data [, c ("TextColor", "BackGroundColor", "id")])

table (participant.data [, c ("timestamp")])


### **** Statistiques descriptives

boxplot (TR ~ BackGroundColor * TextColor, participant.data)


boxplot (TR ~ BackGroundColor * TextColor, participant.data, log = "y")

aggregate (TR ~ BackGroundColor * TextColor, participant.data, mean)

aggregate (TR ~ BackGroundColor * TextColor, participant.data, median)

## faire anova

### ** Ajustement des modèles
fm.lm.TR <- lm (TR ~ BackGroundColor * TextColor, participant.data)
summary (fm.lm.TR)

### ** Tableaux d'ANOVA
anova (fm.lm.TR)
