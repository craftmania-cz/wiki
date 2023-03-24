---
sidebar_position: 1
---

# Ban Systém
Tato stránka obsahuje výpis všech příkazů a návody na jak je používat k trestání hráčů na sevreru.

## Varování / Warn
| Příkaz | Popis |
| :---- | :----- |
| `/warn [nick/uuid] [důvod]` | Udělí hráči warn, který se zobrazí v chatu s platností na 7 dní. |
| `/unwarn [nick/uuid]` | Zruší aktivní warn u hráče nebo smaže již neplatný warn z historie. |
| `/warnings [nick/uuid]` | Zobrazí seznam všech udělených warnů na nicku - platných i starých. |

:::info Přesažení limitu
Varování se sčítají, tzn. že 1 warn má platnost 7 dní. Pokud hráč přesáhne určitý počet warnů (platných), server automaticky provede opatření dle přesahu - kick, ban.
:::

### Příklad použití
```md title="Klasické varování"
/warn Boruvka6 spam
```

## Vyhození / Kick
| Příkaz | Popis |
| :---- | :----- |
| `/kick [nick/uuid/ip] [důvod]` | Vyhodí hráče z serveru |

## Umlčení / Mute
| Příkaz | Popis |
| :---- | :----- |
| `/tempmute [nick/uuid] [čas] [důvod]` | Udělí hráči mute na určitou dobu zadanou v příkazu. |
| `/unmute [nick/uuid]` | Zrušení všech aktivních mute, které hráč má na nicku nebo IP adrese. |

### Příklad použití
```md title="Umlčení na 2 hodiny"
/tempmute Boruvka6 2h spam
```

## Banování / Ban
| Příkaz | Popis |
| :---- | :----- |
| `/ban [nick/uuid] [důvod]` | Udělí permanentní ban hrái na serveru |
| `/ipban [nick/ip/uuid] [důvod]` | Zabanuje permanetně hráči IP adresu na serveru. V případě uvedení nicku server automaticky zabanuje i IP. |
| `/tempban [nick/uuid] [čas] [důvod]` | Udělí hrái dočasný ban na celý server. |
| `/unban [nick/uuid/ip]` | Odbanuje hráče, funguje i na IP bany |

### Příklad použití
```md title="Permanentní ban s důvodem"
/ban Boruvka6 Cheaty - xray
```

```md title="Dočasný ban na celý server"
/tempban Boruvka6 2h Opakovaný spam
```

## Zjištování informací
K dispozici je na serveru pár příkazů, díky kterým lze rychle zjistit jaký trest má hráč nebo jeho kompletní historii.

| Příkaz | Popis |
| :---- | :----- |
| `/history [nick/uuid/ip]` | Zobrazení historie trestů pro zvoleného hráče (menší banlist) |
| `/iphistory [nick]` | Historie všech evidovaných IP adres, ze kterých se hráč připojil na server |
| `/checkban [nick/uuid/ip]` | Kontrola, zda má hráč ban pokud ano, zobrazí informace o banu |
| `/checkmute [nick/uuid/ip]` | Kontrola, zda máš hráč aktivní mute |
| `/dupeip [nick/uuid]` | Zobrazí všechny nicky, které jsou evidovány na poslední připojené IP hráče. |
| `/ipreport` | Zobrazí kdo na serveru obchází bany |
| `/staffhistory [nick]` | Zobrazí historii udělených trestů člena AT |

## Další informace
### Server specifické tresty
Každý příkaz jako ban, mute atd. lze použít i specificky na jednotilivé servery. Například když chceš hráči dát ban pouze na survival nebo event server, ale jinde by měl mít přístup.

V takovém případě stačí do příkazu nakonec přidat `server: [idServeru]`. 

```md
/tempban Boruvka6 2h Opakovaný spam server:survival
/tempmute Boruvka6 2h Spam server:skyblock
```

### Oznámení o trestu
Tresty udělené hráčům vidí pouze členové AT. Hráči nejsou zatěžováni udělováním trestů v chatu, proto když někomu dáš trest vidí to pouze potrestaný hráč a člen AT.
