---
sidebar_position: 1
---

# Struktura Admin Teamu
Tato sekce je určena pro členy AT a informace ohledně veřejných informací Admin Teamu. Pro hráče zde není nic relativního. :)

## Prefixy a skupiny na serveru
Práva jsou děleny do několika kategorií dle priority, kde nejnižší je `Hráč` a nejvyšší `Majitel`. Většina rolí obsahuje i speciální kategorie pro ženské role, jako jsou například Helperka, Adminka, Builderka a jiné.

Vyšší priorita znamená jiný prefix, práva a nastavení dle serverů.

| Role | Priorita | Role | Priorita |
| :---- | :-----: | :----- | :------: |
| Majitel | 1000 | Moderator | 420 |
| Manager | 900 | Tester | 410 |
| Developer | 800 | Amethyst VIP | 405 |
| Eventer | 750 | Obsidian VIP | 400 |
| Adminka | 710 | Emerald VIP | 300 |
| Admin | 700 | Diamond VIP | 200 |
| Builder | 550 | Gold VIP | 100 |
| Artist | 520 | default | 0 |
| Helperka | 510 |
| Helper | 500 |

## Nábory do AT
Nábory jsou konány v rozemí 3-12 měsíců dle potřeby serveru. Od roku 2016 se konají pouze nábory na pozice `Helper` a jiné nižší pozice.

Pozici `Admin` lze tedy získat pouze tím, že člen AT bude jako `Helper` min. 2 měsíce.

## Práva na serveru
Zde je výpis práv, které může provádat člen AT v dannné pozici.

### Helper a vyšší
- Kompletně všechny práva jako všechny VIP
- Možnost udělit hráči Warn `/warn`, dočasné mute `/tempmute`, vyhození z serveru `/kick` nebo dočasný ban `/tempban`
- Bypass na build omezení v Residenci, Lands a Plots
- Bypass na interakce s čímkoliv v Residenci, Lands a Plots
- Bypass na fly (může létet kdekoliv a jakkoliv i když to hráč vypne)
- Bypass na uzamknuté regiony (pokud hráč uzamkne ostrov, pozemek nebo residenci)
- Globalní Server Admin Chat `/ga [text]`
- Výpis zpráv z `/helpop`
- Přímý teleport na hráče `/tpo [nick]` (obchází deaktivaci ze strany hráče)
- Auto AFK v rámci ATS
- Možnost pomocí CoreProtectu `/co inspect` zkontrolovat (né obnovit) kdo stavbu zníčil
- Teleport na svojí polohu `/tphere [nick]`
- Zobrazení inventáře bez úpravy `/invsee [nick]` popř. `/cmi inv [nick]`
- Zobrazení enderchest bez úpravy `/endersee [nick]` popř. `/cmi ender [nick]`
- Vanish `/v` nebo `/vanish`, stejným příkazem se i vypne
- Rušení aukcí hráčů v `/auc` pomocí kolečka myši
- Možnost sledování msg zpráv hráčů pomocí `/socialspy`

### Admin a vyšší
- Všechny nižší práva
- Možnost udělit hráči permanentní tresty jako `/ban`, `/ipban`
- Gamemode na hratelných serverech `/gamemode [creative|survival]`. Gamemode adventure je na některých serverech blokovaný z důvodu interního fungování a konfliktů s Vanishem.
- Úprava inventáře hráčů `/invsee [nick]`
- Úprava enderchest hráčů `/endersee [nick]`
- Teleport na hráčský home `/homes [nick]`
- Obnovení itemů a inventáře z historie hráče `/ir restore [nick]`
- Možnost rušení schopů hráčů pomocí Golden Axe nebo `/qs remove`