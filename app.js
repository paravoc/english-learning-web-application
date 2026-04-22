(() => {
  const STORAGE_KEY = 'danobius-static-progress-v3';
  const XP_PER_LEVEL = 120;
  const DAILY_GOAL = 60;
  const RUSSIAN_ALPHABET = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');

  const lessons = [
    {
      id: 'present-simple',
      unit: 'Unit 1',
      lane: 'core',
      title: 'Present Simple',
      subtitle: 'Привычки, рутина и постоянные факты',
      icon: '☀️',
      color: '#58cc02',
      xp: 35,
      theory: {
        pattern: 'I/You/We/They + verb, He/She/It + verb-s',
        use: 'Нужно для привычек, расписания, фактов и всего, что происходит регулярно.',
        memory: 'Если действие можно поставить в календарь как рутину, чаще всего это Present Simple.',
        focus: [
          'Сигналы: always, usually, often, every day, every week.',
          'После he, she, it почти всегда нужен -s: likes, goes, watches.',
          'В вопросах и отрицаниях помогают do и does.',
        ],
        traps: [
          'Не ставь am/is/are перед обычным глаголом.',
          'Не забывай окончание -s в третьем лице.',
        ],
      },
      deepDive: [
        'Это базовое время для жизни, привычек, учебы и отношений. Когда ты рассказываешь, как обычно проходит день у тебя или у Вероники, это почти всегда оно.',
        'Хороший шаблон на автомате: I usually..., Veronica often..., We always....',
      ],
      examples: [
        { en: 'I text Veronica every evening.', ru: 'Я пишу Веронике каждый вечер.' },
        { en: 'Veronica usually does her English homework after lunch.', ru: 'Вероника обычно делает домашку по английскому после обеда.' },
      ],
      slang: [
        '"How are you doing?" звучит живее, чем просто "How are you?".',
        '"I’m good" в живой речи используется чаще, чем слишком учебное "I am fine".',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный перевод',
        question: 'Dan usually calls Veronica after class.',
        options: [
          'Дан обычно звонит Веронике после пары.',
          'Дан сейчас звонит Веронике после пары.',
          'Дан позвонил Веронике после пары.',
        ],
        answer: 0,
        explanation: 'Usually показывает привычку, значит нужен Present Simple.',
      },
    },
    {
      id: 'present-continuous',
      unit: 'Unit 2',
      lane: 'core',
      title: 'Present Continuous',
      subtitle: 'То, что происходит прямо сейчас',
      icon: '🎧',
      color: '#19b5fe',
      xp: 35,
      theory: {
        pattern: 'am/is/are + verb-ing',
        use: 'Нужен, когда действие идет в процессе сейчас или в текущий временный период.',
        memory: 'Если можно показать пальцем на действие "вот прямо сейчас", это обычно Continuous.',
        focus: [
          'Сигналы: now, right now, at the moment.',
          'Глагол to be обязателен: I am learning, she is reading.',
          'Подходит для ближайших договоренностей: We are meeting later.',
        ],
        traps: [
          'Не говори "I watching". Нужно "I am watching".',
          'Глаголы know, love, understand обычно не любят Continuous.',
        ],
      },
      deepDive: [
        'Это время делает речь живой, потому что помогает комментировать происходящее прямо в моменте: сейчас пишу, сейчас иду, сейчас слушаю.',
        'Очень полезно в переписке: I’m coming, I’m waiting, I’m reading your message.',
      ],
      examples: [
        { en: 'We are watching a short English video right now.', ru: 'Мы сейчас смотрим короткое видео на английском.' },
        { en: 'Veronica is smiling because your message is cute.', ru: 'Вероника улыбается, потому что твое сообщение милое.' },
      ],
      slang: [
        '"I’m texting her now" звучит очень естественно для переписки.',
        '"Cute" часто используют про сообщение, фото или реакцию.',
      ],
      quiz: {
        type: 'input',
        prompt: 'Напиши по-английски',
        question: 'Сейчас мы слушаем диалог вместе.',
        answers: ['we are listening to the dialogue together now'],
        explanation: 'Для процесса сейчас нужен am/is/are + ing.',
      },
    },
    {
      id: 'past-simple',
      unit: 'Unit 3',
      lane: 'core',
      title: 'Past Simple',
      subtitle: 'Завершенные события в прошлом',
      icon: '📚',
      color: '#9956f6',
      xp: 35,
      theory: {
        pattern: 'verb-2 / did + verb',
        use: 'Подходит для законченного факта в прошлом.',
        memory: 'Если в предложении есть yesterday, last night или two hours ago, сначала проверь Past Simple.',
        focus: [
          'Сигналы: yesterday, last week, two hours ago.',
          'В вопросах и отрицаниях работает did.',
          'Неправильные глаголы лучше учить отдельным набором.',
        ],
        traps: [
          'После did идет базовая форма глагола.',
          'Не смешивай did call и called в одном утверждении.',
        ],
      },
      deepDive: [
        'Это время нужно для историй, воспоминаний и всего, что уже завершилось. Очень часто используется в разговоре о вчера, прошлом вечере, выходных и переписке.',
      ],
      examples: [
        { en: 'Yesterday I wrote Veronica a long message.', ru: 'Вчера я написал Веронике длинное сообщение.' },
        { en: 'We watched a movie and laughed a lot last night.', ru: 'Вчера вечером мы посмотрели фильм и много смеялись.' },
      ],
      slang: [
        '"She texted me" звучит современнее, чем "she wrote me a message".',
        '"We grabbed coffee" часто используют вместо "we drank coffee together".',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильное слово',
        question: 'Yesterday Veronica ___ a funny meme to me.',
        options: ['sends', 'sent', 'has sent'],
        answer: 1,
        explanation: 'Yesterday требует Past Simple.',
      },
    },
    {
      id: 'future-simple',
      unit: 'Unit 4',
      lane: 'core',
      title: 'Future Simple',
      subtitle: 'Обещания, быстрые решения и прогнозы',
      icon: '🚀',
      color: '#58cc02',
      xp: 35,
      theory: {
        pattern: 'will + verb',
        use: 'Подходит для спонтанных решений, обещаний и прогнозов.',
        memory: 'Если решение рождается прямо в моменте, чаще всего нужен will.',
        focus: [
          'Сигналы: I think, maybe, probably, I promise.',
          'После will идет базовая форма глагола.',
          'Для заранее продуманного плана часто используют going to.',
        ],
        traps: [
          'Не говори "will to call".',
          'Не путай will и going to без причины.',
        ],
      },
      deepDive: [
        'Future Simple очень полезен в живом общении: обещания, быстрые решения, фразы поддержки и договаривания на ходу.',
      ],
      examples: [
        { en: 'I think Veronica will like this lesson.', ru: 'Думаю, Веронике понравится этот урок.' },
        { en: 'I will call Veronica in the evening.', ru: 'Я позвоню Веронике вечером.' },
      ],
      slang: [
        '"Don’t worry" — очень частая успокаивающая фраза.',
        'На слух часто звучит I’ll, we’ll, she’ll.',
      ],
      quiz: {
        type: 'input',
        prompt: 'Напиши по-английски',
        question: 'Я позвоню Веронике вечером.',
        answers: ['i will call veronica in the evening'],
        explanation: 'После will идет базовая форма call.',
      },
    },
    {
      id: 'present-perfect',
      unit: 'Unit 5',
      lane: 'perfect',
      title: 'Present Perfect',
      subtitle: 'Когда важен результат сейчас',
      icon: '✨',
      color: '#ffb703',
      xp: 40,
      theory: {
        pattern: 'have/has + verb-3',
        use: 'Используй, когда важно не время в прошлом, а результат к текущему моменту.',
        memory: 'Смотри на эффект в настоящем: сообщение уже отправлено, урок уже закончен.',
        focus: [
          'Сигналы: already, just, yet, ever, never.',
          'Have для I/you/we/they, has для he/she/it.',
          'Подходит для опыта: I have never seen that movie.',
        ],
        traps: [
          'Не ставь yesterday рядом с Present Perfect.',
          'Нужна третья форма: sent, written, gone, done.',
        ],
      },
      deepDive: [
        'Это не про "когда именно было", а про "что есть сейчас в итоге". Поэтому оно так часто встречается в сообщениях и в разговоре о свежих результатах.',
      ],
      examples: [
        { en: 'I have already sent Veronica a voice message.', ru: 'Я уже отправил Веронике голосовое сообщение.' },
        { en: 'We have just finished today’s lesson.', ru: 'Мы только что закончили сегодняшний урок.' },
      ],
      slang: [
        'В переписке часто пишут "just sent" или "already did".',
        '"I’ve never missed her call" звучит коротко и естественно.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вариант',
        question: 'I ___ already learned these words.',
        options: ['have', 'am', 'did'],
        answer: 0,
        explanation: 'Already и результат к текущему моменту тянут Present Perfect.',
      },
    },
    {
      id: 'present-perfect-continuous',
      unit: 'Unit 6',
      lane: 'perfect',
      title: 'Present Perfect Continuous',
      subtitle: 'Как долго действие идет до настоящего',
      icon: '⏱️',
      color: '#ff7e67',
      xp: 40,
      theory: {
        pattern: 'have/has been + verb-ing',
        use: 'Показывает длительность процесса, который начался раньше и все еще связан с настоящим.',
        memory: 'Если вопрос звучит как "как долго?" и процесс все еще важен сейчас, это оно.',
        focus: [
          'Сигналы: for, since, all day, lately.',
          'For — длительность, since — стартовая точка.',
          'Часто идет со study, work, wait, practice.',
        ],
        traps: [
          'Не путай for и since.',
          'Не выбрасывай been из конструкции.',
        ],
      },
      deepDive: [
        'Это время очень полезно для живого общения о процессе: давно жду, давно учу, давно практикую. Оно делает речь гибче и взрослее.',
      ],
      examples: [
        { en: 'Veronica has been studying English since morning.', ru: 'Вероника занимается английским с утра.' },
        { en: 'We have been practicing together for three weeks.', ru: 'Мы занимаемся вместе уже три недели.' },
      ],
      slang: [
        '"I’ve been waiting for your text" звучит очень по-живому.',
        '"All day" отлично усиливает ощущение длительности.',
      ],
      quiz: {
        type: 'input',
        prompt: 'Напиши по-английски',
        question: 'Я жду сообщение от Вероники с утра.',
        answers: ['i have been waiting for a message from veronica since morning'],
        explanation: 'Since morning показывает стартовую точку, значит нужен have been + ing.',
      },
    },
    {
      id: 'past-continuous',
      unit: 'Unit 7',
      lane: 'perfect',
      title: 'Past Continuous',
      subtitle: 'Процесс в конкретный момент прошлого',
      icon: '🌧️',
      color: '#3b82f6',
      xp: 40,
      theory: {
        pattern: 'was/were + verb-ing',
        use: 'Показывает процесс, который шел в конкретный момент прошлого.',
        memory: 'Представь стоп-кадр из прошлого: что было в процессе в тот момент?',
        focus: [
          'Часто идет рядом с Past Simple.',
          'When обычно вводит короткое событие.',
          'While удобно связывает два параллельных процесса.',
        ],
        traps: [
          'Не говори "was do". Нужно "was doing".',
          'Короткое завершенное событие остается в Past Simple.',
        ],
      },
      deepDive: [
        'Это время помогает рассказывать историю как кино: сначала идет фон, потом в него врезается короткое событие.',
      ],
      examples: [
        { en: 'Two hours ago Veronica was doing homework and it started raining.', ru: 'Два часа назад Вероника делала уроки, и пошел дождь.' },
        { en: 'I was walking home when Veronica called.', ru: 'Я шел домой, когда Вероника позвонила.' },
      ],
      slang: [
        '"It started raining" — очень частая живая фраза.',
        '"Walking home" обычно говорят без to.',
      ],
      quiz: {
        type: 'input',
        prompt: 'Напиши по-английски',
        question: 'Я шел домой, когда Вероника позвонила.',
        answers: ['i was walking home when veronica called'],
        explanation: 'Фоновый процесс — Past Continuous, короткое событие — Past Simple.',
      },
    },
    {
      id: 'past-perfect',
      unit: 'Unit 8',
      lane: 'perfect',
      title: 'Past Perfect',
      subtitle: 'Что произошло раньше другого прошлого события',
      icon: '🧩',
      color: '#ffb703',
      xp: 40,
      theory: {
        pattern: 'had + verb-3',
        use: 'Нужно, когда одно прошлое действие случилось раньше другого.',
        memory: 'Если в прошлом есть "сначала" и "потом", более ранний факт обычно получает had + V3.',
        focus: [
          'Сигналы: before, after, by the time.',
          'Had одинаковый для всех лиц.',
          'Удобно для историй и объяснения причин.',
        ],
        traps: [
          'Не ставь два Past Simple, если важен порядок событий.',
          'Нужна третья форма глагола.',
        ],
      },
      deepDive: [
        'Это время редко нужно в каждом сообщении, но без него сложно естественно объяснять последовательность событий и причины.',
      ],
      examples: [
        { en: 'By that time Veronica had already finished her homework.', ru: 'К тому моменту Вероника уже закончила уроки.' },
        { en: 'I had opened the app before Veronica texted me.', ru: 'Я открыл приложение до того, как Вероника мне написала.' },
      ],
      slang: [
        '"By that time" удобно запомнить как готовый маркер.',
        '"I had already done it" звучит естественно в объяснениях.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вариант',
        question: 'By the time I called, Veronica ___ her homework.',
        options: ['finished', 'had finished', 'was finishing'],
        answer: 1,
        explanation: 'Сначала она закончила, потом ты позвонил.',
      },
    },
    {
      id: 'past-perfect-continuous',
      unit: 'Unit 9',
      lane: 'perfect',
      title: 'Past Perfect Continuous',
      subtitle: 'Как долго длился процесс до точки в прошлом',
      icon: '🕰️',
      color: '#ff7e67',
      xp: 45,
      theory: {
        pattern: 'had been + verb-ing',
        use: 'Показывает длительность процесса до определенного момента в прошлом.',
        memory: 'Если важен долгий процесс перед прошлым результатом, смотри в сторону had been + ing.',
        focus: [
          'Часто идет с for, since, before, because.',
          'Хорошо объясняет усталость, эмоции и причину состояния.',
          'Фокус именно на длительности, а не на факте.',
        ],
        traps: [
          'Не выбрасывай been.',
          'Не используй это время там, где достаточно Past Perfect.',
        ],
      },
      deepDive: [
        'Это время редко встречается в простых учебниках, но очень полезно для сильного английского и логичных историй.',
      ],
      examples: [
        { en: 'Veronica was tired because she had been preparing for a long time.', ru: 'Вероника устала, потому что долго готовилась.' },
        { en: 'I had been revising words for two hours before she called.', ru: 'Я повторял слова два часа до того, как она позвонила.' },
      ],
      slang: [
        'Шаблон "was tired because she had been..." очень полезен для живых историй.',
        '"For two hours" сразу подсказывает длительность.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный перевод',
        question: 'I was tired because I had been studying English all night.',
        options: [
          'Я устал, потому что учил английский всю ночь.',
          'Я устаю, потому что учу английский всю ночь.',
          'Я устану, потому что буду учить английский всю ночь.',
        ],
        answer: 0,
        explanation: 'Есть прошлый результат и длительный процесс до него.',
      },
    },
    {
      id: 'future-continuous',
      unit: 'Unit 10',
      lane: 'future',
      title: 'Future Continuous',
      subtitle: 'Процесс в конкретный момент будущего',
      icon: '🌤️',
      color: '#19b5fe',
      xp: 40,
      theory: {
        pattern: 'will be + verb-ing',
        use: 'Показывает действие, которое будет в процессе в определенный момент будущего.',
        memory: 'Поставь точку в будущем и спроси: что будет идти в процессе именно тогда?',
        focus: [
          'Сигналы: this time tomorrow, at 8 pm.',
          'Подходит для фоновых будущих действий.',
          'Часто звучит мягче, чем Future Simple.',
        ],
        traps: [
          'Не забывай be: will be doing.',
          'Не путай с going to, если нужен именно процесс.',
        ],
      },
      deepDive: [
        'Это очень удобное время для планов и мягких формулировок. С ним речь звучит спокойнее и естественнее.',
      ],
      examples: [
        { en: 'Tomorrow at this time Veronica will be going home.', ru: 'Завтра в это время Вероника будет ехать домой.' },
        { en: 'At nine we will be doing our English practice.', ru: 'В девять мы будем заниматься английским.' },
      ],
      slang: [
        '"I’ll be waiting" звучит мягко и естественно.',
        '"This time tomorrow" удобно учить как цельный маркер.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вариант',
        question: 'Tomorrow at eight Veronica ___ home.',
        options: ['goes', 'will go', 'will be going'],
        answer: 2,
        explanation: 'Есть конкретный момент в будущем и процесс в этот момент.',
      },
    },
    {
      id: 'future-perfect',
      unit: 'Unit 11',
      lane: 'future',
      title: 'Future Perfect',
      subtitle: 'Результат к будущему дедлайну',
      icon: '🏁',
      color: '#ffb703',
      xp: 40,
      theory: {
        pattern: 'will have + verb-3',
        use: 'Показывает, что к будущему моменту результат уже будет готов.',
        memory: 'Если есть дедлайн и важен готовый итог к нему, это Future Perfect.',
        focus: [
          'Сигналы: by Friday, by summer, by the time.',
          'Фокус на результате, а не на процессе.',
          'Очень удобно для целей и сроков.',
        ],
        traps: [
          'Не говори "will has finished".',
          'Не путай с Future Simple, если важен дедлайн.',
        ],
      },
      deepDive: [
        'Это время особенно полезно, когда говоришь о планах и целях: к пятнице сделаем, к лету выучим, к вечеру закончим.',
      ],
      examples: [
        { en: 'By Friday we will have learned fifty new words.', ru: 'К пятнице мы выучим пятьдесят новых слов.' },
        { en: 'By summer Veronica will have learned all these phrases.', ru: 'К лету Вероника выучит все эти фразы.' },
      ],
      slang: [
        '"By tonight" и "by Friday" очень часто встречаются в речи про планы.',
        '"We’ll have finished by then" звучит коротко и естественно.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный перевод',
        question: 'By Friday we will have learned fifty new words.',
        options: [
          'К пятнице мы будем учить пятьдесят новых слов.',
          'К пятнице мы выучим пятьдесят новых слов.',
          'В пятницу мы выучили пятьдесят новых слов.',
        ],
        answer: 1,
        explanation: 'By Friday показывает дедлайн в будущем.',
      },
    },
    {
      id: 'future-perfect-continuous',
      unit: 'Unit 12',
      lane: 'future',
      title: 'Future Perfect Continuous',
      subtitle: 'Как долго действие будет идти к будущей точке',
      icon: '📈',
      color: '#17b890',
      xp: 45,
      theory: {
        pattern: 'will have been + verb-ing',
        use: 'Показывает длительность процесса к определенной точке в будущем.',
        memory: 'Если хочется сказать "к декабрю уже год как...", смотри сюда.',
        focus: [
          'Часто идет с for и by.',
          'Подходит для долгих процессов: study, work, practice.',
          'Фокус на накопленном времени.',
        ],
        traps: [
          'Не ломай длинную конструкцию: will have been studying.',
          'Используй там, где реально важна длительность.',
        ],
      },
      deepDive: [
        'Это редкое время, но оно сильно расширяет диапазон речи и помогает понимать более сложный английский.',
      ],
      examples: [
        { en: 'By December Veronica will have been studying English for a year.', ru: 'К декабрю Вероника будет изучать английский уже год.' },
        { en: 'By next month we will have been practicing together for six months.', ru: 'К следующему месяцу мы будем заниматься вместе уже полгода.' },
      ],
      slang: [
        'Это редкое время в разговоре, но полезное для сильной базы.',
        '"For a year" и "for six months" сразу подсказывают длительность.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вариант',
        question: 'By December Veronica ___ English for a year.',
        options: ['will study', 'will have learned', 'will have been studying'],
        answer: 2,
        explanation: 'Здесь важна именно длительность к будущей точке.',
      },
    },
    {
      id: 'articles',
      unit: 'Unit 13',
      lane: 'grammar',
      title: 'Articles: a / an / the',
      subtitle: 'Как выбирать артикль без паники',
      icon: '🧠',
      color: '#58cc02',
      xp: 35,
      theory: {
        pattern: 'a + singular noun, an + vowel sound, the + specific thing',
        use: 'Артикли показывают, говорим ли мы про что-то впервые, вообще или про конкретную вещь.',
        memory: 'A/an — один из многих. The — тот самый конкретный.',
        focus: [
          'A cat = какая-то кошка, the cat = именно эта кошка.',
          'An идет перед гласным звуком: an apple, an hour.',
          'The нужен, когда обоим понятно, о чем идет речь.',
        ],
        traps: [
          'Смотри не на букву, а на звук: an hour, a university.',
          'Не ставь a/an перед неисчисляемыми существительными без причины.',
        ],
      },
      table: {
        title: 'Quick table',
        headers: ['Article', 'Когда', 'Пример'],
        rows: [
          ['a', 'первый раз, один предмет', 'a message'],
          ['an', 'первый раз, гласный звук', 'an answer'],
          ['the', 'конкретный предмет', 'the message from Veronica'],
        ],
      },
      deepDive: [
        'Это одна из главных тем, где учебники часто все усложняют. Для старта достаточно трех вопросов: вещь одна? впервые? конкретная?',
      ],
      examples: [
        { en: 'I sent Veronica a message and the message was really cute.', ru: 'Я отправил Веронике сообщение, и это сообщение было очень милым.' },
        { en: 'She bought an apple before the lesson.', ru: 'Она купила яблоко перед уроком.' },
      ],
      slang: [
        'В живой речи артикли могут звучать очень коротко, но пропускать их все равно нельзя.',
      ],
      quiz: {
        type: 'grid',
        prompt: 'Выбери карточку с правильным вариантом',
        question: 'Which one is correct?',
        options: [
          { label: 'a apple', art: '🍎' },
          { label: 'an apple', art: '🍏' },
          { label: 'the apple a', art: '🍎' },
          { label: 'apple the', art: '🍐' },
        ],
        answer: 1,
        explanation: 'Apple начинается с гласного звука, значит нужен an.',
      },
    },
    {
      id: 'object-pronouns',
      unit: 'Unit 14',
      lane: 'grammar',
      title: 'Object Pronouns',
      subtitle: 'me, him, her, us, them без путаницы',
      icon: '👥',
      color: '#19b5fe',
      xp: 35,
      theory: {
        pattern: 'I → me, he → him, she → her, we → us, they → them',
        use: 'Нужны, когда местоимение не подлежащее, а объект действия.',
        memory: 'Кто делает действие? subject pronoun. На кого действует? object pronoun.',
        focus: [
          'I like her. Veronica called me. She sent us a meme.',
          'После thank, call, text, invite, love обычно нужен объект.',
          'После глагола и после предлога часто стоит object pronoun.',
        ],
        traps: [
          'Не говори "She called I". Нужно "She called me".',
          'You остается you и как subject, и как object.',
        ],
      },
      table: {
        title: 'Subject vs object',
        headers: ['Subject', 'Object', 'Перевод'],
        rows: [
          ['I', 'me', 'я / меня, мне'],
          ['you', 'you', 'ты, вы / тебя, тебе, вас'],
          ['he', 'him', 'он / его, ему'],
          ['she', 'her', 'она / ее, ей'],
          ['we', 'us', 'мы / нас, нам'],
          ['they', 'them', 'они / их, им'],
        ],
      },
      deepDive: [
        'Это ровно та тема, которую часто объясняют слишком поверхностно. Главная идея простая: если местоимение получает действие, это объектная форма.',
      ],
      examples: [
        { en: 'I thank him, and she reads him a book.', ru: 'Я благодарю его, и она читает ему книгу.' },
        { en: 'Veronica called me when the rain started.', ru: 'Вероника позвонила мне, когда начался дождь.' },
      ],
      slang: [
        '"Text me" и "call me" — очень частые живые фразы.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вариант',
        question: 'Veronica invited ___ to the cafe.',
        options: ['I', 'me', 'my'],
        answer: 1,
        explanation: 'После invited нужен object pronoun: me.',
      },
    },
    {
      id: 'question-order',
      unit: 'Unit 15',
      lane: 'grammar',
      title: 'Question Order',
      subtitle: 'Как строить вопросы без русского порядка слов',
      icon: '❓',
      color: '#ffb703',
      xp: 35,
      theory: {
        pattern: 'Question word + auxiliary + subject + verb',
        use: 'Порядок слов в английском вопросе жестче, чем в русском.',
        memory: 'Сначала помощник, потом подлежащее, потом основной глагол.',
        focus: [
          'Where do you live? Why did she call? What are you doing?',
          'С вопросительным словом или без него порядок все равно сохраняется.',
          'Если глагол to be основной, он сам встает вперед.',
        ],
        traps: [
          'Не копируй русский порядок слов один в один.',
          'Не забывай do/does/did там, где нет to be или can/will.',
        ],
      },
      table: {
        title: 'Question frame',
        headers: ['Тип', 'Формула', 'Пример'],
        rows: [
          ['Present Simple', 'do/does + subject + verb', 'Do you like coffee?'],
          ['Past Simple', 'did + subject + verb', 'Did Veronica call you?'],
          ['Continuous', 'am/is/are + subject + verb-ing', 'What are you doing?'],
        ],
      },
      deepDive: [
        'Почти весь живой разговор держится на вопросах. Если научиться автоматически собирать правильный порядок слов, английский сразу начинает звучать увереннее.',
      ],
      examples: [
        { en: 'Why did Veronica text you so late?', ru: 'Почему Вероника написала тебе так поздно?' },
        { en: 'What are you doing right now?', ru: 'Что ты сейчас делаешь?' },
      ],
      slang: [
        '"What’s up?" — это тоже вопрос, но очень разговорный и короткий.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вопрос',
        question: 'Как правильно спросить: "Почему ты ждешь?"',
        options: ['Why you are waiting?', 'Why are you waiting?', 'Why waiting are you?'],
        answer: 1,
        explanation: 'В Continuous сначала идет are, потом subject.',
      },
    },
    {
      id: 'prepositions-time',
      unit: 'Unit 16',
      lane: 'grammar',
      title: 'Prepositions of Time',
      subtitle: 'in / on / at без хаоса',
      icon: '🗓️',
      color: '#58cc02',
      xp: 35,
      theory: {
        pattern: 'at + точное время, on + день/дата, in + месяц/год/период',
        use: 'Помогают правильно ставить время и даты.',
        memory: 'At — точка, on — поверхность дня, in — контейнер периода.',
        focus: [
          'At 7 pm, on Friday, in July.',
          'In the morning, at night, on my birthday.',
          'Для broad periods обычно in.',
        ],
        traps: [
          'Не говори on July, если имеешь в виду месяц целиком. Нужен in July.',
          'Night — исключение: at night.',
        ],
      },
      table: {
        title: 'Time prepositions',
        headers: ['Preposition', 'Когда', 'Пример'],
        rows: [
          ['at', 'точное время', 'at 8 pm'],
          ['on', 'день, дата', 'on Friday'],
          ['in', 'месяц, год, период', 'in summer'],
        ],
      },
      deepDive: [
        'Эта тема кажется мелочью, но именно здесь очень слышно, кто говорит естественно, а кто переводит слово в слово.',
      ],
      examples: [
        { en: 'I will call Veronica at eight.', ru: 'Я позвоню Веронике в восемь.' },
        { en: 'We usually study on Sunday and rest in August.', ru: 'Мы обычно занимаемся в воскресенье и отдыхаем в августе.' },
      ],
      slang: [
        '"See you at nine" и "on Friday" — очень частые живые шаблоны.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный предлог',
        question: 'We have English practice ___ Friday evening.',
        options: ['at', 'on', 'in'],
        answer: 1,
        explanation: 'С днями недели обычно идет on.',
      },
    },
    {
      id: 'prepositions-place',
      unit: 'Unit 17',
      lane: 'grammar',
      title: 'Prepositions of Place',
      subtitle: 'in / on / at для места и позиции',
      icon: '📍',
      color: '#19b5fe',
      xp: 35,
      theory: {
        pattern: 'in = внутри, on = на поверхности, at = в точке',
        use: 'Нужны, чтобы естественно говорить о местах и положении предметов.',
        memory: 'In — внутри, on — на, at — в точке/у.',
        focus: [
          'In the room, on the table, at the station.',
          'At home, at school, at the cafe.',
          'On the wall, in the city, at the door.',
        ],
        traps: [
          'Не говори in the table, если предмет лежит сверху. Нужно on the table.',
          'At the cafe обычно лучше, чем in the cafe, если важна локация как точка встречи.',
        ],
      },
      table: {
        title: 'Place prepositions',
        headers: ['Preposition', 'Значение', 'Пример'],
        rows: [
          ['in', 'внутри пространства', 'in the apartment'],
          ['on', 'на поверхности', 'on the desk'],
          ['at', 'точка/локация', 'at the cinema'],
        ],
      },
      deepDive: [
        'Эта тема очень практичная: в квартире, в кафе, на столе, у двери. Чем чаще ты описываешь бытовые места, тем быстрее предлоги автоматизируются.',
      ],
      examples: [
        { en: 'Your phone is on the table in the kitchen.', ru: 'Твой телефон на столе на кухне.' },
        { en: 'I am waiting for Veronica at the bus stop.', ru: 'Я жду Веронику на автобусной остановке.' },
      ],
      slang: [
        '"At my place" — очень частая живая фраза: у меня дома.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный предлог',
        question: 'The keys are ___ the table.',
        options: ['in', 'on', 'at'],
        answer: 1,
        explanation: 'Ключи лежат на поверхности, значит on.',
      },
    },
    {
      id: 'modal-verbs',
      unit: 'Unit 18',
      lane: 'grammar',
      title: 'Modal Verbs',
      subtitle: 'can, should, must, have to в обычной речи',
      icon: '🛠️',
      color: '#ffb703',
      xp: 35,
      theory: {
        pattern: 'modal + base verb',
        use: 'Модальные глаголы нужны для возможностей, советов, обязанностей и запретов.',
        memory: 'Can — могу, should — стоит, must / have to — надо.',
        focus: [
          'Can you help me? You should rest. I must go now.',
          'После modal идет базовая форма: can go, should call.',
          'Have to чаще звучит как внешняя обязанность.',
        ],
        traps: [
          'Не добавляй to после can, should, must.',
          'Не говори "must to go". Нужно "must go".',
        ],
      },
      deepDive: [
        'Модальные глаголы делают речь взрослой и полезной: просьбы, советы, планы, обязанности. Они нужны в реальной жизни почти каждый день.',
      ],
      examples: [
        { en: 'You should text Veronica before it gets too late.', ru: 'Тебе стоит написать Веронике, пока не стало слишком поздно.' },
        { en: 'I have to finish this lesson tonight.', ru: 'Мне нужно закончить этот урок сегодня вечером.' },
      ],
      slang: [
        '"You should totally do it" — разговорное усиление совета.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный вариант',
        question: 'I ___ call Veronica now, it is important.',
        options: ['must', 'am', 'do'],
        answer: 0,
        explanation: 'Для сильной необходимости подходит must.',
      },
    },
    {
      id: 'chat-basics',
      unit: 'Unit 19',
      lane: 'real',
      title: 'Chat Basics',
      subtitle: 'Приветствия, короткие ответы и теплый тон',
      icon: '💬',
      color: '#58cc02',
      xp: 30,
      theory: {
        pattern: 'Hi / Hey / How are you doing? / I’m good / Sounds good',
        use: 'Это готовые блоки для переписки и разговоров без лишней книжности.',
        memory: 'Учить целыми репликами проще, чем по словам.',
        focus: [
          'Hi Veronica, how are you doing?',
          'I’m good, thanks. And you?',
          'Sounds good. No worries. Talk to you later.',
        ],
        traps: [
          'Не делай ответ слишком длинным там, где нужен короткий живой ответ.',
          'Fine звучит нормально, но good часто естественнее.',
        ],
      },
      deepDive: [
        'Живое общение строится на десятке коротких шаблонов. Если их выучить, писать и отвечать станет намного проще.',
      ],
      examples: [
        { en: 'Hi Veronica, how are you doing?', ru: 'Привет, Вероника, как твои дела?' },
        { en: 'I’m good, thanks. And you?', ru: 'У меня все хорошо, спасибо. А у тебя?' },
      ],
      slang: [
        '"Hey" мягче и разговорнее, чем сухое hello.',
        '"No worries" — идеальный короткий ответ на мелкую проблему.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери самый живой ответ',
        question: 'How are you doing?',
        options: ['I am existing normally.', 'I’m good, thanks.', 'I have status normal.'],
        answer: 1,
        explanation: 'I’m good, thanks — короткий и естественный ответ.',
      },
    },
    {
      id: 'dating-chat',
      unit: 'Unit 20',
      lane: 'real',
      title: 'Dating & Feelings',
      subtitle: 'Мягкие фразы про симпатию и заботу',
      icon: '💚',
      color: '#ff7e67',
      xp: 30,
      theory: {
        pattern: 'You look cute / I miss you / Take care / I’m thinking about you',
        use: 'Нужны для теплого, заботливого и естественного общения.',
        memory: 'Лучше запоминать готовыми кусками, а не собирать на ходу.',
        focus: [
          'You look cute today.',
          'I miss you already.',
          'Take care and text me later.',
        ],
        traps: [
          'Не перегружай фразу лишней буквальностью.',
          'Sweet и cute звучат мягко, но должны соответствовать тону общения.',
        ],
      },
      deepDive: [
        'Разговоры про симпатию лучше строить просто и тепло. Слишком сложный английский здесь звучит менее естественно, чем короткие живые фразы.',
      ],
      examples: [
        { en: 'You look really cute in that photo, Veronica.', ru: 'Вероника, ты очень мило выглядишь на этом фото.' },
        { en: 'Take care and text me when you get home.', ru: 'Береги себя и напиши мне, когда доберешься домой.' },
      ],
      slang: [
        '"You’re sweet" — мягкий и естественный комплимент.',
        '"Miss you" часто пишут даже без I: просто "miss you".',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери лучший вариант',
        question: 'Как по-живому сказать: "Напиши мне позже"?',
        options: ['Write to me in a later temporal zone.', 'Text me later.', 'Record written information for me after.'],
        answer: 1,
        explanation: 'Text me later — коротко и естественно.',
      },
    },
    {
      id: 'food-cafe',
      unit: 'Unit 21',
      lane: 'real',
      title: 'Food & Cafe',
      subtitle: 'Еда, заказ и простые фразы в кафе',
      icon: '🍔',
      color: '#ffb703',
      xp: 30,
      theory: {
        pattern: 'I’d like / Can I get / a coffee / some water',
        use: 'Нужны для кафе, магазинов, поездок и обычного быта.',
        memory: 'I’d like и Can I get — самые полезные стартовые шаблоны.',
        focus: [
          'I’d like a coffee, please.',
          'Can I get some water?',
          'Do you want cheese or soup?',
        ],
        traps: [
          'Не забывай артикль перед одним предметом: a coffee, a sandwich.',
          'Some часто звучит мягче для неисчисляемого: some water.',
        ],
      },
      deepDive: [
        'Тема еды очень практичная. Здесь быстро закрепляются артикли, словарь и вежливые шаблоны.',
      ],
      examples: [
        { en: 'Veronica ordered a coffee and I got a soup.', ru: 'Вероника заказала кофе, а я взял суп.' },
        { en: 'Can I get some water for the table?', ru: 'Можно воды для стола?' },
      ],
      slang: [
        '"Can I get..." в США звучит очень естественно в кафе.',
      ],
      quiz: {
        type: 'grid',
        prompt: 'Выбери карточку со словом cheese',
        question: 'Which one is “cheese”?',
        options: [
          { label: 'strawberry', art: '🍓' },
          { label: 'cheese', art: '🧀' },
          { label: 'fish', art: '🐟' },
          { label: 'cake', art: '🍰' },
        ],
        answer: 1,
        explanation: 'Cheese — это сыр.',
      },
    },
    {
      id: 'travel-city',
      unit: 'Unit 22',
      lane: 'real',
      title: 'Travel & City',
      subtitle: 'Город, дорога, транспорт и ориентиры',
      icon: '🗺️',
      color: '#19b5fe',
      xp: 30,
      theory: {
        pattern: 'Where is / How do I get to / at the station / on the bus',
        use: 'Нужны для города, поездок, адресов и встреч.',
        memory: 'Travel English держится на вопросах, предлогах и базовых глаголах движения.',
        focus: [
          'Where is the bus stop?',
          'How do I get to the movie theater?',
          'I’m at the station. I’ll be there soon.',
        ],
        traps: [
          'Не путай in the bus и on the bus. Для транспорта чаще on.',
          'Movie theater — американский вариант.',
        ],
      },
      deepDive: [
        'Эта тема соединяет словарь города, предлоги места и полезные вопросы. Очень хороша для практики реального английского.',
      ],
      examples: [
        { en: 'I’m waiting for Veronica at the gas station near the movie theater.', ru: 'Я жду Веронику на заправке рядом с кинотеатром.' },
        { en: 'We are on the bus and we will be downtown in ten minutes.', ru: 'Мы в автобусе, и через десять минут будем в центре.' },
      ],
      slang: [
        '"Downtown" — очень частое американское слово для центра города.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери правильный американский вариант',
        question: 'Как чаще сказать "лифт" в США?',
        options: ['lift', 'elevator', 'raiser'],
        answer: 1,
        explanation: 'В американском английском чаще говорят elevator.',
      },
    },
    {
      id: 'work-study',
      unit: 'Unit 23',
      lane: 'real',
      title: 'Work & Study',
      subtitle: 'Учеба, задачи, дедлайны и короткие рабочие фразы',
      icon: '📝',
      color: '#9956f6',
      xp: 30,
      theory: {
        pattern: 'finish the task / submit the homework / be late / be ready',
        use: 'Нужно для учебы, работы и обычных дедлайнов.',
        memory: 'Здесь важно выучить короткие глагольные связки: finish the task, submit the homework, be ready.',
        focus: [
          'I have to finish this task tonight.',
          'Veronica submitted her homework an hour ago.',
          'We are getting ready for the exam.',
        ],
        traps: [
          'Task и homework лучше учить в готовых сочетаниях.',
          'Be late и be ready — это связки с be, не просто late и ready отдельно.',
        ],
      },
      deepDive: [
        'Эти слова и шаблоны нужны постоянно: учеба, работа, дедлайны, опоздания, подготовка, планы.',
      ],
      examples: [
        { en: 'I still have to finish my task before midnight.', ru: 'Мне все еще нужно закончить задачу до полуночи.' },
        { en: 'Veronica has already submitted her homework.', ru: 'Вероника уже сдала домашнее задание.' },
      ],
      slang: [
        '"I’m swamped" — разговорно: я завален делами.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Выбери лучший вариант',
        question: 'Как по-живому сказать: "Я завален делами"?',
        options: ['I am full of works.', 'I’m swamped.', 'My tasks are many me.'],
        answer: 1,
        explanation: 'I’m swamped — частый разговорный вариант.',
      },
    },
    {
      id: 'listening-rain',
      unit: 'Unit 24',
      lane: 'real',
      title: 'Listening: Rain Chat',
      subtitle: 'Аудирование по вашему диалогу',
      icon: '🔊',
      color: '#17b890',
      xp: 35,
      theory: {
        pattern: 'Listen for markers: now, ago, started, was doing',
        use: 'Цель — слышать ключевые слова и понимать время по маркерам, а не ловить каждое слово отдельно.',
        memory: 'В аудировании сначала ищи опоры: время, глагол, маркер прошлого или процесса.',
        focus: [
          'How are you doing?',
          'Two hours ago',
          'was doing homework',
          'it started raining',
        ],
        traps: [
          'Не пытайся перевести все дословно в моменте.',
          'Сначала лови смысловые якоря, потом детали.',
        ],
      },
      deepDive: [
        'Это уже мини-аудирование, и оно работает без сервера: текст озвучивает сам браузер. Так можно тренировать понимание на слух прямо в GitHub Pages.',
      ],
      examples: [
        { en: 'Hi Veronica, how are you doing?', ru: 'Привет, Вероника, как твои дела?' },
        { en: 'I’m good. Two hours ago I was doing homework and it started raining.', ru: 'Да, все нормально. Два часа назад я делала уроки, и пошел дождь.' },
      ],
      slang: [
        '"I’m good" в аудио часто звучит как единый короткий блок.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Нажми play и выбери правильный смысл',
        question: 'Listen and choose the best translation.',
        listenText: 'Hi Veronica, how are you doing? I am good. Two hours ago I was doing homework and it started raining.',
        options: [
          'Привет, Вероника, как дела? Все нормально. Два часа назад я делала уроки, и пошел дождь.',
          'Привет, Вероника, как дела? Я иду домой и сейчас дождь.',
          'Привет, Вероника, как дела? Я плохо себя чувствую и завтра будет дождь.',
        ],
        answer: 0,
        explanation: 'Ключевые опоры: two hours ago, was doing homework, started raining.',
      },
    },
    {
      id: 'slang-chat',
      unit: 'Bonus',
      lane: 'real',
      title: 'Slang & Real Chat',
      subtitle: 'Живые фразы для переписки и обычного общения',
      icon: '😎',
      color: '#9956f6',
      xp: 30,
      theory: {
        pattern: 'Sounds good / No worries / I’m wiped out / Kinda',
        use: 'Это блок не про одно время, а про живые шаблоны из чатов и обычной речи.',
        memory: 'Учить целые фразы проще, чем отдельные слова: sounds good, no worries, I’m wiped out.',
        focus: [
          'Сокращения делают речь естественной: I’m, we’re, she’ll.',
          'Сленг нужен умеренно и по ситуации.',
          'Лучше запоминать готовыми кусками.',
        ],
        traps: [
          'Не вставляй сленг в слишком официальный контекст.',
          'Cute, sweet, awesome должны соответствовать тону разговора.',
        ],
      },
      deepDive: [
        'Этот блок нужен, чтобы английский перестал звучать как учебник. Но сленг лучше дозировать и всегда держать под ситуацию.',
      ],
      examples: [
        { en: 'Sounds good, let’s talk later.', ru: 'Звучит отлично, давай поговорим позже.' },
        { en: 'I’m wiped out, but I’ll text Veronica tomorrow.', ru: 'Я очень устал, но напишу Веронике завтра.' },
      ],
      slang: [
        'No worries = не переживай / все нормально.',
        'Kinda = kind of, разговорное "типа".',
        'I’m wiped out = я очень устал.',
      ],
      quiz: {
        type: 'choice',
        prompt: 'Что значит фраза?',
        question: 'I’m wiped out.',
        options: ['Я очень устал.', 'Я уже выхожу.', 'Я в восторге.'],
        answer: 0,
        explanation: 'Wiped out = completely tired.',
      },
    },
  ];

  const lessonLanes = [
    {
      id: 'core',
      label: 'Module 1',
      title: 'Core Tenses',
      subtitle: 'Привычки, действия сейчас, прошлое и простое будущее.',
      color: '#58cc02',
      lessonIds: ['present-simple', 'present-continuous', 'past-simple', 'future-simple'],
    },
    {
      id: 'perfect',
      label: 'Module 2',
      title: 'Perfect & Past Depth',
      subtitle: 'Результат, длительность, фон и порядок событий.',
      color: '#ffb703',
      lessonIds: ['present-perfect', 'present-perfect-continuous', 'past-continuous', 'past-perfect', 'past-perfect-continuous'],
    },
    {
      id: 'future',
      label: 'Module 3',
      title: 'Future Pack',
      subtitle: 'Процесс, дедлайн и длительность к будущей точке.',
      color: '#19b5fe',
      lessonIds: ['future-continuous', 'future-perfect', 'future-perfect-continuous'],
    },
    {
      id: 'grammar',
      label: 'Module 4',
      title: 'Grammar Essentials',
      subtitle: 'Артикли, местоимения, вопросы, предлоги и модальные глаголы.',
      color: '#17b890',
      lessonIds: ['articles', 'object-pronouns', 'question-order', 'prepositions-time', 'prepositions-place', 'modal-verbs'],
    },
    {
      id: 'real',
      label: 'Module 5',
      title: 'Real English',
      subtitle: 'Чаты, отношения, еда, город, учеба и аудирование.',
      color: '#9956f6',
      lessonIds: ['chat-basics', 'dating-chat', 'food-cafe', 'travel-city', 'work-study', 'listening-rain', 'slang-chat'],
    },
  ];

  const dictionaryEntries = [
    ['август', 'August', 'Time'],
    ['автобус', 'bus', 'Travel'],
    ['адрес', 'address', 'Basic'],
    ['апрель', 'April', 'Time'],
    ['аптека', 'drugstore / pharmacy', 'American English'],
    ['багаж', 'luggage', 'Travel'],
    ['банк', 'bank', 'City'],
    ['банан', 'banana', 'Food'],
    ['белый', 'white', 'Adjectives'],
    ['бензин', 'gas', 'American English', 'В США чаще говорят gas.'],
    ['бесплатный', 'free', 'Adjectives'],
    ['билет', 'ticket', 'Travel'],
    ['библиотека', 'library', 'Study'],
    ['близко', 'near', 'Basic'],
    ['больница', 'hospital', 'City'],
    ['большой', 'big', 'Adjectives'],
    ['быстро', 'quickly / fast', 'Basic'],
    ['важно', 'important', 'Basic'],
    ['ваш', 'your', 'Basic'],
    ['ванная', 'bathroom', 'Home'],
    ['весна', 'spring', 'Time'],
    ['вечер', 'evening', 'Time'],
    ['видео', 'video', 'Media'],
    ['видеть', 'see', 'Verbs'],
    ['вместе', 'together', 'Basic'],
    ['вода', 'water', 'Food'],
    ['вопрос', 'question', 'Study'],
    ['время', 'time', 'Time'],
    ['встретить', 'meet', 'Verbs'],
    ['вчера', 'yesterday', 'Time'],
    ['где', 'where', 'Basic'],
    ['говорить', 'speak / say', 'Verbs'],
    ['город', 'city', 'City'],
    ['горячий', 'hot', 'Adjectives'],
    ['гулять', 'walk / hang out', 'Verbs'],
    ['да', 'yes', 'Basic'],
    ['далеко', 'far', 'Basic'],
    ['дверь', 'door', 'Home'],
    ['девушка', 'girlfriend / girl', 'People'],
    ['дедлайн', 'deadline', 'Work'],
    ['день', 'day', 'Time'],
    ['деньги', 'money', 'Basic'],
    ['дерево', 'tree', 'Nature'],
    ['дождь', 'rain', 'Weather'],
    ['дом', 'house / home', 'Home'],
    ['дорога', 'road', 'Travel'],
    ['друг', 'friend', 'People'],
    ['думать', 'think', 'Verbs'],
    ['еда', 'food', 'Food'],
    ['ехать', 'go / ride', 'Verbs'],
    ['ждать', 'wait', 'Verbs'],
    ['женщина', 'woman', 'People'],
    ['завтрак', 'breakfast', 'Food'],
    ['завтра', 'tomorrow', 'Time'],
    ['задача', 'task', 'Work'],
    ['заправка', 'gas station', 'American English'],
    ['заниматься', 'study / practice', 'Verbs'],
    ['зеленый', 'green', 'Adjectives'],
    ['зима', 'winter', 'Time'],
    ['знать', 'know', 'Verbs'],
    ['звонить', 'call', 'Verbs'],
    ['игра', 'game', 'Hobby'],
    ['идти', 'go / walk', 'Verbs'],
    ['извините', 'sorry / excuse me', 'Greeting'],
    ['интернет', 'internet', 'Tech'],
    ['интересный', 'interesting', 'Adjectives'],
    ['искать', 'look for', 'Verbs'],
    ['каждый', 'every', 'Basic'],
    ['как', 'how', 'Basic'],
    ['кафе', 'cafe', 'City'],
    ['квартира', 'apartment', 'American English', 'В американском английском чаще apartment, а не flat.'],
    ['кино', 'movie', 'Media'],
    ['кинотеатр', 'movie theater', 'American English'],
    ['книга', 'book', 'Study'],
    ['когда', 'when', 'Basic'],
    ['кофе', 'coffee', 'Food'],
    ['красивый', 'beautiful / pretty', 'Adjectives'],
    ['кровать', 'bed', 'Home'],
    ['купить', 'buy', 'Verbs'],
    ['кухня', 'kitchen', 'Home'],
    ['лето', 'summer', 'Time'],
    ['лифт', 'elevator', 'American English', 'В США чаще elevator, а не lift.'],
    ['любить', 'love', 'Verbs'],
    ['люди', 'people', 'People'],
    ['магазин', 'store / shop', 'City'],
    ['маленький', 'small', 'Adjectives'],
    ['мама', 'mom / mother', 'People'],
    ['машина', 'car', 'Travel'],
    ['месяц', 'month', 'Time'],
    ['место', 'place', 'Basic'],
    ['минута', 'minute', 'Time'],
    ['молоко', 'milk', 'Food'],
    ['можно', 'can / may', 'Basic'],
    ['мой', 'my', 'Basic'],
    ['музыка', 'music', 'Media'],
    ['мусор', 'trash', 'American English', 'Trash — более частый американский вариант.'],
    ['надо', 'need to / must', 'Basic'],
    ['назад', 'ago / back', 'Time'],
    ['найти', 'find', 'Verbs'],
    ['наш', 'our', 'Basic'],
    ['неделя', 'week', 'Time'],
    ['нет', 'no', 'Basic'],
    ['новый', 'new', 'Adjectives'],
    ['ночь', 'night', 'Time'],
    ['нормально', 'fine / okay', 'Basic'],
    ['обед', 'lunch', 'Food'],
    ['обувь', 'shoes', 'Clothes'],
    ['одежда', 'clothes', 'Clothes'],
    ['окно', 'window', 'Home'],
    ['октябрь', 'October', 'Time'],
    ['очередь', 'line', 'American English', 'В США чаще line, а не queue.'],
    ['очень', 'very', 'Basic'],
    ['открыть', 'open', 'Verbs'],
    ['отпуск', 'vacation', 'American English', 'Vacation — частый американский вариант.'],
    ['офис', 'office', 'Work'],
    ['осень', 'fall', 'American English', 'В США чаще fall, чем autumn.'],
    ['папа', 'dad / father', 'People'],
    ['парень', 'boyfriend / guy', 'People'],
    ['парк', 'park', 'City'],
    ['писать', 'write', 'Verbs'],
    ['пицца', 'pizza', 'Food'],
    ['плохо', 'bad / badly', 'Basic'],
    ['погода', 'weather', 'Weather'],
    ['подождать', 'wait', 'Verbs'],
    ['поезд', 'train', 'Travel'],
    ['пока', 'bye / for now', 'Greeting'],
    ['помнить', 'remember', 'Verbs'],
    ['почему', 'why', 'Basic'],
    ['пожалуйста', 'please', 'Greeting'],
    ['поздно', 'late', 'Time'],
    ['поиск', 'search', 'Tech'],
    ['привет', 'hi / hello', 'Greeting'],
    ['проблема', 'problem', 'Basic'],
    ['просто', 'just / simply', 'Basic'],
    ['путь', 'way / path', 'Travel'],
    ['работа', 'work / job', 'Work'],
    ['разговор', 'conversation', 'Basic'],
    ['раньше', 'earlier / before', 'Time'],
    ['ребенок', 'child / kid', 'People'],
    ['ресторан', 'restaurant', 'City'],
    ['решить', 'decide / solve', 'Verbs'],
    ['родители', 'parents', 'People'],
    ['рука', 'hand', 'People'],
    ['рыба', 'fish', 'Food'],
    ['сегодня', 'today', 'Time'],
    ['сейчас', 'now', 'Time'],
    ['семья', 'family', 'People'],
    ['сестра', 'sister', 'People'],
    ['сильный', 'strong', 'Adjectives'],
    ['сказать', 'say / tell', 'Verbs'],
    ['сладкий', 'sweet', 'Adjectives'],
    ['слово', 'word', 'Study'],
    ['слушать', 'listen', 'Verbs'],
    ['смотреть', 'watch / look', 'Verbs'],
    ['снег', 'snow', 'Weather'],
    ['снова', 'again', 'Basic'],
    ['спасибо', 'thanks', 'Greeting'],
    ['спать', 'sleep', 'Verbs'],
    ['спорт', 'sport', 'Hobby'],
    ['спросить', 'ask', 'Verbs'],
    ['стол', 'table', 'Home'],
    ['стул', 'chair', 'Home'],
    ['сумка', 'bag', 'Clothes'],
    ['суп', 'soup', 'Food'],
    ['такси', 'taxi', 'Travel'],
    ['телефон', 'cell phone / phone', 'American English', 'В США очень часто говорят cell phone.'],
    ['теплый', 'warm', 'Adjectives'],
    ['тетрадь', 'notebook', 'Study'],
    ['тихо', 'quietly', 'Basic'],
    ['только', 'only / just', 'Basic'],
    ['трудно', 'hard / difficult', 'Adjectives'],
    ['увидеть', 'see', 'Verbs'],
    ['улица', 'street', 'City'],
    ['улыбка', 'smile', 'Feelings'],
    ['умный', 'smart', 'Adjectives'],
    ['университет', 'college / university', 'Study'],
    ['урок', 'lesson', 'Study'],
    ['уже', 'already', 'Time'],
    ['ужин', 'dinner', 'Food'],
    ['утро', 'morning', 'Time'],
    ['фильм', 'movie / film', 'Media'],
    ['фото', 'photo', 'Media'],
    ['фрукты', 'fruit', 'Food'],
    ['футбол', 'soccer', 'American English', 'В США soccer — это обычный футбол.'],
    ['хлеб', 'bread', 'Food'],
    ['холодно', 'cold', 'Weather'],
    ['ходить', 'walk / go', 'Verbs'],
    ['хорошо', 'good / okay', 'Basic'],
    ['хотеть', 'want', 'Verbs'],
    ['цель', 'goal', 'Work'],
    ['цена', 'price', 'Basic'],
    ['центр', 'downtown / center', 'American English'],
    ['чай', 'tea', 'Food'],
    ['часто', 'often', 'Time'],
    ['час', 'hour', 'Time'],
    ['человек', 'person', 'People'],
    ['читать', 'read', 'Verbs'],
    ['черный', 'black', 'Adjectives'],
    ['школа', 'school', 'Study'],
    ['экзамен', 'exam', 'Study'],
    ['экран', 'screen', 'Tech'],
    ['яблоко', 'apple', 'Food'],
    ['язык', 'language', 'Study'],
    ['январь', 'January', 'Time'],
    ['я', 'I', 'Basic'],
  ].map((entry) => ({
    ru: entry[0],
    en: entry[1],
    category: entry[2],
    note: entry[3] || '',
  }));

  const dictionarySuggestions = ['привет', 'работа', 'дождь', 'лифт', 'отпуск', 'кофе', 'урок', 'город', 'девушка', 'телефон', 'фильм', 'улица'];

  const dictionaryCategories = Array.from(new Set(dictionaryEntries.map((entry) => entry.category))).sort((left, right) =>
    left.localeCompare(right, 'en'),
  );

  const dictionaryByRu = Object.create(null);
  dictionaryEntries.forEach((entry) => {
    const key = normalize(entry.ru);
    if (key && !dictionaryByRu[key]) {
      dictionaryByRu[key] = entry;
    }
  });

  const app = document.getElementById('app');

  const state = {
    view: 'dashboard',
    activeLessonId: lessons[0].id,
    theoryQuery: '',
    dictionaryQuery: '',
    dictionaryLetter: 'all',
    dictionaryCategory: 'all',
    lessonAnswer: '',
    lessonChoice: null,
    lessonFeedback: null,
    lessonResult: null,
    progress: loadProgress(),
  };

  function normalize(value) {
    return String(value)
      .toLowerCase()
      .replace(/[’']/g, '')
      .replace(/[^a-zа-яё0-9\s]/giu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getToday() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
  }

  function loadProgress() {
    const base = {
      completedLessonIds: [],
      xp: 0,
      dailyXp: 0,
      streak: 1,
      lastDate: getToday(),
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      const merged = Object.assign({}, base, parsed);
      const today = getToday();

      if (merged.lastDate !== today) {
        const previous = new Date(merged.lastDate);
        const current = new Date(today);
        const diffDays = Math.round((current - previous) / 86400000);
        merged.dailyXp = 0;
        merged.streak = diffDays === 1 ? merged.streak + 1 : 1;
        merged.lastDate = today;
      }

      return merged;
    } catch (error) {
      return base;
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (error) {
      return;
    }
  }

  function getRussianLetter(value) {
    const match = String(value).trim().toUpperCase().match(/[А-ЯЁ]/u);
    return match ? match[0] : '#';
  }

  function getLessonById(lessonId) {
    return lessons.find((lesson) => lesson.id === lessonId) || lessons[0];
  }

  function getActiveLesson() {
    return getLessonById(state.activeLessonId);
  }

  function getLessonStatus(lessonId) {
    if (state.progress.completedLessonIds.indexOf(lessonId) !== -1) {
      return 'completed';
    }

    const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
    if (lessonIndex <= 0) {
      return 'available';
    }

    return state.progress.completedLessonIds.indexOf(lessons[lessonIndex - 1].id) !== -1 ? 'available' : 'locked';
  }

  function getNextLesson() {
    return lessons.find((lesson) => getLessonStatus(lesson.id) === 'available') || lessons[0];
  }

  function getLevelInfo() {
    const xp = state.progress.xp;
    return {
      level: Math.floor(xp / XP_PER_LEVEL) + 1,
      currentLevelXp: xp % XP_PER_LEVEL,
    };
  }

  function getBadges() {
    return [
      {
        title: 'Starter',
        text: 'Открой первый урок и начни дорожку.',
        unlocked: state.progress.completedLessonIds.length >= 1,
      },
      {
        title: 'Routine',
        text: 'Закрой минимум 4 урока.',
        unlocked: state.progress.completedLessonIds.length >= 4,
      },
      {
        title: 'Streak',
        text: 'Держи серию 3 дня.',
        unlocked: state.progress.streak >= 3,
      },
      {
        title: 'Heavy Grammar',
        text: 'Набери 220 XP.',
        unlocked: state.progress.xp >= 220,
      },
    ];
  }

  function progressBar(value, max, label, hint) {
    const percent = max === 0 ? 0 : Math.max(0, Math.min(100, Math.round((value / max) * 100)));
    return `
      <div class="progress-wrap">
        <div class="progress-label-row">
          <span>${label}</span>
          <span>${hint}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }

  function getFilteredTheoryLessons() {
    const query = normalize(state.theoryQuery);
    if (!query) {
      return lessons;
    }

    return lessons.filter((lesson) =>
      normalize(
        [
          lesson.title,
          lesson.subtitle,
          lesson.theory.pattern,
          lesson.theory.use,
          lesson.theory.memory,
          lesson.theory.focus.join(' '),
          lesson.theory.traps.join(' '),
          (lesson.deepDive || []).join(' '),
          lesson.examples.map((example) => `${example.en} ${example.ru}`).join(' '),
          lesson.slang.join(' '),
        ].join(' '),
      ).includes(query),
    );
  }

  function getFilteredDictionaryEntries() {
    const query = normalize(state.dictionaryQuery);

    return dictionaryEntries
      .filter((entry) => {
        if (state.dictionaryLetter !== 'all' && getRussianLetter(entry.ru) !== state.dictionaryLetter) {
          return false;
        }

        if (state.dictionaryCategory !== 'all' && entry.category !== state.dictionaryCategory) {
          return false;
        }

        if (!query) {
          return true;
        }

        return normalize([entry.ru, entry.en, entry.category, entry.note].join(' ')).includes(query);
      })
      .sort((left, right) => {
        const byRu = left.ru.localeCompare(right.ru, 'ru');
        return byRu !== 0 ? byRu : left.en.localeCompare(right.en, 'en');
      });
  }

  function getDictionaryLetterCounts() {
    const query = normalize(state.dictionaryQuery);

    return dictionaryEntries.reduce((accumulator, entry) => {
      if (state.dictionaryCategory !== 'all' && entry.category !== state.dictionaryCategory) {
        return accumulator;
      }

      if (query && !normalize([entry.ru, entry.en, entry.category, entry.note].join(' ')).includes(query)) {
        return accumulator;
      }

      const letter = getRussianLetter(entry.ru);
      accumulator[letter] = (accumulator[letter] || 0) + 1;
      return accumulator;
    }, Object.create(null));
  }

  function groupDictionaryEntries(entries) {
    const grouped = Object.create(null);

    entries.forEach((entry) => {
      const letter = getRussianLetter(entry.ru);
      if (!grouped[letter]) {
        grouped[letter] = [];
      }
      grouped[letter].push(entry);
    });

    return RUSSIAN_ALPHABET.filter((letter) => grouped[letter] && grouped[letter].length).map((letter) => ({
      letter,
      entries: grouped[letter],
    }));
  }

  function completeLesson(correct) {
    const lesson = getActiveLesson();
    const wasCompleted = state.progress.completedLessonIds.includes(lesson.id);
    const reward = wasCompleted ? (correct ? 12 : 6) : correct ? lesson.xp : Math.max(15, Math.round(lesson.xp / 2));

    if (!wasCompleted) {
      state.progress.completedLessonIds = state.progress.completedLessonIds.concat(lesson.id);
    }

    state.progress.xp += reward;
    state.progress.dailyXp += reward;
    saveProgress();

    return {
      done: true,
      correct,
      reward,
    };
  }

  function speakText(text) {
    if (!window.speechSynthesis) {
      return;
    }

    const speechText = String(text).replace(/\s*\/\s*.*/, '').trim();
    if (!speechText) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = /[А-Яа-яЁё]/.test(speechText) ? 'ru-RU' : 'en-US';
    utterance.rate = 0.94;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  }

  function speakAttr(text) {
    return encodeURIComponent(text);
  }

  function renderSpeakButton(text, label = 'Listen') {
    return `<button class="speak-btn" type="button" data-speak="${speakAttr(text)}">${label}</button>`;
  }

  function renderTable(table) {
    if (!table) {
      return '';
    }

    return `
      <div class="table-card">
        <p class="label">${table.title}</p>
        <div class="table-wrap">
          <table class="grammar-table">
            <thead>
              <tr>${table.headers.map((header) => `<th>${header}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${table.rows
                .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderExampleCards(examples) {
    return examples
      .map(
        (example) => `
          <div class="example-card">
            <div class="example-head">
              <p class="example-en">${example.en}</p>
              ${renderSpeakButton(example.en)}
            </div>
            <p class="example-ru">${example.ru}</p>
          </div>
        `,
      )
      .join('');
  }

  function renderLane(lane) {
    const laneLessons = lane.lessonIds.map((lessonId) => getLessonById(lessonId)).filter(Boolean);

    return `
      <section class="lane-card">
        <div class="unit-banner" style="--unit-color:${lane.color};">
          <div class="unit-copy">
            <p class="label">${lane.label}</p>
            <h3 class="unit-title">${lane.title}</h3>
            <p class="unit-subtitle">${lane.subtitle}</p>
          </div>
          <div class="unit-score">${laneLessons.length}</div>
        </div>

        <div class="skill-tree">
          ${laneLessons
            .map((lesson, index) => {
              const status = getLessonStatus(lesson.id);
              const disabled = status === 'locked' ? 'disabled' : '';
              const actionText = status === 'completed' ? 'Review' : status === 'locked' ? 'Locked' : 'Start';

              return `
                <div class="skill-row ${index % 2 === 0 ? 'skill-row-left' : 'skill-row-right'}">
                  <div class="skill-node ${status}">
                    <button class="skill-orb ${status}" style="--orb-color:${lesson.color};" ${disabled} ${
                status === 'locked' ? '' : `data-open-lesson="${lesson.id}"`
              }>
                      <span>${status === 'completed' ? '✓' : status === 'locked' ? '🔒' : lesson.icon}</span>
                    </button>
                    <div class="skill-copy">
                      <div class="skill-topline">
                        <span class="skill-pill">${lesson.unit}</span>
                        <span class="skill-xp">+${lesson.xp} XP</span>
                      </div>
                      <p class="skill-name">${lesson.title}</p>
                      <p class="skill-note">${lesson.subtitle}</p>
                      <button class="skill-cta ${status}" ${disabled} ${status === 'locked' ? '' : `data-open-lesson="${lesson.id}"`}>
                        ${actionText}
                      </button>
                    </div>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </section>
    `;
  }

  function renderTopBar() {
    const levelInfo = getLevelInfo();
    const current = state.view;

    return `
      <header class="topbar">
        <div class="topbar-inner">
          <button class="brand" data-nav="dashboard">
            <img src="./public/danobius-logo.svg" alt="Danobius logo" />
            <div>
              <div class="brand-title">Danobius</div>
              <div class="brand-subtitle">English Path</div>
            </div>
          </button>

          <div class="nav-row">
            <button class="nav-pill ${current === 'dashboard' ? 'is-active' : ''}" data-nav="dashboard">Path</button>
            <button class="nav-pill ${current === 'theory' ? 'is-active' : ''}" data-nav="theory">Theory</button>
            <button class="nav-pill ${current === 'dictionary' ? 'is-active' : ''}" data-nav="dictionary">Dictionary</button>
          </div>

          <div class="stat-row">
            <div class="stat-pill"><span>Streak</span><span>${state.progress.streak}d</span></div>
            <div class="stat-pill"><span>XP</span><span>${state.progress.xp}</span></div>
            <div class="stat-pill"><span>Level</span><span>${levelInfo.level}</span></div>
          </div>

          <div class="avatar">DV</div>
        </div>
      </header>
    `;
  }

  function renderDashboard() {
    const nextLesson = getNextLesson();
    const levelInfo = getLevelInfo();
    const dictionaryPreview = dictionaryEntries.slice(0, 6);

    return `
      <main class="page dashboard-grid">
        <section class="stack">
          <div class="panel hero-panel">
            <div class="hero">
              <div>
                <div class="button-row" style="margin-bottom:14px;">
                  <span class="chip green">Static site</span>
                  <span class="chip sky">GitHub Pages ready</span>
                  <span class="chip gold">Audio in browser</span>
                </div>
                <h1>Danobius</h1>
                <p style="font-size:18px; line-height:1.6;">
                  Полностью статическое приложение для английского языка. Открывается обычным кликом по
                  <strong>index.html</strong>, работает на GitHub Pages, на телефоне и на ПК без сервера и без backend.
                </p>
                ${progressBar(state.progress.dailyXp, DAILY_GOAL, 'Daily goal', `${state.progress.dailyXp}/${DAILY_GOAL} XP`)}
                <div class="button-row" style="margin-top:16px;">
                  <button class="btn btn-primary" data-open-lesson="${nextLesson.id}">Start ${nextLesson.title}</button>
                  <button class="btn btn-secondary" data-nav="theory">Open theory</button>
                  <button class="btn btn-ghost" data-nav="dictionary">Open dictionary</button>
                </div>
                <div class="mini-card hero-phrase">
                  <p class="label">Phrase of the day</p>
                  <div class="example-head" style="margin-top:10px;">
                    <p style="margin:0; font-size:18px; font-weight:900;">Hi Veronica, how are you doing?</p>
                    ${renderSpeakButton('Hi Veronica, how are you doing?', 'Play')}
                  </div>
                  <p class="small-muted">Привет, Вероника, как твои дела?</p>
                </div>
              </div>
              <div class="hero-visual">
                <div class="hero-visual-card">
                  <img src="./public/danobius-mascot.svg" alt="Danobius mascot" />
                  <div class="mini-card center">
                    <p class="label">Next focus</p>
                    <p style="margin:10px 0 0; font-size:24px; font-weight:900;">${nextLesson.title}</p>
                    <p class="small-muted">${nextLesson.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel">
              <div class="section-row">
                <div>
                  <h2 class="section-title">Your progress</h2>
                  <p class="muted">Путь, XP и серия остаются, но теорию можно читать отдельно, без уровней.</p>
                </div>
                <span class="chip green">Level ${levelInfo.level}</span>
              </div>
              <div class="grid-3">
                <div class="mini-card color-lime">
                  <p class="label">XP</p>
                  <p class="value">${state.progress.xp}</p>
                </div>
                <div class="mini-card color-gold">
                  <p class="label">Streak</p>
                  <p class="value">${state.progress.streak}</p>
                </div>
                <div class="mini-card color-sky">
                  <p class="label">Done</p>
                  <p class="value">${state.progress.completedLessonIds.length}/${lessons.length}</p>
                </div>
              </div>
              <div style="margin-top:16px;">
                ${progressBar(levelInfo.currentLevelXp, XP_PER_LEVEL, 'Level progress', `${levelInfo.currentLevelXp}/${XP_PER_LEVEL} XP`)}
              </div>
            </div>

            <div class="panel panel-accent">
              <div class="section-row">
                <div>
                  <h2 class="section-title" style="font-size:30px;">Memory hooks</h2>
                  <p class="panel-accent-text">Короткие подсказки, чтобы быстрее цеплять времена и тему предложения.</p>
                </div>
                <span class="accent-badge">EN</span>
              </div>
              <div class="tips-list">
                <div class="tip-card accent-tip">every / usually / often → сначала проверь Present Simple.</div>
                <div class="tip-card accent-tip">now / right now → чаще всего Continuous.</div>
                <div class="tip-card accent-tip">already / just / yet → часто Present Perfect.</div>
                <div class="tip-card accent-tip">by Friday / by summer → дедлайн, смотри в сторону Perfect.</div>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="section-row">
              <div>
                <h2 class="section-title">Course Path</h2>
                <p class="muted">Дорожка специально сделана плотнее и удобнее для телефона: крупные узлы, короткие старты и модульные блоки.</p>
              </div>
              <span class="chip sky">${lessons.length} lessons</span>
            </div>
            <div class="lane-stack">
              ${lessonLanes.map(renderLane).join('')}
            </div>
          </div>
        </section>

        <aside class="side-column">
          <div class="panel">
            <div class="section-row">
              <div>
                <h2 class="section-title">Quick access</h2>
                <p class="muted">Теория, словарь и аудирование доступны отдельно от дорожки.</p>
              </div>
            </div>
            <div class="quick-grid">
              <button class="quick-card" data-nav="theory">
                <span class="quick-icon">📘</span>
                <span class="quick-title">Theory</span>
                <span class="small-muted">Подробные правила</span>
              </button>
              <button class="quick-card" data-nav="dictionary">
                <span class="quick-icon">📖</span>
                <span class="quick-title">Dictionary</span>
                <span class="small-muted">Поиск А-Я</span>
              </button>
            </div>
          </div>

          <div class="panel">
            <div class="section-row">
              <div>
                <h2 class="section-title">Badges</h2>
                <p class="muted">Небольшие награды за темп и регулярность.</p>
              </div>
            </div>
            <div class="badge-list">
              ${getBadges()
                .map(
                  (badge) => `
                    <div class="badge-card" style="${badge.unlocked ? 'background:#efffdd;' : 'background:#f8fafc; color:#8b98a5;'}">
                      <p style="margin:0; font-size:20px; font-weight:900;">${badge.title}</p>
                      <p class="small-muted">${badge.text}</p>
                    </div>
                  `,
                )
                .join('')}
            </div>
          </div>

          <div class="panel">
            <div class="section-row">
              <div>
                <h2 class="section-title">Dictionary</h2>
                <p class="muted">Быстрый доступ к популярным словам.</p>
              </div>
              <span class="chip sky">А-Я</span>
            </div>
            <div class="phrase-list">
              ${dictionaryPreview
                .map(
                  (entry) => `
                    <div class="phrase-card">
                      <div class="button-row" style="margin-bottom:10px;">
                        <span class="chip">${getRussianLetter(entry.ru)}</span>
                        <span class="chip sky">${entry.category}</span>
                      </div>
                      <div class="example-head">
                        <p class="example-en">${entry.ru}</p>
                        ${renderSpeakButton(entry.en, 'Play')}
                      </div>
                      <p class="translator-output" style="font-size:20px;">${entry.en}</p>
                    </div>
                  `,
                )
                .join('')}
            </div>
          </div>
        </aside>
      </main>
    `;
  }

  function renderTheory() {
    const filtered = getFilteredTheoryLessons();

    return `
      <main class="page stack">
        <div class="panel">
          <div class="theory-hero">
            <div>
              <div class="button-row" style="margin-bottom:14px;">
                <span class="chip">Theory only</span>
                <span class="chip green">No levels needed</span>
                <span class="chip sky">Deep lessons</span>
              </div>
              <h1 class="big-title">Theory Library</h1>
              <p style="font-size:18px; line-height:1.6;" class="muted">
                Здесь можно учить английский вообще без прохождения уровней. Темы стали глубже: кроме всех времен есть
                местоимения, артикли, предлоги, модальные глаголы, чат, еда, город и аудирование.
              </p>
              <div class="button-row">
                <button class="btn btn-primary" data-open-lesson="${getNextLesson().id}">Start practice</button>
                <button class="btn btn-secondary" data-nav="dictionary">Open dictionary</button>
              </div>
            </div>
            <div class="note-grid">
              <div class="note-card lime"><strong>Tenses</strong><br />Все ключевые времена остались и идут отдельными модулями.</div>
              <div class="note-card sky"><strong>Topics</strong><br />Есть отдельные уроки по структурам, чату, еде, городу и слушанию.</div>
              <div class="note-card gold"><strong>Format</strong><br />Правило, ловушки, примеры, таблицы и практика в одном месте.</div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="section-row">
            <div>
              <h2 class="section-title">Find a rule</h2>
              <p class="muted">Ищи по времени, теме, примерам, Veronica, rain, article, pronoun и любым словам из правил.</p>
            </div>
            <span class="chip">${filtered.length} topics</span>
          </div>
          <input class="search-input" data-input="theory-query" value="${escapeHtml(state.theoryQuery)}" placeholder="Например: pronouns, дождь, by Friday, article..." />
        </div>

        <div class="topic-list">
          ${filtered
            .map(
              (lesson) => `
                <article class="topic-card">
                  <div class="topic-head">
                    <div>
                      <div class="button-row" style="margin-bottom:12px;">
                        <span class="chip">${lesson.unit}</span>
                        <span class="chip">${lesson.title}</span>
                      </div>
                      <h2 class="lesson-title">${lesson.title}</h2>
                      <p class="muted">${lesson.subtitle}</p>
                    </div>
                    <button class="btn btn-secondary" data-open-lesson="${lesson.id}">Practice lesson</button>
                  </div>

                  <div class="topic-grid">
                    <div class="stack">
                      <div class="box">
                        <p class="label">Formula</p>
                        <p style="margin:10px 0 0; font-weight:900;">${lesson.theory.pattern}</p>
                      </div>
                      <div class="box" style="background:#efffdd;">
                        <p class="label">Use</p>
                        <p style="margin:10px 0 0;">${lesson.theory.use}</p>
                      </div>
                      <div class="box" style="background:#eaf8ff;">
                        <p class="label">Memory hook</p>
                        <p style="margin:10px 0 0;">${lesson.theory.memory}</p>
                      </div>
                      ${(lesson.deepDive || [])
                        .map(
                          (item) => `
                            <div class="box theory-deep">
                              <p class="label">Deep note</p>
                              <p style="margin:10px 0 0;">${item}</p>
                            </div>
                          `,
                        )
                        .join('')}
                      ${renderTable(lesson.table)}
                    </div>

                    <div class="stack">
                      <div class="stack-box">
                        <p class="label">Watch for</p>
                        ${lesson.theory.focus.map((item) => `<div class="example-card">${item}</div>`).join('')}
                      </div>

                      <div class="stack-box">
                        <p class="label">Common traps</p>
                        ${lesson.theory.traps.map((item) => `<div class="example-card" style="background:#fff0ea;">${item}</div>`).join('')}
                      </div>

                      <div class="stack-box">
                        <p class="label">Examples</p>
                        ${renderExampleCards(lesson.examples)}
                      </div>

                      <div class="stack-box">
                        <p class="label">Slang note</p>
                        ${lesson.slang.map((item) => `<div class="example-card" style="background:#fff4d6;">${item}</div>`).join('')}
                      </div>
                    </div>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
      </main>
    `;
  }

  function renderDictionary() {
    const filteredEntries = getFilteredDictionaryEntries();
    const groupedEntries = groupDictionaryEntries(filteredEntries);
    const letterCounts = getDictionaryLetterCounts();
    const query = normalize(state.dictionaryQuery);
    const exactMatch = query ? filteredEntries.find((entry) => normalize(entry.ru) === query) : null;

    return `
      <main class="page stack">
        <div class="panel">
          <div class="words-hero">
            <div>
              <div class="button-row" style="margin-bottom:14px;">
                <span class="chip green">Offline dictionary</span>
                <span class="chip sky">Search + filters</span>
                <span class="chip">А-Я</span>
              </div>
              <h1 class="big-title">Dictionary</h1>
              <p style="font-size:18px; line-height:1.6;" class="muted">
                Встроенный словарь популярных русских слов с американскими английскими вариантами. Можно искать по слову,
                фильтровать по буквам и темам, а также слушать произношение прямо в браузере.
              </p>
            </div>
            <div class="note-grid">
              <div class="note-card lime"><strong>Words</strong><br />${dictionaryEntries.length} популярных слов.</div>
              <div class="note-card sky"><strong>Search</strong><br />Работает по русскому слову, переводу и теме.</div>
              <div class="note-card gold"><strong>Audio</strong><br />Play-кнопки работают без сервера через браузер.</div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="section-row">
            <div>
              <h2 class="section-title">Find a word</h2>
              <p class="muted">Пиши по-русски и фильтруй по буквам или темам.</p>
            </div>
            <span class="chip sky">${filteredEntries.length} / ${dictionaryEntries.length}</span>
          </div>

          <input class="search-input translator-input" type="text" autocomplete="off" data-input="dictionary-query" value="${escapeHtml(
            state.dictionaryQuery,
          )}" placeholder="Например: работа, дождь, лифт, отпуск..." />

          <div class="button-row" style="margin-top:14px;">
            ${dictionarySuggestions
              .map((item) => `<button class="btn btn-ghost translator-chip" data-dictionary-suggestion="${escapeHtml(item)}">${item}</button>`)
              .join('')}
          </div>

          <div class="filter-block">
            <p class="label">Alphabet</p>
            <div class="filter-row">
              <button class="filter-chip ${state.dictionaryLetter === 'all' ? 'is-active' : ''}" data-dictionary-letter="all">Все</button>
              ${RUSSIAN_ALPHABET.map((letter) => {
                const hasEntries = Boolean(letterCounts[letter]);
                return `
                  <button class="filter-chip ${state.dictionaryLetter === letter ? 'is-active' : ''} ${hasEntries ? '' : 'is-disabled'}" data-dictionary-letter="${letter}" ${
                    hasEntries ? '' : 'disabled'
                  }>
                    ${letter}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <div class="filter-block">
            <p class="label">Topics</p>
            <div class="filter-row">
              <button class="filter-chip ${state.dictionaryCategory === 'all' ? 'is-active' : ''}" data-dictionary-category="all">Все</button>
              ${dictionaryCategories
                .map(
                  (category) =>
                    `<button class="filter-chip ${state.dictionaryCategory === category ? 'is-active' : ''}" data-dictionary-category="${escapeHtml(
                      category,
                    )}">${escapeHtml(category)}</button>`,
                )
                .join('')}
            </div>
          </div>

          <div class="button-row" style="margin-top:16px;">
            <button class="btn btn-secondary" data-action="reset-dictionary">Reset filters</button>
          </div>
        </div>

        <div class="panel">
          <div class="section-row">
            <div>
              <h2 class="section-title">Results</h2>
              <p class="muted">Список идет по алфавиту. Можно просто листать как словарь.</p>
            </div>
            <span class="chip green">${groupedEntries.length} sections</span>
          </div>

          ${
            exactMatch
              ? `
                <div class="dictionary-featured">
                  <p class="label">Exact match</p>
                  <div class="phrase-card" style="background:#efffdd;">
                    <div class="button-row" style="margin-bottom:10px;">
                      <span class="chip">${getRussianLetter(exactMatch.ru)}</span>
                      <span class="chip sky">${exactMatch.category}</span>
                    </div>
                    <div class="example-head">
                      <p class="example-en">${exactMatch.ru}</p>
                      ${renderSpeakButton(exactMatch.en, 'Play')}
                    </div>
                    <p class="translator-output">${exactMatch.en}</p>
                    <p class="small-muted">${exactMatch.note || 'Базовый вариант для everyday American English.'}</p>
                  </div>
                </div>
              `
              : ''
          }

          ${
            groupedEntries.length
              ? `
                <div class="dictionary-groups">
                  ${groupedEntries
                    .map(
                      (group) => `
                        <section class="dictionary-group">
                          <div class="section-row" style="margin-bottom:0;">
                            <h3 class="section-title" style="margin:0;">${group.letter}</h3>
                            <span class="chip">${group.entries.length} words</span>
                          </div>
                          <div class="dictionary-card-grid">
                            ${group.entries
                              .map(
                                (entry) => `
                                  <div class="phrase-card">
                                    <div class="button-row" style="margin-bottom:10px;">
                                      <span class="chip">${group.letter}</span>
                                      <span class="chip sky">${entry.category}</span>
                                    </div>
                                    <div class="example-head">
                                      <p class="example-en">${entry.ru}</p>
                                      ${renderSpeakButton(entry.en, 'Play')}
                                    </div>
                                    <p class="translator-output" style="font-size:20px;">${entry.en}</p>
                                    <p class="small-muted">${entry.note || 'Базовое слово для everyday American English.'}</p>
                                  </div>
                                `,
                              )
                              .join('')}
                          </div>
                        </section>
                      `,
                    )
                    .join('')}
                </div>
              `
              : `
                <div class="translator-result is-ready" style="min-height:0;">
                  <p class="label">Nothing found</p>
                  <p class="translator-placeholder">По текущему запросу и фильтрам слов не найдено. Сбрось фильтры или попробуй другое слово.</p>
                </div>
              `
          }
        </div>
      </main>
    `;
  }

  function renderQuizOptions(quiz) {
    if (quiz.type === 'input') {
      return `<textarea class="answer-input" rows="4" data-input="lesson-answer" placeholder="Type your answer">${escapeHtml(state.lessonAnswer)}</textarea>`;
    }

    if (quiz.type === 'grid') {
      return `
        <div class="quiz-grid">
          ${quiz.options
            .map((option, index) => {
              const selected = state.lessonChoice === index ? ' is-selected' : '';
              return `
                <button class="visual-choice${selected}" data-choice="${index}">
                  <span class="visual-choice-art">${option.art || '⭐'}</span>
                  <span class="visual-choice-label">${option.label}</span>
                </button>
              `;
            })
            .join('')}
        </div>
      `;
    }

    return `
      <div class="stack">
        ${quiz.options
          .map((option, index) => {
            const selected = state.lessonChoice === index ? ' is-selected' : '';
            return `<button class="exercise-option${selected}" data-choice="${index}">${option}</button>`;
          })
          .join('')}
      </div>
    `;
  }

  function renderLesson() {
    const lesson = getActiveLesson();
    const quiz = lesson.quiz;

    if (state.lessonResult && state.lessonResult.done) {
      return `
        <main class="page stack">
          <div class="panel center">
            <div class="button-row" style="justify-content:center; margin-bottom:12px;">
              <span class="chip green">${lesson.unit}</span>
              <span class="chip">${lesson.title}</span>
            </div>
            <h1 class="big-title">Lesson complete</h1>
            <p class="muted" style="font-size:18px;">Урок закрыт. Его можно проходить снова сколько угодно прямо из файла или с GitHub Pages.</p>
            <div class="lesson-summary" style="margin-top:24px;">
              <div class="summary-card">
                <p class="label">Result</p>
                <p class="value" style="font-size:38px;">${state.lessonResult.correct ? 'OK' : 'Try'}</p>
              </div>
              <div class="summary-card">
                <p class="label">XP</p>
                <p class="value" style="font-size:38px;">+${state.lessonResult.reward}</p>
              </div>
              <div class="summary-card">
                <p class="label">Mode</p>
                <p class="value" style="font-size:38px;">Static</p>
              </div>
            </div>
            <div class="button-row" style="justify-content:center; margin-top:24px;">
              <button class="btn btn-primary" data-nav="dashboard">Back to path</button>
              <button class="btn btn-secondary" data-open-lesson="${lesson.id}">Repeat lesson</button>
              <button class="btn btn-ghost" data-nav="theory">Read theory</button>
            </div>
          </div>
        </main>
      `;
    }

    return `
      <main class="page lesson-layout">
        <section class="stack">
          <div class="panel lesson-panel-primary">
            <div class="lesson-hero">
              <div>
                <div class="button-row" style="margin-bottom:12px;">
                  <span class="chip">${lesson.unit}</span>
                  <span class="chip green">${lesson.lane}</span>
                </div>
                <h1 class="lesson-title">${lesson.title}</h1>
                <p class="muted">${lesson.subtitle}</p>
              </div>
              <div class="lesson-icon" style="background:${lesson.color};">${lesson.icon}</div>
            </div>

            <div class="stack" style="margin-top:18px;">
              <div class="box">
                <p class="label">Formula</p>
                <div class="example-head" style="margin-top:10px;">
                  <p style="margin:0; font-weight:900;">${lesson.theory.pattern}</p>
                  ${renderSpeakButton(lesson.examples[0].en, 'Play')}
                </div>
              </div>
              <div class="box" style="background:#efffdd;">
                <p class="label">Use</p>
                <p style="margin:10px 0 0;">${lesson.theory.use}</p>
              </div>
              <div class="box" style="background:#eaf8ff;">
                <p class="label">Memory hook</p>
                <p style="margin:10px 0 0;">${lesson.theory.memory}</p>
              </div>
              ${(lesson.deepDive || [])
                .map(
                  (item) => `
                    <div class="box theory-deep">
                      <p class="label">Deep note</p>
                      <p style="margin:10px 0 0;">${item}</p>
                    </div>
                  `,
                )
                .join('')}
              ${renderTable(lesson.table)}
              <div class="stack-box">
                <p class="label">Examples</p>
                ${renderExampleCards(lesson.examples)}
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="stack-box">
              <p class="label">Watch for</p>
              ${lesson.theory.focus.map((item) => `<div class="example-card">${item}</div>`).join('')}
            </div>
            <div class="stack-box" style="margin-top:16px;">
              <p class="label">Common traps</p>
              ${lesson.theory.traps.map((item) => `<div class="example-card" style="background:#fff0ea;">${item}</div>`).join('')}
            </div>
            <div class="stack-box" style="margin-top:16px;">
              <p class="label">Slang note</p>
              ${lesson.slang.map((item) => `<div class="example-card" style="background:#fff4d6;">${item}</div>`).join('')}
            </div>
          </div>
        </section>

        <section class="panel lesson-quiz-panel">
          <div class="lesson-top-strip">
            <button class="pill-link" data-nav="dashboard">Back</button>
            ${progressBar(1, 1, 'Practice', `${lesson.xp} XP lesson`)}
          </div>

          <div style="margin-top:18px;">
            <p class="label">${quiz.prompt}</p>
            <h2 class="lesson-title lesson-question">${quiz.question}</h2>
          </div>

          ${
            quiz.listenText
              ? `
                <div class="audio-box">
                  <p class="small-muted">Аудирование через встроенный браузерный голос.</p>
                  ${renderSpeakButton(quiz.listenText, 'Play audio')}
                </div>
              `
              : ''
          }

          <div style="margin-top:18px;">
            ${renderQuizOptions(quiz)}
          </div>

          ${
            state.lessonFeedback
              ? `
                <div class="feedback-card ${state.lessonFeedback.correct ? 'success' : 'error'}" style="margin-top:18px;">
                  <p style="margin:0; font-weight:900;">${state.lessonFeedback.correct ? 'Correct' : 'Almost'}</p>
                  <p class="small-muted">${quiz.explanation}</p>
                </div>
              `
              : ''
          }

          <div class="button-row" style="margin-top:18px;">
            ${
              state.lessonFeedback
                ? '<button class="btn btn-primary" data-action="continue-lesson">Continue</button>'
                : '<button class="btn btn-primary" data-action="check-lesson">Check</button>'
            }
          </div>
        </section>
      </main>
    `;
  }

  function renderBottomNav() {
    if (state.view === 'lesson') {
      return '';
    }

    return `
      <div class="bottom-nav">
        <div class="bottom-nav-inner">
          <button class="${state.view === 'dashboard' ? 'is-active' : ''}" data-nav="dashboard">🏠 Path</button>
          <button class="${state.view === 'theory' ? 'is-active' : ''}" data-nav="theory">📘 Theory</button>
          <button class="${state.view === 'dictionary' ? 'is-active' : ''}" data-nav="dictionary">📖 Dictionary</button>
        </div>
      </div>
    `;
  }

  function render() {
    let page = '';

    if (state.view === 'dashboard') {
      page = renderDashboard();
    } else if (state.view === 'theory') {
      page = renderTheory();
    } else if (state.view === 'dictionary') {
      page = renderDictionary();
    } else {
      page = renderLesson();
    }

    app.innerHTML = `
      <div class="app-shell">
        ${renderTopBar()}
        ${page}
        ${renderBottomNav()}
      </div>
    `;
  }

  function setView(view) {
    state.view = view;
    if (view !== 'lesson') {
      state.lessonFeedback = null;
      state.lessonResult = null;
    }
    render();
  }

  function openLesson(lessonId) {
    if (getLessonStatus(lessonId) === 'locked') {
      return;
    }

    state.activeLessonId = lessonId;
    state.view = 'lesson';
    state.lessonAnswer = '';
    state.lessonChoice = null;
    state.lessonFeedback = null;
    state.lessonResult = null;
    render();
  }

  document.addEventListener('click', (event) => {
    const speakTarget = event.target.closest('[data-speak]');
    if (speakTarget) {
      speakText(decodeURIComponent(speakTarget.getAttribute('data-speak')));
      return;
    }

    const navTarget = event.target.closest('[data-nav]');
    if (navTarget) {
      setView(navTarget.getAttribute('data-nav'));
      return;
    }

    const lessonTarget = event.target.closest('[data-open-lesson]');
    if (lessonTarget) {
      openLesson(lessonTarget.getAttribute('data-open-lesson'));
      return;
    }

    const choiceTarget = event.target.closest('[data-choice]');
    if (choiceTarget) {
      state.lessonChoice = Number(choiceTarget.getAttribute('data-choice'));
      render();
      return;
    }

    const suggestionTarget = event.target.closest('[data-dictionary-suggestion]');
    if (suggestionTarget) {
      state.dictionaryQuery = suggestionTarget.getAttribute('data-dictionary-suggestion');
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector('[data-input="dictionary-query"]');
        if (input) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      });
      return;
    }

    const letterTarget = event.target.closest('[data-dictionary-letter]');
    if (letterTarget) {
      state.dictionaryLetter = letterTarget.getAttribute('data-dictionary-letter');
      render();
      return;
    }

    const categoryTarget = event.target.closest('[data-dictionary-category]');
    if (categoryTarget) {
      state.dictionaryCategory = categoryTarget.getAttribute('data-dictionary-category');
      render();
      return;
    }

    const actionTarget = event.target.closest('[data-action]');
    if (!actionTarget) {
      return;
    }

    const action = actionTarget.getAttribute('data-action');

    if (action === 'reset-dictionary') {
      state.dictionaryQuery = '';
      state.dictionaryLetter = 'all';
      state.dictionaryCategory = 'all';
      render();
      return;
    }

    if (action === 'check-lesson') {
      const lesson = getActiveLesson();
      const quiz = lesson.quiz;
      let isCorrect = false;

      if (quiz.type === 'input') {
        if (!state.lessonAnswer.trim()) {
          return;
        }
        isCorrect = quiz.answers.some((answer) => normalize(answer) === normalize(state.lessonAnswer));
      } else {
        if (state.lessonChoice === null) {
          return;
        }
        isCorrect = state.lessonChoice === quiz.answer;
      }

      state.lessonFeedback = { correct: isCorrect };
      render();
      return;
    }

    if (action === 'continue-lesson') {
      if (!state.lessonFeedback) {
        return;
      }

      state.lessonResult = completeLesson(state.lessonFeedback.correct);
      render();
    }
  });

  document.addEventListener('input', (event) => {
    const type = event.target.getAttribute('data-input');

    if (type === 'theory-query') {
      const caret = event.target.selectionStart;
      state.theoryQuery = event.target.value;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector('[data-input="theory-query"]');
        if (input) {
          input.focus();
          input.setSelectionRange(caret, caret);
        }
      });
      return;
    }

    if (type === 'dictionary-query') {
      const caret = event.target.selectionStart;
      state.dictionaryQuery = event.target.value;
      render();
      requestAnimationFrame(() => {
        const input = document.querySelector('[data-input="dictionary-query"]');
        if (input) {
          input.focus();
          input.setSelectionRange(caret, caret);
        }
      });
      return;
    }

    if (type === 'lesson-answer') {
      state.lessonAnswer = event.target.value;
    }
  });

  document.addEventListener('keydown', (event) => {
    const type = event.target.getAttribute('data-input');
    if (type === 'lesson-answer' && event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      const actionTarget = document.querySelector('[data-action="check-lesson"]');
      if (actionTarget) {
        actionTarget.click();
      }
    }
  });

  render();
})();
