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
        "Aleksandrowice":{lat:19.7683847,lng:50.0821604},"Alwernia":{lat:19.5394784,lng:50.0598063},"Andrychów":{lat:19.3412842,lng:49.8548934},"Babice":{lat:19.4486111,lng:50.07},"Bachowice":{lat:19.4934308,lng:49.9577564},"Balice":{lat:19.7915335,lng:50.0864755},"Bańska Niżna":{lat:20.0099336,lng:49.4103653},"Barcice":{lat:20.653474,lng:49.522779},"Barwałd Średni":{lat:19.5939139,lng:49.8656973},"Biadoliny Szlacheckie":{lat:20.752734,lng:49.9958562},"Białka Tatrzańska":{lat:20.1050242,lng:49.3891057},"Biecz":{lat:21.26331,lng:49.73554},"Bielczy":{lat:20.7270032,lng:50.0235944},"Bieńkówka":{lat:19.7718752,lng:49.775811},"Bobowa":{lat:20.9509659,lng:49.7102798},"Bobrek":{lat:19.2593476,lng:50.0627084},"Bochnia":{lat:20.4303285,lng:49.9684577},"Bogumiłowice":{lat:20.8664284,lng:50.0068743},"Bolechowice":{lat:19.7934734,lng:50.1493694},"Bolesław":{lat:19.4807669,lng:50.2973762},"Borzęcin":{lat:20.7116062,lng:50.0648308},"Brzana":{lat:20.9140508,lng:49.7219933},"Brzesko":{lat:20.6031873,lng:49.9645943},"Brzeszcze":{lat:19.15303,lng:49.9815},"Brzezie":{lat:20.2320391,lng:49.9852343},"Brzezinka":{lat:19.1908377,lng:50.0424238},"Brzeźnica":{lat:21.4801416,lng:50.1002778},"Brzozów":{lat:22.01936,lng:49.69427},"Budzów":{lat:19.672705,lng:49.7757354},"Bukowina Tatrzańska":{lat:20.1075731,lng:49.3422686},"Bukowno":{lat:19.44484,lng:50.26508},"Bulowice":{lat:19.2890625,lng:49.875551},"Bydlin":{lat:19.6488118,lng:50.3796632},"Bystra":{lat:19.7806684,lng:49.6474263},"Chabówka":{lat:19.9340009,lng:49.5926627},"Charsznica":{lat:19.9304609,lng:50.4090225},"Chełmek":{lat:19.24873,lng:50.10002},"Chełmiec":{lat:20.6635108,lng:49.6302186},"Chochołów":{lat:19.8175632,lng:49.3675907},"Chocznia":{lat:19.452787,lng:49.874188},"Chrzanów":{lat:19.4001765,lng:50.1345643},"Ciche":{lat:19.8477107,lng:49.37977},"Ciężkowice":{lat:20.973264,lng:49.7856205},"Ćwików":{lat:20.9199866,lng:50.2337094},"Czarny Dunajec":{lat:19.8541667,lng:49.4394444},"Czchów":{lat:20.6802794,lng:49.8368614},"Czernichów":{lat:19.6805687,lng:49.9888566},"Czyżówka":{lat:19.4779642,lng:50.2092293},"Dąbrowa Tarnowska":{lat:20.98638,lng:50.17462},"Dębno":{lat:14.69799,lng:52.739},"Dobczyce":{lat:20.0890793,lng:49.8811735},"Dobra":{lat:20.2528423,lng:49.7174051},"Dobranowice":{lat:20.1191232,lng:49.9413237},"Doły":{lat:20.6808389,lng:49.9253973},"Dzianisz":{lat:19.8552726,lng:49.3349018},"Dziewin":{lat:20.4549994,lng:50.075289},"Filipowice":{lat:19.5658321,lng:50.1559498},"Florynka":{lat:20.9843642,lng:49.5507374},"Frydman":{lat:20.2289948,lng:49.4485739},"Frydrychowice":{lat:19.4195086,lng:49.9041009},"Gdów":{lat:20.1980129,lng:49.9079547},"Gierałtowice":{lat:19.3897944,lng:49.9437986},"Głębowice":{lat:19.3331169,lng:49.9423462},"Głogoczów":{lat:19.8740669,lng:49.8937611},"Gnojnik":{lat:20.6087945,lng:49.8935129},"Gołcza":{lat:19.9264711,lng:50.3329082},"Golkowice":{lat:19.9739724,lng:49.9730955},"Gołkowice":{lat:19.9739724,lng:49.9730955},"Gołkowice Dolne":{lat:20.5822293,lng:49.5467664},"Gołkowice Górne":{lat:20.5765818,lng:49.5413841},"Gorenice":{lat:19.6202955,lng:50.2078414},"Gorlice":{lat:21.1596321,lng:49.6546159},"Gorzków":{lat:20.0285646,lng:49.925423},"Grabno":{lat:20.7905695,lng:49.9326243},"Graboszyce":{lat:19.4491693,lng:49.9450044},"Grabownica Starzeńska":{lat:22.0781548,lng:49.6579938},"Gręboszów":{lat:20.7758001,lng:50.2444899},"Gródek N/D":{lat:23.6593944,lng:53.0954531},"Grojec":{lat:20.8666034,lng:51.8655118},"Gromcu":{lat:19.2929226,lng:50.0610918},"Gromnik":{lat:20.9614581,lng:49.8380994},"Groniec Gm.Libiąż":{lat:19.2929226,lng:50.0610918},"Grudna Kępska":{lat:21.2962891,lng:49.740581},"Gruszów":{lat:20.2063239,lng:49.8532365},"Grybów":{lat:20.94789,lng:49.62406},"Grywałd":{lat:20.367697,lng:49.4470979},"Harbutowice":{lat:19.7794114,lng:49.8118163},"Inwałd":{lat:19.3920615,lng:49.8631089},"Iwanowice":{lat:19.9569444,lng:50.2272222},"Iwkowa":{lat:20.5901226,lng:49.8167342},"Izdebnik":{lat:19.7704249,lng:49.8712677},"Jabłonka":{lat:19.6937369,lng:49.4794404},"Jachówka":{lat:19.6940815,lng:49.7570745},"Jadowniki":{lat:20.6436082,lng:49.9592267},"Jasionka":{lat:22.03133,lng:50.11525},"Jastew":{lat:20.6779757,lng:49.9578214},"Jastrzębia":{lat:19.7567138,lng:49.8483046},"Jawiszowice":{lat:19.137943,lng:49.957032},"Jaworsko":{lat:20.7506944,lng:49.905473},"Jazowsko":{lat:20.5131169,lng:49.5286754},"Jerzmanowice":{lat:19.7473867,lng:50.2116396},"Jodłownik":{lat:20.2360804,lng:49.7744365},"Jordanów":{lat:19.83001,lng:49.64913},"Jurgów":{lat:20.136861,lng:49.3409077},"Jurków":{lat:20.6894944,lng:49.8515243},"Kacwin":{lat:20.2937594,lng:49.3708458},"Kalwaria Zebrzydowska":{lat:19.67676,lng:49.86686},"Kamień":{lat:19.5833874,lng:50.0129791},"Kamienica":{lat:20.3446477,lng:49.574472},"Kamionka Wielka":{lat:20.8240185,lng:49.5677668},"Karniowice":{lat:19.5204951,lng:50.1634044},"Kasina Wielka":{lat:20.1353402,lng:49.7287057},"Kęty":{lat:19.2228003,lng:49.8807299},"Kłaj":{lat:20.2990494,lng:49.9932646},"Klecza Górna":{lat:19.5569629,lng:49.8626671},"Klikuszowa":{lat:19.9855978,lng:49.5187135},"Klucze":{lat:19.5627507,lng:50.3347405},"Kluszkowce":{lat:20.3099192,lng:49.4540988},"Kobylanka":{lat:21.2229612,lng:49.6686507},"Kobyle":{lat:20.5257167,lng:49.9177891},"Kocmyrzów":{lat:20.1314315,lng:50.1289292},"Koniusza":{lat:20.2157809,lng:50.188452},"Koniusze":{lat:20.2157809,lng:50.188452},"Koniuszowa":{lat:20.788319,lng:49.6560362},"Korzenna":{lat:20.8433355,lng:49.6864727},"Kościelisko":{lat:19.8897762,lng:49.290211},"Koszyce":{lat:20.5789054,lng:50.1702758},"Koszyce Wielkie":{lat:20.9441667,lng:49.98},"Kraków":{lat:19.9449799,lng:50.0646501},"Królówka":{lat:20.4263347,lng:49.8852716},"Krościenko":{lat:20.4274138,lng:49.4410909},"Krosna":{lat:21.7660531,lng:49.6824761},"Krużlowa":{lat:20.9,lng:49.65},"Kryg":{lat:21.2556637,lng:49.6567832},"Krynica":{lat:20.9594208,lng:49.4215158},"Krynica-Zdrój":{lat:20.9594208,lng:49.4215158},"Krzczonów":{lat:19.9186389,lng:49.7371648},"Krzeszów":{lat:16.0708309,lng:50.7338713},"Krzeszowice":{lat:19.63231,lng:50.14192},"Krzyszkowice":{lat:19.9218475,lng:49.8823734},"Krzywa":{lat:15.8116636,lng:51.2826545},"Książ Wielki":{lat:20.1398772,lng:50.4431962},"Książnice Wielkie":{lat:20.5368268,lng:50.1632195},"Łabowa":{lat:20.8547528,lng:49.5275699},"Łącko":{lat:20.4364186,lng:49.5568634},"Lanckorona":{lat:19.715431,lng:49.8456988},"Łapanów":{lat:20.289332,lng:49.8645692},"Łapczyca":{lat:20.3850029,lng:49.9597684},"Łapsze Niżne":{lat:20.2439059,lng:49.397244},"Laski":{lat:21.5044818,lng:49.7178626},"Laskowa":{lat:20.4503151,lng:49.7613385},"Łęg Tarnowski":{lat:20.9272219,lng:50.0948611},"Łękawica":{lat:19.2659164,lng:49.7212543},"Leńcze":{lat:19.7352476,lng:49.8981462},"Leśnica":{lat:18.1872243,lng:50.4305778},"Łętownia":{lat:19.8707967,lng:49.6981679},"Libiąż":{lat:19.3156774,lng:50.1037928},"Lichwin":{lat:20.9571759,lng:49.8892751},"Limanowa":{lat:20.42228,lng:49.70587},"Lipinki":{lat:21.2921913,lng:49.6721853},"Lipnica Mała":{lat:19.6334034,lng:49.5137808},"Lipnica Murowana":{lat:20.5247926,lng:49.8583899},"Lisia Góra":{lat:21.0441348,lng:50.0794974},"Liszki":{lat:19.7681904,lng:50.0387484},"Łomnica Zdrój":{lat:20.7441345,lng:49.4391103},"Łoniowa":{lat:21.5259381,lng:50.563936},"Łososina Dolna":{lat:20.6239557,lng:49.7414551},"Lubcza":{lat:21.2531349,lng:49.9066906},"Lubień":{lat:19.9784125,lng:49.719017},"Lubomierz":{lat:20.201933,lng:49.6081423},"Łukowica":{lat:20.4829087,lng:49.6108537},"Luszowice":{lat:19.4049254,lng:50.1746232},"Łużna":{lat:21.0458599,lng:49.712424},"Łysa Góra":{lat:20.7370149,lng:49.9318774},"Maciejowice":{lat:20.0724463,lng:50.14189},"Maków Podhalański":{lat:19.67695,lng:49.72953},"Malec":{lat:19.2448281,lng:49.9186104},"Maniowy":{lat:20.2616416,lng:49.4570973},"Marcinkowice":{lat:20.6488,lng:49.6699151},"Maszkienice":{lat:20.6866549,lng:49.9886526},"Męcina":{lat:20.5546539,lng:49.6780152},"Michałowice":{lat:19.9802157,lng:50.1593023},"Michów":{lat:22.3140081,lng:51.5257396},"Miechów":{lat:20.0274126,lng:50.3568703},"Miejsce":{lat:19.5090122,lng:50.0180833},"Minoga":{lat:19.9001519,lng:50.2449448},"Młoszowa":{lat:19.4915331,lng:50.1497683},"Modlinica":{lat:19.8661999,lng:50.1273398},"Modlniczka":{lat:19.8546307,lng:50.1193319},"Mogilany":{lat:19.8896379,lng:49.9394588},"Morawica":{lat:19.7530653,lng:50.0751139},"Moszczenica":{lat:20.3450556,lng:49.9678171},"Mszana Dolna":{lat:20.07982,lng:49.67403},"Mszana Górna":{lat:20.0971893,lng:49.6612704},"Mucharz":{lat:19.5583771,lng:49.8118392},"Murzasichle":{lat:20.0401716,lng:49.3023263},"Muszyna":{lat:20.8971615,lng:49.3565901},"Myślachowice":{lat:19.4797222,lng:50.1841667},"Myślenice":{lat:19.93965,lng:49.83347},"Nawojowa":{lat:20.746196,lng:49.5599707},"Nawojowa Góra":{lat:19.6701696,lng:50.1193577},"Nidek":{lat:19.3255071,lng:49.9033494},"Nieczajna":{lat:16.7597181,lng:52.5815389},"Nieczajna Górna":{lat:21.062809,lng:50.1724498},"Niedzica":{lat:20.3029459,lng:49.4097122},"Niedźwiedź":{lat:20.0775264,lng:49.6206179},"Niedźwiedza":{lat:20.7170217,lng:49.8969174},"Niepołomice":{lat:20.2225326,lng:50.0406662},"Nowa Biała":{lat:20.1432099,lng:49.4392346},"Nowa Jastrząbka":{lat:21.1431566,lng:50.1250955},"Nowa Wieś":{lat:19.2167008,lng:49.9068244},"Nowe Brzesko":{lat:20.3745724,lng:50.13151},"Nowy Sącz":{lat:20.7153326,lng:49.6174535},"Nowy Targ":{lat:20.032096,lng:49.4774647},"Nowy Wiśnicz":{lat:20.4612616,lng:49.9158004},"Ochotnica Dolna":{lat:20.3424558,lng:49.5258974},"Olesno":{lat:18.41472,lng:50.87526},"Olkusz":{lat:19.5656869,lng:50.2813157},"Ołpiny":{lat:21.2047268,lng:49.8070103},"Olszyny":{lat:21.1422499,lng:49.8100558},"Osiek":{lat:19.2641467,lng:49.9496427},"Osielec":{lat:19.7822663,lng:49.6805192},"Ostrężnica":{lat:19.5700306,lng:50.1918154},"Oświęcim":{lat:19.2097782,lng:50.0343982},"Otfinów":{lat:20.8160794,lng:50.185963},"Paczółtowice":{lat:19.650959,lng:50.1872487},"Palcza":{lat:19.7439386,lng:49.8043237},"Paleśnica":{lat:20.8013288,lng:49.7946166},"Paszkówka":{lat:19.6782361,lng:49.9384118},"Pcim":{lat:19.9707571,lng:49.7505231},"Perła":{lat:20.7538779,lng:49.9828079},"Piekielnik":{lat:19.7677758,lng:49.4766435},"Piotrowice":{lat:18.968699,lng:50.2055639},"Piwniczna":{lat:20.713445,lng:49.4396092},"Piwniczna-Zdrój":{lat:20.713445,lng:49.4396092},"Płaza":{lat:19.4638343,lng:50.0990852},"Podegrodzie":{lat:20.5885771,lng:49.5762017},"Podolsze":{lat:19.4348258,lng:50.0141114},"Pogórska Wola":{lat:21.1577996,lng:50.0173166},"Pogorzyce":{lat:19.4222109,lng:50.1026757},"Polanka Wielka":{lat:19.3263098,lng:49.9851242},"Porąbka Iwkowska":{lat:20.5979316,lng:49.7966636},"Porąbka Uszewska":{lat:20.691056,lng:49.9430454},"Poręba Wielka":{lat:20.0614939,lng:49.6074833},"Poronin":{lat:20.002872,lng:49.337819},"Proszowice":{lat:20.2890751,lng:50.1921916},"Przecieszyn":{lat:19.1707284,lng:49.9777759},"Przeciszów":{lat:19.3719405,lng:50.0100874},"Przeginia":{lat:19.6888426,lng:50.2376515},"Przybradz":{lat:19.4333264,lng:49.9392893},"Przyszowa":{lat:20.503511,lng:49.6429302},"Ptaszkowa":{lat:20.8945493,lng:49.6015644},"Raba Wyżna":{lat:19.8767889,lng:49.5647023},"Rabka":{lat:19.9671769,lng:49.6090128},"Rabka-Zdrój":{lat:19.9671769,lng:49.6090128},"Radgoszcz":{lat:15.8609541,lng:52.6335134},"Radłów":{lat:20.8499278,lng:50.0839991},"Radocza":{lat:19.4751527,lng:49.9172447},"Radziszów":{lat:19.811094,lng:49.9372126},"Rajsko":{lat:19.1925764,lng:50.011003},"Roczyny":{lat:19.3160045,lng:49.8530858},"Rogoźnik":{lat:19.9375507,lng:49.446568},"Ropa":{lat:21.0442846,lng:49.590972},"Ropica Polska":{lat:21.1414754,lng:49.639053},"Rozkochów":{lat:19.4866667,lng:50.045},"Rożnów":{lat:20.6956907,lng:49.7715101},"Rudawa":{lat:19.7131749,lng:50.1221139},"Rudze":{lat:19.4275014,lng:49.9677752},"Rybna":{lat:19.6472222,lng:50.0511111},"Ryczów":{lat:19.5512902,lng:49.9805725},"Ryczówek":{lat:19.5583744,lng:50.3902944},"Ryczyny":{lat:,lng:},"Ryglice":{lat:21.1375994,lng:49.8788079},"Rytro":{lat:20.6659586,lng:49.488283},"Rzepiennik Strzyżewski":{lat:21.0364041,lng:49.8047848},"Rzezawa":{lat:20.5127952,lng:49.9907413},"Rzuchowa":{lat:20.9309009,lng:49.9510647},"Rzyki":{lat:19.3940341,lng:49.8101924},"Sędziszów Małopolski":{lat:21.70191,lng:50.07097},"Sidzina":{lat:19.710237,lng:49.5904912},"Siedliska":{lat:20.9860409,lng:49.7268583},"Siemiechów":{lat:20.9063169,lng:49.8530897},"Sieniawa":{lat:22.6095389,lng:50.177791},"Siepraw":{lat:19.9833333,lng:49.9166667},"Skała":{lat:19.8541516,lng:50.2304098},"Skawa":{lat:19.8914565,lng:49.6161335},"Skawica":{lat:19.6231329,lng:49.6766897},"Skawina":{lat:19.8288749,lng:49.9751815},"Skomielna Biała":{lat:19.9249197,lng:49.6356195},"Skomielna Czarna":{lat:19.8365034,lng:49.7266083},"Skrzydlna":{lat:20.1868688,lng:49.7524226},"Skrzyszów":{lat:18.4889535,lng:49.9486214},"Słaboszów":{lat:20.2739969,lng:50.3869066},"Słomniki":{lat:20.08212,lng:50.23993},"Słopnice":{lat:20.3411053,lng:49.6827191},"Smęgorzów":{lat:21.0045165,lng:50.2282155},"Smolice":{lat:19.4565377,lng:50.0263198},"Sobolów":{lat:20.3394235,lng:49.9075733},"Sołuszowa":{lat:19.73381,lng:50.2675642},"Spytkowice":{lat:19.833467,lng:49.5769172},"Sromowce Wyżne":{lat:20.3390843,lng:49.4079948},"Stary Sącz":{lat:20.6327686,lng:49.564452},"Sterkowiec":{lat:20.6804014,lng:49.9943002},"Stróże":{lat:20.9666751,lng:49.6611664},"Stryszawa":{lat:19.5223848,lng:49.7130014},"Stryszów":{lat:19.6172403,lng:49.8247186},"Strzyszów":{lat:18.4889535,lng:49.9486214},"Sucha Beskidzka":{lat:19.58636,lng:49.74127},"Sufczyn":{lat:20.7522792,lng:49.9644164},"Sułkowice":{lat:19.79959,lng:49.83879},"Sułkowice-Bolęcina":{lat:19.79959,lng:49.83879},"Sułokwice":{lat:19.79959,lng:49.83879},"Sułoszowa":{lat:19.73381,lng:50.2675642},"Świątniki Górne":{lat:19.9536485,lng:49.9342448},"Szaflary":{lat:20.0253089,lng:49.4267341},"Szczawa":{lat:20.2947668,lng:49.6098822},"Szczawnica":{lat:20.4829528,lng:49.4230451},"Szczepanów":{lat:20.6547646,lng:50.0046174},"Szczucin":{lat:21.074546,lng:50.3094981},"Szczurowa":{lat:20.6360221,lng:50.1188793},"Szerzyny":{lat:21.2464512,lng:49.8090657},"Szymbark":{lat:18.1011005,lng:54.2183509},"Szynwałd":{lat:21.124684,lng:49.966003},"Tabaszowa":{lat:20.6873008,lng:49.7440408},"Tarnów":{lat:20.9858407,lng:50.0121011},"Tarnowiec":{lat:20.9858333,lng:49.9811111},"Tęgoborze":{lat:20.6375347,lng:49.7068731},"Tenczynek":{lat:19.613589,lng:50.1185694},"Tokarnia":{lat:19.8713262,lng:49.7268636},"Tomice":{lat:19.4830911,lng:49.8973158},"Trzciana":{lat:20.372973,lng:49.844526},"Trzebinia":{lat:19.4694,lng:50.15847},"Trzemeśnia":{lat:19.9833333,lng:49.7333333},"Trześniów":{lat:21.9366823,lng:49.6450496},"Trzyciąż":{lat:19.7668321,lng:50.3100422},"Tuchów":{lat:21.05416,lng:49.89477},"Tylicz":{lat:21.0254761,lng:49.3953598},"Tylmanowa":{lat:20.4145771,lng:49.4796776},"Tymbark":{lat:20.3255556,lng:49.7272222},"Tymowa":{lat:20.620184,lng:49.8513023},"Ujanowice":{lat:20.561301,lng:49.7442346},"Uście Gorlickie":{lat:21.140161,lng:49.5220555},"Uszew":{lat:20.5974413,lng:49.9184079},"Wadowice":{lat:19.4939579,lng:49.8827856},"Waksmund":{lat:20.0754966,lng:49.4815066},"Wał Ruda":{lat:20.7886862,lng:50.1175093},"Wawrzeńczyce":{lat:20.3161619,lng:50.109857},"Węgrzce":{lat:19.9746839,lng:50.1201606},"Więcławice Stare":{lat:20.0203718,lng:50.1555671},"Wieliczka":{lat:20.0647971,lng:49.9870619},"Wielka Wieś":{lat:19.8433657,lng:50.1567186},"Wielkie Drogi":{lat:19.7204438,lng:49.9588065},"Wielogłowy":{lat:20.6848461,lng:49.6726947},"Wieprz":{lat:22.8718537,lng:51.2958008},"Wierzchosławice":{lat:20.8565462,lng:50.0244243},"Wietrzychowice":{lat:18.8599799,lng:52.412757},"Wiśniowa":{lat:20.1143944,lng:49.7873747},"Witanowice":{lat:19.5249021,lng:49.9168655},"Witów":{lat:19.826568,lng:49.3210601},"Wojnicz":{lat:20.8378422,lng:49.9579835},"Wola Dębińska":{lat:20.6877892,lng:49.9804544},"Wola Filipowska":{lat:19.5797755,lng:50.1340149},"Wola Łużańska":{lat:21.0680672,lng:49.691022},"Wola Radłowska":{lat:20.8177099,lng:50.0948778},"Wola Rzędzińska":{lat:21.06491,lng:50.036702},"Wolbrom":{lat:19.7584,lng:50.37939},"Woźniki":{lat:19.06019,lng:50.58846},"Wysoka":{lat:19.6030772,lng:49.9065325},"Wysowa":{lat:21.1833333,lng:49.4333333},"Wysowa-Zdrój":{lat:21.1833333,lng:49.4333333},"Ząb":{lat:19.9485105,lng:49.3377155},"Zabawa":{lat:20.8221728,lng:50.120407},"Zabierzów":{lat:19.7978774,lng:50.1140795},"Żabno":{lat:20.88617,lng:50.13334},"Zaborów":{lat:20.6772162,lng:52.2620157},"Zaborze":{lat:19.2405627,lng:50.021663},"Zabrzeż":{lat:20.3956986,lng:49.5435723},"Zachełmna":{lat:19.6873274,lng:49.7986843},"Zagłobice":{lat:20.8999887,lng:49.9735346},"Zagórnik":{lat:19.3785127,lng:49.8367139},"Zagórzany":{lat:20.2351431,lng:49.8756784},"Zagórze":{lat:20.1895245,lng:49.9922655},"Zakliczyn":{lat:20.8093377,lng:49.8557953},"Zakopane":{lat:19.9495621,lng:49.299181},"Zalas":{lat:19.6083333,lng:50.0794444},"Zalasowa":{lat:21.122641,lng:49.923898},"Zamieście":{lat:20.349022,lng:49.717702},"Żarki":{lat:19.36332,lng:50.62508},"Zasole":{lat:19.1911111,lng:49.9569444},"Zator":{lat:19.43747,lng:49.99621},"Zawoja":{lat:19.5424946,lng:49.6439296},"Żegiestów":{lat:20.8069018,lng:49.3782223},"Żegocina":{lat:20.4197531,lng:49.8133215},"Zembrzyce":{lat:19.6007005,lng:49.775001},"Zgłobice":{lat:20.8999887,lng:49.9735346},"Zielonki":{lat:19.9210252,lng:50.1180379},"Zubrzyca Górna":{lat:19.6493594,lng:49.5628371}
      }
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