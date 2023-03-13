---
sidebar_position: 1
---

# Ban Systém
Tato stránka obsahuje výpis všech příkazů a návody na jak je používat k trestání hráčů na sevreru.

## Varování / Warn
| Příkaz | Popis |
| :---- | :----- |
| `/warn [nick] [důvod]` | Udělí hráči warn, který se zobrazí v chatu s platností na 7 dní. |
| `/unwarn [nick]` | Zruší aktivní warn u hráče nebo smaže již neplatný warn z historie. |
| `/warnings [nick]` | Zobrazí seznam všech udělených warnů na nicku - platných i starých. |

:::info Přesažení limitu
Varování se sčítají, tzn. že 1 warn má platnost 7 dní. Pokud hráč přesáhne určitý počet warnů (platných), server automaticky provede opatření dle přesahu - kick, ban.
:::

### Příklad použití
```md title="Klasické varování"
/warn Boruvka6 spam
```

## Umlčení / Mute
| Příkaz | Popis |
| :---- | :----- |
| `/tempmute [nick] [čas] [důvod]` | Udělí hráči mute na určitou dobu zadanou v příkazu. |
| `/unmute [nick]` | Zrušení všech aktivních mute, které hráč má na nicku nebo IP adrese. |
