export const dictionaries = {
  uk: {
    locale: "uk",
    // Header
    header: {
      features: "Можливості",
      pricing: "Тарифи",
      faq: "FAQ",
      getStarted: "Почати",
    },
    // Hero
    hero: {
      headline: "Платформа лояльності, створена для вас",
      headlinePrefix: "",
      headlineSuffix: " створені для вас",
      rotatingWords: ["Штамп-картки", "Бонуси", "Знижки", "Купони"],
      subtitle:
        "Все цифрове, все автоматичне, все в телефоні клієнта",
      ctaPrimary: "Почати безкоштовно",
      ctaSecondary: "Як це працює",
      badges: {
        googleWallet: "Google Wallet",
        appleWallet: "Apple Wallet",
        qr: "QR-коди",
        app: "Мобільний додаток",
        pos: "POS інтеграція",
      },
    },
    // Problem
    problem: {
      title: "Лояльність, яка дійсно працює",
      cards: [
        {
          title: "Завжди в кишені",
          description:
            "Цифрові картки живуть у телефоні клієнта. Жодних загублених паперових карток.",
        },
        {
          title: "Знайте своїх клієнтів",
          description:
            "Відстежуйте візити, вподобання та витрати в реальному часі.",
        },
        {
          title: "Повна автоматизація",
          description:
            "Жодних ручних штампів, підрахунків чи паперів. Тільки результат.",
        },
        {
          title: "Повертайте клієнтів",
          description:
            "Push-сповіщення та персональні пропозиції, що повертають клієнтів знову.",
        },
      ],
    },
    // Loyalty types
    loyaltyTypes: {
      title: "Одна платформа. Всі типи лояльності",
      types: [
        {
          title: "Штамп-картки",
          description:
            "Збирай штампи. Отримуй винагороди. Все в Google Wallet.",
        },
        {
          title: "Кешбек та бали",
          description:
            "Гнучкі бали, що змушують клієнтів повертатися.",
        },
        {
          title: "Рівні знижок",
          description:
            "Чим більше візитів, тим більша знижка.",
        },
        {
          title: "Промокоди",
          description:
            "Відстежуй кожну кампанію. Вимірюй кожного інфлюенсера.",
        },
        {
          title: "Подарункові сертифікати",
          description:
            "Цифрові подарунки, якими діляться в один дотик.",
        },
        {
          title: "Розумні купони",
          description:
            "Подарунки на день народження. Сюрпризи. Персональні для кожного.",
        },
      ],
    },
    // Features
    features: {
      title: "Все, що потрібно, вже вбудовано",
      items: [
        {
          title: "Готово для гаманця",
          description:
            "Картки одразу в Google Wallet та Apple Wallet. Без зайвих кроків.",
          wide: true,
        },
        {
          title: "Push-сповіщення",
          description:
            "Досягайте клієнтів у потрібний момент.",
        },
        {
          title: "QR-коди",
          description:
            "Одне сканування. Миттєва ідентифікація.",
        },
        {
          title: "Аналітика наживо",
          description:
            "Бачте, що відбувається на всіх локаціях прямо зараз.",
          wide: true,
        },
        {
          title: "POS інтеграція",
          description:
            "Підключається до систем, які ви вже використовуєте.",
        },
        {
          title: "Мультилокації",
          description:
            "Всі ваші заклади. Одна панель.",
        },
        {
          title: "Управління командою",
          description:
            "Дайте команді потрібний рівень доступу.",
        },
        {
          title: "Ваш бренд",
          description:
            "Власні кольори, логотип та дизайн карток.",
        },
        {
          title: "Повний API",
          description:
            "Будуйте будь-що поверх Rimbo.",
          wide: true,
        },
      ],
    },
    // How it works
    howItWorks: {
      title: "Три кроки до запуску",
      steps: [
        {
          step: "1",
          title: "Поговоріть з нами",
          description:
            "Замовте демо. Ми все налаштуємо для вас.",
        },
        {
          step: "2",
          title: "Зробіть своїм",
          description:
            "Оберіть типи лояльності. Оформіть картки. Встановіть правила.",
        },
        {
          step: "3",
          title: "Спостерігайте за ростом",
          description:
            "Клієнти додають картки в телефон і починають збирати бонуси.",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Прості та прозорі тарифи",
      subtitle: "Почніть безкоштовно. Оновіть, коли будете готові",
      monthly: "Щомісячно",
      annual: "Щорічно",
      annualSave: "до -15%",
      perMonth: "/міс",
      popular: "Популярний",
      choosePlan: "Почати",
      cards: "Карток",
      locations: "Локацій",
      customers: "Клієнтів",
      staff: "Персонал",
      extraStaff: "+₴200/додатковий",
      enterpriseNote: "* Потрібно більше? Зв'яжіться з нами для індивідуального плану з необмеженими можливостями.",
      tiers: [
        { name: "Старт", monthlyPrice: 349, annualPrice: 299 },
        { name: "Розвиток", monthlyPrice: 799, annualPrice: 699, popular: true },
        { name: "Профі", monthlyPrice: 1399, annualPrice: 1199 },
        { name: "Ексклюзив", monthlyPrice: 1999, annualPrice: 1699 },
      ],
    },
    // FAQ
    faq: {
      title: "Запитання? Відповіді",
      items: [
        {
          question: "Як клієнти отримують доступ до карток?",
          answer:
            "Клієнти можуть додати картку лояльності в Google Wallet або Apple Wallet. Також доступний веб-інтерфейс через QR-код або посилання. Спеціальний додаток не потрібен.",
        },
        {
          question: "Чи потрібне спеціальне обладнання?",
          answer:
            "Ні. Спеціальне обладнання не потрібне. Достатньо смартфону або планшету для сканування QR-кодів та управління програмою лояльності.",
        },
        {
          question: "Чи можна перенести дані з паперових карток?",
          answer:
            "Так. Ви можете вручну додати існуючих клієнтів та їхній прогрес до цифрових карток при переході на Rimbo.",
        },
        {
          question: "Чи є безкоштовний пробний період?",
          answer:
            "Так, ми надаємо 14-денний безкоштовний пробний період на будь-якому плані. Кредитна картка не потрібна для початку.",
        },
        {
          question: "Які способи оплати підтримуються?",
          answer:
            "Ми приймаємо оплату банківськими картками Visa та Mastercard, а також банківський переказ для річних планів.",
        },
        {
          question: "Як працює інтеграція з POS?",
          answer:
            "Rimbo надає API та готові інтеграції з популярними POS-системами (Poster, Checkbox). Нарахування бонусів відбувається автоматично при закритті замовлення.",
        },
      ],
    },
    // Footer
    footer: {
      copyright: "2026 Rimbo. Всі права захищені.",
      links: {
        features: "Можливості",
        pricing: "Тарифи",
        faq: "FAQ",
        terms: "Умови використання",
        privacy: "Конфіденційність",
      },
    },
    // Terms of Use
    terms: {
      title: "Публічна оферта (Умови використання)",
      lastUpdated: "Дата публікації: 15 лютого 2026 р.",
      backLabel: "На головну",
      sections: [
        {
          heading: "",
          content: "Фізична особа-підприємець Бачинський Олександр Іванович (РНОКПП: 3424310353), що діє на підставі Виписки з Єдиного державного реєстру юридичних осіб, фізичних осіб-підприємців та громадських формувань (далі — Виконавець), пропонує необмеженому колу фізичних та юридичних осіб (далі — Замовник) укласти цей Договір про надання послуг доступу до платформи \"Rimbo\" на наступних умовах.\n\nВідповідно до статей 633, 641 Цивільного кодексу України, цей документ є публічною офертою (пропозицією), і в разі прийняття (акцепту) викладених нижче умов особа, яка здійснює акцепт, стає Замовником.",
        },
        {
          heading: "1. Визначення термінів",
          content: "Платформа — веб-платформа цифрових карток лояльності \"Rimbo\", доступна за адресою www.rimbo.app та/або іншими адресами, визначеними Виконавцем.\n\nЗамовник — фізична особа-підприємець або юридична особа, яка зареєструвалася на Платформі та використовує її для управління програмами лояльності для своїх клієнтів.\n\nКінцевий Клієнт — фізична особа, яка є клієнтом Замовника та користується програмою лояльності через Платформу.\n\nКартка лояльності — цифрова картка, створена Замовником на Платформі для нарахування штампів, бонусів та/або знижок Кінцевим Клієнтам.\n\nБонус (Бонусний бал) — умовна облікова одиниця, що нараховується та списується на Платформі в рамках програми лояльності Замовника. Бонуси не мають грошового вираження, не є засобом платежу, валютою чи цінним папером і не можуть бути отримані в грошовій формі.\n\nБонусний рахунок — сукупність облікових та інформаційних даних Кінцевого Клієнта на Платформі щодо поточного балансу бонусів, нарахованих та списаних бонусних балів. Бонусний рахунок не є банківським рахунком.\n\nТарифний план — набір функціональних можливостей та лімітів, визначених Виконавцем, доступних Замовнику за відповідну оплату.\n\nОсобистий кабінет — захищена область Платформи, доступна Замовнику після авторизації, де здійснюється управління картками лояльності, клієнтами та налаштуваннями.\n\nСпівробітник — особа, якій Замовник надав доступ до Особистого кабінету з відповідною роллю (Адміністратор або Учасник).\n\nQR-код — двовимірний штрих-код, що використовується на Платформі для ідентифікації Кінцевих Клієнтів та нарахування штампів/бонусів.\n\nТранзакція — операція нарахування або списання штампів, бонусних балів чи знижок на Платформі.",
        },
        {
          heading: "2. Предмет договору",
          content: "Виконавець надає Замовнику доступ до Платформи \"Rimbo\" як програмне забезпечення у формі послуги (SaaS), що включає: створення та управління цифровими картками лояльності; QR-сканування для нарахування штампів та бонусних балів; управління базою Кінцевих Клієнтів; бонусний рахунок та персональні знижки; аналітику та статистику; інтеграцію з Apple Wallet та Google Wallet; створення лендінг-сторінки компанії; управління локаціями (з інтеграцією Google Maps); управління Співробітниками з розмежуванням ролей; технічну підтримку відповідно до обраного Тарифного плану.\n\nЗамовник оплачує послуги відповідно до обраного Тарифного плану.",
        },
        {
          heading: "3. Акцепт оферти",
          content: "Акцептом (прийняттям) цієї Оферти є реєстрація Замовника на Платформі шляхом створення облікового запису.\n\nЗ моменту акцепту Оферти Договір вважається укладеним на умовах, викладених у цій Оферті, та є рівнозначним Договору, підписаному Сторонами.\n\nЗамовник підтверджує, що до моменту акцепту ознайомився з усіма умовами цієї Оферти, розуміє їх та повністю з ними погоджується.",
        },
        {
          heading: "4. Безкоштовний пробний період",
          content: "Замовнику надається безкоштовний доступ до повного функціоналу Платформи строком 14 (чотирнадцять) календарних днів з моменту реєстрації.\n\nНе пізніше останнього дня безкоштовного періоду Замовник зобов'язаний обрати Тарифний план та здійснити оплату.\n\nУ разі неоплати після закінчення безкоштовного періоду доступ до Платформи призупиняється до моменту оплати.",
        },
        {
          heading: "5. Тарифні плани та вартість послуг",
          content: "Вартість послуг визначається обраним Тарифним планом. Актуальні тарифи та ціни розміщуються на Платформі. У разі розбіжностей пріоритет мають ціни, опубліковані на Платформі.\n\nДодаткові послуги: Мобільний додаток: ₴9 999 (одноразово) + ₴499/міс. Публічний API: ₴499/міс.\n\nВиконавець має право змінювати тарифи з попереднім повідомленням Замовника за 14 календарних днів. Нові тарифи набувають чинності з наступного розрахункового періоду.",
        },
        {
          heading: "6. Порядок розрахунків",
          content: "Оплата здійснюється щомісячно на умовах передоплати. Замовник зобов'язаний здійснити оплату протягом 7 (семи) календарних днів з моменту виставлення рахунку.\n\nОплата здійснюється у безготівковій формі в національній валюті України (гривня, UAH). Повернення коштів за сплачені послуги не здійснюється.\n\nУ разі прострочення оплати понад 7 календарних днів Виконавець має право призупинити доступ Замовника до Платформи. У разі прострочення оплати понад 30 календарних днів Виконавець має право повністю видалити дані Замовника та його Кінцевих Клієнтів без можливості відновлення.",
        },
        {
          heading: "7. Права та обов'язки Виконавця",
          content: "Виконавець зобов'язується: надати Замовнику доступ до Платформи протягом 24 годин з моменту реєстрації або оплати; забезпечити працездатність Платформи не менше 99% часу на місяць (за винятком планових технічних робіт); повідомляти про планові технічні роботи не менше ніж за 24 години; зберігати конфіденційність даних Замовника та його Кінцевих Клієнтів; надавати технічну підтримку у робочий час: Пн–Пт 10:00–18:00, Сб–Нд 11:00–15:00 (за Київським часом).\n\nВиконавець має право: призупинити доступ до Платформи у разі порушення Замовником умов цього Договору або чинного законодавства; змінювати функціонал Платформи, що не входить до Тарифного плану Замовника, без попереднього повідомлення; змінювати функціонал Платформи, що входить до Тарифного плану Замовника, з попереднім повідомленням за 14 календарних днів.",
        },
        {
          heading: "8. Права та обов'язки Замовника",
          content: "Замовник зобов'язується: своєчасно оплачувати послуги згідно з обраним Тарифним планом; не передавати дані доступу до Особистого кабінету третім особам (за винятком уповноважених Співробітників); використовувати Платформу виключно для законної підприємницької діяльності; самостійно отримувати згоду Кінцевих Клієнтів на збір та обробку їхніх персональних даних; нести повну відповідальність за контент, що розміщується на Платформі; не допускати розміщення контенту, що є образливим, непристойним, дискримінаційним або таким, що порушує права третіх осіб.\n\nЗамовник має право: змінити Тарифний план з наступного розрахункового періоду; отримувати технічну підтримку у робочий час; у будь-який час припинити використання Платформи.",
        },
        {
          heading: "9. Обмеження використання",
          content: "Замовнику та будь-яким третім особам забороняється: здійснювати спроби злому, несанкціонованого доступу або атаки на Платформу; декомпілювати, дизасемблювати або іншим чином намагатися отримати вихідний код Платформи; продавати, передавати, відступати або іншим чином відчужувати доступ до Платформи третім особам; використовувати автоматизовані засоби для масового збору даних з Платформи (скрейпінг); використовувати Платформу для розповсюдження шкідливого програмного забезпечення або спаму; порушувати права інтелектуальної власності Виконавця або третіх осіб.",
        },
        {
          heading: "10. Інтелектуальна власність",
          content: "Усі права інтелектуальної власності на Платформу, включаючи програмний код, дизайн, торговельну марку \"Rimbo\" та інші елементи, належать Виконавцю.\n\nЗамовнику надається невиключна, відкликна ліцензія на використання Платформи в межах обраного Тарифного плану на строк дії Договору. Замовник не має права передавати, субліцензувати або іншим чином розпоряджатися правами на використання Платформи.\n\nКонтент, створений Замовником на Платформі (логотипи, тексти, зображення), залишається власністю Замовника.",
        },
        {
          heading: "11. Персональні дані та конфіденційність",
          content: "Детальна інформація про обробку персональних даних наведена в нашій Політиці конфіденційності.",
        },
        {
          heading: "12. Відповідальність сторін",
          content: "За невиконання або неналежне виконання зобов'язань Сторони несуть відповідальність згідно з чинним законодавством України та умовами цього Договору.\n\nМаксимальна відповідальність Виконавця за цим Договором обмежується сумою, сплаченою Замовником за останній розрахунковий місяць.\n\nВиконавець не несе відповідальності за: збитки, спричинені діями третіх осіб; втрату даних з вини Замовника; неможливість використання Платформи через проблеми з інтернет-з'єднанням Замовника; контент, розміщений Замовником на Платформі; порушення Замовником законодавства про захист персональних даних Кінцевих Клієнтів.\n\nТехнічні перерви в роботі Платформи тривалістю до 48 годин на місяць не є порушенням умов цього Договору.",
        },
        {
          heading: "13. Строк дії та припинення договору",
          content: "Договір набуває чинності з моменту акцепту Оферти (реєстрації на Платформі) та діє безстроково до його припинення.\n\nКожна зі Сторін може припинити Договір, повідомивши іншу Сторону за 14 календарних днів у письмовій формі (електронною поштою). Виконавець має право негайно припинити Договір у разі суттєвого порушення Замовником умов цього Договору або чинного законодавства.\n\nПісля припинення Договору доступ до Платформи блокується. Дані Замовника та його Кінцевих Клієнтів зберігаються протягом 30 календарних днів, після чого повністю видаляються без можливості відновлення. Кошти, сплачені за невикористаний період, не повертаються.",
        },
        {
          heading: "14. Форс-мажор",
          content: "Сторони звільняються від відповідальності за невиконання зобов'язань у разі настання обставин непереборної сили (війна, воєнні дії, стихійні лиха, рішення державних органів, кібератаки на інфраструктуру тощо).\n\nСторона, для якої настали такі обставини, зобов'язана повідомити іншу Сторону протягом 5 (п'яти) календарних днів з моменту їх настання.",
        },
        {
          heading: "15. Вирішення спорів",
          content: "Усі спори та розбіжності, що виникають у зв'язку з цим Договором, вирішуються шляхом переговорів. У разі недосягнення згоди спори вирішуються у судовому порядку відповідно до чинного законодавства України.",
        },
        {
          heading: "16. Зміни до оферти",
          content: "Виконавець має право вносити зміни до цієї Оферти в односторонньому порядку. Повідомлення про зміни публікується на Платформі не менше ніж за 14 календарних днів до набуття чинності змін.\n\nПродовження використання Платформи після набуття чинності змін означає згоду Замовника з новою редакцією Оферти.",
        },
        {
          heading: "17. Контактна інформація",
          content: "Виконавець: ФОП Бачинський Олександр Іванович\nРНОКПП: 3424310353\nEmail: billing@rimbo.io\nПлатформа: rimbo.vercel.app\nГодини підтримки: Пн–Пт 10:00–18:00, Сб–Нд 11:00–15:00 (за Київським часом)",
        },
      ],
    },
    // Privacy Policy
    privacy: {
      title: "Політика конфіденційності",
      lastUpdated: "Дата публікації: 15 лютого 2026 р.",
      backLabel: "На головну",
      sections: [
        {
          heading: "Вступ",
          content: "Ця Політика конфіденційності описує, як платформа \"Rimbo\" (далі — Платформа), що належить ФОП Бачинський Олександр Іванович (далі — Виконавець), збирає, використовує, зберігає та захищає персональні дані користувачів.\n\nВикористовуючи Платформу, ви погоджуєтесь з умовами цієї Політики конфіденційності.",
        },
        {
          heading: "Дані, які ми збираємо",
          content: "Дані Замовника (бізнес-користувачі): електронна пошта, номер телефону, ім'я (при реєстрації); назва компанії, контактна інформація, логотип та зображення; адреси локацій компанії, географічні координати, ідентифікатори Google Maps; електронні адреси та ролі Співробітників; інформація щодо оплат.\n\nДані Кінцевих Клієнтів: електронна пошта, номер телефону, ім'я; дані карток лояльності: кількість штампів, історія транзакцій; баланс бонусного рахунку та історія операцій з бонусними балами; розмір персональної знижки; сповіщення та їх історія.\n\nАвтоматично зібрані дані: тип пристрою, інформація про браузер (user agent); аналітика QR-сканувань: тип сканування, результат, час; аналітика дій на Платформі: підключення, відключення, операції з картками; журнали аудиту: зміни налаштувань, хто виконав дію, старі та нові значення.",
        },
        {
          heading: "Правова основа обробки",
          content: "Виконавець обробляє персональні дані відповідно до Закону України «Про захист персональних даних» від 01.06.2010 № 2297-VI.\n\nПравовою основою обробки є згода суб'єкта даних (акцепт Публічної оферти) та виконання Договору.",
        },
        {
          heading: "Як ми використовуємо дані",
          content: "Ми використовуємо зібрані дані для: надання послуг Платформи та управління обліковими записами; обробки транзакцій та нарахування бонусів; надсилання сповіщень та push-повідомлень; аналітики та покращення роботи Платформи; технічної підтримки; виконання юридичних зобов'язань.",
        },
        {
          heading: "Розподіл відповідальності за дані",
          content: "Замовник є володільцем (контролером) персональних даних своїх Кінцевих Клієнтів та несе повну відповідальність за законність їх збору та обробки.\n\nВиконавець виступає як обробник персональних даних Кінцевих Клієнтів за дорученням Замовника.\n\nЗамовник зобов'язаний самостійно отримати згоду Кінцевих Клієнтів на обробку їхніх персональних даних до їх внесення на Платформу.",
        },
        {
          heading: "Треті сторони, що залучаються до обробки",
          content: "Supabase (Австрія, EU-central-1) — хостинг бази даних та автентифікація.\n\nGoogle Maps API — сервіс визначення місцезнаходження локацій.\n\nApple Wallet / Google Wallet — генерація цифрових перепусток.\n\nМи не продаємо та не передаємо персональні дані третім сторонам для маркетингових цілей.",
        },
        {
          heading: "Зберігання даних",
          content: "Персональні дані зберігаються протягом строку дії Договору.\n\nПісля припинення Договору дані зберігаються протягом 30 календарних днів, після чого повністю видаляються без можливості відновлення.\n\nЗапрошення Співробітників автоматично анулюються через 7 днів.",
        },
        {
          heading: "Ваші права",
          content: "Суб'єкт персональних даних має право: знати про джерела збору, місцезнаходження та мету обробки своїх даних; отримати доступ до своїх персональних даних; вимагати виправлення неточних або неповних даних; вимагати видалення своїх персональних даних; відкликати згоду на обробку персональних даних.\n\nДля реалізації цих прав зверніться до нас за адресою: billing@rimbo.io.",
        },
        {
          heading: "Захист даних",
          content: "Виконавець вживає технічних та організаційних заходів для захисту персональних даних від несанкціонованого доступу, втрати або знищення.\n\nДоступ до даних Замовника обмежений системою ролей та дозволів (Row Level Security). Усі з'єднання захищені шифруванням.",
        },
        {
          heading: "Зміни до Політики",
          content: "Виконавець має право вносити зміни до цієї Політики конфіденційності. Повідомлення про зміни публікується на Платформі не менше ніж за 14 календарних днів до набуття чинності змін.\n\nПродовження використання Платформи після набуття чинності змін означає вашу згоду з новою редакцією Політики.",
        },
        {
          heading: "Контакти",
          content: "З питань конфіденційності та захисту персональних даних зверніться до нас:\n\nEmail: billing@rimbo.io\nПлатформа: rimbo.vercel.app\nГодини підтримки: Пн–Пт 10:00–18:00, Сб–Нд 11:00–15:00 (за Київським часом)",
        },
      ],
    },
    // Language
    langSwitch: "EN",
    langSwitchHref: "/en",
  },
  en: {
    locale: "en",
    // Header
    header: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      getStarted: "Get Started",
    },
    // Hero
    hero: {
      headline: "The loyalty platform built to be yours",
      headlinePrefix: "The ",
      headlineSuffix: " platform built to be yours",
      rotatingWords: ["Stamp card", "Bonus", "Discount", "Coupon"],
      subtitle:
        "All digital, all automatic, all in your customers' phones",
      ctaPrimary: "Get Started Free",
      ctaSecondary: "See How It Works",
      badges: {
        googleWallet: "Google Wallet",
        appleWallet: "Apple Wallet",
        qr: "QR Codes",
        app: "Mobile App",
        pos: "POS Integration",
      },
    },
    // Problem
    problem: {
      title: "Loyalty that actually works",
      cards: [
        {
          title: "Always in their pocket",
          description:
            "Digital cards live in your customers' phones. No more lost paper cards.",
        },
        {
          title: "Know your customers",
          description:
            "Track visits, preferences, and spending, all in real time.",
        },
        {
          title: "Fully automatic",
          description:
            "No manual stamps, no counting, no paperwork. Just results.",
        },
        {
          title: "Bring them back",
          description:
            "Push notifications and personalized offers that drive repeat visits.",
        },
      ],
    },
    // Loyalty types
    loyaltyTypes: {
      title: "One platform. Every loyalty type",
      types: [
        {
          title: "Stamp Cards",
          description:
            "Collect stamps. Earn rewards. All in Google Wallet.",
        },
        {
          title: "Cashback & Points",
          description:
            "Flexible points that keep customers coming back.",
        },
        {
          title: "Tiered Rewards",
          description:
            "The more they visit, the more they save.",
        },
        {
          title: "Promo Codes",
          description:
            "Track every campaign. Measure every influencer.",
        },
        {
          title: "Gift Cards",
          description:
            "Digital gifts your customers share in one tap.",
        },
        {
          title: "Smart Coupons",
          description:
            "Birthday treats. Surprise offers. Personalized for each customer.",
        },
      ],
    },
    // Features
    features: {
      title: "Built with everything you need",
      items: [
        {
          title: "Wallet-ready",
          description:
            "Cards land right in Google Wallet and Apple Wallet. Zero friction.",
          wide: true,
        },
        {
          title: "Push Notifications",
          description:
            "Reach customers at exactly the right moment.",
        },
        {
          title: "QR Codes",
          description:
            "One scan. Instant identification.",
        },
        {
          title: "Live Analytics",
          description:
            "See what's happening across all locations, right now.",
          wide: true,
        },
        {
          title: "POS Integration",
          description:
            "Connects to the systems you already use.",
        },
        {
          title: "Multi-location",
          description:
            "All your stores. One dashboard.",
        },
        {
          title: "Team Access",
          description:
            "Give your staff the right access levels.",
        },
        {
          title: "Your Brand",
          description:
            "Custom colors, logo, and card design.",
        },
        {
          title: "Full API",
          description:
            "Build anything on top of Rimbo.",
          wide: true,
        },
      ],
    },
    // How it works
    howItWorks: {
      title: "Up and running in three steps",
      steps: [
        {
          step: "1",
          title: "Talk to us",
          description:
            "Book a demo. We'll set everything up for you.",
        },
        {
          step: "2",
          title: "Make it yours",
          description:
            "Pick your loyalty types. Design your cards. Set the rules.",
        },
        {
          step: "3",
          title: "Watch it grow",
          description:
            "Customers add cards to their phones and start collecting.",
        },
      ],
    },
    // Pricing
    pricing: {
      title: "Simple, transparent pricing",
      subtitle: "Start free. Upgrade when you're ready",
      monthly: "Monthly",
      annual: "Annual",
      annualSave: "up to -15%",
      perMonth: "/mo",
      popular: "Popular",
      choosePlan: "Get Started",
      cards: "Cards",
      locations: "Locations",
      customers: "Customers",
      staff: "Staff",
      extraStaff: "+₴200/extra",
      enterpriseNote: "* Need more? Contact us for a custom plan with unlimited capabilities.",
      tiers: [
        { name: "Start", monthlyPrice: 349, annualPrice: 299 },
        { name: "Growth", monthlyPrice: 799, annualPrice: 699, popular: true },
        { name: "Pro", monthlyPrice: 1399, annualPrice: 1199 },
        { name: "Custom", monthlyPrice: 1999, annualPrice: 1699 },
      ],
    },
    // FAQ
    faq: {
      title: "Questions? Answers",
      items: [
        {
          question: "How do customers access their cards?",
          answer:
            "Customers can add their loyalty card to Google Wallet or Apple Wallet. A web interface via QR code or link is also available. No special app required.",
        },
        {
          question: "Is special hardware needed?",
          answer:
            "No. No special hardware is needed. A smartphone or tablet is enough for scanning QR codes and managing the loyalty program.",
        },
        {
          question: "Can I migrate from paper cards?",
          answer:
            "Yes. You can manually add existing customers and their progress to digital cards when switching to Rimbo.",
        },
        {
          question: "Is there a free trial?",
          answer:
            "Yes, we offer a 14-day free trial on any plan. No credit card required to get started.",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept Visa and Mastercard payments, as well as bank transfer for annual plans.",
        },
        {
          question: "How does POS integration work?",
          answer:
            "Rimbo provides API and ready-made integrations with popular POS systems (Poster, Checkbox). Bonus accrual happens automatically when an order is closed.",
        },
      ],
    },
    // Footer
    footer: {
      copyright: "2026 Rimbo. All rights reserved.",
      links: {
        features: "Features",
        pricing: "Pricing",
        faq: "FAQ",
        terms: "Terms of Use",
        privacy: "Privacy Policy",
      },
    },
    // Terms of Use
    terms: {
      title: "Public Offer (Terms of Use)",
      lastUpdated: "Publication date: February 15, 2026",
      backLabel: "Back to home",
      sections: [
        {
          heading: "",
          content: "Individual Entrepreneur Bachynskyi Oleksandr Ivanovych (Tax ID (RNOKPP): 3424310353), acting on the basis of an Extract from the Unified State Register of Legal Entities, Individual Entrepreneurs, and Public Organizations (hereinafter — the Executor), offers an unlimited number of individuals and legal entities (hereinafter — the Customer) to enter into this Agreement for access to the \"Rimbo\" platform on the following terms.\n\nIn accordance with Articles 633 and 641 of the Civil Code of Ukraine, this document constitutes a public offer (proposal), and upon acceptance of the terms set forth below, the person making such acceptance becomes the Customer.",
        },
        {
          heading: "1. Definitions",
          content: "Platform — the digital loyalty cards web platform \"Rimbo\", available at www.rimbo.app and/or other addresses designated by the Executor.\n\nCustomer — an individual entrepreneur or legal entity that has registered on the Platform and uses it to manage loyalty programs for their clients.\n\nEnd Client — an individual who is a client of the Customer and participates in a loyalty program through the Platform.\n\nLoyalty Card — a digital card created by the Customer on the Platform for awarding stamps, bonuses, and/or discounts to End Clients.\n\nBonus (Bonus Point) — a conditional accounting unit that is awarded and redeemed on the Platform within the Customer's loyalty program. Bonuses have no monetary value, are not a means of payment, currency, or security, and cannot be received in monetary form.\n\nBonus Account — a collection of accounting and informational data of an End Client on the Platform regarding the current bonus balance, awarded and redeemed bonus points. The Bonus Account is not a bank account.\n\nTariff Plan — a set of functionalities and limits defined by the Executor, available to the Customer for the corresponding fee.\n\nPersonal Account — a protected area of the Platform accessible to the Customer after authorization, where loyalty cards, clients, and settings are managed.\n\nStaff Member — a person to whom the Customer has granted access to the Personal Account with an assigned role (Administrator or Member).\n\nQR Code — a two-dimensional barcode used on the Platform for identification of End Clients and awarding stamps/bonuses.\n\nTransaction — an operation of awarding or redeeming stamps, bonus points, or discounts on the Platform.",
        },
        {
          heading: "2. Subject of the Agreement",
          content: "The Executor provides the Customer with access to the \"Rimbo\" Platform as Software as a Service (SaaS), which includes: creation and management of digital loyalty cards; QR scanning for awarding stamps and bonus points; management of the End Client database; bonus account and personal discounts; analytics and statistics; Apple Wallet and Google Wallet integration; company landing page creation; location management (with Google Maps integration); Staff Member management with role-based access; technical support in accordance with the selected Tariff Plan.\n\nThe Customer pays for the services according to the selected Tariff Plan.",
        },
        {
          heading: "3. Acceptance of the Offer",
          content: "Acceptance of this Offer is the Customer's registration on the Platform by creating an account.\n\nFrom the moment of acceptance, the Agreement is deemed concluded on the terms set forth in this Offer and is equivalent to an Agreement signed by both Parties.\n\nThe Customer confirms that prior to acceptance, they have read all terms of this Offer, understand them, and fully agree with them.",
        },
        {
          heading: "4. Free Trial Period",
          content: "The Customer is granted free access to the full functionality of the Platform for a period of 14 (fourteen) calendar days from the date of registration.\n\nNo later than the last day of the free period, the Customer must select a Tariff Plan and make payment.\n\nIf payment is not made after the free period expires, access to the Platform is suspended until payment is received.",
        },
        {
          heading: "5. Tariff Plans and Pricing",
          content: "The cost of services is determined by the selected Tariff Plan. Current tariffs and prices are published on the Platform. In case of discrepancies, prices published on the Platform shall prevail.\n\nAdditional services: Mobile application: UAH 9,999 (one-time) + UAH 499/month. Public API: UAH 499/month.\n\nThe Executor reserves the right to change tariffs with 14 calendar days' prior notice to the Customer. New tariffs take effect from the next billing period.",
        },
        {
          heading: "6. Payment Terms",
          content: "Payment is made monthly on a prepayment basis. The Customer must make payment within 7 (seven) calendar days from the date of invoice.\n\nPayment is made by bank transfer in the national currency of Ukraine (hryvnia, UAH). No refunds are provided for paid services.\n\nIf payment is overdue by more than 7 calendar days, the Executor may suspend the Customer's access to the Platform. If payment is overdue by more than 30 calendar days, the Executor may permanently delete the Customer's data and their End Clients' data without the possibility of restoration.",
        },
        {
          heading: "7. Rights and Obligations of the Executor",
          content: "The Executor undertakes to: provide the Customer with access to the Platform within 24 hours of registration or payment; ensure Platform availability of no less than 99% per month (excluding scheduled maintenance); provide at least 24 hours' notice of scheduled maintenance; maintain the confidentiality of the Customer's and their End Clients' data; provide technical support during working hours: Mon–Fri 10:00–18:00, Sat–Sun 11:00–15:00 (Kyiv time).\n\nThe Executor has the right to: suspend access to the Platform if the Customer violates the terms of this Agreement or applicable legislation; modify Platform functionality not included in the Customer's Tariff Plan without prior notice; modify Platform functionality included in the Customer's Tariff Plan with 14 calendar days' prior notice.",
        },
        {
          heading: "8. Rights and Obligations of the Customer",
          content: "The Customer undertakes to: make timely payments according to the selected Tariff Plan; not share Personal Account access credentials with third parties (except authorized Staff Members); use the Platform exclusively for lawful business activities; independently obtain consent from End Clients for the collection and processing of their personal data; bear full responsibility for content published on the Platform; not publish content that is offensive, obscene, discriminatory, or that infringes on the rights of third parties.\n\nThe Customer has the right to: change the Tariff Plan starting from the next billing period; receive technical support during working hours; cease using the Platform at any time.",
        },
        {
          heading: "9. Usage Restrictions",
          content: "The Customer and any third parties are prohibited from: attempting to hack, gain unauthorized access to, or attack the Platform; decompiling, disassembling, or otherwise attempting to obtain the source code of the Platform; selling, transferring, assigning, or otherwise alienating access to the Platform to third parties; using automated means for mass data collection from the Platform (scraping); using the Platform to distribute malware or spam; infringing on the intellectual property rights of the Executor or third parties.",
        },
        {
          heading: "10. Intellectual Property",
          content: "All intellectual property rights to the Platform, including software code, design, the \"Rimbo\" trademark, and other elements, belong to the Executor.\n\nThe Customer is granted a non-exclusive, revocable license to use the Platform within the scope of the selected Tariff Plan for the duration of the Agreement. The Customer may not transfer, sublicense, or otherwise dispose of the rights to use the Platform.\n\nContent created by the Customer on the Platform (logos, texts, images) remains the property of the Customer.",
        },
        {
          heading: "11. Personal Data and Privacy",
          content: "Detailed information about personal data processing is provided in our Privacy Policy.",
        },
        {
          heading: "12. Liability",
          content: "For failure to perform or improper performance of obligations, the Parties shall be liable in accordance with the current legislation of Ukraine and the terms of this Agreement.\n\nThe maximum liability of the Executor under this Agreement is limited to the amount paid by the Customer for the last billing month.\n\nThe Executor shall not be liable for: losses caused by the actions of third parties; data loss due to the Customer's fault; inability to use the Platform due to the Customer's internet connection issues; content published by the Customer on the Platform; the Customer's violations of personal data protection legislation regarding End Clients.\n\nTechnical interruptions in Platform operation of up to 48 hours per month shall not constitute a breach of this Agreement.",
        },
        {
          heading: "13. Term and Termination",
          content: "The Agreement takes effect from the moment of acceptance of the Offer (registration on the Platform) and remains in force indefinitely until terminated.\n\nEither Party may terminate the Agreement by providing the other Party with 14 calendar days' written notice (by email). The Executor may immediately terminate the Agreement in the event of a material breach of this Agreement or applicable legislation by the Customer.\n\nUpon termination, access to the Platform is blocked. The Customer's data and their End Clients' data are retained for 30 calendar days, after which they are permanently deleted without the possibility of restoration. Funds paid for unused periods are not refundable.",
        },
        {
          heading: "14. Force Majeure",
          content: "The Parties are released from liability for failure to perform obligations in the event of force majeure circumstances (war, military actions, natural disasters, government decisions, cyberattacks on infrastructure, etc.).\n\nThe Party affected by such circumstances must notify the other Party within 5 (five) calendar days of their occurrence.",
        },
        {
          heading: "15. Dispute Resolution",
          content: "All disputes and disagreements arising in connection with this Agreement shall be resolved through negotiation. If agreement cannot be reached, disputes shall be resolved in court in accordance with the current legislation of Ukraine.",
        },
        {
          heading: "16. Amendments to the Offer",
          content: "The Executor reserves the right to amend this Offer unilaterally. Notice of amendments shall be published on the Platform no less than 14 calendar days before the amendments take effect.\n\nContinued use of the Platform after amendments take effect constitutes the Customer's agreement with the new version of the Offer.",
        },
        {
          heading: "17. Contact Information",
          content: "Executor: Individual Entrepreneur Bachynskyi Oleksandr Ivanovych\nTax ID (RNOKPP): 3424310353\nEmail: billing@rimbo.io\nPlatform: rimbo.vercel.app\nSupport hours: Mon–Fri 10:00–18:00, Sat–Sun 11:00–15:00 (Kyiv time)",
        },
      ],
    },
    // Privacy Policy
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Publication date: February 15, 2026",
      backLabel: "Back to home",
      sections: [
        {
          heading: "Introduction",
          content: "This Privacy Policy describes how the \"Rimbo\" platform (hereinafter — the Platform), owned by Individual Entrepreneur Bachynskyi Oleksandr Ivanovych (hereinafter — the Executor), collects, uses, stores, and protects the personal data of its users.\n\nBy using the Platform, you agree to the terms of this Privacy Policy.",
        },
        {
          heading: "Data We Collect",
          content: "Customer data (business users): email, phone number, name (upon registration); company name, contact information, logo, and images; company location addresses, geographic coordinates, Google Maps identifiers; Staff Members' email addresses and roles; payment information.\n\nEnd Client data: email, phone number, name; loyalty card data: stamp count, transaction history; bonus account balance and bonus points transaction history; personal discount percentage; notifications and notification history.\n\nAutomatically collected data: device type, browser information (user agent); QR scan analytics: scan type, result, timestamp; Platform activity analytics: connections, disconnections, card operations; audit logs: setting changes, who performed the action, old and new values.",
        },
        {
          heading: "Legal Basis for Processing",
          content: "The Executor processes personal data in accordance with the Law of Ukraine \"On Personal Data Protection\" dated June 1, 2010, No. 2297-VI.\n\nThe legal basis for processing is the data subject's consent (acceptance of the Public Offer) and performance of the Agreement.",
        },
        {
          heading: "How We Use Data",
          content: "We use the collected data to: provide Platform services and manage accounts; process transactions and award bonuses; send notifications and push messages; perform analytics and improve Platform performance; provide technical support; fulfill legal obligations.",
        },
        {
          heading: "Distribution of Data Responsibility",
          content: "The Customer is the owner (controller) of the personal data of their End Clients and bears full responsibility for the lawfulness of its collection and processing.\n\nThe Executor acts as a processor of End Clients' personal data on behalf of the Customer.\n\nThe Customer is obligated to independently obtain consent from End Clients for the processing of their personal data before entering such data into the Platform.",
        },
        {
          heading: "Third-Party Processors",
          content: "Supabase (Austria, EU-central-1) — database hosting and authentication.\n\nGoogle Maps API — location services.\n\nApple Wallet / Google Wallet — digital pass generation.\n\nWe do not sell or share personal data with third parties for marketing purposes.",
        },
        {
          heading: "Data Retention",
          content: "Personal data is stored for the duration of the Agreement.\n\nAfter termination of the Agreement, data is retained for 30 calendar days, after which it is permanently deleted without the possibility of restoration.\n\nStaff Member invitations automatically expire after 7 days.",
        },
        {
          heading: "Your Rights",
          content: "Data subjects have the right to: know about the sources of collection, location, and purpose of processing of their data; access their personal data; request correction of inaccurate or incomplete data; request deletion of their personal data; withdraw consent for personal data processing.\n\nTo exercise these rights, contact us at: billing@rimbo.io.",
        },
        {
          heading: "Data Security",
          content: "The Executor implements technical and organizational measures to protect personal data from unauthorized access, loss, or destruction.\n\nAccess to Customer data is restricted through a role and permission system (Row Level Security). All connections are protected by encryption.",
        },
        {
          heading: "Changes to This Policy",
          content: "The Executor reserves the right to amend this Privacy Policy. Notice of amendments shall be published on the Platform no less than 14 calendar days before the amendments take effect.\n\nContinued use of the Platform after amendments take effect constitutes your agreement with the new version of the Policy.",
        },
        {
          heading: "Contact",
          content: "For privacy and data protection inquiries, contact us:\n\nEmail: billing@rimbo.io\nPlatform: rimbo.vercel.app\nSupport hours: Mon–Fri 10:00–18:00, Sat–Sun 11:00–15:00 (Kyiv time)",
        },
      ],
    },
    // Language
    langSwitch: "UA",
    langSwitchHref: "/",
  },
};

export type Dictionary = (typeof dictionaries)["uk"];
export type Locale = keyof typeof dictionaries;

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] || dictionaries.uk;
}
