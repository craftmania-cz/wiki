---
sidebar_position: 1
tags:
 - navod
 - survival
---

# Residence
Velký návod na to, jak plně ovládat residence, přidávat hráče a jak měnit různá nastavení.

## Základní informace
- Každý hráč má zdarma 3 residence o velikost 100x100x256
- Další residence jsou již zpoplatněny podle VIP `/vip`
- Velikost residencí se dá ale zakoupit pomocí našeho Coinshopu `/cshop`

:::info Informace
Residence jsou aktuálně dostupné pouze na Legacy serveru - Survival 1.17
:::

## Vytvoření residence
K vytvoření residence budeš potřebovat dřevěnou motyku (Wooden Hoe), nachází se v základním kitu Tools, který dostane každý nový hráč při prvním vstupu na server nebo individuálně `/kit tools`.

1. Jako první krok uchop motyku a **levým tlačítkem klikni** na zem, označíš Bod č.1
2. Jako další krok jdi šikmo do druhého rohu a **klikni na zem pravým tlačítkem**, tím označíš Bod č. 2
3. Server ti automaticky pomocí efektů zobrazí co jsi označil za polohu.
4. Jako další krok napiš `/res select vert` - tímto příkazem zadáš serveru příkaz, aby rozšířil tvoje označení na 0 až 256 bloků do výšky. Je to daleko účinnější než stavět sloupy.
5. Pokud jsi si všiml, že ti residence nestačí (to co jsi aktuálně vybral), stačí si stoupnout na zem a napsat `/res select expand [číslo]` - za číslo dáš počet bloků, o které chceš rozšířit (tam kam koukáš) výběr právě vytvářené residence. Př. `/res select expand 30`.
6. Jako další krok zadáš příkaz `/res create [NázevResidence]` - za NázevResidence si vymysli cokoliv, tak se totiž bude jmenovat tvoje nyní vytvořená residence, jméno ale musí být unikátní nemohou být na serveru dvě stejné residence. Př. `/res create MojeResidence`
7. Následně ti server napíše do chatu, zda residence byla vytvořena nebo ne a důvod.

## Vytvoření sub-residence
Někdy se najdou hráči, co si chtějí vytvořit v Residenci sub-residenci. Třeba pro kamaráda ale nechtějí, aby kamarád mohl přenastavovat hlavní Residenci, která to překrývá.

1. Stoupneš si do residence, sub-residence nemůže být mimo hranice velké residence.
2. Zvolíš opět rohy sub-residence jako při vytváření klasické residence, nezapomeň použít `/res select vert` nebo `/res select expand` příkaz.
3. Sub-residenci vytvoříš příkazem `/res subzone NázevVelkéResidence NázevMaléResidence`
4. Server ti opět napíše do chatu a označí co jsi vytvořil, pokud ne i důvod.

## Vlajky
Každý plugin, který se stará o zabezpečení má vlajky. Díky vlajkám si můžeš vytvořit prakticky Residenci na míru.

- move - Pohyb v residenci
- build - Stavění v residenci
- place - Pokládání bloků
- destroy - Níčení bloků
- use - Používání páček, tlačítek atd.
- container - Otevírání truhel, endertruhel atd.
- pvp - Zabíjení hráčů
- tp - Teleportace na resku
- ignite - Zapalování ohňů, trávy atd.
- firespread - Hoření dřeva, trávy atd.
- bucket - Používání kyblíků na vodu/lávu.
- flow - Zakáže/Povolí vodu/lávu aby tekla.
- lavaflow - Zakáže/Povolí lávu aby tekla.
- waterflow - Zakáže/Povolí vodu aby tekla.
- creeper - Výbuchy creeperů a jejich níčení bloků.
- tnt - Výbuch TNT.
- monsters - Spawn monster (Zombie, Skeleton, Slime atd.)
- animals - Spawn zvířat (Ovečka, Králík, Prase atd.)
- subzone - Zakáže vytváření Sub-Residencí (pokud má nějaký hráč také full práva v Residenci)
- healing - Zakáže/Povolí uzdravování.
- piston - Pohyb pistonů/pístů.
- diode - Funkčnost opakovačů/repeaterů.
- lever - Funkčnost páček.
- button - Funkčnost tlačítek.
- door - Otevírání dvěří.
- table - Zakáže/Povolí crafting table.
- enchant - Zakáže/Povolí Enchantment Table.
- brew - Zakáže/Povolí vaření potionů.
- bed - Používání postele.
- cake - Papání koláče.
- note - Hraní na Noteblock/Jukebox
- trample - Zakáže/Povolí aby ti nikdo nemohl zníčit zasazené seno, mrkev atd.
- burn - Hoření mobů v Residenci.
- explode - Explose v Residenci - funguje na Creepery, Withery, Ghasty, TNT atd.
- fireball - Níčení pomocí vystřeleného FireBallu.
- animalkilling - Zakáže/Povolí hráčům aby mohli zabíjet zvířata v Residenci.
- mobkilling - Zabíjení monster.
- nofly - Vypne hráči při vstupu do Residence fly.
- vehicledestroy - Níčení minecartů/lodí.
- shear - Stříhání ovcí.
- leash - Připoutání koně pomocí lana atd.
- feed - Povolí v residenci nemizející Hunger Bar.
- damage - Zakáže/Povolí mobům aby mohli dávat hráčům damage.
- pressure - Funkčnost nášlapných desek/Pressure platů.
- redstone - Vypne/zapne kompletně Redstone.
- trade - Používání /trade.
- nomobs - Zakáže/Povolí kompletně spawn mobů.
- keepinv - Zakáže/Povolí drop inventu po smrti - VIP
- keepexp - Zakáže/Povolí drop expů po smrti - VIP
- day - Permanentní den
- night - Permanentní noc
- chat - Psaní do chatu.
- mobitemdrop - Dropy z mobů.
- mobexpdrop - Dropy expů z mobů.
- snowtrail - Vytváření sněhu od sněhuláka.
- respawn- Respawn hráče, pokud je na false hráč se respawne na spawnu.
- bucketfill - Naplnění kýblů.
- bucketempty - Vyprázdění kýblů.
- enderpearl - Používání enderperel.
- dye - Obarvování oveček.

