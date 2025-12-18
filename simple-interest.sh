#!/bin/bash

# Calcolatore di interesse semplice: I = P * R * T / 100

echo "Inserisci il capitale (P):"
read principal

echo "Inserisci il tasso di interesse annuo in percentuale (R):"
read rate

echo "Inserisci il periodo di tempo in anni (T):"
read time

# Calcolo interesse semplice
interest=$(( principal * rate * time / 100 ))

# Calcolo importo totale (capitale + interesse)
amount=$(( principal + interest ))

echo "Interesse semplice: $interest"
echo "Importo totale (capitale + interesse): $amount"
