	var map;
    var markers = [];
    var currentInfoWindow;

    $(function() {
      var availableTags = [
        'Aleksandrowice','Alwernia','Andrychów','Babice','Bachowice','Balice','Bańska Niżna','Barcice','Barwałd Średni','Biadoliny Szlacheckie',
        'Białka Tatrzańska','Biecz','Bielczy','Bieńkówka','Bobowa','Bobrek','Bochnia','Bogumiłowice','Bolechowice','Bolesław','Borzęcin','Brzana',
        'Brzesko','Brzeszcze','Brzezie','Brzezinka','Brzeźnica','Brzozów','Budzów','Bukowina Tatrzańska','Bukowno','Bulowice','Bydlin','Bystra',
        'Chabówka','Charsznica','Chełmek','Chełmiec','Chochołów','Chocznia','Chrzanów','Ciche','Ciężkowice','Ćwików','Czarny Dunajec','Czchów',
        'Czernichów','Czyżówka','Dąbrowa Tarnowska','Dębno','Dobczyce','Dobra','Dobranowice','Doły','Dzianisz','Dziewin','Filipowice','Florynka',
        'Frydman','Frydrychowice','Gdów','Gierałtowice','Głębowice','Głogoczów','Gnojnik','Gołcza','Golkowice','Gołkowice','Gołkowice Dolne',
        'Gołkowice Górne','Gorenice','Gorlice','Gorzków','Grabno','Graboszyce','Grabownica Starzeńska','Gręboszów','Gródek N/D','Grojec','Gromcu',
        'Gromnik','Groniec Gm.Libiąż','Grudna Kępska','Gruszów','Grybów','Grywałd','Harbutowice','Inwałd','Iwanowice','Iwkowa','Izdebnik','Jabłonka',
        'Jachówka','Jadowniki','Jasionka','Jastew','Jastrzębia','Jawiszowice','Jaworsko','Jazowsko','Jerzmanowice','Jodłownik','Jordanów','Jurgów',
        'Jurków','Kacwin','Kalwaria Zebrzydowska','Kamień','Kamienica','Kamionka Wielka','Karniowice','Kasina Wielka','Kęty','Kłaj','Klecza Górna',
        'Klikuszowa','Klucze','Kluszkowce','Kobylanka','Kobyle','Kocmyrzów','Koniusza','Koniusze','Koniuszowa','Korzenna','Kościelisko','Koszyce',
        'Koszyce Wielkie','Kraków','Królówka','Krościenko','Krosna','Krużlowa','Kryg','Krynica','Krynica-Zdrój','Krzczonów','Krzeszów','Krzeszowice',
        'Krzyszkowice','Krzywa','Książ Wielki','Książnice Wielkie','Łabowa','Łącko','Lanckorona','Łapanów','Łapczyca','Łapsze Niżne','Laski','Laskowa',
        'Łęg Tarnowski','Łękawica','Leńcze','Leśnica','Łętownia','Libiąż','Lichwin','Limanowa','Lipinki','Lipnica Mała','Lipnica Murowana','Lisia Góra',
        'Liszki','Łomnica Zdrój','Łoniowa','Łososina Dolna','Lubcza','Lubień','Lubomierz','Łukowica','Luszowice','Łużna','Łysa Góra','Maciejowice',
        'Maków Podhalański','Malec','Maniowy','Marcinkowice','Maszkienice','Męcina','Michałowice','Michów','Miechów','Miejsce','Minoga','Młoszowa',
        'Modlinica','Modlnica','Modlniczka','Mogilany','Morawica','Moszczenica','Mszana Dolna','Mszana Górna','Mucharz','Murzasichle','Muszyna',
        'Myślachowice','Myślenice','Nawojowa','Nawojowa Góra','Nidek','Nieczajna','Nieczajna Górna','Niedzica','Niedźwiedź','Niedźwiedza','Niepołomice',
        'Nowa Biała','Nowa Jastrząbka','Nowa Wieś','Nowe Brzesko','Nowy Sącz','Nowy Targ','Nowy Wiśnicz','Ochotnica Dolna','Olesno','Olkusz','Ołpiny',
        'Olszyny','Osiek','Osielec','Ostrężnica','Oświęcim','Otfinów','Paczółtowice','Palcza','Paleśnica','Paszkówka','Pcim','Perła','Piekielnik',
        'Piotrowice','Piwniczna','Piwniczna-Zdrój','Płaza','Podegrodzie','Podolsze','Pogórska Wola','Pogorzyce','Polanka Wielka','Porąbka Iwkowska',
        'Porąbka Uszewska','Poręba Wielka','Poronin','Proszowice','Przecieszyn','Przeciszów','Przeginia','Przybradz','Przyszowa','Ptaszkowa','Raba Wyżna',
        'Rabka','Rabka-Zdrój','Radgoszcz','Radłów','Radocza','Radziszów','Rajsko','Roczyny','Rogoźnik','Ropa','Ropica Polska','Rozkochów','Rożnów',
        'Rudawa','Rudze','Rybna','Ryczów','Ryczówek','Ryczyny','Ryglice','Rytro','Rzepiennik Strzyżewski','Rzezawa','Rzuchowa','Rzyki',
        'Sędziszów Małopolski','Sidzina','Siedliska','Siemiechów','Sieniawa','Siepraw','Skała','Skawa','Skawica','Skawina','Skomielna Biała',
        'Skomielna Czarna','Skrzydlna','Skrzyszów','Słaboszów','Słomniki','Słopnice','Smęgorzów','Smolice','Sobolów','Sołuszowa','Spytkowice',
        'Sromowce Wyżne','Stary Sącz','Sterkowiec','Stróże','Stryszawa','Stryszów','Strzyszów','Sucha Beskidzka','Sufczyn','Sułkowice','Sułkowice-Bolęcina',
        'Sułokwice','Sułoszowa','Świątniki Górne','Szaflary','Szczawa','Szczawnica','Szczepanów','Szczucin','Szczurowa','Szerzyny','Szymbark','Szynwałd',
        'Tabaszowa','Tarnów','Tarnowiec','Tęgoborze','Tenczynek','Tokarnia','Tomice','Trzciana','Trzebinia','Trzemeśnia','Trześniów','Trzyciąż','Tuchów',
        'Tylicz','Tylmanowa','Tymbark','Tymowa','Ujanowice','Uście Gorlickie','Uszew','Wadowice','Waksmund','Wał Ruda','Wawrzeńczyce','Węgrzce',
        'Więcławice Stare','Wieliczka','Wielka Wieś','Wielkie Drogi','Wielogłowy','Wieprz','Wierzchosławice','Wietrzychowice','Wiśniowa','Witanowice',
        'Witów','Wojnicz','Wola Dębińska','Wola Filipowska','Wola Łużańska','Wola Radłowska','Wola Rzędzińska','Wolbrom','Woźniki','Wysoka','Wysowa',
        'Wysowa-Zdrój','Ząb','Zabawa','Zabierzów','Żabno','Zaborów','Zaborze','Zabrzeż','Zachełmna','Zagłobice','Zagórnik','Zagórzany','Zagórze',
        'Zakliczyn','Zakopane','Zalas','Zalasowa','Zamieście','Żarki','Zasole','Zator','Zawoja','Żegiestów','Żegocina','Zembrzyce','Zgłobice',
        'Zielonki','Zubrzyca Górna'
      ];

      var citiesCoords = {
        "Aleksandrowice":{lng:19.7683847,lat:50.0821604},"Alwernia":{lng:19.5394784,lat:50.0598063},"Andrychów":{lng:19.3412842,lat:49.8548934},"Babice":{lng:19.4486111,lat:50.07},"Bachowice":{lng:19.4934308,lat:49.9577564},"Balice":{lng:19.7915335,lat:50.0864755},"Bańska Niżna":{lng:20.0099336,lat:49.4103653},"Barcice":{lng:20.653474,lat:49.522779},"Barwałd Średni":{lng:19.5939139,lat:49.8656973},"Biadoliny Szlacheckie":{lng:20.752734,lat:49.9958562},"Białka Tatrzańska":{lng:20.1050242,lat:49.3891057},"Biecz":{lng:21.26331,lat:49.73554},"Bielczy":{lng:20.7270032,lat:50.0235944},"Bieńkówka":{lng:19.7718752,lat:49.775811},"Bobowa":{lng:20.9509659,lat:49.7102798},"Bobrek":{lng:19.2593476,lat:50.0627084},"Bochnia":{lng:20.4303285,lat:49.9684577},"Bogumiłowice":{lng:20.8664284,lat:50.0068743},"Bolechowice":{lng:19.7934734,lat:50.1493694},"Bolesław":{lng:19.4807669,lat:50.2973762},"Borzęcin":{lng:20.7116062,lat:50.0648308},"Brzana":{lng:20.9140508,lat:49.7219933},
        "Brzesko":{lng:20.6031873,lat:49.9645943},"Brzeszcze":{lng:19.15303,lat:49.9815},"Brzezie":{lng:20.2320391,lat:49.9852343},"Brzezinka":{lng:19.1908377,lat:50.0424238},"Brzeźnica":{lng:21.4801416,lat:50.1002778},"Brzozów":{lng:22.01936,lat:49.69427},"Budzów":{lng:19.672705,lat:49.7757354},"Bukowina Tatrzańska":{lng:20.1075731,lat:49.3422686},"Bukowno":{lng:19.44484,lat:50.26508},"Bulowice":{lng:19.2890625,lat:49.875551},"Bydlin":{lng:19.6488118,lat:50.3796632},"Bystra":{lng:19.7806684,lat:49.6474263},"Chabówka":{lng:19.9340009,lat:49.5926627},"Charsznica":{lng:19.9304609,lat:50.4090225},"Chełmek":{lng:19.24873,lat:50.10002},"Chełmiec":{lng:20.6635108,lat:49.6302186},"Chochołów":{lng:19.8175632,lat:49.3675907},"Chocznia":{lng:19.452787,lat:49.874188},"Chrzanów":{lng:19.4001765,lat:50.1345643},"Ciche":{lng:19.8477107,lat:49.37977},"Ciężkowice":{lng:20.973264,lat:49.7856205},"Ćwików":{lng:20.9199866,lat:50.2337094},"Czarny Dunajec":{lng:19.8541667,lat:49.4394444},
        "Czchów":{lng:20.6802794,lat:49.8368614},"Czernichów":{lng:19.6805687,lat:49.9888566},"Czyżówka":{lng:19.4779642,lat:50.2092293},"Dąbrowa Tarnowska":{lng:20.98638,lat:50.17462},"Dębno":{lng:14.69799,lat:52.739},"Dobczyce":{lng:20.0890793,lat:49.8811735},"Dobra":{lng:20.2528423,lat:49.7174051},"Dobranowice":{lng:20.1191232,lat:49.9413237},"Doły":{lng:20.6808389,lat:49.9253973},"Dzianisz":{lng:19.8552726,lat:49.3349018},"Dziewin":{lng:20.4549994,lat:50.075289},"Filipowice":{lng:19.5658321,lat:50.1559498},"Florynka":{lng:20.9843642,lat:49.5507374},"Frydman":{lng:20.2289948,lat:49.4485739},"Frydrychowice":{lng:19.4195086,lat:49.9041009},"Gdów":{lng:20.1980129,lat:49.9079547},"Gierałtowice":{lng:19.3897944,lat:49.9437986},"Głębowice":{lng:19.3331169,lat:49.9423462},"Głogoczów":{lng:19.8740669,lat:49.8937611},"Gnojnik":{lng:20.6087945,lat:49.8935129},"Gołcza":{lng:19.9264711,lat:50.3329082},"Golkowice":{lng:19.9739724,lat:49.9730955},
        "Gołkowice":{lng:19.9739724,lat:49.9730955},"Gołkowice Dolne":{lng:20.5822293,lat:49.5467664},"Gołkowice Górne":{lng:20.5765818,lat:49.5413841},"Gorenice":{lng:19.6202955,lat:50.2078414},"Gorlice":{lng:21.1596321,lat:49.6546159},"Gorzków":{lng:20.0285646,lat:49.925423},"Grabno":{lng:20.7905695,lat:49.9326243},"Graboszyce":{lng:19.4491693,lat:49.9450044},"Grabownica Starzeńska":{lng:22.0781548,lat:49.6579938},"Gręboszów":{lng:20.7758001,lat:50.2444899},"Gródek N/D":{lng:23.6593944,lat:53.0954531},"Grojec":{lng:20.8666034,lat:51.8655118},"Gromcu":{lng:19.2929226,lat:50.0610918},"Gromnik":{lng:20.9614581,lat:49.8380994},"Groniec Gm.Libiąż":{lng:19.2929226,lat:50.0610918},"Grudna Kępska":{lng:21.2962891,lat:49.740581},"Gruszów":{lng:20.2063239,lat:49.8532365},"Grybów":{lng:20.94789,lat:49.62406},"Grywałd":{lng:20.367697,lat:49.4470979},"Harbutowice":{lng:19.7794114,lat:49.8118163},"Inwałd":{lng:19.3920615,lat:49.8631089},
        "Iwanowice":{lng:19.9569444,lat:50.2272222},"Iwkowa":{lng:20.5901226,lat:49.8167342},"Izdebnik":{lng:19.7704249,lat:49.8712677},"Jabłonka":{lng:19.6937369,lat:49.4794404},"Jachówka":{lng:19.6940815,lat:49.7570745},"Jadowniki":{lng:20.6436082,lat:49.9592267},"Jasionka":{lng:22.03133,lat:50.11525},"Jastew":{lng:20.6779757,lat:49.9578214},"Jastrzębia":{lng:19.7567138,lat:49.8483046},"Jawiszowice":{lng:19.137943,lat:49.957032},"Jaworsko":{lng:20.7506944,lat:49.905473},"Jazowsko":{lng:20.5131169,lat:49.5286754},"Jerzmanowice":{lng:19.7473867,lat:50.2116396},"Jodłownik":{lng:20.2360804,lat:49.7744365},"Jordanów":{lng:19.83001,lat:49.64913},"Jurgów":{lng:20.136861,lat:49.3409077},"Jurków":{lng:20.6894944,lat:49.8515243},"Kacwin":{lng:20.2937594,lat:49.3708458},"Kalwaria Zebrzydowska":{lng:19.67676,lat:49.86686},"Kamień":{lng:19.5833874,lat:50.0129791},"Kamienica":{lng:20.3446477,lat:49.574472},"Kamionka Wielka":{lng:20.8240185,lat:49.5677668},
        "Karniowice":{lng:19.5204951,lat:50.1634044},"Kasina Wielka":{lng:20.1353402,lat:49.7287057},"Kęty":{lng:19.2228003,lat:49.8807299},"Kłaj":{lng:20.2990494,lat:49.9932646},"Klecza Górna":{lng:19.5569629,lat:49.8626671},"Klikuszowa":{lng:19.9855978,lat:49.5187135},"Klucze":{lng:19.5627507,lat:50.3347405},"Kluszkowce":{lng:20.3099192,lat:49.4540988},"Kobylanka":{lng:21.2229612,lat:49.6686507},"Kobyle":{lng:20.5257167,lat:49.9177891},"Kocmyrzów":{lng:20.1314315,lat:50.1289292},"Koniusza":{lng:20.2157809,lat:50.188452},"Koniusze":{lng:20.2157809,lat:50.188452},"Koniuszowa":{lng:20.788319,lat:49.6560362},"Korzenna":{lng:20.8433355,lat:49.6864727},"Kościelisko":{lng:19.8897762,lat:49.290211},"Koszyce":{lng:20.5789054,lat:50.1702758},"Koszyce Wielkie":{lng:20.9441667,lat:49.98},"Kraków":{lng:19.9449799,lat:50.0646501},"Królówka":{lng:20.4263347,lat:49.8852716},"Krościenko":{lng:20.4274138,lat:49.4410909},"Krosna":{lng:21.7660531,lat:49.6824761},
        "Krużlowa":{lng:20.9,lat:49.65},"Kryg":{lng:21.2556637,lat:49.6567832},"Krynica":{lng:20.9594208,lat:49.4215158},"Krynica-Zdrój":{lng:20.9594208,lat:49.4215158},"Krzczonów":{lng:19.9186389,lat:49.7371648},"Krzeszów":{lng:16.0708309,lat:50.7338713},"Krzeszowice":{lng:19.63231,lat:50.14192},"Krzyszkowice":{lng:19.9218475,lat:49.8823734},"Krzywa":{lng:15.8116636,lat:51.2826545},"Książ Wielki":{lng:20.1398772,lat:50.4431962},"Książnice Wielkie":{lng:20.5368268,lat:50.1632195},"Łabowa":{lng:20.8547528,lat:49.5275699},"Łącko":{lng:20.4364186,lat:49.5568634},"Lanckorona":{lng:19.715431,lat:49.8456988},"Łapanów":{lng:20.289332,lat:49.8645692},"Łapczyca":{lng:20.3850029,lat:49.9597684},"Łapsze Niżne":{lng:20.2439059,lat:49.397244},"Laski":{lng:21.5044818,lat:49.7178626},"Laskowa":{lng:20.4503151,lat:49.7613385},"Łęg Tarnowski":{lng:20.9272219,lat:50.0948611},"Łękawica":{lng:19.2659164,lat:49.7212543},"Leńcze":{lng:19.7352476,lat:49.8981462},
        "Leśnica":{lng:18.1872243,lat:50.4305778},"Łętownia":{lng:19.8707967,lat:49.6981679},"Libiąż":{lng:19.3156774,lat:50.1037928},"Lichwin":{lng:20.9571759,lat:49.8892751},"Limanowa":{lng:20.42228,lat:49.70587},"Lipinki":{lng:21.2921913,lat:49.6721853},"Lipnica Mała":{lng:19.6334034,lat:49.5137808},"Lipnica Murowana":{lng:20.5247926,lat:49.8583899},"Lisia Góra":{lng:21.0441348,lat:50.0794974},"Liszki":{lng:19.7681904,lat:50.0387484},"Łomnica Zdrój":{lng:20.7441345,lat:49.4391103},"Łoniowa":{lng:21.5259381,lat:50.563936},"Łososina Dolna":{lng:20.6239557,lat:49.7414551},"Lubcza":{lng:21.2531349,lat:49.9066906},"Lubień":{lng:19.9784125,lat:49.719017},"Lubomierz":{lng:20.201933,lat:49.6081423},"Łukowica":{lng:20.4829087,lat:49.6108537},"Luszowice":{lng:19.4049254,lat:50.1746232},"Łużna":{lng:21.0458599,lat:49.712424},"Łysa Góra":{lng:20.7370149,lat:49.9318774},"Maciejowice":{lng:20.0724463,lat:50.14189},"Maków Podhalański":{lng:19.67695,lat:49.72953},
        "Malec":{lng:19.2448281,lat:49.9186104},"Maniowy":{lng:20.2616416,lat:49.4570973},"Marcinkowice":{lng:20.6488,lat:49.6699151},"Maszkienice":{lng:20.6866549,lat:49.9886526},"Męcina":{lng:20.5546539,lat:49.6780152},"Michałowice":{lng:19.9802157,lat:50.1593023},"Michów":{lng:22.3140081,lat:51.5257396},"Miechów":{lng:20.0274126,lat:50.3568703},"Miejsce":{lng:19.5090122,lat:50.0180833},"Minoga":{lng:19.9001519,lat:50.2449448},"Młoszowa":{lng:19.4915331,lat:50.1497683},"Modlinica":{lng:19.8661999,lat:50.1273398},"Modlniczka":{lng:19.8546307,lat:50.1193319},"Mogilany":{lng:19.8896379,lat:49.9394588},"Morawica":{lng:19.7530653,lat:50.0751139},"Moszczenica":{lng:20.3450556,lat:49.9678171},"Mszana Dolna":{lng:20.07982,lat:49.67403},"Mszana Górna":{lng:20.0971893,lat:49.6612704},"Mucharz":{lng:19.5583771,lat:49.8118392},"Murzasichle":{lng:20.0401716,lat:49.3023263},"Muszyna":{lng:20.8971615,lat:49.3565901},"Myślachowice":{lng:19.4797222,lat:50.1841667},
        "Myślenice":{lng:19.93965,lat:49.83347},"Nawojowa":{lng:20.746196,lat:49.5599707},"Nawojowa Góra":{lng:19.6701696,lat:50.1193577},"Nidek":{lng:19.3255071,lat:49.9033494},"Nieczajna":{lng:16.7597181,lat:52.5815389},"Nieczajna Górna":{lng:21.062809,lat:50.1724498},"Niedzica":{lng:20.3029459,lat:49.4097122},"Niedźwiedź":{lng:20.0775264,lat:49.6206179},"Niedźwiedza":{lng:20.7170217,lat:49.8969174},"Niepołomice":{lng:20.2225326,lat:50.0406662},"Nowa Biała":{lng:20.1432099,lat:49.4392346},"Nowa Jastrząbka":{lng:21.1431566,lat:50.1250955},"Nowa Wieś":{lng:19.2167008,lat:49.9068244},"Nowe Brzesko":{lng:20.3745724,lat:50.13151},"Nowy Sącz":{lng:20.7153326,lat:49.6174535},"Nowy Targ":{lng:20.032096,lat:49.4774647},"Nowy Wiśnicz":{lng:20.4612616,lat:49.9158004},"Ochotnica Dolna":{lng:20.3424558,lat:49.5258974},"Olesno":{lng:18.41472,lat:50.87526},"Olkusz":{lng:19.5656869,lat:50.2813157},"Ołpiny":{lng:21.2047268,lat:49.8070103},"Olszyny":{lng:21.1422499,lat:49.8100558},
        "Osiek":{lng:19.2641467,lat:49.9496427},"Osielec":{lng:19.7822663,lat:49.6805192},"Ostrężnica":{lng:19.5700306,lat:50.1918154},"Oświęcim":{lng:19.2097782,lat:50.0343982},"Otfinów":{lng:20.8160794,lat:50.185963},"Paczółtowice":{lng:19.650959,lat:50.1872487},"Palcza":{lng:19.7439386,lat:49.8043237},"Paleśnica":{lng:20.8013288,lat:49.7946166},"Paszkówka":{lng:19.6782361,lat:49.9384118},"Pcim":{lng:19.9707571,lat:49.7505231},"Perła":{lng:20.7538779,lat:49.9828079},"Piekielnik":{lng:19.7677758,lat:49.4766435},"Piotrowice":{lng:18.968699,lat:50.2055639},"Piwniczna":{lng:20.713445,lat:49.4396092},"Piwniczna-Zdrój":{lng:20.713445,lat:49.4396092},"Płaza":{lng:19.4638343,lat:50.0990852},"Podegrodzie":{lng:20.5885771,lat:49.5762017},"Podolsze":{lng:19.4348258,lat:50.0141114},"Pogórska Wola":{lng:21.1577996,lat:50.0173166},"Pogorzyce":{lng:19.4222109,lat:50.1026757},"Polanka Wielka":{lng:19.3263098,lat:49.9851242},"Porąbka Iwkowska":{lng:20.5979316,lat:49.7966636},
        "Porąbka Uszewska":{lng:20.691056,lat:49.9430454},"Poręba Wielka":{lng:20.0614939,lat:49.6074833},"Poronin":{lng:20.002872,lat:49.337819},"Proszowice":{lng:20.2890751,lat:50.1921916},"Przecieszyn":{lng:19.1707284,lat:49.9777759},"Przeciszów":{lng:19.3719405,lat:50.0100874},"Przeginia":{lng:19.6888426,lat:50.2376515},"Przybradz":{lng:19.4333264,lat:49.9392893},"Przyszowa":{lng:20.503511,lat:49.6429302},"Ptaszkowa":{lng:20.8945493,lat:49.6015644},"Raba Wyżna":{lng:19.8767889,lat:49.5647023},"Rabka":{lng:19.9671769,lat:49.6090128},"Rabka-Zdrój":{lng:19.9671769,lat:49.6090128},"Radgoszcz":{lng:15.8609541,lat:52.6335134},"Radłów":{lng:20.8499278,lat:50.0839991},"Radocza":{lng:19.4751527,lat:49.9172447},"Radziszów":{lng:19.811094,lat:49.9372126},"Rajsko":{lng:19.1925764,lat:50.011003},"Roczyny":{lng:19.3160045,lat:49.8530858},"Rogoźnik":{lng:19.9375507,lat:49.446568},"Ropa":{lng:21.0442846,lat:49.590972},"Ropica Polska":{lng:21.1414754,lat:49.639053},
        "Rozkochów":{lng:19.4866667,lat:50.045},"Rożnów":{lng:20.6956907,lat:49.7715101},"Rudawa":{lng:19.7131749,lat:50.1221139},"Rudze":{lng:19.4275014,lat:49.9677752},"Rybna":{lng:19.6472222,lat:50.0511111},"Ryczów":{lng:19.5512902,lat:49.9805725},"Ryczówek":{lng:19.5583744,lat:50.3902944},"Ryglice":{lng:21.1375994,lat:49.8788079},
        "Rytro":{lng:20.6659586,lat:49.488283},"Rzepiennik Strzyżewski":{lng:21.0364041,lat:49.8047848},"Rzezawa":{lng:20.5127952,lat:49.9907413},"Rzuchowa":{lng:20.9309009,lat:49.9510647},"Rzyki":{lng:19.3940341,lat:49.8101924},"Sędziszów Małopolski":{lng:21.70191,lat:50.07097},"Sidzina":{lng:19.710237,lat:49.5904912},"Siedliska":{lng:20.9860409,lat:49.7268583},"Siemiechów":{lng:20.9063169,lat:49.8530897},"Sieniawa":{lng:22.6095389,lat:50.177791},"Siepraw":{lng:19.9833333,lat:49.9166667},"Skała":{lng:19.8541516,lat:50.2304098},"Skawa":{lng:19.8914565,lat:49.6161335},"Skawica":{lng:19.6231329,lat:49.6766897},
        "Skawina":{lng:19.8288749,lat:49.9751815},"Skomielna Biała":{lng:19.9249197,lat:49.6356195},"Skomielna Czarna":{lng:19.8365034,lat:49.7266083},"Skrzydlna":{lng:20.1868688,lat:49.7524226},"Skrzyszów":{lng:18.4889535,lat:49.9486214},"Słaboszów":{lng:20.2739969,lat:50.3869066},"Słomniki":{lng:20.08212,lat:50.23993},"Słopnice":{lng:20.3411053,lat:49.6827191},"Smęgorzów":{lng:21.0045165,lat:50.2282155},"Smolice":{lng:19.4565377,lat:50.0263198},"Sobolów":{lng:20.3394235,lat:49.9075733},"Sołuszowa":{lng:19.73381,lat:50.2675642},"Spytkowice":{lng:19.833467,lat:49.5769172},"Sromowce Wyżne":{lng:20.3390843,lat:49.4079948},"Stary Sącz":{lng:20.6327686,lat:49.564452},"Sterkowiec":{lng:20.6804014,lat:49.9943002},"Stróże":{lng:20.9666751,lat:49.6611664},"Stryszawa":{lng:19.5223848,lat:49.7130014},"Stryszów":{lng:19.6172403,lat:49.8247186},"Strzyszów":{lng:18.4889535,lat:49.9486214},"Sucha Beskidzka":{lng:19.58636,lat:49.74127},"Sufczyn":{lng:20.7522792,lat:49.9644164},
        "Sułkowice":{lng:19.79959,lat:49.83879},"Sułkowice-Bolęcina":{lng:19.79959,lat:49.83879},"Sułokwice":{lng:19.79959,lat:49.83879},"Sułoszowa":{lng:19.73381,lat:50.2675642},"Świątniki Górne":{lng:19.9536485,lat:49.9342448},"Szaflary":{lng:20.0253089,lat:49.4267341},"Szczawa":{lng:20.2947668,lat:49.6098822},"Szczawnica":{lng:20.4829528,lat:49.4230451},"Szczepanów":{lng:20.6547646,lat:50.0046174},"Szczucin":{lng:21.074546,lat:50.3094981},"Szczurowa":{lng:20.6360221,lat:50.1188793},"Szerzyny":{lng:21.2464512,lat:49.8090657},"Szymbark":{lng:18.1011005,lat:54.2183509},"Szynwałd":{lng:21.124684,lat:49.966003},"Tabaszowa":{lng:20.6873008,lat:49.7440408},"Tarnów":{lng:20.9858407,lat:50.0121011},"Tarnowiec":{lng:20.9858333,lat:49.9811111},"Tęgoborze":{lng:20.6375347,lat:49.7068731},"Tenczynek":{lng:19.613589,lat:50.1185694},"Tokarnia":{lng:19.8713262,lat:49.7268636},"Tomice":{lng:19.4830911,lat:49.8973158},"Trzciana":{lng:20.372973,lat:49.844526},
        "Trzebinia":{lng:19.4694,lat:50.15847},"Trzemeśnia":{lng:19.9833333,lat:49.7333333},"Trześniów":{lng:21.9366823,lat:49.6450496},"Trzyciąż":{lng:19.7668321,lat:50.3100422},"Tuchów":{lng:21.05416,lat:49.89477},"Tylicz":{lng:21.0254761,lat:49.3953598},"Tylmanowa":{lng:20.4145771,lat:49.4796776},"Tymbark":{lng:20.3255556,lat:49.7272222},"Tymowa":{lng:20.620184,lat:49.8513023},"Ujanowice":{lng:20.561301,lat:49.7442346},"Uście Gorlickie":{lng:21.140161,lat:49.5220555},"Uszew":{lng:20.5974413,lat:49.9184079},"Wadowice":{lng:19.4939579,lat:49.8827856},"Waksmund":{lng:20.0754966,lat:49.4815066},"Wał Ruda":{lng:20.7886862,lat:50.1175093},"Wawrzeńczyce":{lng:20.3161619,lat:50.109857},"Węgrzce":{lng:19.9746839,lat:50.1201606},"Więcławice Stare":{lng:20.0203718,lat:50.1555671},"Wieliczka":{lng:20.0647971,lat:49.9870619},"Wielka Wieś":{lng:19.8433657,lat:50.1567186},"Wielkie Drogi":{lng:19.7204438,lat:49.9588065},"Wielogłowy":{lng:20.6848461,lat:49.6726947},
        "Wieprz":{lng:22.8718537,lat:51.2958008},"Wierzchosławice":{lng:20.8565462,lat:50.0244243},"Wietrzychowice":{lng:18.8599799,lat:52.412757},"Wiśniowa":{lng:20.1143944,lat:49.7873747},"Witanowice":{lng:19.5249021,lat:49.9168655},"Witów":{lng:19.826568,lat:49.3210601},"Wojnicz":{lng:20.8378422,lat:49.9579835},"Wola Dębińska":{lng:20.6877892,lat:49.9804544},"Wola Filipowska":{lng:19.5797755,lat:50.1340149},"Wola Łużańska":{lng:21.0680672,lat:49.691022},"Wola Radłowska":{lng:20.8177099,lat:50.0948778},"Wola Rzędzińska":{lng:21.06491,lat:50.036702},"Wolbrom":{lng:19.7584,lat:50.37939},"Woźniki":{lng:19.06019,lat:50.58846},"Wysoka":{lng:19.6030772,lat:49.9065325},"Wysowa":{lng:21.1833333,lat:49.4333333},"Wysowa-Zdrój":{lng:21.1833333,lat:49.4333333},"Ząb":{lng:19.9485105,lat:49.3377155},"Zabawa":{lng:20.8221728,lat:50.120407},"Zabierzów":{lng:19.7978774,lat:50.1140795},"Żabno":{lng:20.88617,lat:50.13334},"Zaborów":{lng:20.6772162,lat:52.2620157},
        "Zaborze":{lng:19.2405627,lat:50.021663},"Zabrzeż":{lng:20.3956986,lat:49.5435723},"Zachełmna":{lng:19.6873274,lat:49.7986843},"Zagłobice":{lng:20.8999887,lat:49.9735346},"Zagórnik":{lng:19.3785127,lat:49.8367139},"Zagórzany":{lng:20.2351431,lat:49.8756784},"Zagórze":{lng:20.1895245,lat:49.9922655},"Zakliczyn":{lng:20.8093377,lat:49.8557953},"Zakopane":{lng:19.9495621,lat:49.299181},"Zalas":{lng:19.6083333,lat:50.0794444},"Zalasowa":{lng:21.122641,lat:49.923898},"Zamieście":{lng:20.349022,lat:49.717702},"Żarki":{lng:19.36332,lat:50.62508},"Zasole":{lng:19.1911111,lat:49.9569444},"Zator":{lng:19.43747,lat:49.99621},"Zawoja":{lng:19.5424946,lat:49.6439296},"Żegiestów":{lng:20.8069018,lat:49.3782223},"Żegocina":{lng:20.4197531,lat:49.8133215},"Zembrzyce":{lng:19.6007005,lat:49.775001},"Zgłobice":{lng:20.8999887,lat:49.9735346},"Zielonki":{lng:19.9210252,lat:50.1180379},"Zubrzyca Górna":{lng:19.6493594,lat:49.5628371}
      };
      /*
      $( "#towns" ).autocomplete({
        source: availableTags
      });
      */
      $( "#towns" ).autocomplete({
        source: function( request, response ) {
                var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
                response( $.grep( availableTags, function( item ){
                    return matcher.test( item );
                }) );
        },
        select: function( event, ui ) {
            var item = citiesCoords[ui.item.value];
            var targetCity = new google.maps.LatLng(item.lat, item.lng);
            map.panTo(targetCity);
     
            return false;
        }
      });
      $( "#towns" ).autocomplete( "option", "minLength", 2 );
    });

    function showMarkers() {
      var bounds = map.getBounds();
      var northeast = bounds.getNorthEast();
      var southwest = bounds.getSouthWest();
      var endpoint = "https://script.google.com/macros/s/AKfycbyTbuVRRNvv2LKauRMHlWdRHqYtfSvXPVpahhgaDha0g6q6zX2-/exec?f1=" 
        + southwest.lng() + "&f2=" + southwest.lat() + "&t1=" + northeast.lng() + "&t2=" +  northeast.lat();    
      
      $.get(endpoint, function( data ) {

        for (var i=0; i<markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];

        if (data) {
          var locationsList = "";
          
          for (var i=0; i<data.length; i++) {
            var location = data[i];
            var locationTag = "<div class='location'>" + location.name +" - " + location.address + "</div>";

            var position = new google.maps.LatLng(location.lat, location.lng);
            var marker = new google.maps.Marker({
              map:map,
              position: position,
              title: location.name
            });

            google.maps.event.addListener(marker, 'click', createClickFunc(location, marker));

            markers.push(marker);
            locationsList = locationsList + " " + locationTag;
          }
          $('#results').html(locationsList);
        }
      });
      
    }

    function createClickFunc(location, marker) {

      var infowindow = new google.maps.InfoWindow({
        content: location.name
      });

      return function() {
        if (currentInfoWindow) {
          currentInfoWindow.close();
        }
        infowindow.open(map,marker);
        currentInfoWindow = infowindow;
      }
    }


      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(50.0614, 19.937533),
          zoom: 16
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        google.maps.event.addListener(map, 'idle', showMarkers);
      }
      google.maps.event.addDomListener(window, 'load', initialize);