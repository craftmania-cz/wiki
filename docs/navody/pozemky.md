---
sidebar_position: 1
tags:
 - navod
 - creative
---

# Pozemky
Tento návod obsahuje informace o tom, jak ovládat pozemky u nás na serveru. Jak spravovat hráče, nastavení a jiné možnosti, které plugin nabízí.

:::info Info
Pozemky jsou dostupné pouze na Creative serveru.
:::

## Základní příkazy
Zde je menší výpis základních příkazů, které by měl znát každý hráč.
- `/plot auto` - Automaticky ti najde volný pozemek a přidělí ti ho.
- `/plot claim` - Pokud jsi našel/a prázdný nebo volný pozemek, můžeš ho zabrat tímto příkazem.
- `/plot home` - Teleport na pozemek.
- `/plot home:2` - Teleport na 2. pozemek, na 3. se teleportuješ když dosadíš 3 atd.
- `/plot add nick` - Tímto přidáš na pozemek hráče, ale pozor budou moct stavět pouze pokud jsi ty online!
- `/plot trust nick` - Přidá na pozemek hráče, který bude moct stavět a využívat tak pozemek i když jsi offline.
- `/plot deny nick` - Zamezíš přístup hráči na tvůj pozemek.
- `/plot remove nick` - Zrušíš omezení vstupu hráči na pozemek nebo také deny, trust atd.
- `/plot delete` - Smaže pozemek.
- `/plot sethome` - Nastaví teleport na pozemek, tam kam se portneš při portu.
- `/plot setowner [nick]` - Nastaví natrvalo majitele pozemku (nemusí jít hráčům).
- `/plot visit [nick]` - Navštívíš někoho, tedy teleport na něčí pozemek.
- `/plot music` - Nastavíš hudbu na pozemku (vyžaduje server level)
- `/plot merge` - Spojí pozemky, více informací níže.
- `/plot clear` - Vyčistí pozemek, ale nechá vlastnictví na majiteli.
- `/plot kick [nick]` - Vykopne hráče z pozemku.
- `/plot unlink` - Rozpojí spojené pozemky.

## Spojení dvou a více pozemků
:::tip
- Aby jsi mohl(a) spojit pozemky, musíš **vlastnit** dva a více pozemků vedle sebe.
- Spojením pozemků se smaže cesta mezi pozemky.
:::

### Postup
1. Zkontroluj zda máš pozemky vedle sebe
2. Napiš `/plot merge auto`, tento příkaz automaticky spojí všechny tvou vlastněné pozemky, které jsou vedle sebe.
3. Pokud vše proběhlo správně (může to chvilku trvat) měla by se všude smazat cesta a vytvořit se tak 1 velký pozemek.

## Rozpojení pozemků
:::warning Varování
Rozpojením pozemků se vrátít zpět cesta a může tak potencialně zníčit stavby pokud budou v místě, kde má být cesta.
:::

Jako majitel pozemku stačí napsat `/plot unlink` a a všechny pozemky se rozpojí na individuální.

## Vlajky a nastavení
Pomocí vlajek se dá nastavit pozemek k různým stylům staveb a nebo eventů. Vyžaduje to ale vědět a znát jak je používat.

```md title="Ukázka funkčnosti příkazu"
/plot flag [add/set/remove/list] [názevVlajky] [hodnota]
```

| Název vlajky | Hodnota | Popis |
| :------ | :----: | :----- |
| titles | true/false | Zobrazování textu přes celou obrazovku |
| greeting | text | Uvítání pro hráče při vstupu na pozemek |
| farewell | text | Zpráva při odchodu z pozemku |
| feed | číslo | Ubývání hladu |
| heal | číslo | Healovani |
| invincible | true/false | Nesmrtelnost, nikdo na pozemku nedostane dmg |
| fly | true/false | Všichni na pozemku budou moct používat fly nebo se jim vypne |
| gamemode | 0/1/2 | Změna gamemodu při vstupu na pozemek |
| timer | 0-24000 | Nastavení denní doby |
| weather | sun/storm/rain | Nastavení počasí |
| disable-physics | true/false | Změna fyziky, nebudou třeba padat bloky atd. |
| player-interact | true/false | Povolí nebo zakáže všem hráčům klikat, otevírat dveře atd. |
| place | název bloku | Povolí nebo zakáže všem hráčům pokládat bloky. |
| break | název bloku | Povolí nebo zakáže všem hráčům níčit bloky. |
| use | název bloku | Povolí všem hráčům otevírat, aktivovat redstone atd. |

### Příklady použití

#### Nastavení uvítací zprávy
```
/p flag set greeting &a&lAHOJ LIDI :D
```

#### Odebrání uvítací zprávy
```
/p flag remove greeting
```

#### Nastavení titles při vstupu na pozemek
```
/p flag set titles true
```

#### Vypnutí titles na pozemku
```
/p flag remove titles
```