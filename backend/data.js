import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Kornel Kołodziejczyk",
      email: "kornel22100@gmail.com",
      password: bcrypt.hashSync("password", 8),
      isAdmin: true,
    },
  ],
  articles: [
    {
      title: "Turniej z okazji Dnia Niepodległości",
      text: `
        <p>W dniu 16 listopada 2019 r. rozegrany został Turniej Squasha z okazji Dnia Niepodległości. Nie zabrakło emocji i ducha rywalizacji, niemniej jednak wszyscy świetnie się bawili!</p>
        <p>Poniżej przedstawiamy klasyfikację końcową:</p>
        <ol>
          <li>Radosław Rybak</li><li>Mateusz Świerczek</li><li>Piotr Iwaniszczuk</li>
          <li>Przemysław Dmuch</li>
          <li>Grzegorz Rzepecki</li>
          <li>Rafał Kister</li>
          <li>Sebastian Babicz</li>
          <li>Sławomir Olszewski</li>
          <li>Mateusz Charkot</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Norbert Zabroń</li>
          <li>Michał Pawłowski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Paweł Denysiuk</li>
          <li>Maciek Żmuda</li>
          <li>Piotr Chadaj</li>
          <li>Grzegorz Jasiński</li>
          <li>Martyna Zwierzyńska</li>
          <li>Piotr Lisowski</li>
        </ol>
        <p>Wszystkim zawodnikom gratulujemy i dziekujemy za obecność a Was zapraszamy na nasze korty przez cały tydzień już od godziny 9:00.</p>`,
      date: new Date(2019, 11, 22),
      image: "1.jpg",
    },
    {
      title: "Turniej na rzecz WOŚP",
      text: `
      <p> W rozegranym 11 stycznia Turnieju Squasha na rzecz WOŚP, uczestniczyły 22 osoby nie tylko z Chełma, ale również z Lublina, czy Białej Podlaskiej! Pomagaliśmy, a przy tym świetnie się bawiliśmy. Oprócz środków zebranych do puszki, na wewnętrzną zamkniętą licytację ligową trafiły:</p>
      <ul>
          <li>Koszulka WOŚP (250 zł) - Paweł Kidyba</li>
          <li>Kubek WOŚP (150 zł) - Przemek Tomaszewski</li>
      </ul>
      <p>Łącznie zebraliśmy 1090 zł!</p>
      <p>Poniżej przedstawiamy klasyfikację końcową turnieju:</p>
      <ol>
          <li>Robert Sudak</li>
          <li>Kornel Kołodziejczyk</li>
          <li>Sławomir Olszewski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Sebastian Babicz</li>
          <li>Łukasz Binio</li>
          <li>Rafał Kister</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Piotr Branewski</li>
          <li>Marek Rak</li>
          <li>Bartłomiej Cienciała</li>
          <li>Mateusz Charkot</li>
          <li>Piotr Chadaj</li>
          <li>Michał Sawicz</li>
          <li>Krzysztof Piotrowicz</li>
          <li>Grzegorz Jasiński</li>
          <li>Kamil Kondrasiuk</li>
          <li>Konrad Wojciechowski</li>
          <li>Zbigniew Kołodziejczyk</li>
          <li>Adam Piotrowicz</li>
          <li>Paweł Kidyba</li>
      </ol>
      <p>Serdecznie dziękujemy wszystkim za udział i gratulujemy!</p></div>`,
      date: new Date(2020, 2, 13),
      image: "2.jpg",
    },
    {
      title: "Turniej z okazji Dnia Niepodległości",
      text: `
        <p>W dniu 16 listopada 2019 r. rozegrany został Turniej Squasha z okazji Dnia Niepodległości. Nie zabrakło emocji i ducha rywalizacji, niemniej jednak wszyscy świetnie się bawili!</p>
        <p>Poniżej przedstawiamy klasyfikację końcową:</p>
        <ol>
          <li>Radosław Rybak</li><li>Mateusz Świerczek</li><li>Piotr Iwaniszczuk</li>
          <li>Przemysław Dmuch</li>
          <li>Grzegorz Rzepecki</li>
          <li>Rafał Kister</li>
          <li>Sebastian Babicz</li>
          <li>Sławomir Olszewski</li>
          <li>Mateusz Charkot</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Norbert Zabroń</li>
          <li>Michał Pawłowski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Paweł Denysiuk</li>
          <li>Maciek Żmuda</li>
          <li>Piotr Chadaj</li>
          <li>Grzegorz Jasiński</li>
          <li>Martyna Zwierzyńska</li>
          <li>Piotr Lisowski</li>
        </ol>
        <p>Wszystkim zawodnikom gratulujemy i dziekujemy za obecność a Was zapraszamy na nasze korty przez cały tydzień już od godziny 9:00.</p>`,
      date: new Date(2019, 11, 22),
      image: "1.jpg",
    },
    {
      title: "Turniej na rzecz WOŚP",
      text: `
      <p> W rozegranym 11 stycznia Turnieju Squasha na rzecz WOŚP, uczestniczyły 22 osoby nie tylko z Chełma, ale również z Lublina, czy Białej Podlaskiej! Pomagaliśmy, a przy tym świetnie się bawiliśmy. Oprócz środków zebranych do puszki, na wewnętrzną zamkniętą licytację ligową trafiły:</p>
      <ul>
          <li>Koszulka WOŚP (250 zł) - Paweł Kidyba</li>
          <li>Kubek WOŚP (150 zł) - Przemek Tomaszewski</li>
      </ul>
      <p>Łącznie zebraliśmy 1090 zł!</p>
      <p>Poniżej przedstawiamy klasyfikację końcową turnieju:</p>
      <ol>
          <li>Robert Sudak</li>
          <li>Kornel Kołodziejczyk</li>
          <li>Sławomir Olszewski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Sebastian Babicz</li>
          <li>Łukasz Binio</li>
          <li>Rafał Kister</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Piotr Branewski</li>
          <li>Marek Rak</li>
          <li>Bartłomiej Cienciała</li>
          <li>Mateusz Charkot</li>
          <li>Piotr Chadaj</li>
          <li>Michał Sawicz</li>
          <li>Krzysztof Piotrowicz</li>
          <li>Grzegorz Jasiński</li>
          <li>Kamil Kondrasiuk</li>
          <li>Konrad Wojciechowski</li>
          <li>Zbigniew Kołodziejczyk</li>
          <li>Adam Piotrowicz</li>
          <li>Paweł Kidyba</li>
      </ol>
      <p>Serdecznie dziękujemy wszystkim za udział i gratulujemy!</p></div>`,
      date: new Date(2020, 2, 13),
      image: "2.jpg",
    },
    {
      title: "Turniej z okazji Dnia Niepodległości",
      text: `
        <p>W dniu 16 listopada 2019 r. rozegrany został Turniej Squasha z okazji Dnia Niepodległości. Nie zabrakło emocji i ducha rywalizacji, niemniej jednak wszyscy świetnie się bawili!</p>
        <p>Poniżej przedstawiamy klasyfikację końcową:</p>
        <ol>
          <li>Radosław Rybak</li><li>Mateusz Świerczek</li><li>Piotr Iwaniszczuk</li>
          <li>Przemysław Dmuch</li>
          <li>Grzegorz Rzepecki</li>
          <li>Rafał Kister</li>
          <li>Sebastian Babicz</li>
          <li>Sławomir Olszewski</li>
          <li>Mateusz Charkot</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Norbert Zabroń</li>
          <li>Michał Pawłowski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Paweł Denysiuk</li>
          <li>Maciek Żmuda</li>
          <li>Piotr Chadaj</li>
          <li>Grzegorz Jasiński</li>
          <li>Martyna Zwierzyńska</li>
          <li>Piotr Lisowski</li>
        </ol>
        <p>Wszystkim zawodnikom gratulujemy i dziekujemy za obecność a Was zapraszamy na nasze korty przez cały tydzień już od godziny 9:00.</p>`,
      date: new Date(2019, 11, 22),
      image: "1.jpg",
    },
    {
      title: "Turniej na rzecz WOŚP",
      text: `
      <p> W rozegranym 11 stycznia Turnieju Squasha na rzecz WOŚP, uczestniczyły 22 osoby nie tylko z Chełma, ale również z Lublina, czy Białej Podlaskiej! Pomagaliśmy, a przy tym świetnie się bawiliśmy. Oprócz środków zebranych do puszki, na wewnętrzną zamkniętą licytację ligową trafiły:</p>
      <ul>
          <li>Koszulka WOŚP (250 zł) - Paweł Kidyba</li>
          <li>Kubek WOŚP (150 zł) - Przemek Tomaszewski</li>
      </ul>
      <p>Łącznie zebraliśmy 1090 zł!</p>
      <p>Poniżej przedstawiamy klasyfikację końcową turnieju:</p>
      <ol>
          <li>Robert Sudak</li>
          <li>Kornel Kołodziejczyk</li>
          <li>Sławomir Olszewski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Sebastian Babicz</li>
          <li>Łukasz Binio</li>
          <li>Rafał Kister</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Piotr Branewski</li>
          <li>Marek Rak</li>
          <li>Bartłomiej Cienciała</li>
          <li>Mateusz Charkot</li>
          <li>Piotr Chadaj</li>
          <li>Michał Sawicz</li>
          <li>Krzysztof Piotrowicz</li>
          <li>Grzegorz Jasiński</li>
          <li>Kamil Kondrasiuk</li>
          <li>Konrad Wojciechowski</li>
          <li>Zbigniew Kołodziejczyk</li>
          <li>Adam Piotrowicz</li>
          <li>Paweł Kidyba</li>
      </ol>
      <p>Serdecznie dziękujemy wszystkim za udział i gratulujemy!</p></div>`,
      date: new Date(2020, 2, 13),
      image: "2.jpg",
    },
    {
      title: "Turniej z okazji Dnia Niepodległości",
      text: `
        <p>W dniu 16 listopada 2019 r. rozegrany został Turniej Squasha z okazji Dnia Niepodległości. Nie zabrakło emocji i ducha rywalizacji, niemniej jednak wszyscy świetnie się bawili!</p>
        <p>Poniżej przedstawiamy klasyfikację końcową:</p>
        <ol>
          <li>Radosław Rybak</li><li>Mateusz Świerczek</li><li>Piotr Iwaniszczuk</li>
          <li>Przemysław Dmuch</li>
          <li>Grzegorz Rzepecki</li>
          <li>Rafał Kister</li>
          <li>Sebastian Babicz</li>
          <li>Sławomir Olszewski</li>
          <li>Mateusz Charkot</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Norbert Zabroń</li>
          <li>Michał Pawłowski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Paweł Denysiuk</li>
          <li>Maciek Żmuda</li>
          <li>Piotr Chadaj</li>
          <li>Grzegorz Jasiński</li>
          <li>Martyna Zwierzyńska</li>
          <li>Piotr Lisowski</li>
        </ol>
        <p>Wszystkim zawodnikom gratulujemy i dziekujemy za obecność a Was zapraszamy na nasze korty przez cały tydzień już od godziny 9:00.</p>`,
      date: new Date(2019, 11, 22),
      image: "1.jpg",
    },
    {
      title: "Turniej na rzecz WOŚP",
      text: `
      <p> W rozegranym 11 stycznia Turnieju Squasha na rzecz WOŚP, uczestniczyły 22 osoby nie tylko z Chełma, ale również z Lublina, czy Białej Podlaskiej! Pomagaliśmy, a przy tym świetnie się bawiliśmy. Oprócz środków zebranych do puszki, na wewnętrzną zamkniętą licytację ligową trafiły:</p>
      <ul>
          <li>Koszulka WOŚP (250 zł) - Paweł Kidyba</li>
          <li>Kubek WOŚP (150 zł) - Przemek Tomaszewski</li>
      </ul>
      <p>Łącznie zebraliśmy 1090 zł!</p>
      <p>Poniżej przedstawiamy klasyfikację końcową turnieju:</p>
      <ol>
          <li>Robert Sudak</li>
          <li>Kornel Kołodziejczyk</li>
          <li>Sławomir Olszewski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Sebastian Babicz</li>
          <li>Łukasz Binio</li>
          <li>Rafał Kister</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Piotr Branewski</li>
          <li>Marek Rak</li>
          <li>Bartłomiej Cienciała</li>
          <li>Mateusz Charkot</li>
          <li>Piotr Chadaj</li>
          <li>Michał Sawicz</li>
          <li>Krzysztof Piotrowicz</li>
          <li>Grzegorz Jasiński</li>
          <li>Kamil Kondrasiuk</li>
          <li>Konrad Wojciechowski</li>
          <li>Zbigniew Kołodziejczyk</li>
          <li>Adam Piotrowicz</li>
          <li>Paweł Kidyba</li>
      </ol>
      <p>Serdecznie dziękujemy wszystkim za udział i gratulujemy!</p></div>`,
      date: new Date(2020, 2, 13),
      image: "2.jpg",
    },
    {
      title: "Turniej na rzecz WOŚP",
      text: `
      <p> W rozegranym 11 stycznia Turnieju Squasha na rzecz WOŚP, uczestniczyły 22 osoby nie tylko z Chełma, ale również z Lublina, czy Białej Podlaskiej! Pomagaliśmy, a przy tym świetnie się bawiliśmy. Oprócz środków zebranych do puszki, na wewnętrzną zamkniętą licytację ligową trafiły:</p>
      <ul>
          <li>Koszulka WOŚP (250 zł) - Paweł Kidyba</li>
          <li>Kubek WOŚP (150 zł) - Przemek Tomaszewski</li>
      </ul>
      <p>Łącznie zebraliśmy 1090 zł!</p>
      <p>Poniżej przedstawiamy klasyfikację końcową turnieju:</p>
      <ol>
          <li>Robert Sudak</li>
          <li>Kornel Kołodziejczyk</li>
          <li>Sławomir Olszewski</li>
          <li>Dariusz Wojciechowski</li>
          <li>Sebastian Babicz</li>
          <li>Łukasz Binio</li>
          <li>Rafał Kister</li>
          <li>Kamil Remiszewski</li>
          <li>Bartosz Bochen</li>
          <li>Piotr Branewski</li>
          <li>Marek Rak</li>
          <li>Bartłomiej Cienciała</li>
          <li>Mateusz Charkot</li>
          <li>Piotr Chadaj</li>
          <li>Michał Sawicz</li>
          <li>Krzysztof Piotrowicz</li>
          <li>Grzegorz Jasiński</li>
          <li>Kamil Kondrasiuk</li>
          <li>Konrad Wojciechowski</li>
          <li>Zbigniew Kołodziejczyk</li>
          <li>Adam Piotrowicz</li>
          <li>Paweł Kidyba</li>
      </ol>
      <p>Serdecznie dziękujemy wszystkim za udział i gratulujemy!</p></div>`,
      date: new Date(2020, 2, 13),
      image: "2.jpg",
    },
  ],
  tournaments: [
    {
      name: "Rozgrzewkowy antyCovidowy",
      startDate: new Date(2021, 6, 18),
      isRanking: false,
      users: [
        { name: "Kornel Kołodziejczyk", points: 0 },
        { name: "Sławomir Olszewski", points: 0 },
        { name: "Sebastian Babicz", points: 0 },
        { name: "Marek Rak", points: 0 },
        { name: "Dariusz Wojciechowski", points: 0 },
        { name: "Michał Gurdak", points: 0 },
        { name: "Grzegorz Grzywaczewski", points: 0 },
        { name: "Bartosz Bochen", points: 0 },
        { name: "Łukasz Czochra", points: 0 },
      ],
      games: {
        places: [
          {
            users: ["Sławomir Olszewski", "Kornel Kołodziejczyk"],
            sets: [11, 11, 11, 10, 7, 13, 5, 8, 12, 11],
            scores: [2, 3],
            factors: ["z27", "z28"],
          },
          {
            users: ["Marek Rak", "Sebastian Babicz"],
            sets: [7, 3, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["p27", "p28"],
          },
          {
            users: ["Michał Gurdak", "Dariusz Wojciechowski"],
            sets: [9, 11, 4, null, null, 11, 8, 11, null, null],
            scores: [1, 2],
            factors: ["p25", "p26"],
          },
          {
            users: ["Bartosz Bochen", "Grzegorz Grzywaczewski"],
            sets: [9, 11, 8, null, null, 11, 8, 11, null, null],
            scores: [1, 2],
            factors: ["p23", "p24"],
          },
          {
            users: ["BYE", "Łukasz Czochra"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["z31", "z32"],
          },
        ],
        ladder: [
          {
            id: "1",
            users: ["Bartosz Bochen", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["1", "16"],
          },
          {
            id: "2",
            users: ["Sławomir Olszewski", "Łukasz Czochra"],
            sets: [11, 11, null, null, null, 5, 6, null, null, null],
            scores: [2, 0],
            factors: ["9", "8"],
          },
          {
            id: "3",
            users: ["Michał Pawłowski", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["5", "12"],
          },
          {
            id: "4",
            users: ["BYE", "Sebastian Babicz"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["13", "4"],
          },
          {
            id: "5",
            users: ["Grzegorz Grzywaczewski", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["3", "14"],
          },
          {
            id: "6",
            users: ["BYE", "Marek Rak"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["11", "6"],
          },
          {
            id: "7",
            users: ["Dariusz Wojciechowski", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["7", "10"],
          },
          {
            id: "8",
            users: ["BYE", "Kornel Kołodziejczyk"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["15", "2"],
          },
          {
            id: "9",
            users: ["Bartosz Bochen", "Sławomir Olszewski"],
            sets: [4, 9, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["z1", "z2"],
          },
          {
            id: "10",
            users: ["Michał Gurdak", "Sebastian Babicz"],
            sets: [7, 4, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["z3", "z4"],
          },
          {
            id: "11",
            users: ["Grzegorz Grzywaczewski", "Marek Rak"],
            sets: [2, 4, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["z5", "z6"],
          },
          {
            id: "12",
            users: ["Dariusz Wojciechowski", "Kornel Kołodziejczyk"],
            sets: [4, 6, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["z7", "z8"],
          },
          {
            id: "21",
            users: ["Sławomir Olszewski", "Sebastian Babicz"],
            sets: [11, 12, null, null, null, 9, 10, null, null, null],
            scores: [2, 0],
            factors: ["z9", "z10"],
          },
          {
            id: "22",
            users: ["Marek Rak", "Kornel Kołodziejczyk"],
            sets: [9, 11, null, null, null, 11, 13, null, null, null],
            scores: [0, 2],
            factors: ["z11", "z12"],
          },
          {
            id: "27",
            users: ["Sławomir Olszewski", "Marek Rak"],
            sets: [11, 13, null, null, null, 7, 11, null, null, null],
            scores: [2, 0],
            factors: ["z21", "z25"],
          },
          {
            id: "25",
            users: ["Marek Rak", "Michał Gurdak"],
            sets: [5, 11, 11, null, null, 11, 9, 8, null, null],
            scores: [2, 1],
            factors: ["z22", "z23"],
          },
          {
            id: "28",
            users: ["Kornel Kołodziejczyk", "Sebastian Babicz"],
            sets: [12, 11, null, null, null, 10, 8, null, null, null],
            scores: [2, 0],
            factors: ["z22", "z26"],
          },
          {
            id: "26",
            users: ["Sebastian Babicz", "Dariusz Wojciechowski"],
            sets: [12, 11, null, null, null, 10, 5, null, null, null],
            scores: [2, 0],
            factors: ["z21", "z24"],
          },
          {
            id: "23",
            users: ["Bartosz Bochen", "Michał Gurdak"],
            sets: [6, 11, 10, null, null, 11, 6, 12, null, null],
            scores: [1, 2],
            factors: ["z17", "z18"],
          },
          {
            id: "24",
            users: ["Grzegorz Grzywaczewski", "Dariusz Wojciechowski"],
            sets: [8, 6, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["z19", "z20"],
          },
          {
            id: "17",
            users: ["BYE", "Bartosz Bochen"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p13", "p9"],
          },
          {
            id: "13",
            users: ["BYE", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p8", "p7"],
          },
          {
            id: "18",
            users: ["BYE", "Michał Gurdak"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p14", "p10"],
          },
          {
            id: "14",
            users: ["BYE", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p6", "p5"],
          },
          {
            id: "19",
            users: ["BYE", "Grzegorz Grzywaczewski"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p1", "p2"],
          },
          {
            id: "15",
            users: ["BYE", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p15", "p11"],
          },
          {
            id: "20",
            users: ["Łukasz Czochra", "Dariusz Wojciechowski"],
            sets: [7, 7, null, null, null, 11, 11, null, null, null],
            scores: [0, 2],
            factors: ["p16", "p12"],
          },
          {
            id: "16",
            users: ["Łukasz Czochra", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p2", "p1"],
          },
          {
            id: "31",
            users: ["BYE", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p17", "p18"],
          },
          {
            id: "29",
            users: ["BYE", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p13", "p14"],
          },
          {
            id: "32",
            users: ["BYE", "Łukasz Czochra"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p19", "p20"],
          },
          {
            id: "30",
            users: ["BYE", "BYE"],
            sets: [null, null, null, null, null, null, null, null, null, null],
            scores: [0, 0],
            factors: ["p15", "p16"],
          },
        ],
      },
    },
  ],

  groups: [
    {
      league: "Runda 1",
      startDate: new Date(2020, 9, 14),
      endDate: new Date(2020, 10, 18),
      season: "2020/2021",
      isRanking: true,
      name: "A",
      users: [
        {
          name: "Radosław Rybak",
          games: 5,
          wins: ["Michał Pawłowski", "Kamil Remiszewski", "Sławomir Olszewski", "Piotr Iwaniszczuk", "Sebastian Babicz"],
          points: 25,
          smallPoints: 82,
        },
        { name: "Michał Pawłowski", games: 5, wins: ["Sławomir Olszewski", "Piotr Iwaniszczuk", "Sebastian Babicz"], points: 19, smallPoints: -35 },
        { name: "Kamil Remiszewski", games: 5, wins: ["Michał Pawłowski", "Sławomir Olszewski", "Sebastian Babicz"], points: 18, smallPoints: -4 },
        { name: "Sławomir Olszewski", games: 4, wins: ["Sebastian Babicz"], points: 12, smallPoints: -3 },
        { name: "Piotr Iwaniszczuk", games: 2, wins: ["Kamil Remiszewski"], points: 7, smallPoints: -1 },
        { name: "Sebastian Babicz", games: 3, wins: [], points: 6, smallPoints: -39 },
      ],
      games: [
        {
          users: ["Radosław Rybak", "Piotr Iwaniszczuk"],
          sets: [7, 11, 11, 11, null, 11, 7, 4, 3, null],
          points: [5, 2],
          scores: [3, 1],
        },
        {
          users: ["Radosław Rybak", "Sławomir Olszewski"],
          sets: [11, 11, 11, null, null, 8, 9, 6, null, null],
          points: [5, 1],
          scores: [3, 0],
        },
        {
          users: ["Radosław Rybak", "Sebastian Babicz"],
          sets: [11, 9, 11, 11, null, 3, 11, 3, 6, null],
          points: [5, 2],
          scores: [3, 1],
        },
        {
          users: ["Radosław Rybak", "Michał Pawłowski"],
          sets: [11, 11, 11, null, null, 4, 2, 1, null, null],
          points: [5, 1],
          scores: [3, 0],
        },
        {
          users: ["Radosław Rybak", "Kamil Remiszewski"],
          sets: [13, 11, 11, null, null, 11, 7, 5, null, null],
          points: [5, 1],
          scores: [3, 0],
        },
        {
          users: ["Piotr Iwaniszczuk", "Sławomir Olszewski"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 0],
          scores: [0, 0],
        },
        {
          users: ["Piotr Iwaniszczuk", "Kamil Remiszewski"],
          sets: [12, 11, 11, 11, null, 14, 6, 6, 5, null],
          points: [5, 2],
          scores: [3, 1],
        },
        {
          users: ["Piotr Iwaniszczuk", "Michał Pawłowski"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 5],
          scores: [0, 0],
        },
        {
          users: ["Piotr Iwaniszczuk", "Sebastian Babicz"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 0],
          scores: [0, 0],
        },
        {
          users: ["Sławomir Olszewski", "Sebastian Babicz"],
          sets: [11, 11, 14, 11, null, 7, 7, 16, 5, null],
          points: [5, 2],
          scores: [3, 1],
        },
        {
          users: ["Sławomir Olszewski", "Kamil Remiszewski"],
          sets: [11, 5, 9, 11, 10, 8, 11, 11, 9, 12],
          points: [3, 5],
          scores: [2, 3],
        },
        {
          users: ["Sebastian Babicz", "Kamil Remiszewski"],
          sets: [8, 15, 6, 11, null, 11, 13, 11, 13, null],
          points: [2, 5],
          scores: [1, 3],
        },
        {
          users: ["Sebastian Babicz", "Michał Pawłowski"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 5],
          scores: [0, 0],
        },
        {
          users: ["Kamil Remiszewski", "Michał Pawłowski"],
          sets: [11, 6, 7, 11, 11, 7, 11, 11, 6, 2],
          points: [5, 3],
          scores: [3, 2],
        },
        {
          users: ["Sławomir Olszewski", "Michał Pawłowski"],
          sets: [10, 11, 1, 11, 10, 12, 6, 11, 2, 12],
          points: [3, 5],
          scores: [2, 3],
        },
      ],
    },
    {
      league: "Runda 1",
      startDate: new Date(2020, 9, 14),
      endDate: new Date(2020, 10, 18),
      season: "2020/2021",
      isRanking: true,
      name: "B",
      users: [
        {
          name: "Kornel Kołodziejczyk",
          games: 5,
          wins: ["Grzegorz Jasiński", "Grzegorz Rzepecki", "Paweł Denysiuk", "Andrzej Oleszczuk"],
          points: 22,
          smallPoints: 19,
        },
        { name: "Grzegorz Jasiński", games: 4, wins: ["Paweł Denysiuk", "Andrzej Oleszczuk"], points: 16, smallPoints: -5 },
        { name: "Rafał Kister", games: 4, wins: ["Paweł Denysiuk", "Andrzej Oleszczuk", "Kornel Kołodziejczyk"], points: 15, smallPoints: 17 },
        { name: "Grzegorz Rzepecki", games: 3, wins: ["Andrzej Oleszczuk", "Grzegorz Jasiński"], points: 13, smallPoints: -4 },
        { name: "Paweł Denysiuk", games: 4, wins: ["Andrzej Oleszczuk"], points: 11, smallPoints: -27 },
        { name: "Andrzej Oleszczuk", games: 0, wins: [], points: 0, smallPoints: 0 },
      ],
      games: [
        {
          users: ["Grzegorz Rzepecki", "Kornel Kołodziejczyk"],
          sets: [2, 11, 11, 8, 7, 11, 9, 7, 11, 11],
          points: [3, 5],
          scores: [2, 3],
        },
        {
          users: ["Grzegorz Rzepecki", "Andrzej Oleszczuk"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [5, 0],
          scores: [0, 0],
        },
        {
          users: ["Rafał Kister", "Andrzej Oleszczuk"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [5, 0],
          scores: [0, 0],
        },
        {
          users: ["Grzegorz Rzepecki", "Grzegorz Jasiński"],
          sets: [11, 9, 12, 9, 11, 7, 11, 10, 11, 7],
          points: [5, 3],
          scores: [3, 2],
        },
        {
          users: ["Rafał Kister", "Grzegorz Jasiński"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 0],
          scores: [0, 0],
        },
        {
          users: ["Grzegorz Rzepecki", "Paweł Denysiuk"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 0],
          scores: [0, 0],
        },
        {
          users: ["Kornel Kołodziejczyk", "Paweł Denysiuk"],
          sets: [11, 11, 11, 8, 11, 1, 9, 13, 11, 9],
          points: [5, 3],
          scores: [3, 2],
        },
        {
          users: ["Kornel Kołodziejczyk", "Andrzej Oleszczuk"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [5, 0],
          scores: [0, 0],
        },
        {
          users: ["Andrzej Oleszczuk", "Grzegorz Jasiński"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 5],
          scores: [0, 0],
        },
        {
          users: ["Rafał Kister", "Paweł Denysiuk"],
          sets: [11, 11, 11, null, null, 7, 8, 7, null, null],
          points: [5, 1],
          scores: [3, 0],
        },
        {
          users: ["Grzegorz Jasiński", "Paweł Denysiuk"],
          sets: [15, 11, 9, 11, null, 13, 6, 11, 9, null],
          points: [5, 2],
          scores: [3, 1],
        },
        {
          users: ["Andrzej Oleszczuk", "Paweł Denysiuk"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 5],
          scores: [0, 0],
        },
        {
          users: ["Grzegorz Rzepecki", "Rafał Kister"],
          sets: [null, null, null, null, null, null, null, null, null, null],
          points: [0, 0],
          scores: [0, 0],
        },
        {
          users: ["Rafał Kister", "Kornel Kołodziejczyk"],
          sets: [5, 11, 11, 11, null, 11, 9, 7, 5, null],
          points: [5, 2],
          scores: [3, 1],
        },
        {
          users: ["Kornel Kołodziejczyk", "Grzegorz Jasiński"],
          sets: [11, 7, 11, 9, 11, 6, 11, 7, 11, 8],
          points: [5, 3],
          scores: [3, 2],
        },
      ],
    },
  ],
};

export default data;
