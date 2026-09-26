export type Lang = "en" | "fa";

export const copy = {
  en: {
    dir: "ltr" as const,
    nav: {
      features: "The Package",
      method: "Method",
      stories: "Stories",
      pricing: "Pricing",
      faq: "FAQ",
      cta: "Reserve a seat",
    },
    hero: {
      eyebrow: "Autumn 2026 Cohort  ·  86 seats remaining",
      titleA: "Light the path from",
      titleB: "Konkur to the world.",
      subtitle:
        "NOOR is the complete educational package for ambitious Iranian students — exam mastery, English fluency, and a guided path to the universities that change everything.",
      cta: "Reserve my seat",
      cta2: "See inside the package",
      proof: "48,000+ students  ·  Mentors from Sharif, Toronto, ETH",
      stat1v: "92%",
      stat1l: "improved mock rank in 8 weeks",
      stat2v: "1,240",
      stat2l: "international offers since 2021",
      stat3v: "4.9",
      stat3l: "average family rating",
      floating: "Live with a Sharif mentor · tonight 21:00 IRST",
    },
    logos: {
      label: "Students from NOOR now study at",
      items: [
        "Sharif University",
        "University of Tehran",
        "Amirkabir",
        "University of Toronto",
        "UBC",
        "McGill",
        "ETH Zürich",
        "TU Munich",
        "Imperial College",
        "NUS",
        "KAIST",
        "EPFL",
      ],
    },
    social: {
      a: "48k+",
      al: "students taught",
      b: "92%",
      bl: "rank improvement",
      c: "1.2k",
      cl: "global admissions",
      d: "180",
      dl: "mentor scholars",
    },
    features: {
      eyebrow: "Inside the package",
      title: "Everything a serious student actually needs — nothing they don’t.",
      subtitle:
        "One coherent system. Built for Iranian classrooms, calibrated to world standards, and paced for real life at home.",
      items: [
        {
          title: "Konkur Engine",
          desc: "A complete mastery path for Math, Physics, Chemistry, Biology and Humanities — cinematic lessons, spaced drills, and rank-predicting mocks.",
        },
        {
          title: "English to the world",
          desc: "IELTS & TOEFL tracks designed for Persian speakers. From hesitant to 7.5+ — with speaking rooms that don’t feel like classrooms.",
        },
        {
          title: "Mentors who’ve done it",
          desc: "Alumni of Sharif, Tehran, Toronto, ETH and MIT. Weekly 1:1s that talk about the work, the fear, and the family conversation.",
        },
        {
          title: "Adaptive practice",
          desc: "Twelve thousand questions that learn you. Weak topics surface. Strong ones recede. Your evenings get shorter, not longer.",
        },
        {
          title: "Study-abroad studio",
          desc: "SOP, CV, recommendation letters, scholarship hunting, visa choreography. A war-room for applications, not a blog.",
        },
        {
          title: "Family progress portal",
          desc: "Parents see the truth without the interrogation. Hours, scores, mood. Built for Iranian households that care — because they do.",
        },
      ],
    },
    showcase: {
      eyebrow: "Product",
      title: "A studio, not a pile of PDFs.",
      subtitle:
        "Open the app and the week is already designed: a lesson, a drill, a live circle, a mentor note. Beauty is not decoration here — it is how students stay.",
      points: [
        { k: "420+", l: "hours of cinematic lessons" },
        { k: "12,000", l: "questions with video solutions" },
        { k: "Weekly", l: "live circles in Persian & English" },
        { k: "Private", l: "mentor thread, always on" },
      ],
      caption: "The NOOR studio — lessons, mocks, mentor notes, in one calm place.",
      modulesTitle: "Your year, composed",
      modules: [
        { t: "Foundation", d: "Diagnostic, gap map, study architecture." },
        { t: "Mastery", d: "Deep content + adaptive drills by chapter." },
        { t: "Pressure", d: "Full mocks under real Konkur timing." },
        { t: "Lift", d: "English, essays, and the world application." },
      ],
    },
    benefits: {
      eyebrow: "Why families choose NOOR",
      title: "Outcomes you can put on the table at Friday lunch.",
      items: [
        {
          title: "A rank that moves",
          desc: "Students gain an average of 1,800 places in eight weeks of mocks — because practice is no longer random.",
        },
        {
          title: "English that opens doors",
          desc: "A dedicated Persian-to-English method. No more grammar graveyards. Speaking first, scores follow.",
        },
        {
          title: "A grown-up plan B and C",
          desc: "Sharif is a dream. So is Toronto. So is a funded master’s in Germany. We design three futures, not one panic.",
        },
        {
          title: "Someone in your corner",
          desc: "The lonely 2 a.m. of Iranian exam culture ends here. A mentor who answers. A circle that stays.",
        },
      ],
      quote:
        "We do not sell hope. We sell a week you can actually finish — and a year that compounds.",
      quoteBy: "Dr. Leila Hosseini, Academic Director, former Sharif faculty",
    },
    method: {
      eyebrow: "The method",
      title: "Four movements. One year. No chaos.",
      steps: [
        {
          n: "01",
          t: "Map",
          d: "A 90-minute diagnostic. We learn your rank, your gaps, your household rhythm — then write the architecture.",
        },
        {
          n: "02",
          t: "Carve",
          d: "Daily studio work: 75 focused minutes, never more than you promised your family. Depth over theatre.",
        },
        {
          n: "03",
          t: "Pressure",
          d: "Biweekly mocks. Rank predictions. Recalibration every Sunday night with your mentor.",
        },
        {
          n: "04",
          t: "Rise",
          d: "Applications, interviews, English, and the conversation with your parents about the life you want.",
        },
      ],
    },
    stories: {
      eyebrow: "Voices",
      title: "They sat where you sit.",
      subtitle: "Four students. Four cities. Four different kinds of becoming.",
      items: [
        {
          name: "Neda Rahimi",
          meta: "Tehran  →  University of Toronto",
          quote:
            "NOOR was the first place that treated my ambition as serious, not as a phase. My mentor rewrote my SOP three times. Toronto said yes in March.",
        },
        {
          name: "Arash Karimi",
          meta: "Isfahan  →  Sharif, rank 47",
          quote:
            "I was drowning in test booklets. The engine showed me I was practising the wrong 40%. Eight weeks later my mock rank had moved two thousand places.",
        },
        {
          name: "Sara Ebrahimi",
          meta: "Shiraz  →  IELTS 8.0, TU Munich",
          quote:
            "English had always been the locked door. The speaking rooms felt like talking with cousins, not a camera. Germany funded the rest.",
        },
        {
          name: "Reza Mahdavi",
          meta: "Mashhad  →  McGill, full scholarship",
          quote:
            "My parents needed to see a plan, not a dream. The family portal and the three-path map made the kitchen table conversation possible.",
        },
      ],
    },
    pricing: {
      eyebrow: "Investment",
      title: "Choose the depth of accompaniment.",
      subtitle:
        "Pay in toman, in three installments, or in USD. Every plan includes the studio. Mentorship is where they differ.",
      note: "14-day quiet trial. If the method is not yours, a full refund — no interrogation.",
      popular: "Most chosen",
      cta: "Start with this plan",
      toman: "toman",
      or: "or",
      plans: [
        {
          id: "roshd",
          name: "Roshd",
          nameFaHint: "رشد",
          price: "۲.۴M",
          usd: "$49",
          period: "one year of studio access",
          desc: "For the self-directed student who wants the engine, not the entourage.",
          features: [
            "Full Konkur + English studio",
            "12,000 adaptive questions",
            "Weekly live circles",
            "Family progress portal",
            "Rank-prediction mocks",
            "Community of 48k students",
          ],
        },
        {
          id: "noor",
          name: "Noor",
          nameFaHint: "نور",
          price: "۶.۹M",
          usd: "$149",
          period: "one year, complete package",
          desc: "The educational package as it was designed. Studio, mentor, applications.",
          features: [
            "Everything in Roshd",
            "Biweekly 1:1 mentor (45 min)",
            "Study-abroad studio & SOP lab",
            "Priority live seats",
            "University shortlist workshop",
            "Parent briefing each term",
            "WhatsApp / Telegram mentor thread",
          ],
        },
        {
          id: "kherad",
          name: "Kherad",
          nameFaHint: "خرد",
          price: "۱۸.۹M",
          usd: "$399",
          period: "one year, elite accompaniment",
          desc: "For families who want a private scholar in the house — without one in the house.",
          features: [
            "Everything in Noor",
            "Weekly 1:1 with a senior scholar",
            "Private mock analysis",
            "Application war-room (8 hours)",
            "Interview rehearsal",
            "Direct intro to alumni at target schools",
            "Guaranteed seat in every masterclass",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "Asked around the table.",
      items: [
        {
          q: "Is NOOR only for Konkur?",
          a: "No. Konkur is the spine for many of our students, but the package is built in three layers: national exam mastery, English fluency, and international applications. University students use NOOR for IELTS, research English, and master’s applications.",
        },
        {
          q: "Can we pay in toman? Are installments possible?",
          a: "Yes. Local cards, Shetab, and three interest-free installments. Families abroad can pay in USD or EUR. We send a transparent invoice either way.",
        },
        {
          q: "Is this live, or recorded?",
          a: "Both, on purpose. Cinematic recorded lessons so 11 p.m. in Kerman still works. Live circles twice a week so you are never studying alone. Mentorship is always live.",
        },
        {
          q: "I already live outside Iran. Can I join?",
          a: "A third of the current cohort is in Türkiye, the UAE, Germany and Canada. Timezones are handled. Content is bilingual. The culture of the room remains Iranian — in the best sense.",
        },
        {
          q: "What do parents actually see?",
          a: "Hours studied, mock ranks, English scores, and a short mentor note every two weeks. No surveillance theatre. Just enough truth to replace the nightly interrogation.",
        },
        {
          q: "Is there a guarantee?",
          a: "If your mock rank does not improve within eight weeks of following the plan, we add senior 1:1 mentorship at no cost until it does. And a 14-day full refund if the method is not yours.",
        },
      ],
    },
    cta: {
      eyebrow: "Autumn cohort",
      title: "Eighty-six seats. Then we close the door.",
      subtitle:
        "We cap every cohort so mentors still know your name. Reserve a seat tonight — diagnostics open this Saturday.",
      primary: "Reserve my seat",
      secondary: "Talk on Telegram",
      fine: "No charge to reserve. You’ll choose Roshd, Noor or Kherad after the diagnostic.",
    },
    footer: {
      tagline: "Light, as a practice.",
      col1: "Package",
      col2: "Company",
      col3: "Care",
      links1: ["The studio", "Mentors", "Pricing", "Stories"],
      links2: ["About NOOR", "Scholars", "Careers", "Press"],
      links3: ["Help centre", "Parent guide", "Refunds", "Privacy"],
      cities: "Tehran  ·  Isfahan  ·  Toronto  ·  Berlin",
      copy: "© 2026 NOOR Academy. All rights reserved.",
      legal: "A product of Noor Roshd Educational Group.",
    },
    modal: {
      title: "Reserve your seat",
      subtitle: "A counsellor will confirm your diagnostic within one working day.",
      name: "Full name",
      namePh: "e.g. Neda Rahimi",
      phone: "Mobile number",
      phonePh: "0912 000 0000",
      city: "City",
      cityPh: "Select a city",
      level: "Current level",
      levelPh: "Select your level",
      plan: "Preferred plan",
      cities: [
        "Tehran",
        "Mashhad",
        "Isfahan",
        "Shiraz",
        "Tabriz",
        "Karaj",
        "Ahvaz",
        "Qom",
        "Kerman",
        "Rasht",
        "Outside Iran",
      ],
      levels: [
        "Grade 10",
        "Grade 11",
        "Grade 12 / Konkur year",
        "Konkur graduate",
        "University student",
      ],
      submit: "Confirm reservation",
      sending: "Reserving…",
      successTitle: "Your seat is held.",
      successBody:
        "A counsellor will message you on this number within one working day to book your diagnostic. Check Telegram.",
      close: "Close",
      error: "Please complete every field.",
    },
  },
  fa: {
    dir: "rtl" as const,
    nav: {
      features: "بسته",
      method: "روش",
      stories: "روایت‌ها",
      pricing: "شهریه",
      faq: "پرسش‌ها",
      cta: "رزرو صندلی",
    },
    hero: {
      eyebrow: "ورودی پاییز ۱۴۰۵  ·  ۸۶ صندلی باقی‌مانده",
      titleA: "مسیرت را از کنکور",
      titleB: "تا جهان روشن کن.",
      subtitle:
        "نور، بستهٔ آموزشی کامل برای دانش‌آموزان جاه‌طلب ایران — تسلط بر کنکور، تسلط بر زبان، و همراهی تا دانشگاه‌هایی که همه‌چیز را عوض می‌کنند.",
      cta: "رزرو صندلی من",
      cta2: "درون بسته را ببین",
      proof: "۴۸٬۰۰۰+ دانش‌آموز  ·  منتورهایی از شریف، تورنتو، ETH",
      stat1v: "۹۲٪",
      stat1l: "بهبود رتبه در آزمونک‌های ۸ هفته",
      stat2v: "۱٬۲۴۰",
      stat2l: "پذیرش بین‌المللی از ۲۰۲۱",
      stat3v: "۴.۹",
      stat3l: "میانگین رضایت خانواده",
      floating: "لایو با منتور شریف · امشب ۲۱:۰۰",
    },
    logos: {
      label: "دانش‌آموزان نور امروز این‌جا درس می‌خوانند",
      items: [
        "دانشگاه صنعتی شریف",
        "دانشگاه تهران",
        "امیرکبیر",
        "University of Toronto",
        "UBC",
        "McGill",
        "ETH Zürich",
        "TU Munich",
        "Imperial College",
        "NUS",
        "KAIST",
        "EPFL",
      ],
    },
    social: {
      a: "۴۸ هزار+",
      al: "دانش‌آموز همراه",
      b: "۹۲٪",
      bl: "بهبود رتبه",
      c: "۱.۲ هزار",
      cl: "پذیرش جهانی",
      d: "۱۸۰",
      dl: "منتور دانشمند",
    },
    features: {
      eyebrow: "درون بسته",
      title: "هرآنچه دانش‌آموز جدی واقعاً نیاز دارد — نه چیزی بیشتر.",
      subtitle:
        "یک سامانهٔ یکپارچه. ساخته‌شده برای کلاس ایرانی، تنظیم‌شده با استاندارد جهان، و هماهنگ با زندگی واقعی در خانه.",
      items: [
        {
          title: "موتور کنکور",
          desc: "مسیر تسلط کامل برای ریاضی، فیزیک، شیمی، زیست و علوم انسانی — درس‌های سینمایی، تمرین فاصله‌دار، و آزمونک‌های پیش‌بین رتبه.",
        },
        {
          title: "انگلیسی به‌سوی جهان",
          desc: "مسیر آیلتس و تافل ویژهٔ فارسی‌زبانان. از تردید تا ۷.۵+ — با اتاق‌های مکالمه‌ای که حس کلاس نمی‌دهند.",
        },
        {
          title: "منتورهایی که این راه را رفته‌اند",
          desc: "دانش‌آموختگان شریف، تهران، تورنتو، ETH و MIT. جلسات هفتگی یک‌به‌یک دربارهٔ کار، ترس، و گفتگو با خانواده.",
        },
        {
          title: "تمرین سازگار",
          desc: "دوازده هزار پرسش که تو را می‌شناسند. ضعف‌ها بالا می‌آیند. قوت‌ها کنار می‌روند. شب‌ها کوتاه‌تر می‌شوند، نه بلندتر.",
        },
        {
          title: "استودیوی تحصیل در خارج",
          desc: "انگیزه‌نامه، رزومه، توصیه‌نامه، شکار بورسیه، رقص ویزا. اتاق جنگ برای اپلای — نه یک وبلاگ.",
        },
        {
          title: "پرتال پیشرفت خانواده",
          desc: "پدر و مادر حقیقت را می‌بینند، بی‌بازجویی. ساعت، نمره، حال. ساخته‌شده برای خانه‌های ایرانی که اهمیت می‌دهند.",
        },
      ],
    },
    showcase: {
      eyebrow: "محصول",
      title: "یک استودیو، نه تلی از پی‌دی‌اف.",
      subtitle:
        "اپ را که باز کنی، هفته از پیش طراحی شده: یک درس، یک تمرین، یک حلقهٔ زنده، یک یادداشت منتور. زیبایی این‌جا تزئین نیست — شیوهٔ ماندن دانش‌آموز است.",
      points: [
        { k: "۴۲۰+", l: "ساعت درس سینمایی" },
        { k: "۱۲٬۰۰۰", l: "پرسش با حل ویدیویی" },
        { k: "هفتگی", l: "حلقه‌های زنده به فارسی و انگلیسی" },
        { k: "خصوصی", l: "رشتهٔ منتور، همیشه روشن" },
      ],
      caption: "استودیوی نور — درس، آزمونک، یادداشت منتور، در یک جای آرام.",
      modulesTitle: "سال تو، تصنیف‌شده",
      modules: [
        { t: "نقشه", d: "تشخیص، نقشهٔ شکاف‌ها، معماری مطالعه." },
        { t: "تسلط", d: "محتوای عمیق و تمرین سازگار فصل‌به‌فصل." },
        { t: "فشار", d: "آزمون کامل با زمان واقعی کنکور." },
        { t: "عروج", d: "انگلیسی، مقاله‌ها، و اپلای جهان." },
      ],
    },
    benefits: {
      eyebrow: "چرا خانواده‌ها نور را برمی‌گزینند",
      title: "نتیجه‌ای که می‌شود سر ناهار جمعه روی میز گذاشت.",
      items: [
        {
          title: "رتبه‌ای که حرکت می‌کند",
          desc: "دانش‌آموزان به‌طور میانگین ۱٬۸۰۰ پله در هشت هفته آزمونک بالا می‌آیند — چون تمرین دیگر تصادفی نیست.",
        },
        {
          title: "انگلیسی‌ای که در را باز می‌کند",
          desc: "روشی اختصاصی از فارسی به انگلیسی. دیگر گورستان دستور زبان نه. اول گفتار، بعد نمره.",
        },
        {
          title: "طرح ب و ج بزرگسالانه",
          desc: "شریف یک رؤیاست. تورنتو هم. کارشناسی ارشد بورسیه در آلمان هم. سه آینده طراحی می‌کنیم، نه یک اضطراب.",
        },
        {
          title: "کسی در کنارت",
          desc: "تنهایی ساعت دو شب فرهنگ کنکور این‌جا تمام می‌شود. منتوری که جواب می‌دهد. حلقه‌ای که می‌ماند.",
        },
      ],
      quote:
        "ما امید نمی‌فروشیم. هفته‌ای می‌فروشیم که واقعاً تمام می‌شود — و سالی که انباشته می‌گردد.",
      quoteBy: "دکتر لیلا حسینی، مدیر آموزشی، عضو پیشین هیئت علمی شریف",
    },
    method: {
      eyebrow: "روش",
      title: "چهار حرکت. یک سال. بی‌هرج‌ومرج.",
      steps: [
        {
          n: "۰۱",
          t: "نقشه",
          d: "تشخیص ۹۰ دقیقه‌ای. رتبه، شکاف‌ها، ریتم خانه را می‌شناسیم — بعد معماری را می‌نویسیم.",
        },
        {
          n: "۰۲",
          t: "تراش",
          d: "کار روزانهٔ استودیو: ۷۵ دقیقهٔ متمرکز، هرگز بیش از آنچه به خانواده قول دادی. عمق به‌جای نمایش.",
        },
        {
          n: "۰۳",
          t: "فشار",
          d: "آزمونک دوهفتگی. پیش‌بینی رتبه. تنظیم دوباره هر یکشنبه شب با منتور.",
        },
        {
          n: "۰۴",
          t: "عروج",
          d: "اپلای، مصاحبه، انگلیسی، و گفتگو با پدر و مادر دربارهٔ زندگی‌ای که می‌خواهی.",
        },
      ],
    },
    stories: {
      eyebrow: "صداها",
      title: "آن‌ها جایی نشستند که تو نشسته‌ای.",
      subtitle: "چهار دانش‌آموز. چهار شهر. چهار جور شدن.",
      items: [
        {
          name: "ندا رحیمی",
          meta: "تهران  ←  دانشگاه تورنتو",
          quote:
            "نور اولین جایی بود که جاه‌طلبی‌ام را جدی گرفت، نه یک دوره. منتورم انگیزه‌نامه‌ام را سه بار بازنویسی کرد. تورنتو در مارس گفت بله.",
        },
        {
          name: "آرش کریمی",
          meta: "اصفهان  ←  شریف، رتبه ۴۷",
          quote:
            "در کتاب تست غرق بودم. موتور نشانم داد ۴۰٪ غلط تمرین می‌کنم. هشت هفته بعد رتبه‌ام دوهزار پله آمده بود بالا.",
        },
        {
          name: "سارا ابراهیمی",
          meta: "شیراز  ←  آیلتس ۸، TU مونیخ",
          quote:
            "انگلیسی همیشه درِ قفل بود. اتاق‌های مکالمه حس حرف زدن با دخترخاله‌ها را داشت، نه دوربین. آلمان بقیه‌اش را تأمین کرد.",
        },
        {
          name: "رضا مهدوی",
          meta: "مشهد  ←  مک‌گیل، بورسیه کامل",
          quote:
            "پدر و مادرم باید طرح می‌دیدند، نه رؤیا. پرتال خانواده و نقشهٔ سه‌مسیره، گفتگوی سر میز آشپزخانه را ممکن کرد.",
        },
      ],
    },
    pricing: {
      eyebrow: "سرمایه‌گذاری",
      title: "عمق همراهی را انتخاب کن.",
      subtitle:
        "پرداخت به تومان، سه قسط، یا دلار. هر طرح استودیو را دارد. تفاوت در منتورشیپ است.",
      note: "آزمایش ۱۴ روزهٔ آرام. اگر روش مال تو نبود، بازپرداخت کامل — بی‌بازجویی.",
      popular: "پراختیارترین",
      cta: "با این طرح شروع کن",
      toman: "تومان",
      or: "یا",
      plans: [
        {
          id: "roshd",
          name: "رشد",
          nameFaHint: "Roshd",
          price: "۲.۴ میلیون",
          usd: "$۴۹",
          period: "یک سال دسترسی به استودیو",
          desc: "برای دانش‌آموز خودراهبر که موتور را می‌خواهد، نه همراهان را.",
          features: [
            "استودیوی کامل کنکور و انگلیسی",
            "۱۲٬۰۰۰ پرسش سازگار",
            "حلقه‌های زندهٔ هفتگی",
            "پرتال پیشرفت خانواده",
            "آزمونک پیش‌بین رتبه",
            "جامعهٔ ۴۸ هزار دانش‌آموز",
          ],
        },
        {
          id: "noor",
          name: "نور",
          nameFaHint: "Noor",
          price: "۶.۹ میلیون",
          usd: "$۱۴۹",
          period: "یک سال، بستهٔ کامل",
          desc: "بستهٔ آموزشی همان‌طور که طراحی شد. استودیو، منتور، اپلای.",
          features: [
            "همهٔ رشد",
            "منتور یک‌به‌یک دوهفتگی (۴۵ دقیقه)",
            "استودیوی تحصیل خارج و آزمایشگاه SOP",
            "صندلی اولویت‌دار لایو",
            "کارگاه شورت‌لیست دانشگاه",
            "جلسهٔ خانواده هر ترم",
            "رشتهٔ منتور در واتساپ / تلگرام",
          ],
        },
        {
          id: "kherad",
          name: "خرد",
          nameFaHint: "Kherad",
          price: "۱۸.۹ میلیون",
          usd: "$۳۹۹",
          period: "یک سال، همراهی نخبگان",
          desc: "برای خانواده‌ای که دانشمندی خصوصی در خانه می‌خواهد — بی‌آنکه یکی در خانه باشد.",
          features: [
            "همهٔ نور",
            "یک‌به‌یک هفتگی با دانشمند ارشد",
            "تحلیل خصوصی آزمونک",
            "اتاق جنگ اپلای (۸ ساعت)",
            "تمرین مصاحبه",
            "معرفی مستقیم به دانش‌آموختگان دانشگاه هدف",
            "صندلی تضمینی در هر مسترکلاس",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "پرسش‌ها",
      title: "آنچه سر میز پرسیده می‌شود.",
      items: [
        {
          q: "نور فقط برای کنکور است؟",
          a: "نه. کنکور ستون فقرات بسیاری از دانش‌آموزان ماست، اما بسته سه لایه دارد: تسلط بر آزمون ملی، تسلط بر انگلیسی، و اپلای بین‌المللی. دانشجویان دانشگاه از نور برای آیلتس، انگلیسی پژوهشی و اپلای ارشد استفاده می‌کنند.",
        },
        {
          q: "پرداخت تومانی ممکن است؟ قسط دارید؟",
          a: "بله. کارت شتاب و سه قسط بدون بهره. خانواده‌های خارج از ایران می‌توانند دلاری یا یورویی بپردازند. فاکتور شفاف است.",
        },
        {
          q: "زنده است یا ضبط‌شده؟",
          a: "هر دو، از روی عمد. درس‌های سینمایی ضبط‌شده تا ساعت یازده شب کرمان هم کار کند. حلقهٔ زنده هفته‌ای دو بار تا تنها نمانی. منتورشیپ همیشه زنده است.",
        },
        {
          q: "خارج از ایران زندگی می‌کنم. می‌توانم بیایم؟",
          a: "یک‌سوم ورودی فعلی در ترکیه، امارات، آلمان و کاناداست. ساعت‌ها مدیریت می‌شود. محتوا دوزبانه است. فرهنگ اتاق ایرانی می‌ماند — به بهترین معنا.",
        },
        {
          q: "پدر و مادر دقیقاً چه می‌بینند؟",
          a: "ساعت مطالعه، رتبهٔ آزمونک، نمرهٔ انگلیسی، و یادداشت کوتاه منتور هر دو هفته. نمایش مراقبت نیست. فقط آن‌قدر حقیقت که بازجویی شبانه را عوض کند.",
        },
        {
          q: "ضمانت دارید؟",
          a: "اگر رتبهٔ آزمونک تا هشت هفته پس از پیروی از برنامه بهتر نشود، منتورشیپ ارشد رایگان اضافه می‌شود تا بهتر شود. و بازپرداخت ۱۴ روزه اگر روش مال تو نبود.",
        },
      ],
    },
    cta: {
      eyebrow: "ورودی پاییز",
      title: "هشتادوشش صندلی. بعد در را می‌بندیم.",
      subtitle:
        "هر ورودی را محدود می‌کنیم تا منتور هنوز نامت را بداند. امشب صندلی رزرو کن — تشخیص‌ها شنبه باز می‌شود.",
      primary: "رزرو صندلی من",
      secondary: "گفتگو در تلگرام",
      fine: "رزرو رایگان است. بعد از تشخیص، رشد یا نور یا خرد را انتخاب می‌کنی.",
    },
    footer: {
      tagline: "نور، به‌مثابهٔ تمرین.",
      col1: "بسته",
      col2: "مجموعه",
      col3: "مراقبت",
      links1: ["استودیو", "منتورها", "شهریه", "روایت‌ها"],
      links2: ["دربارهٔ نور", "دانشمندان", "همکاری", "رسانه"],
      links3: ["مرکز راهنمایی", "راهنمای والدین", "بازپرداخت", "حریم خصوصی"],
      cities: "تهران  ·  اصفهان  ·  تورنتو  ·  برلین",
      copy: "© ۲۰۲۶ آکادمی نور. همهٔ حقوق محفوظ است.",
      legal: "محصول گروه آموزشی نور رشد.",
    },
    modal: {
      title: "رزرو صندلی",
      subtitle: "مشاور تا یک روز کاری تشخیص را قطعی می‌کند.",
      name: "نام کامل",
      namePh: "مثلاً ندا رحیمی",
      phone: "شماره موبایل",
      phonePh: "۰۹۱۲ ۰۰۰ ۰۰۰۰",
      city: "شهر",
      cityPh: "شهر را انتخاب کنید",
      level: "پایهٔ فعلی",
      levelPh: "پایه را انتخاب کنید",
      plan: "طرح مورد نظر",
      cities: [
        "تهران",
        "مشهد",
        "اصفهان",
        "شیراز",
        "تبریز",
        "کرج",
        "اهواز",
        "قم",
        "کرمان",
        "رشت",
        "خارج از ایران",
      ],
      levels: [
        "پایه دهم",
        "پایه یازدهم",
        "پایه دوازدهم / سال کنکور",
        "فارغ‌التحصیل کنکور",
        "دانشجو",
      ],
      submit: "تأیید رزرو",
      sending: "در حال رزرو…",
      successTitle: "صندلی‌ات نگه داشته شد.",
      successBody:
        "مشاور تا یک روز کاری روی همین شماره پیام می‌دهد تا تشخیص را زمان‌بندی کند. تلگرام را چک کن.",
      close: "بستن",
      error: "لطفاً همهٔ فیلدها را کامل کن.",
    },
  },
} as const;

export type Copy = (typeof copy)["en"];
