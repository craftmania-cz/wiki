# Limity na serveru
Aby na serveru nevznikl bordel, s tím že si některý hráči postaví velké stavby a tím pak zalagují hru všem, jsou na serveru nastaveny určité limity, které některé akce hráčů omezují.

### Spawnery
Limit spawnerů od verze 1.19 je zrušený a hráč si může do chunků položit kolik chce spawnerů.

### Observery
Observer patří k jedním nejproblémovějším blokům z Redstonu. Limit je na základě tvého globálního levelu `/level`

| Global Level | Limit observerů na chunk |
| ------ | :------ |
| `<25` | 5 | 
| `>25` | 10 | 
| `>50` | 20 | 
| `>75` | neomezěně |

### Hopper
Limit hopper bloků je zruší s verzí 1.20, hráč si můžeš do chunků položit kolik chce hopperů.

### Redstone
Sem spadají lampy, repeatery, komparátory, redstone dráty a další bloky z Redstonu. Limit je na základě tvého globálního levelu `/level`

| Global Level | Limit restonu na chunk |
| ------ | :------ |
| `<25` | 25 | 
| `>25` | 100 | 
| `>50` | 150 | 
| `>75` | 200 |

### Despawn itemů
Na každém serveru se itemy despawnují po době, které se nachází na zemi - 5 minut (240s).

### Limit entit na blok
Entity lze vmáčknout i do 1x1 bloku, v taktovém případě platí tato podmínka, kde limitujeme počet entit na 1x1 blok na počet:

- Survival, Oneblock -> 12
- Creative -> 3

### Limit entit na skupinu
Zde dochází k trochu složitějšímu výpočtu omezení, jelikož omezení na "skupinu" je počítáno podle toho kolik se nachází v okolí jedné entity dalších entit. Nejjednodušeji to lze vysvětlit na skupině zvířat.. př. 40 krav v 1 chunku, nebo 110 ovcí v ohradě. To je limit na skupinu.

- Skupina 1: cod, salmon, pufferfish, tropical fish, cat, dolphin, squid, horse, axolotl
    - Vzdalenost: 4 bloky
    - Maximální počet: 20 entit

- Skupina 2: panda, turtle, parrot, llama, polar bear, ocelot, cow, sheep, pig, wolf, hoglin, goat, bee
    - Vzdalenost: 5 bloků
    - Maximální počet: 40 entit

- Skupina 3: chicken
    - Vzdalenost: 4 bloky
    - Maximální počet: 20 entit

- Skupina 4: creeper, skeleton, spider, zombie, enderman, cave spider, witch, endermite, shulker
    - Vzdalenost: 2 bloky
    - Maximální počet: 10 entit

- Skupina 5: blaze, magma cube, guardian, snowman, pillager, ravager, iron golem, slime
    - Vzdalenost: 3 bloky
    - Maximální počet: 8 entit

- Skupina 6: minecart
    - Vzdalenost: 5 bloky
    - Maximální počet: 10 entit

### Nether portal spawn rate
Spawn rate pigmanů z portálů je nastaven na 20% klasického spawnu.