## Nastavování práv
Každé z nastavení (vlajek) nebo práv má 3 stavy, které mohou mít.
- **Nastaveno** - Pokud je hodnota na True (pravda), znamená to že daná vlajka je v Residenci zapnuta a plní svojí funkci.
- **Vypnuto** - Pokud je hodnota na False (nepravda), což jak název značí je stav pro vypnuto.
- **Nenastaveno** - Je defaultní hodnota, je to prakticky "nenastaveno" avšak vlajka nic neblokuje ani nenastavuje -> není aktivní.

### Nastavení vlajky v residenci
1. Vyber si vlajku co chceš změnit například "move".
2. Stoupni si do residence a napiš `/res set [NázevResidence] [vlajka] [hodnota]` -> V mém případě to bude `/res set Test move false`, tím jsem zakázal v residenci pohyb hráčů.

Pokud chceš vlajku odebrat jednoduše místo hodnoty dáš **remove**, pokud jí chceš zakázet tak **false**.

```md
/res set Test move remove -> odebrání
/res set Test move false -> zablokování pohybu
/res set Test move true -> povolení pohybu
```

:::info Úprava sub-residence
V případě, že chceš nastavit sub-residenci musíš název napsat ve tvaru Residence.SubResidence
:::

### Nastavení pro hráče
Opět si zde ukážeme ukázkový příklad s vlajkou "move" tedy `/res pset [NázevResidence] [nick] [vlajka] [hodnota]`

```md
/res pset TestJ MrWakeCZ move false
```

## Další příkazy
### Výběrové příkazy při vytváření Residencí
- `/res select chunk` - Vybere aktuální chunk kde se nacházíš.
- `/res select expand [číslo]` - Rozšíří výběr residence o daný počet bloků na stranu na kterou se koukáš.
- `/res select size` - Zobrazí pomocí efektů, jak velkou část máš vybranou.
- `/res select shift [číslo]` - Oprak příkazu expand, zmenšení výběru residence podle strany na kterou koukáš.
- `/res select vert` - Vybere od 0 do 256 bloků oblast.

### Příkazy pro správu residence
- `/res create [název]` - Vytvoří residenci s jménem který jsi zvolil.
- `/res remove [název]` - Smaže residenci (musíš jí vlastnit).
- `/res removeall` - Smaže všechny tvoje residence.
- `/res subzone [název]` - Vytvřoří sub-residenci

### Informační příkazy
- `/res current` - Zobrazí informace o Residenci, kde se nacházíš.
- `/res info` - Větší popis Residence v chatu.
- `/res list` - Zobrazí všechny tvoje Residence.
- `/res limits` - Zobrazí aktuální (podle Ranku) limity na Residenci.

### Ostatní příkazy
- `/res default [název]` - Nastaví defaultní hodnoty v Residenci.
- `/res give [název] [nick]` - Daruješ Residenci.
- `/res message [název] [enter/leave] [text]` - Nastaví zprávu při příchodu/odchodu v Residenci.
- `/res message [název] remove [enter/leave]` - Odebere zprávy.
- `/res tp [název]` - Teleport na Residenci.
- `/res tpset` - Nastaví teleport v Residenci.
- `/res unstuck` - Portne tě mimo území Residence (tam kde končí)
