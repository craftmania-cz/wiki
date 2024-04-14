---
slug: 2024-04-14-jarni-update
title: "Jarní úklid"
authors: wake
tags: [proxy, survival, vanilla, creative, homepage, banlist, lobby, statistics, wiki]
---

### Hlavní změny
- Nová Wiki stránka - https://wiki.craftmania.cz/
    - Spojili jsme wiki pro hráče, admin team a changelog do jedné stránky takže informace jak AT musí trestat jsou nyní veřejně přístupné pro všechny.
- Update chatu, kde prošlou změny informace v chatu. 
    - Nyní když najedete na tag hráče, tak se zobrazuje kdo ho vytvořil a jak. Na jméně hráče se zobrazuje zatím globalní level, později toto bude rozšířeno o jiné statistiky.
- Update Vanishe pro Admin Team
    - Pokud má nyní člen AT aktivní Vanish je kompletně z serveru odstraněn i z počtu hráčů které server eviduje.
- Update Antispamu po celém serveru
    - Několik let (2) na serveru nefungoval komplětně antispam a neblokoval správně nadávky, reklamy a jiné. Nyní to je opraveno a i oznamováno AT na Discordu, avšak stále se věci okolo detekcí ladí. Jelikož některé slova jsou stále detekovány blbě.
- Dočasně odebrána podpora připojení 1.20.3+ kvůli problémům s resource packy, který způsoboval zamrznutí proxy v náhodných časech
- Do server shopů přidány itemy z Velikonočního Updatu
- Do server shopů přidány itemy z 1.20 Minecraftu, které tam chyběly př. cherry sapling, bamboo blocks a jiné
- Oprava chyby v Trade která způsobovala, že když hráč zavřel menu moc rychle tak zůstal trade stále aktivní a další trade se tedy selhal a smazal itemy
- Odebrána podpora připojení s 1.18 a 1.19
- Přidána podpora pro Amethyst VIP (nové VIP které bude brzo oznámeno)

### Survival: Classic
- Přidána zpět dynmapa (ta klasická) jelikož původní 3D zabírala příliš místa v databázi
- Šíření ohně mimo residence bylo deaktivováno
- Přidány `/recipes` s recepty z Oneblocku - nyní si lze vycraftit Ruby Armor a jiné.

### Creative
- Navýšen limit na spojení pozemků z 200 na 1000

### Oneblock
- Update na verzi 1.20
- Server shop je nyní dostupný od server levelu 1 (`/level`) , původně byl dostupný až od levelu 2
- Oprava zobrazování Oneblock serveru po serveru v menu a jiných kde byl označovaný stále jako Skyblock př. v `/level` menu

### Lobby
- Oprava otevírání dvěří a efektů na lobby, nyní se dá lobby opět celé projít pomocí kodů

### Ostatní
- Pokud hráč dostane trest když byl offline, tak je nyní na to upozorněn po připojení zpět na server
- Homepage serveru byla aktualizována na novější React 18 a NodeJS 20
- Update cosmetics, který již nyní nesmažou item na hlavě pokud tam nějaký byl při nasazení čepice
- Update lobby tagů u serverů, kde neseděly informace o verzích serverů
- Pokud člen AT udělí trest hráči, je to nyní oznámeno všem hráčům na serveru
- CoreProtect nyní ukládá i interakce s itemy a bloky a také změny entit
- Deaktivatce šifrování chatu, aby to nezpůsobovalo problémy na verzi 1.20+ pro originální hráče
- Update 90% všech pluginů na serveru na novější verze, některé specifické pluginy nebyly aktualizovány několik let
- Odebrány servery Vanilla a Prison z `/level` menu