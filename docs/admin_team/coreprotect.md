---
sidebar_position: 1
---

# CoreProtect

CoreProtect slouží k zjišťování změn v blocích, itemů a jiných změn na mapě serveru + rollback.

## Inspector mód
Inspector mód slouží k zjišťování změn na blocích, truhlách a jiných bloků, které jsou interaktivní. Režim inspektora se aktivuje/deaktivuje pomocí příkazu:

```md
/co inspect
```

:::info Informace
Tento příkaz mají k dispozici i hráči s VIP.
:::

### Kontrola bloků a níčení
Kontrola se provádí dvěma způsoby níčením a pokládáním.

- **Levým kliknutím (zníčením)** -> vidíš změny bloku, který jsi zníčil, tedy položení/zníčení hráčem.
- **Pravým kliknutím** -> vidíš změny, které byly provedeny na bloku, tedy pokud na něj někdo něco položil, rozlil vodu atd.
- **Pravým položením bloku** -> vidíš změny, které byly provedeny na pozici bloku, kam jsi svůj blok pokládal.

## Rollback
Pomocí rollbacku lze obnovit zvolené území o určitý čas. Jakákoliv část příkazu kromě času je volitelná.

```md title="Kompletní struktura rollback příkazu"
/co rollback u:[hráč] t:[čas] r:[radius] a:[akce] b:[bloky] e:[vyjímky] #hastag
```

### Čas
Pomocí tagu `t:[čas]`, lze dané uzemí obnovit zpět o zvolený čas. Pozor! Čím delší bude čas, tím déle bude vrácení bloků trvat. Čas se píše v anglickém formátu tedy: týden: w, den: d, hodina: h, minuta: m, sekunda: s.

```md title="Ukázka použití rollback příkazu"
/co rollback u:MrWakeCZ t:60m <- obnoví vybrané pole o 60 minut zpět
/co rollback u:MrWakeCZ t:4h30m <- obnoví o 4 hodiny a 60 minut zpět
/co rollback u:MrWakeCZ t:3d4h2s <- obnoví o 3 dny, 4 hodiny a 2 vteřiny
```

### Radius
Pomocí tagu `r:[radius]` lze vybrat oblast, které se bude obnovovat po napsání příkazu rollback.

```md title="Ukázka použití radiusu"
# Obnoví vše v radiusu 300 bloků od místa napsání o 2 dny (default)
/co rollback r:300

# Obnoví vše, co hráč MrWakeCZ zníčil nebo změnil v radiusu 20 bloků od tebe
/co rollback u:MrWakeCZ r:20

# Obnoví vše v vybraném regionu pomocí WE o 2 dny od hráče MrWakeCZ
/co rollback u:MrWakeCZ t:2d r:#we
```
:::danger Varování
Pokud neuvedeš radius, server automaticky doplní vzdálenost 50 bloků od místa kde stojíš. Ujisti se tedy, že vždy zadáváš radius jinak může dojít k obnovení věci, které nechceš.
:::

### Akce
Pomocí `a:[akce]`, lze obnovit pouze vybrané akce, které hráč provedl. Například pouze položené bloky, nebo itemy, které sebral z truhly.

| Název akce | Popis |
| :----- | :---- |
| `a:block` | Položené + zníčené bloky |
| `a:+block` | **Pouze** položené bloky |
| `a:-block` | **Pouze** zníčení bloky |
| `a:click` | Věci, na které hráč klikl |
| `a:container` | Itemy v truhle, shulkerboxu a jiné. |
| `a:+container` | Itemy **pouze** vložené do truhly/shulkerboxu |
| `a:-container` | Itemy **pouze** odebrané z truhly/shulkerboxu |
| `a:kill` | Všechny usmrcené zvířata |

### Bloky
Pomocí `b:[blok]` lze specificky vybrat bloky, které obnovit.

```md title="Ukázka obnovení specifických bloků"
# Obnovení pouze stone bloků v radiusu 30 bloků
/co rollback r:30 b:stone

# Obnovení více bloků podle ID v radiusu 100 bloků
/co rollback r:100 b:stone,cobblestone,obsidian
```

### Exclude
Pomocí `e:[vyjímka]` lze nastavit vyjímku, tedy bloky které se **nemají** obnovovat.

```md
# Obnovení všeho kromě TNT
/co rollback r:200 e:tnt
```

### Hashtag
Hastag slouží k zobrazení nebo získání více informací o rollbacku:
- `#preview` náhled rollbacku/restore
- `#count` zobrazí počet řádků nalezených změn v lookup
- `#verbose` zobrazí dodatečné informace v průběhu rollbacku/restore
- `#silent` zobrazí minimální informace v průběhu rollbacku/restore

## Restore
Příkaz restore je příkaz, se kterým lze obnovit nepovedený rollback. Píše se stejně jako rollback příkaz avšak místo rollback dáš restore.

```md
# Vrácení zpět rollbacku pro hráče MrWakeCZ v radiusu 100 bloků
/co restore u:MrWakeCZ r:100
```

## Lookup
Příkaz lookup slouží k zobrazení všech změn v daném radiusu/výběru. Opět se používá obdobně jako příkazy rollback a restore.

```md
# Zobrazení všech změn v radiusu 20 bloků od hráče MrWakeCZ
/co lookup u:MrWakeCZ r:20
```