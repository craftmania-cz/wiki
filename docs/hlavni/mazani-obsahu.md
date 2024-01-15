---
sidebar_position: 1
tags:
 - stavby
 - problemy
---

# Mazání obsahu
O co jde? Pokud nebudeš hrát na serveru dostatečně dlouho, může se stát, že tě server v několika fázích kompletně smaže z serveru. 

Proč se to ale děje? Hráči generují gigabajty dat, které se ukládají do databází a disků, pokud je hráč neaktivní po nějakou dobu
stává se pro server "zbytečným" a je tak potřeba uvolnit místo pro nové data. Tomuto procesu se dá vyhnout, když se připojíš v nějakých intervalech na server.


| Typ | Počet dní ke smazání | Poznámka |
| :--- | :---: | --- |
| CraftMania Profil | Permanentní | Statistiky generované námi, odehraný čas, VIP atd |
| Registrace hráče | Permanentní | Pokud se warez hráč zaregistruje pomocí `/register` |
| Historie akcí hráče | 5 let | Vše co jsi na serveru napsal, provedl a uskutečnil |
| CoreProtect | 1 rok | Vše co jsi položil, zníčil a zabill |
| Minecraft data hráče | 365 | Data hráče zahrnují inventář, enderchest, pozici a statistiky |
| Chunky | 365 | Chunky zahrnují stavby, moby, itemy a entity v daném chunku |
| Residence / Lands | 365 | Zahrnuje zabrané chunky pomocí pluginu Residence |
| Oneblock / Skyblock | 365 | Jelikož se jedná o chunky, které jsou výše uvedeny |
| Ekonomický profil | 180 |Peníze na serveru tedy `/money` |
| Chestshop | 180 | Postavné cheshopy, ve kterých hráči mohou nakupovat |

:::info
Data se mažou automaticky, dle zvolených časových intervalů.
:::

