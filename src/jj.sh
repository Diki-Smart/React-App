#! /bin/bash

echo "Nom :"
read nom
echo "Prénom :"
read prenom
echo "Numéro de rue :"
read num_rue
echo "Nom de rue :"
read nom_rue
echo "Code postal :"
read code_postal
echo "Ville :"
read ville

echo "Somme gagnée :"
read gain

echo "Fichier destination :"
read dest

if ! >| "$dest" ; then
    echo "Erreur de création" > /dev/stderr
    exit 1
fi

echo "Adresse :" >> "$dest"
echo "  $nom $prenom" >> "$dest"
echo "  $num_rue $nom_rue, $code_postal $ville" >> "$dest"

if test "$gain" -gt 0 ; then
    echo "Cher(e) $nom $prenom, vous avez gagné la somme \
         de $gain Euros."
elif test "$gain" -eq 0 ; then
    echo "Cher(e) $nom $prenom, vous n'avez pas gagné \
         cette fois-ci."
else
    echo "Erreur, le gain doit être >= 0" > /dev/stderr
    exit 1
fi >> "$dest"

