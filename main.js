var button = document.getElementsByClassName("button");
var text = document.getElementsByClassName("text");
var link = document.getElementsByClassName("link");

var textItems = [
  {
    text: "Познай то, познав что, ты познаешь всё!",
    url: "https://instagram.com/avadhutswami?igshid=6ciu1bfqjwk",
  },
  {
    text: "Как жить в этом мире, чтобы не сойти с ума? ",
    url: "https://www.youtube.com/watch?v=r3IuQGeONsc",
  },
  {
    text: "Вечные богатства есть у каждого из нас.",
    url: "https://www.youtube.com/watch?v=d0vWyhdjlTo",
  },
  {
    text:
      "Трансформация произойдёт не извне, а изнутри. И мы должны меняться изнутри. Это самое сложное и самое важное. А внешние условия всегда соответствуют нашей внутренней трансформации.",
    url: "https://www.youtube.com/watch?v=BT1llvVEe88",
  },
  {
    text:
      " Духовная практика сжигает все плоды наших действий, и Господь содействует нашему восхождению.",
    url: "https://www.youtube.com/watch?v=ODFPHVFYTqQ",
  },
  {
    text: "Проходя через негатив, достигается позитив.",
    url: "https://www.youtube.com/watch?v=r3IuQGeONscc",
  },
  {
    text:
      "Прославляйте Господа, и тогда ни физическая смерть, ни невежество, ни страх не смогут поработить нашу бессмертную душу. Жизнь, какой бы длинной или короткой она не была, всегда заканчивается. Но духовный путь души не заканчивается никогда.",
    url: "https://www.youtube.com/watch?v=lgCmX0B5K9Q",
  },
  {
    text: "Пробуждение зависит от нас самих.",
    url: "https://www.youtube.com/watch?v=k6kshV7Djug",
  },
  {
    text:
      "Духовная жизнь — это не просто сидеть с пивком на стадионе и смотреть, как играют в футбол. Духовная жизнь — это стать футболистом. А чтобы тебя выпустили на футбольную арену, надо очень много тренироваться.",
    url: "https://www.youtube.com/watch?v=YR2vWZBmo4U",
  },
  {
    text: "Религия — это стремление души реализовать свой потенциал любви",
    url: "https://www.youtube.com/watch?v=AjTxIWWCWjo",
  },
  {
    text:
      "Вся вселенная вибрирует, и мы находимся под влиянием этих вибраций. Но глобально всё управляется Господом.",
    url: "https://www.youtube.com/watch?v=eBWrrfXXWAM",
  },
  {
    text: "Простота — важное качество ищущего",
    url: "https://www.youtube.com/watch?v=MHJpte3eljg&t=433s",
  },
  {
    text: "Жизнь человека создана для постижения Бога",
    url: "https://www.youtube.com/watch?v=EQCKYpFJ_Hs",
  },
  {
    text:
      "Нужно обратиться к своей внутренней духовной и божественной природе и попытаться через внешние, даже драматические ситуации уйти во внутренний мир, в котором есть ответы на все вопросы.",
    url: "https://www.youtube.com/watch?v=IWfh_Ye4G40",
  },
  {
    text:
      "Человеку необходимо переместить свой взгляд и внимание с материального на духовное. Подлинную любовь, красоту и гармонию мы сможем обрести только через духовную трансформацию себя.",
    url: "https://www.youtube.com/watch?v=igBUDeZWlhE",
  },
  {
    text:
      "Я — Душа. Подлинная самооценка — это понимание того, как мы движемся к нашей высшей духовной цели.",
    url: "https://www.youtube.com/watch?v=b3qlsMIFaIQ&t=2s",
  },
  {
    text: "Духовная практика — развитие веры в высший мир, в Господа!",
    url: "https://www.youtube.com/watch?v=gnj4Fr3Mu18",
  },
  {
    text: "Искушения даются каждому.",
    url: "https://www.youtube.com/watch?v=2kA52ODocIY",
  },
  {
    text: "Вечные богатства есть у каждого из нас.",
    url: "https://www.youtube.com/watch?v=d0vWyhdjlTo",
  },
  {
    text: "Враг — это паразиты внутри нас.",
    url: "https://www.youtube.com/watch?v=qFgVNjWUl58",
  },
  {
    text:
      "Как воплощённая в теле душа постепенно переходит из детского тела во взрослое, а затем в старчестве, так и после смерти этого тела она обретает новое. Подобные изменения не вводят в заблуждение мудреца",
    url:
      "https://harekrishna.ru/biblioteka/knigi/bkhagavad_gita_zhemchuzhina_mudrosti_vostoka/",
  },
  {
    text:
      "Несовершенное всегда нуждается в помощи извне. Совершенное же не может быть совершенным, если оно не самодостаточно и не в силах оказать эту помощь.Вечные богатства есть у каждого из нас.",
    url: "Библиотека Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text:
      "О человеке следует судить по его идеалу, по его стремлению к высшему. Если идеал велик - человек велик. Но что должно быть высочайшим идеалом? Любовь. Любовь превыше всего. Это самая редкая и самая ценная вещь. Божественная Любовь и красота - высшее, что известно миру, и тот, кто способен понять это, - действительно обладает истинным разумом. Обо всём этом и не только в книге Золотой вулкан Божественной Любви",
    url: "Библиотека Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text:
      "Тезис, антитезис, синтез. Есть нечто, а затем возникает некое противостояние, оппозиция. Некая противоположная концепция, суждение. Привести в гармонию это. Таков путь прогресса, процесс прогресса. Прогресс означает это. Есть нечто, а затем возникает возможность оппозиции, противостояния. И для того, чтобы устранить эту оппозицию, необходима высочайшая гармония.",
    url: "Библиотека Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text:
      "Духовную практику вы можете найти где угодно, но далеко не везде вы получите служение",
    url: "Библиотека Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text: "Познавший Его знает всё - обретший Его обретает всё.",
    url:
      "https://harekrishna.ru/biblioteka/knigi/poisk_shri_krishny_prekrasnoy_realnosti/",
  },
  {
    text:
      "Глубина постижения истины человеком определяет его тип веры. Вера — основа бытия каждого, какова вера — таков и человек.",
    url:
      "https://harekrishna.ru/biblioteka/knigi/bkhagavad_gita_zhemchuzhina_mudrosti_vostoka/",
  },
  {
    text:
      "Кто до последнего мига жизни помнит обо Мне, тот, расставшись со своим призрачным обликом, приходит ко Мне.",
    url:
      "https://harekrishna.ru/biblioteka/knigi/bkhagavad_gita_zhemchuzhina_mudrosti_vostoka/",
  },
  {
    text:
      "Когда Кришна через слух входит в сердце, Он утверждается на лотосе сердца и постепенно изгоняет оттуда всю скверну. С наступлением осени все пруды очищаются дождем. Так и с приходом Кришны сердце постепенно очищается от скверны и в нем навечно остается только Он.",
    url: "Библиотека Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text:
      "Жертвенность возвышает, стяжательство низвергает. Жертвуя, мы обретаем все. Присваивая же, напротив, теряем. Это основа духовной науки, науки о жизни.",
    url: "Библиотека Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text:
      "Душа невоспринимаема мирскими чувствами, непостижима и неизменна. Зная о её бессмертной природе, стоит ли скорбеть о теле?",
    url:
      "https://harekrishna.ru/biblioteka/knigi/bkhagavad_gita_zhemchuzhina_mudrosti_vostoka//",
  },
  {
    text:
      "Ничто ограниченное не утолит нашей духовной жажды. Лишь вечная красота и любовь безграничной духовной обители вдохновляют и даруют надежду душе, отчаявшейся обрести свое счастье.",
    url: "https://harekrishna.ru/biblioteka/knigi/absolyutnaya_garmoniya/",
  },
  {
    text:
      "Тот же, кто хочет править, порабощать, повелевать, приходит в низшие сферы, где может осуществить свои желания.",
    url: "https://harekrishna.ru/biblioteka/knigi/absolyutnaya_garmoniya/",
  },
  {
    text:
      "Столкновение бесчисленных эгоистических желаний неизменно приводит к конфликтам и страданиям.",
    url:
      "https://harekrishna.ru/biblioteka/knigi/put_domoy_v_mir_prekrasnoy_realnosti/",
  },
  {
    text:
      "В человеческом обществе эксплуатация достигает наивысшей степени; здесь каждый пытается жить за счет других.",
    url:
      "https://harekrishna.ru/biblioteka/knigi/put_domoy_v_mir_prekrasnoy_realnosti/",
  },
  {
    text:
      "Есть нечто относительное, а есть абсолютное. Нам надо отбросить форму, забыть о ней — нам нужно всегда держаться духа. В противном случае, мы станем поклонниками формы, идолопоклонниками.",
    url: "https://harekrishna.ru/biblioteka/knigi/shri_guru_i_ego_milost/",
  },
  {
    text:
      "Реальность существует сама по Себе и ради Себя — Он удовлетворен только Собой и Своим личным окружением.",
    url: "https://harekrishna.ru/biblioteka/knigi/uroki_religii/",
  },
  {
    text: "Пока мы не отбросим рабское мышление, мы не сможем жить по-новому",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2.",
  },
  {
    text:
      "Вся вселенная вибрирует, и мы находимся под влиянием этих вибраций. Но глобально всё управляется Господом. ",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2...",
  },
  {
    text: "Трансформация — это смысл человеческой жизни.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text: "Мы не мир должны изменять, а себя",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Чем выше ты поднимаешься по ступеням знания, тем более бескорыстной и отреченной личностью ты являешься ",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text: "Наша жизнь уже давно прописана в книге жизни",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Можно ли изменить свою судьбу, или мы заложники кармы? Духовная практика сжигает все плоды наших действий, и Господь содействует нашему восхождению.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text: "Похоть, вожделение и гнев — главые враги человека ",
    url: "https://www.instagram.com/strannik_georgiy/",
  },
  {
    text: "Поиск божественного — настоящий потенциал души",
    url: "https://www.instagram.com/strannik_georgiy/",
  },
  {
    text:
      "В духовном мире нет ничего материального. Там всё — переживание, всё состоит из духовных эмоций.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Все люди имеют душу, но не понимают того, что душа – это и есть они сами, а тело умрет очень скоро.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Настоящая дружба построена на самопожертвовании. Любовь построена на самопожертвовании. И речь идет о полном самопожертвовании.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Мир, в котором мы живем - мир временный, мы не должны пытаться здесь окопаться. И набор наслаждений здесь довольно примитивный.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text: "Господь дает нам падения, чтобы освободить нас от гордыни.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Качество продвинутого человека - это всегда признавать более продвинутых чем ты сам.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Бесстрашное сердце, чистоту, искренность, подлинную дружбу невозможно купить ни за какие деньги.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Очень трудно иметь дело с собой, признать, что ты, на самом деле, — причина всех своих страданий.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Мы можем прогрессировать в одних аспектах – и тут же деградировать в других. «Нос поднимается – корма тонет». Наша духовная практика, как в известной еврейской песне: шаг вперед и три назад. Но это не значит, что нужно оставлять попытки жить духовной жизнью.",
    url: "https://instagram.com/strannik_georgiy?igshid=1qiduc2..",
  },
  {
    text:
      "Бизнес, деньги, жилплощадь, соседи - это временные проблемы. Самая главная проблема - это материальное существование.",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Очень важно искренне признаться себе, что мы не духовные люди, и у нас нет подлинного вдохновения жить духовной жизнью. В этом признании - очень серьезный шаг в сторону истины. ",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Невозможно быть атеистом, по сути дела. Нет никого, кто бы не верил во что-то высшее. ",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Духовный путь — путь героя. Но кто такие герои? Герои идут на амбразуру, жертвуют собой, «сам погибай — друга выручай»",
    url: "https://www.instagram.com/p/B6Q-8eagG2x/?utm_source=ig_web_copy_link",
  },
  {
    text:
      "В христианстве вера занимает высшее положение, в мусульманстве есть вера. Вера всегда наш друг, но эта вера должна быть трансцендентной, эта вера должна быть искренней.",
    url: "https://www.instagram.com/p/B6a381ngRC5/?utm_source=ig_web_copy_link",
  },
  {
    text: "Измени себя — и мир изменится ",
    url: "https://www.instagram.com/p/B6gb3etAKsR/?utm_source=ig_web_copy_link",
  },
  {
    text:
      "Злоупотреблять — тенденция низшего сознания. Но высшее сознание отдает, оно не злоупотребляет.",
    url: "https://www.instagram.com/hare_krishna_krd/?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Мы должны начать работать внутренне, мы не можем восстать против этого мира. Мы должны восстать против себя, против мира — бесполезно.",
    url: "https://www.instagram.com/p/B6iM9X7g5aP/",
  },
  {
    text:
      "Весь этот мир — сон. Хороший ли, плохой, но это сон. Здесь нет ничего подлинного, реального.",
    url: "https://www.instagram.com/p/B6qCi3dAdT-/",
  },
  {
    text:
      "Семья — это добровольное рабство: я живу ради тебя — ты живешь ради меня. Это жизнь ради любви.",
    url: "https://www.instagram.com/p/B7OOMd3ANG1/?utm_source=ig_web_copy_link",
  },
  {
    text:
      "Когда в семейной жизни человек становится эгоистом, семейная жизнь начинает его учить, порой бывает очень больно. Оказывается, мы не созданы для собственного наслаждения и счастья.",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text: "Благодаря хорошему умонастроению вы можете изменить себя.",
    url: "https://www.instagram.com/p/B7vH1FnAQDi/?utm_source=ig_web_copy_link",
  },
  {
    text:
      "Если человек считает, что он чего-нибудь достиг или он совершенен, то он не станет совершенным никогда.",
    url: "https://www.instagram.com/p/B8GlWMVgC1i/?utm_source=ig_web_copy_link",
  },
  {
    text: "Природа души - не страдать. Природа души - любить.",
    url: "https://www.instagram.com/p/CJZPRiNARr7/",
  },
  {
    text:
      "У каждого есть не просто шанс, а огромный потенциал духовной жизни. Мы поймем это, когда наше сознание пробудится, и мы по-настоящему соприкоснемся с этим. Сейчас мы боимся того мира потому, что не знаем его и не понимаем.",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Господь не тусуется с продвинутыми материалистами, они Ему не интересны. Но самый простой Его преданный с чистым сердцем привлекает Господа в тысячу раз больше, чем материалист.",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Поиск грани между материей и духом — это поиск материалиста. Жизнь должна стать единой. Она должна стать духовной.",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Если я не оставлю дурные привычки, я не смогу продвигаться вперед, они будут тащить меня вниз, как якоря. Наша задача на пути к совершенству состоит в том, чтобы, оставив старое (неблагоприятное), принять взамен совсем иное, а значит новое (благоприятное).",
    url: "https://instagram.com/hare_krishna_krd?igshid=u7jgnpu7bm4v",
  },
  {
    text:
      "Тяжёлый путь - это самый короткий и самый короткий и самый подлинный путь",
    url: "https://instagram.com/avadhutswami?igshid=18un8lruatvt5",
  },
  {
    text:
      "В эпоху цифровой вылюты главной валютой будут любовь, забота и духовность. ",
    url: "https://www.instagram.com/p/CJcDfhHAhDH/",
  },
  {
    text:
      "Самая страшная вещь - это гордыня. Как только мы возгордились, мы сразу же начинаем деградировать. ",
    url: "https://www.instagram.com/p/CJTWOP4giMa/",
  },
  {
    text:
      "Душа - частица Бога. Если у нас нет представления о Боге, как у нас может быть представление о себе?",
    url: "https://www.instagram.com/p/CJoYIlYAg4Q/",
  },
  {
    text:
      "Если что-то подвиг нет нас к трансформации, даже плохие времена - то на самом деле, для нас они будут лучшими. ",
    url: "https://instagram.com/avadhutswami?igshid=18un8lruatvt5",
  },
  {
    text: "Истина - в сердце святого",
    url: "https://www.instagram.com/p/CAAKBfWAUQV/",
  },
  {
    text: "Душу невозможно накормить идеями, её можно накормить переживаниями.",
    url: "https://www.instagram.com/p/Bo_jNu-ABE2/",
  },
  {
    text:
      "В этом мире ничего не может тебе пренадлежать. Всё, чем ты обладаешь, дано тебе во временное пользование. ",
    url: "https://www.instagram.com/p/BoyQ_5DABv4/",
  },
  {
    text:
      "Используя все свои ресурсы - ум, голос, речь, физическую силу - для санкиртаны, мы достигает высшей цели своего существования.",
    url: "https://instagram.com/avadhutswami?igshid=dqyqjxppmhre",
  },
  {
    text:
      "Невозможное становится возможным. Единственное препятствие - наше ЭГО, наше ложное Я. ",
    url: "https://www.instagram.com/p/BpOmXiegi0K/",
  },
  {
    text:
      "Больше чем красотой, мы очарованы теми, кто способны пожертвовать себя красоте. ",
    url: "https://www.instagram.com/p/BpHTgC4A51k/",
  },
  {
    text: "Наша духовная жизнь - это трансформация наших качеств. ",
    url: "https://instagram.com/avadhutswami?igshid=dqyqjxppmhre",
  },
  {
    text:
      "Любовь и свобода - совершенно разные вещи: где существует любовь, свобода не может занять высшее положение. ",
    url: "https://instagram.com/avadhutswami?igshid=dqyqjxppmhre",
  },
  {
    text:
      "Когда мы забываем о главном и начинаем черезчур думать о себе, о своих материалистических наслаждения, о своём бренном счастье, - мы выподаем из самой жизни.",
    url: "https://instagram.com/avadhutswami?igshid=dqyqjxppmhre",
  },
  {
    text:
      "Ты всегда будешь находится в определённом состоянии сознания. Поэтому Писания говорят нам:ищи божественное общение и вдохновение. Только в этом общении и вдохновении вы являетесь теми, кто вы есть на самом деле. ",
    url: "https://instagram.com/avadhutswami?igshid=dqyqjxppmhre",
  },
  {
    text: "Прощение и сострадание — высочайшие ценности  ",
    url: "https://www.instagram.com/p/Be1ug3eBxNf/",
  },
  {
    text:
      "Истина не в газетах, не в интернете. Писания говорят: она в сердце святого. Только то сердце, которое наполнено любовью, может отражать истину",
    url: "https://www.instagram.com/p/BfFGBvUBoIO/",
  },
  {
    text: "Если мы будем делать все для Него, то всё будет сделано красиво.",
    url:
      "Харе Кришна.ру - Шри Чайтанья Сарасват Матх в России (harekrishna.ru)",
  },
  {
    text: "Любовь - это жертва ",
    url:
      "https://harekrishna.ru/2011/09/8887-10-sentyabrya-2011-goda-lekciya-shrily-bhakti-bimala-avadhuta-maharaja-sankt-peterburg-lahta.html",
  },
  {
    text: " Жизнь имеет смысл. У нее есть благая цель.",
    url:
      "https://harekrishna.ru/2021/01/zleyshiy-nenavistnik-vsego-i-vsya-10-yanvarya-1983-sridhar-mj#main",
  },
  {
    text:
      "Пребывая в материальном мире, человек должен жить в умиротворении, его целью должно быть развитие духа.",
    url: "https://instagram.com/avadhutswami?igshid=6ciu1bfqjwk",
  },
  {
    text: "Как жить в этом мире, чтобы не сойти с ума? ",
    url:
      "https://www.youtube.chttps://harekrishna.ru/2012/10/11163-obyazannosti-che..",
  },
  {
    text:
      "Наш мир — не более чем веб-сайт, который висит на сервере. В рамках веб-пространства он реален, но в рамках сервера это просто глюк.",
    url: "https://harekrishna.ru/2017/09/24704-zhizn-za-zhiznyu",
  },
  {
    text:
      "Мы должны потратить время на революцию сознания, то есть «прокачать» его. Чем хуже — тем лучше: какие бы сложные драматические обстоятельства ни произошли в нашей жизни, мы должны понимать, что это временно. Быть матерью, отцом — это временно; богатство, здоровье — тоже временно. Все здесь временно.",
    url: "https://harekrishna.ru/",
  },
  {
    text: "Не все вещи созданы только для того, чтобы удовлетворять вас.",
    url: "https://harekrishna.ru/2012/09/10954-kak-pomoch-naiti..",
  },
  {
    text: "В основе нашей жизни всегда — сердце.",
    url: "https://harekrishna.ru/2012/07/10547-to-chto-ty-ishes..",
  },
  {
    text:
      "Наша задача — понять, что же такое истина и правда, потому что, если человек не проник в истину и правду, он может стать жертвой интриг, манипуляций, что сейчас и происходит в мире.",
    url: "https://harekrishna.ru/2016/11/23369-bhagavad-gita-pu..",
  },
  {
    text: "Наши поступки зависят от нашего мировоззрения.",
    url: "https://harekrishna.ru/",
  },
  {
    text:
      "Как говорил наш учитель, для того чтобы достичь вечного, нужно соприкоснуться со временным.",
    url: "https://harekrishna.ru/",
  },
  {
    text:
      "Эксплуатация грязна, а отречение равно нулю, поэтому служение, любовное служение — вот высочайший зенит чистоты.",
    url: "https://harekrishna.ru/2010/10/7180-velikaya-sila-zhe..",
  },
  {
    text:
      "Подлинная любовь опирается на жертвенность. Чем выше жертва, тем больше в нас будет любви; жертва не может не быть основанием любви, чистой любви.",
    url: "https://harekrishna.ru/",
  },
  {
    text:
      "Чем более велика любовь, тем более велико самопожертвование. Жертва ради дела — это любовь.",
    url: "https://harekrishna.ru/2011/06/8411-lyubov-oznachaet-..",
  },
  {
    text:
      "Всегда иди тяжелым путём, помни, что тяжёлый путь — это самый короткий и самый подлинный путь.",
    url: "https://harekrishna.ru/",
  },
  {
    text:
      "Помните о том, что мир преображается в лучшую сторону, когда трансформируется наше восприятие. Когда в нашем сердце откроется Господь — тогда мы увидим даже самое худшее время самым лучшим.",
    url: "https://harekrishna.ru/",
  },
  {
    text:
      "Мы не можем находиться на одном месте. Мы можем либо прогрессировать, либо деградировать. И так устроен этот мир, что даже если мы правдивы, порядочны, благочестивы, но игнорируем божественную реальность — тогда мы не только топчемся на месте, но и своими действиями приносим своей душе великое зло.",
    url: "https://harekrishna.ru/ ",
  },
  {
    text:
      "Духовная жизнь построена на уважении: уважение ко всем живым существам, уважение к Священным Писаниям. Если мы не уважаем, мы не получим духовное знание.",
    url: "https://harekrishna.ru/",
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function changeText() {
  var someNumber = getRandomInt(textItems.length);
  text[0].innerHTML = textItems[someNumber].text;
  link[0].innerHTML = textItems[someNumber].url;
  link[0].href = textItems[someNumber].url;
}

changeText();

button[0].addEventListener("click", changeText);
