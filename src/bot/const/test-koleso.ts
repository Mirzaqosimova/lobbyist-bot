export enum KolesoCategories {
  PERSONAL_GROWTH = 'personal_growth', //10
  FAMILY = 'family', //5
  FRIENDS_AROUND = 'friends_around', //10
  VALUE = 'value', //8
  FINANCIAL_STABILITY = 'financial_stability', //11
  HOBBY_AND_INTERESTS = 'hobby_and_interests', //5
  SPORT_HEALTH = 'sport_health', //5
  CAREER = 'career', //9
}

export enum TestType {
  NUMBERS = 'numbers',
  SINGLE_ANSWER = 'single_answer',
  MULTIPLE_ANSWER = 'multiple_answer',
}
// export const TestKoleso = [
//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `1 dan 10 gacha o'rganishni, rivojlanishni, yangi narsalarni o'rganishni qanchalik yaxshi ko'rishingizni aniqlang?`,
//     category: KolesoCategories.PERSONAL_GROWTH,
//     type: TestType.NUMBERS,
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `Sevgan insoningiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FAMILY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `Atrofingizdagi odamlarning Sog'liqni saqlash sohasida qanchalik rivojlanganligini 1 dan 10 gacha aniqlang`,
//     category: KolesoCategories.FRIENDS_AROUND,
//     type: TestType.NUMBERS,
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `O'zingizni qanchalik intizomli deb hisoblaysiz, 1 dan 10 gacha aniqlang? (bu erda 0 men har doim muddatlar va majburiyatlarni e'tiborsiz qoldiraman va 10 nima bo'lishidan qat'i nazar, men hamma narsani o'z vaqtida bajaraman)`,
//     category: KolesoCategories.VALUE,
//     type: TestType.NUMBERS,
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `Daromadingizning 100 foizini turli manbalarga taqsimlang.`,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     type: TestType.MULTIPLE_ANSWER,
//     variants: [
//       {
//         answer: `1-sonli ish joyidan ish haqi`,
//         value: 2,
//       },
//       {
//         answer: `2-sonli ish joyidan ish haqi`,
//         value: 2,
//       },
//       {
//         answer: `Yarim-stavkali ish, noto'la ish`,
//         value: 2,
//       },
//       {
//         answer: `Bank depozitlari`,
//         value: 2,
//       },
//       {
//         answer: `Biznes № 1`,
//         value: 3,
//       },
//       {
//         answer: `Biznes № 2`,
//         value: 3,
//       },
//       {
//         answer: `Ko'chmas mulkni / mulkni ijaraga berish`,
//         value: 2,
//       },
//       {
//         answer: `Daromad manbalari yo'q`,
//         value: 2,
//       },
//       {
//         answer: `Boshqa`,
//         value: 2,
//       },
//     ],
//   },
//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `Siz shahsiy moliyaviy hisobotlarni yuritasizmi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.FINANCIAL_STABILITY,
//     variants: [
//       {
//         answer: `Ha`,
//         value: 10,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `Sizning sevimli mashg'ulotingiz bormi?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.HOBBY_AND_INTERESTS,
//     variants: [
//       {
//         answer: `Ha, men buni muntazam ravishda bajaraman`,
//         value: 10,
//       },
//       {
//         answer: `Ha, imkonim bo'lganda bajaraman`,
//         value: 7,
//       },
//       {
//         answer: `Ha, men buni kamdan-kam bajaraman`,
//         value: 4,
//       },
//       {
//         answer: `Yo'q`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `Kuniga necha soat uxlaysiz? Odatda uyqudan keyin o'zingizni qanday his qilasiz?`,
//     type: TestType.SINGLE_ANSWER,
//     category: KolesoCategories.SPORT_HEALTH,
//     variants: [
//       {
//         answer: `Men 5-8 soat uxlayman va hali ham yaxshi his qilaman`,
//         value: 10,
//       },
//       {
//         answer: `Agar 5-8 soat uxlasam va hali ham yomon his qilsam`,
//         value: 8,
//       },
//       {
//         answer: `Men 9-12 soat uxlayman va o'zimni yaxshi his qilaman`,
//         value: 6,
//       },
//       {
//         answer: `9-12 soat va hali ham yomon his`,
//         value: 4,
//       },
//       {
//         answer: `5 soatdan kamroq vaqt va men o'zimni yaxshi his qilyapman`,
//         value: 2,
//       },
//       {
//         answer: `5 soatdan kam va o'zingizni yaxshi his qilmaysiz`,
//         value: 1,
//       },
//     ],
//   },

//   {
//     photo:
//       'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
//     question: `1 dan 10 gacha stressga chidamlilik darajasini, o'zingizni nazorat qilish va stressli sharoitlarda his-tuyg'ularingizni boshqarish qobiliyatini aniqlang.`,
//     category: KolesoCategories.CAREER,
//     type: TestType.NUMBERS,
//   },
// ];

