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
      },
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
      },
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