export const TestKoleso = [
  {
    photo:
      'AgACAgIAAxkBAAI8WWZ-W-fEjnXuHVPGIx8QO8-DQS7GAAIR3DEbVwn5Sy7GgzJ7jEUuAQADAgADeQADNQQ',
    question: `1. Rivojlanishni, yangi narsalarni o'rganishni qanchalik yaxshi ko'rishingizni aniqlang??`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8W2Z-W-oMXoPIvNNtp0kYhCG-lrCfAAIS3DEbVwn5S3QWJT9JBI5EAQADAgADeQADNQQ',
    question: `2. O'zingizga bo'lgan ishonchni 10 ball bilan baholang. (bu erda 10 har qanday vaziyatda ishonch, hatto notanish ham)`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8ZWZ-XVjtS1QQKoGiIB1wpWaN9fjbAAIj3DEbVwn5S2hBPBLq83lrAQADAgADeQADNQQ',
    question: `3. O'z oldingizga qanchalik  Maqsadlarni yozib qo'yasiz va ularni  amalga oshirasiz. (1 - Men hech qachon maqsad qo'ymayman yoki hech narsani rejalashtirmayman, men o'z-o'zidan harakat qilaman. 10 - men muntazam ravishda o'zimga maqsadlar qo'yaman, hamma narsani rejalashtiraman va har doim rejalashtirgan narsamga erishaman)`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8eWZ-XxMvQI4IqUSBje3T1TL3WBBvAAI73DEbVwn5Syuyb7euuY1KAQADAgADeQADNQQ',
    question: `4. Odamlarni qanchalik tushunasiz? 1 - yomon, ular ko'pincha aldashadi. 10 - Men har doim uning harakatlarini aniq aniqlayman va oldindan aytib bera olaman`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8e2Z-XxaNeSC6BuR80GwvsAo8g6LQAAI83DEbVwn5S4lKQ-XBig-iAQADAgADeQADNQQ',
    question: `5. Sizning muloqot qobiliyatingiz qanchalik rivojlangan? 1 - Menga odamlar bilan umumiy til topish qiyin 10 - Men osongina yangi tanishlar orttiraman, suhbatdoshimni faol tinglayman, o'zim haqimda yaxshi taassurot qoldiraman`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8f2Z-XxzB9f-4iyWnOBlNMaGO-xPmAAI-3DEbVwn5S7-SERBe-sBhAQADAgADeQADNQQ',
    question: `6. O'zingizni qanchalik faol deb hisoblaysiz?`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8gWZ-Xx_8jTQczo0GmaDzMPeVqoR7AAI_3DEbVwn5S8MqsUBMppE1AQADAgADeQADNQQ',
    question: `7. Odatda vaziyatga qanchalik mos kiyinasiz va o'zingizni qulay va ishonchli his qilasizmi?`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8iWZ-Xyxpgtq1fHYBhdY4b2AlPiJ2AAJD3DEbVwn5Swh1fDyacabfAQADAgADeQADNQQ',
    question: `8. San'atga bo'lgan munosabatingizni baholang (san'atga muhabbat, san'atning har qanday turiga jalb qilish). 1 - Menimcha, san'at keraksiz narsa, men san'atni yoqtirmayman 10 - Men san'atni yaxshi ko'raman, men o'zim muntazam ravishda san'at bilan shug'ullanaman.`,
    category: KolesoCategories.PERSONAL_GROWTH,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8jWZ-XzFyUEhEtPIyMky8ysj66vcTAAJF3DEbVwn5SziWuoP-W-4NAQADAgADeQADNQQ',
    question: `9. Siz kechirishni va kechirim so'rashni bilasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.PERSONAL_GROWTH,
    variants: [
      {
        answer: `Ha, men kechirishni va kechirim so'rashni bilaman`,
        value: 10,
      },
      {
        answer: `Men kechirishni bilaman, lekin o'zim kechirim so'ray olmayman.`,
        value: 6,
      },
      {
        answer: `Men kechirishni bilmayman, lekin o'zim kechirim so'rashim mumkin`,
        value: 7,
      },
      {
        answer: `Men kechirishni va kechirim so'rashni bilmayman`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8kWZ-YZMUDuhWRwOzOdCQrVDLqkJ6AAJG3DEbVwn5S13vf_1I-0FXAQADAgADeQADNQQ',
    question: `10. O'zimni sevaman va hurmat qilaman deb ayta olasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.PERSONAL_GROWTH,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'qdan ko'ra ko'proq ha`,
        value: 8,
      },
      {
        answer: `Bazan `,
        value: 5,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8TWZ-WufmLt5IvSOyQUfVjwK_BakXAAIJ3DEbVwn5S0fhLIefmy99AQADAgADeQADNQQ',
    question: `1. Sevgan insoningiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FAMILY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8T2Z-W9hfpmGNPG_blomEmMSXa_evAAIM3DEbVwn5S2vSO06K9t2MAQADAgADeQADNQQ',
    question: `2. Oilangizga g'amxo'rlik, mehr-muhabbat, qulay va xavfsiz sharoitlar bilan ta'minlaysizmi, ularga qadrli narsalarni berasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FAMILY,
    variants: [
      {
        answer: `Ha, men doimo oilamni qulay va xavfsiz joyda yashashiga intilaman, oila a’zolarim bilan muntazam ravishda vaqt o‘tkazaman.`,
        value: 10,
      },
      {
        answer: `Ha, men oilam qulay va xavfsiz joyda yashashga intilaman, lekin oilam bilan kam vaqt o'tkazaman.`,
        value: 8,
      },
      {
        answer: `Biz mavjud sharoitda yashashga majbur bo'lib, kamdan-kam hollarda oilaga etarlicha vaqt, e'tibor beraman;`,
        value: 5,
      },
      {
        answer: `Yo'q, men yordam berolmayman va harakat qilmayman`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8UWZ-W9uhInwKpb8EyHH0g_lXGi5fAAIN3DEbVwn5Sw5E6w9zSUNQAQADAgADeQADNQQ',
    question: `3. Oila a'zolaringiz bilan qanchalik yaqin va ishonchli munosabatlarga ega deb o'ylaysiz?`,
    category: KolesoCategories.FAMILY,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8U2Z-W94XVdYwm3ggnLGYZbcsRJa2AAIO3DEbVwn5S-PW-ifQgasgAQADAgADeQADNQQ',
    question: `4. Sizning hayotiy qadriyatlaringiz umir yo'ldoshingiz bilan qanchalik mos keladi deb o'ylaysiz? 1 dan 10 gacha baholang, bu erda 1 - qadriyatlar qarama-qarshi va 10 - uyg'unlik, aksariyat qadriyatlar va qarashlarning mos kelishi.`,
    category: KolesoCategories.FAMILY,
    type: TestType.NUMBERS,
  },

  {
    photo:
      'AgACAgIAAxkBAAI8i2Z-Xy7CzEAabO93fGWGHUE8TNvOAAJE3DEbVwn5S6mc0znUqxSaAQADAgADeQADNQQ',
    question: `5. Sizning oilaviy shajarangiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FAMILY,
    variants: [
      {
        answer: `Ha, 5 avlod`,
        value: 6,
      },
      {
        answer: `Ha,  7  va undan yuqori`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8aWZ-XV8rd-BtmlT7Dab9rG6ZGQy3AAIl3DEbVwn5S4ZFKWEDpRADAQADAgADeQADNQQ',
    question: `1. Atrofingizdagi odamlarning Sog'liqni saqlash sohasida qanchalik rivojlangan?`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8a2Z-XWJVqHrqyx7RDg7Sx7SHjzyXAAIm3DEbVwn5S-EqVcE5g_sBAQADAgADeQADNQQ',
    question: `2. Atrofingizdagi odamlar moliya sohasida qanchalik rivojlangan?`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8bWZ-XWanyfMHicYlKJl7HVKEcnYBAAIn3DEbVwn5S-_R3U07zFY0AQADAgADeQADNQQ',
    question: `3. Atrofingizdagi odamlarning Dam olish, qiziqarli mashg'ulotlar bilan qanchalik faol rivojlangan?`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8b2Z-XW7rC-bSWJugNCakT8xfVAxiAAIo3DEbVwn5S0yMRJVOqUflAQADAgADeQADNQQ',
    question: `4. Atrofingizdagi odamlarning oila va munosabatlarida qanchalik rivojlanganligini aniqlang.`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8cWZ-XXGs3OIn4exSi5VCBofwewhHAAIp3DEbVwn5S6ZMw6krZZoTAQADAgADeQADNQQ',
    question: `5. Atrofingizdagi odamlarning Karyera sohasida qanchalik rivojlanganligini aniqlang`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8c2Z-XXVKjVidtEeGscbu5Nhdcy2VAAIr3DEbVwn5S2MYwLJekrS1AQADAgADeQADNQQ',
    question: `6. Atrofingizdagi odamlarning shaxsiy o'sish sohasida qanchalik rivojlanganligini aniqlang`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8dWZ-XXn6YF07hYerRAx_U0GAjVBrAAIs3DEbVwn5S6ud_7ePfZLXAQADAgADeQADNQQ',
    question: `7. Atrofingizdagi odamlarning muloqotqilish qobiliyati qanchalik rivojlanganligini aniqlang`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8d2Z-XXwGfUkhOa4HHSzcpWd1ylB0AAIt3DEbVwn5S0lWQbm-9-J6AQADAgADeQADNQQ',
    question: `8. Atrofingizdagi odamlarning Ma’naviyati qanchalik rivojlanganligini aniqlang`,
    category: KolesoCategories.FRIENDS_AROUND,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8g2Z-XyKUpKYlXbIZhxUZtDgUFD9vAAJA3DEbVwn5SwKXr-Qil_2-AQADAgADeQADNQQ',
    question: `9. O'zingizni odamlarni sevadigan odam deb hisoblaysizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FRIENDS_AROUND,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8h2Z-XyfvRVkSKwm8k0I4FN5sllFEAAJC3DEbVwn5S_poFRY9jNcOAQADAgADeQADNQQ',
    question: `10. Siz o'zingizni boshqa odamlar, tabiat, koinot bilan bog'liq bo'lgan kattaroq narsaning bir qismi deb hisoblaysizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FRIENDS_AROUND,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8I2Z-TxGwH6gN9ip5ONl0kLDDL6ZPAALS2zEbVwn5S2Vd5B13ttW_AQADAgADeQADNQQ',
    question: `1. O'zingizni qanchalik intizomli deb hisoblaysiz, 1 dan 10 gacha aniqlang? (bu erda 1 men har doim muddatlar va majburiyatlarni e'tiborsiz qoldiraman va 10 nima bo'lishidan qat'i nazar, men hamma narsani o'z vaqtida bajaraman)`,
    category: KolesoCategories.VALUE,
    type: TestType.NUMBERS,
  },

  {
    photo:
      'AgACAgIAAxkBAAI8K2Z-Wcxy-WL3TOTxmauh82wyMDaTAALz2zEbVwn5S9Zs6y-eQ0KpAQADAgADeQADNQQ',
    question: `2. Yomon odatlaringiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.VALUE,
    variants: [
      {
        answer: `Ha`,
        value: 1,
      },
      {
        answer: `Yo'q`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8XWZ-W-2C6LZjOecZDVZt9P1dE-8AAxPcMRtXCflL4UOFtBV3RzcBAAMCAAN5AAM1BA',
    question: `3. Hayotdagi qadriyatlaringizni bilasizmi, siz uchun nima eng qimmatli va muhim?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.VALUE,
    variants: [
      {
        answer: `Yo'q`,
        value: 1,
      },
      {
        answer: `Men bilaman deb o'ylayman, lekin men bu haqda jiddiy o'ylamaganman`,
        value: 5,
      },
      {
        answer: `Ha, men bilaman, ularni yozib olib muntazam ravishda amal qilaman.`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8vmZ-Y4A7HaHHg_H9ISZwRC1paQAB6gACPtwxG1cJ-Uu_khEQXvrAYQEAAwIAA3kAAzUE',
    question: `4. Sizni o'rganadigan va rivojlantiradigan ustoz, bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.VALUE,
    variants: [
      {
        answer: `Ha, men Ustozim bilan muntazam muloqot qilaman`,
        value: 8,
      },
      {
        answer: `Ha, mening bir nechta murabbiylarim bor, ular bilan muntazam muloqot qilaman`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
      {
        answer: `Menda o'rnak oladigan odam bor, uni kuzatishga harakat qilaman.`,
        value: 5,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8YWZ-W_Vz4bvxEL6ODQ4W57q2CSb5AAIV3DEbVwn5S5TSu1GSN_uGAQADAgADeQADNQQ',
    question: `5. Siz xayriya, ko'ngillilik yoki ijtimoiy tadbirlarda qatnashib turasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.VALUE,
    variants: [
      {
        answer: `Ha, men faol ishtirok etaman.`,
        value: 10,
      },
      {
        answer: `Kamdan-kam hollarda, vaqti-vaqti bilan.`,
        value: 5,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8Z2Z-XVuydXgN11f_InCQtxLhDB9bAAIk3DEbVwn5S4Kuu0pNT9M5AQADAgADeQADNQQ',
    question: `6. Siz boshqalarga o'rgatasizmi, o'z tajribangizni va bilimingizni uzatasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.VALUE,
    variants: [
      {
        answer: `Ha, har doim.`,
        value: 10,
      },
      {
        answer: `Kamdan-kam hollarda, vaqti-vaqti bilan.`,
        value: 7,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8fWZ-Xxnn2PuiO1DE9S3zDEU_FNnlAAI93DEbVwn5S3_EvlZYq3IDAQADAgADeQADNQQ',
    question: `7. Boshqa odamlarga qanchalik hamdard bo'lishingiz mumkinligini aniqlang.`,
    category: KolesoCategories.VALUE,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8hWZ-XyRUOV_bRVfB2dXMrvCvCcv0AAJB3DEbVwn5SyQNj3ftmqm4AQADAgADeQADNQQ',
    question: `8. Sizning hayot missiyangiz, maqsadingiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.VALUE,
    variants: [
      {
        answer: `Ha, men shaxsiy vazifamni aniq bilaman`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8MWZ-WdcWHBRT6-tnY7r2QMeuKZAyAAL22zEbVwn5S9Z2a6VTc1L2AQADAgADeQADNQQ',
    question: `1. Daromadingizning 100 foizini turli manbalarga taqsimlang.`,
    category: KolesoCategories.FINANCIAL_STABILITY,
    type: TestType.MULTIPLE_ANSWER,
    variants: [
      {
        answer: `1-sonli ish joyidan ish haqi`,
        value: 2,
      },
      {
        answer: `2-sonli ish joyidan ish haqi`,
        value: 2,
      },
      {
        answer: `Yarim-stavkali ish, noto'la ish`,
        value: 2,
      },
      {
        answer: `Bank depozitlari`,
        value: 2,
      },
      {
        answer: `Biznes № 1`,
        value: 3,
      },
      {
        answer: `Biznes № 2`,
        value: 3,
      },
      {
        answer: `Ko'chmas mulkni / mulkni ijaraga berish`,
        value: 2,
      },
      {
        answer: `Daromad manbalarim yo'q`,
        value: 2,
      },
      {
        answer: `Boshqa`,
        value: 2,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8M2Z-WdumUGL-h_W0qszxtJjwq5k7AAL32zEbVwn5S2rMCo72STMfAQADAgADeQADNQQ',
    question: `2. Siz shahsiy moliyaviy hisobotlarni yuritasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8NWZ-Wd8NK8OKvwPaAAEbcL6mwwjGZgAC-NsxG1cJ-UsffSqosZPq-AEAAwIAA3kAAzUE',
    question: `3. Byudjetingizni rejalashtiryapsizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: ` Yo'q`,
        value: 1,
      },
      {
        answer: `Ha, bir oyga`,
        value: 3,
      },
      {
        answer: `Ha, olti oyga`,
        value: 6,
      },
      {
        answer: `Ha, bir yil yoki undan ko'proq`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8N2Z-WeKYuFeXuEtj_Xz9oCencVXCAAL52zEbVwn5S0djYcR6AhEoAQADAgADeQADNQQ',
    question: `4. Moliyaviy yangiliklardan xabardormisiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Kamdan-kam hollarda, oyiga bir marta`,
        value: 3,
      },
      {
        answer: `Kamdan-kam hollarda, har ikki haftada bir marta`,
        value: 6,
      },
      {
        answer: `Muntazam ravishda, har hafta`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8OWZ-WeXjn1p1vY-AaCG4FHDZP15dAAL62zEbVwn5S9NE82-zmDvGAQADAgADeQADNQQ',
    question: `5. Sizning yaqin kelajakda yoki uzoq muddatli moliyaviy maqsadlaringiz bormi (ko'chmas mulk, avtomobil sotib olish, ta'lim, sayohat, davolanish va h.k.)?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8O2Z-WssZAWj4Mtd8AAGCM7xbepo8fgAD3DEbVwn5S7LHwlYsSbcOAQADAgADeQADNQQ',
    question: `6. Jamg'arma uchun alohida hisobingiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8P2Z-WtEAASEOiRu_v3W_kd6FirhErgACAtwxG1cJ-Ut7s29fiyRBygEAAwIAA3kAAzUE',
    question: `7. Sizning daromadingiz oylik xarajatlaringizdan yuqorimi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha, daromad xarajatlardan yuqori, lekin muntazam ravishda tejashni  iloji yo'q.`,
        value: 7,
      },
      {
        answer: `Ha, daromad xarajatlardan yuqori va muntazam ravishda 10% yoki undan ko'proq tejashga iloji bor.`,
        value: 10,
      },
      {
        answer: `Xarajatlar daromaddan ko'p , muntazam ravishda qarz olishingiz kerak bo'ladi.`,
        value: 1,
      },
      {
        answer: `Xarajatlar daromaddan ko'p , muntazam ravishda jamg'armani sarflash kerak bo'ladi.`,
        value: 5,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8QWZ-WtT_VwaHFJMDe-ssR67khAEXAAID3DEbVwn5S2eT9RYxD3P4AQADAgADeQADNQQ',
    question: `8. Qarzlaringiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Foizsiz qarzlar mavjud`,
        value: 2,
      },
      {
        answer: `Foizlar bilan qarzlar mavjud`,
        value: 1,
      },
      {
        answer: `Rivojlanayotgan va potentsial daromad keltiradigan biznes uchun qulay foiz stavkasida kredit olingan.`,
        value: 6,
      },
      {
        answer: `Xarajatlar daromaddan ko'p , muntazam ravishda jamg'armani sarflash kerak bo'ladi.  Narxning oshishi mumkin bo'lgan ko'chmas mulkni sotib olish uchun qulay foiz stavkasida kredit mavjud.`,
        value: 7,
      },
      {
        answer: `Halol nasiyz krediti mavjud.`,
        value: 3,
      },
      {
        answer: `Qarzlar yo'q`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8Q2Z-WteThYBKAY9Xt-xZbPt-RBjXAAIE3DEbVwn5S5wwZck-hMXkAQADAgADeQADNQQ',
    question: `9. Mavjud mablag'laringizni moliyaviy maqsadlar uchun taqsimlaysizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8RWZ-WtqB-swRjgTf1ghcDeRmB2tOAAIF3DEbVwn5S7UKA-dVwZBgAQADAgADeQADNQQ',
    question: `10. Sizning hayotingizni 6 oy davomida qoplash uchun etarli moliyaviy yostiq bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.FINANCIAL_STABILITY,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8E2Z-TZx4XXBRFKVWg-SpLrjYsdCIAALD2zEbVwn5S35BUduXLGgkAQADAgADeQADNQQ',
    question: `1. O'tgan oydagi kayfiyatingizni aniqlang. (bu erda 0 salbiy va 10 ijobiy)`,
    category: KolesoCategories.HOBBY_AND_INTERESTS,
    type: TestType.NUMBERS,
  },

  {
    photo:
      'AgACAgIAAxkBAAI8FWZ-TlDzVThBagbG0hWLBo30HrDuAALK2zEbVwn5S0qWt80-sBMjAQADAgADeQADNQQ',
    question: `2. Sizning sevimli mashg'ulotingiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.HOBBY_AND_INTERESTS,
    variants: [
      {
        answer: `Ha, men buni muntazam ravishda bajaraman`,
        value: 10,
      },
      {
        answer: `Ha, imkonim bo'lganda bajaraman`,
        value: 7,
      },
      {
        answer: `Ha, men buni kamdan-kam bajaraman`,
        value: 4,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8F2Z-TmSBY-BX1FwtqSHAjaYUUVBoAALL2zEbVwn5S_UwxYEPzjq8AQADAgADeQADNQQ',
    question: `3. Dam olishda bo'lganingizda, ish yoki boshqa tashvishlar haqida o'ylaysizmi yoki umuman aloqangiz uzilib, ta'tildan zavqlanasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.HOBBY_AND_INTERESTS,
    variants: [
      {
        answer: `Men ish va boshqa tashvishlar haqida o'ylayman`,
        value: 1,
      },
      {
        answer: `Men dam olishni ish bilan birlashtirishga harakat qilaman`,
        value: 5,
      },
      {
        answer: `Men tashvishlardan butunlay uzilib, ta'tildan zavqlanaman`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8GWZ-TnNE64hvfPzXKa0jHO9llE5yAALM2zEbVwn5S0ZFG2TM9HtgAQADAgADeQADNQQ',
    question: `4. Ta'tilingizni oldindan rejalashtirasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.HOBBY_AND_INTERESTS,
    variants: [
      {
        answer: `Ha, bir yil oldin`,
        value: 10,
      },
      {
        answer: `Ha, olti oy oldin`,
        value: 7,
      },
      {
        answer: `Ha, bir oy oldin`,
        value: 4,
      },
      {
        answer: `Yo'q, men buni rejalashtirmayman`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8G2Z-Tn6EZvOjn_hjdulRCuItzHZvAALN2zEbVwn5S1ugES-FvbLwAQADAgADeAADNQQ',
    question: `5. Sizningcha, toza havoda, tabiatda yetarlicha vaqt o'tkazasizmi?`,
    category: KolesoCategories.HOBBY_AND_INTERESTS,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8HWZ-TpHIVmqJJlVy6iRG5asmYFB6AALP2zEbVwn5S25zx7Kb7jywAQADAgADeQADNQQ',
    question: `1. Oziqlanish holatingizga mos keladigan variantni tanlang.`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.SPORT_HEALTH,
    variants: [
      {
        answer: `Men ushbu sohadagi mutaxassis bilan “to'g'ri ovqatlanish” haqida shaxsiy dasturga egaman va ushbu dasturga muvofiq ovqatlanaman`,
        value: 10,
      },
      {
        answer: `Men mustaqil ravishda “to'g'ri ovqatlanish” bo'yicha adabiyot va ilovalarni o'rganib chiqdim, o'zim uchun dastur tuzdim va unga muvofiq ovqatlanaman`,
        value: 7,
      },
      {
        answer: `Dastur men uchun ishlab chiqilgan, lekin men unga amal qilmayman`,
        value: 4,
      },
      {
        answer: `Men bu xaqida bilmayman, men xohlagancha ovqatlanaman`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8H2Z-TqrcKkvzWHDUsHWja_ZC3fEBAALQ2zEbVwn5SxO9GMmemtHAAQADAgADeQADNQQ',
    question: `2. Kuniga necha soat uxlaysiz? Odatda uyqudan keyin o'zingizni qanday his qilasiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.SPORT_HEALTH,
    variants: [
      {
        answer: `Men 5-8 soat uxlayman va yaxshi his qilaman`,
        value: 10,
      },
      {
        answer: `Men 5-8 soat uxlasam men o'zimni yomon his qilaman`,
        value: 8,
      },
      {
        answer: `Men 9-12 soat uxlayman va o'zimni yaxshi his qilaman`,
        value: 6,
      },
      {
        answer: `9-12 soat uxlayman va o'zimni yomon his qilaman`,
        value: 4,
      },
      {
        answer: `5 soatdan kamroq vaqt uxlayman va men o'zimni yaxshi his qilyapman`,
        value: 2,
      },
      {
        answer: `5 soatdan kam va o'zingizni yaxshi his qilmaysiz`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8IWZ-TtJzXtQhWiMOE1wpEvIooQwJAALR2zEbVwn5Sw3fT-sm9-XDAQADAgADeQADNQQ',
    question: `3. Jismoniy faollik holatiga mos keladigan variantni tanlang.`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.SPORT_HEALTH,
    variants: [
      {
        answer: `Men fitness murabbiy bilan shaxsiy jismoniy tarbiya dasturi orqali ishlayman va ushbu dasturni muntazam ravishda bajarib boraman.`,
        value: 10,
      },
      {
        answer: `Men bu masalani mustaqil o'rganib chiqdim va o'zim uchun jismoniy mashqlar dasturini tuzdim va unga amal qildim`,
        value: 7,
      },
      {
        answer: `Men tayyor mobil dasturni topdim va ushbu dasturni muntazam ravishda mashq qilaman.`,
        value: 5,
      },
      {
        answer: `Men uchun yaxshi ishlab chiqilgan dastur bor, lekin men unga amal qilmayman`,
        value: 3,
      },
      {
        answer: `Men bu mavzuga qiziqmaganman, ko'p jismoniy faolliksiz yashayman`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8KWZ-Wcp4pteXuPMTRTZuJVsgLkWGAALy2zEbVwn5SzxgV39Qc3Y4AQADAgADeQADNQQ',
    question: `4. Surunkali kasalliklaringiz bormi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.SPORT_HEALTH,
    variants: [
      {
        answer: `Ha`,
        value: 5,
      },
      {
        answer: `Yo'q`,
        value: 10,
      },
      {
        answer: `Bilmayman`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8LWZ-WdCit79YPzJStTF1pV7hTuDRAAL02zEbVwn5S88tfCHHJA_wAQADAgADeQADNQQ',
    question: `5. So'nggi 6 oy ichida siz butun tanangizning holatini tekshirish - diagnostikadan o'tkazdingizmi (check-up)?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.SPORT_HEALTH,
    variants: [
      {
        answer: `Ha`,
        value: 10,
      },
      {
        answer: `Yo'q`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8JWZ-Tzxl5pCtwnK9p_24QL-TSubWAALT2zEbVwn5S6dD4h7xyWJ6AQADAgADeQADNQQ',
    question: `1. O'z oldingizga qo'ygan maqsadlarga erishish uchun ichki motivatsiyangiz bormi?`,
    category: KolesoCategories.CAREER,
    type: TestType.NUMBERS,
  },
  {
    photo:
      'AgACAgIAAxkBAAI8J2Z-WcfD0MSf8sYY24UznCK_TecBAALx2zEbVwn5S69BayW6_6KvAQADAgADeQADNQQ',
    question: `2. Stressga chidamlilik darajangizni, o'zingizni nazorat qilish va stressli sharoitlarda his-tuyg'ularingizni boshqarish qobiliyatini belgilang.`,
    category: KolesoCategories.CAREER,
    type: TestType.NUMBERS,
  },

  {
    photo:
      'AgACAgIAAxkBAAI8L2Z-WdQPoke9x-YvsUIdSx3ed2sTAAL12zEbVwn5Syw-WtWgFklQAQADAgADeQADNQQ',
    question: `3. Analitik fikrlash qanchalik rivojlanganligini belgilang?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.CAREER,
    variants: [
      {
        answer: `Qaror qabul qilish yoki fikrni shakllantirishdan oldin men har doim ma'lumotni turli tomonlardan tahlil qilaman, savollar beraman va ma'lumotlar manbasini tekshiraman.`,
        value: 10,
      },
      {
        answer: `Qaror qabul qilish yoki fikrni shakllantirishdan oldin men ba'zan ma'lumotni tahlil qilaman, savollar beraman va ma'lumotlar manbasini tekshiraman.`,
        value: 6,
      },
      {
        answer: `Men odatda ma'lumot manbasini tekshirmayman, savol bermayman va odamga ko'proq ishonchga asoslangan qarorlar qabul qilaman.`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8PWZ-Ws7kT8CMWhcNINg0Rd_AppsbAAIB3DEbVwn5S98wzYWTcNkeAQADAgADeQADNQQ',
    question: `4. Tasavvur qiling-a, sizda hayotingizni yaxshilash uchun imkoniyat bor. Odatda nima qilasiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.CAREER,
    variants: [
      {
        answer: `Men o'tib ketaman, imkoniyatlardan foydalanmayman, xavf va o'zgarishlarni yoqtirmayman.`,
        value: 1,
      },
      {
        answer: ` Men odatda imkoniyatlardan unumli foydalanishga harakat qilaman`,
        value: 6,
      },
      {
        answer: ` Menimcha, uzoq vaqt shubhalanaman va oxir-oqibat imkoniyatlardan foydalanmayman.`,
        value: 3,
      },
      {
        answer: `Men tahlil qilaman, maslahatlashaman, hamma narsani o'lchab ko'raman va agar kerak bo'lsa, imkoniyatdan foydalanaman`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8R2Z-Wt2UaZ4LITtpYdtabY3GQdZSAAIG3DEbVwn5S6ug7XrA25FVAQADAgADeQADNQQ',
    question: `5. Odatda mojarolarni qanday hal qilasiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.CAREER,
    variants: [
      {
        answer: `Men mojaroni madaniyatli va xotirjam tarzda hal qilishga harakat qilaman.`,
        value: 10,
      },
      {
        answer: `Men murosa topishga harakat qilaman`,
        value: 7,
      },
      {
        answer: `Men uchun asosiy narsa har qanday vosita bilan baxsda g'alaba qozonishdir.`,
        value: 5,
      },
      {
        answer: `Men hatto o'zimning zararimga ham taslim bo'laman.`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8SWZ-WuAEYN7wwqCO2i7I8LjfC5hBAAIH3DEbVwn5Sytbv34aWkPFAQADAgADeQADNQQ',
    question: `6. Odatda, agar biror narsaga va'da bersangiz, buni qilasizmi yoki nima uchun bu ish bajarmaganingizga bahona topasizmi?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.CAREER,
    variants: [
      {
        answer: `Ba'zan bahona topaman`,
        value: 6,
      },
      {
        answer: `Men deyarli har doim nima bo'lishidan qat'iy nazar va'dalarimni bajaraman.`,
        value: 10,
      },
      {
        answer: `Men ko'pincha nima uchun bu ishni bajarmaganimga bahona topaman.`,
        value: 1,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8S2Z-WuTDHHv6cynaOOiFy4j0_Sx3AAII3DEbVwn5SzIx3F5tsEAGAQADAgADeQADNQQ',
    question: `7. Agar xato qilsangiz, odatda nima qilasiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.CAREER,
    variants: [
      {
        answer: `Men xatoimni tan olaman`,
        value: 7,
      },
      {
        answer: `Men xatoimni tan olmayman`,
        value: 1,
      },
      {
        answer: `Men xatoni tan olaman, uni tuzataman va kelajakda takrorlamaslik uchun xulosa chiqaraman.`,
        value: 10,
      },
    ],
  },
  {
    photo:
      'AgACAgIAAxkBAAI8VWZ-W-HYaDU6osVX6bm4F8V2dKtiAAIP3DEbVwn5S8oJhcrBpr9SAQADAgADeQADNQQ',
    question: `8. Odatda ishingizni qanday bajarasiz?`,
    type: TestType.SINGLE_ANSWER,
    category: KolesoCategories.CAREER,
    variants: [
      {
        answer: `Men qancha kerak bo'lsa, shuncha qilaman, lekin ortiq emas`,
        value: 10,
      },
      {
        answer: `Iloji bo'lsa ishlamaslikka harakat qilaman`,
        value: 6,
      },
      {
        answer: `Men o'z ishimni mukammal bajaraman, ishlarni oxirigacha ko'raman va qanday qilib yaxshiroq qilishim haqida doimo o'ylayman.`,
        value: 1,
      },
      {
        answer: ` Men doimo ortiqcha ishlayapman, shuning uchun munosabatlarda, sog'lig'ida va hokazolarda muammolar mavjud.`,
        value: 1,
      },
    ],
  },

  {
    photo:
      'AgACAgIAAxkBAAI8V2Z-W-QFpfdlXzZYIkwfMDS8wyAeAAIQ3DEbVwn5S16UVZHnEwddAQADAgADeQADNQQ',
    question: `9. Siz qilayotgan ishingizdan qanchalik zavqlanasiz?`,
    category: KolesoCategories.CAREER,
    type: TestType.NUMBERS,
  },
];
