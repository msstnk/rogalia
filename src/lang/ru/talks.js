"use strict";
Talks.npcs = {
    "charles": {
        "default": {
            "male": [
                "Привет, дружище!",
                "Меня зовут Чарльз, я секретарь местной Имперской канцелярии. Еще я являюсь официальным представителем Имперского Синода в этих землях.",
		"В этом городке вы сможете отдохнуть от работы и обменяться товарами с другими людьми.",
		"Так как собраны здесь люди самые разные, за порядок отвечаю я, как хоть какой-то представитель власти.",
                "Итак, давайте поговорим о:"
            ],
            "female": [
                "Доброго дня, юная леди!",
                "Меня зовут Чарльз, я секретарь местной Имперской канцелярии. Еще я являюсь официальным представителем Имперского Синода в этих землях.",
		"В этом городке вы сможете отдохнуть от работы и обменяться товарами с другими людьми.",
		"Так как собраны здесь люди самые разные, за порядок отвечаю я, как хоть какой-то представитель власти.",
                "Итак, давайте поговорим о:",
            ]
        },
        "empire": {
            "male": [
                "Рад снова тебя видеть!",
                "Я смотрю, даже в таких условиях ты остался верен Императору. Это похвально! Не потерять веру в правителя, не поддаться на сладкие речи Конфедератов... Так держать, друг! Провалиться мне на этом месте, со всей Имперской канцелярией, если я тебе не помогу. Я Чарльз, и я к твоим услугам.",
            ],
            "female": [
                "Хорошего дня, юная леди!",
                "Я очень рад, что вы не отвернулись от Имперских законов. Я надеялся, что вы останетесь с нами, в этом городе так не хватает честных и открытых барышень, которые не поддались на обещания этих Конфедератов. Я, глава Имперской канцелярии этого города - Чарльз, и я ваш верный рыцарь и покорный слуга. Просите, я непременно помогу вам."
            ]
        },
        "confederation": {
            "male": [
                "Привет, приятель.",
                "Ну и как там? На службе у конфедератов. Надеюсь, хотя бы кормят хорошо? Впрочем, прости за грубость. Здесь мы все равны, я не должен делать предпочтения тем, кто остался верен нашему правителю. Хоть я и глава… имперской канцелярии, но, тем не менее, за этот город отвечаю я, Чарльз, поэтому я с радостью тебе помогу.",
            ],
            "female": [
                "Юная леди!",
                "Что привело вас ко мне на этот раз? Мне очень скорбно, что вы примкнули к этим проходимцам, но не переживайте, моё отношение к вам от этого не изменилось. У вас наверняка были свои мотивы, которые я не вправе осуждать. Все мы здесь в равных условиях, просто... Я надеялся, что вы выберете более утончённый путь. В любом случае, Чарльз к вашим услугам.",
            ]
        },
        "actions": {
            "Set citizenship": "Я хочу сообщить о своей принадлежности к одной из фракций.",
            "Get claim": "Я хочу получить земельный надел.",
            // "Get village claim": "Я бы хотел обосновать здесь деревню (10 платины).",
        },
    },
    "diego": {
        "default": {
            "male": ["Хэй, привет! Меня зовут Диего, я посол Тайтерры в этих землях. Хотя мне больше по душе хорошая битва, чем вся эта политическая возня. Так что если ты захочешь поохотиться на дичь, я могу показать тебе злачные места, ха-ха!"],
        },
        "actions": {
            "Show instances": "Покажи мне места для охоты.",
        }
    },
    "scrooge": {
        "default": {
            "male": [
                "Добро пожаловать!",
                "В нашем банке мы всегда рады клиентам. Проходите, присаживайтесь. Меня зовут Скрудж и я распорядитель Банка Рогалии.",
                "Наш банк настолько крупный, что мы можем даже позволить себе открывать отделения в таких удалённых деревушках как эта. Не переживайте, гарантии качества услуг остаются всё те же.",
                "Я могу взять у вас деньги на хранение. Нет, увы проценты вы не получите, но они будут храниться в надежном месте.",
                "Так же помещикам мы можем предложить услугу накопительного фонда. Если вы крупный и статный джентельмен или леди и у вас есть какой-то доход, весь ваш доход автоматически будет складываться на ваш счёт. Сплошная выгода и никаких лишних расходов.",
                "Итак, вы определились?"
            ]
        },
        "actions": {
            "Bank": "Денежные операции.",
            "Exchange": "Биржа. Обмен слитков и ассигнаций.",
        },
    },
    "sabrina": {
        "default": {
            "male": [
                "Стой! Не подходи... Та-а-ак... Ага... Ладно, черт с ним. Ой, извини. Меня зовут Сабрина, я местный алхимик. У меня есть все - от листка подорожника до зелья из подорожника, от которого и камень наполнится жизнью! Хе-хе, шучу."
            ],
	    "female": [
		"Постой, не подходи. Та-а-ак... Ладно, ерунда. Меня зовут Сабрина, я местный алхимик. У меня есть все - от листка подорожника до духов из подорожника, которые привлекут даже изысканых мужей! Хе-хе, шучу. Ну, разве что местного мясника."
	    ]
        },
        "actions": {
            "Trade": "Я хочу вглянуть на твои товары.",
        },
    },
    "larisa": {
        "default": {
            "male": [
                "Добро пожаловать в аукционный дом Рогалии! Конечно, мы только филиал столичного аукциона, но здесь товары ничуть не хуже! Мое имя Лариса, обращайтесь, если желаете поучаствовать в торгах."
            ]
        },
        "actions": {
            "Auction": "Я хочу взглянуть на аукцион.",
            "Get vendor license": "Я хочу получить лицензию торговца."
        },
    },
    "shot": {
        "default": {
            "male": [
                "Привет, красавчик, меня зовут Шот, присаживайся.",
                "Наш трактир \"Гарцующий Койот\", пожалуй, единственное место, которое заслуживает внимания в этом городке, что бы там ни говорил этот задавака Чарльз. У нас есть еда, вода и кое-что погорячее в соседней комнате. Ну, я думаю, ты и без меня разберёшься.",
            ],
            "female": [
                "Привет, подруга!",
                "Меня зовут Шот, и я владелец \"Гарцующего Койота\". У нас есть еда и вода, ну, и конечно ещё кое что, но тебе это вряд ли будет интересно. Наш городок довольно неплохой, хоть тут и собрались одни мужланы, да отбросы. Но ничего, я думаю, мы с тобой станем хорошими подругами.",
            ]
        },
        "empire": {
            "male": [
                "Чего достопочтимый джентльмен изволит откушать сегодня?",
                "У нас есть семена картошки, которую вы без труда сможете вырастить. Первосортная вода в ассортименте. Есть из речки, есть из озера, есть даже из пруда. Да вы не смотрите так, это просто небольшой трактирчик, а не ресторан в центре Имперской столицы. Или заходя в заведение под названием \"Гарцующий Койот\" вы ожидали увидеть что-то иное? Меня зовут Шот, я готова вас обслужить.",
            ],
            "female": [
                "О! Имперская Леди пришла поужинать?",
                "Ну, я надеюсь, я оправдаю ваши ожидания. У меня есть семена на любой вкус. В смысле? Нормальная еда? А что, думаете из этих семян не выйдет ничего путного? У меня и воду можно купить, чтобы их полить. Шучу конечно. Воду пить можно только тут. Из наших стаканов, да. Да, вот так вот тяжко жить. Можете написать на меня жалобу. Так и напишите: \"Владелица таверны Шот, Конфедератка, дочь Конфедератов, не уважает честных Имперских женщин\"."
            ]
        },
        "confederation": {
            "male": [
                "Привет, красавчик, мое имя Шот, присаживайся.",
                "Наш трактир \"Гарцующий Койот\", пожалуй, единственное место, которое заслуживает внимания в этом городке, что бы там ни говорил этот задавака Чарльз. У нас есть еда, вода и кое-что погорячее в соседней комнате. Я слышала, что парни из конфедерации не брезгуют подобным досугом. Ну, я думаю, ты и без меня разберёшься.",
            ],
            "female": [
                "Привет-привет! Я рада, что ещё одна дочь Конфедерации посетила наш трактир!",
                "\"Гарцующий Койот\" не такое уж плохое место, можешь заходить чаще, я уверена, мы станем хорошими подругами. Я - Шот, кстати. Я могу тебя накормить, продать семян, ну и, знаешь… Если ты широких взглядов, а я смотрю на тебя, и думаю, что ты именно такая, то для тебя найдётся и кое что интересненькое в соседней комнате...",
            ]
        },
        "actions": {
            "Trade": "Я хочу посмотреть на твои товары.",
            "Drink water": "Я хочу промочить горло (5 серебряных)",
        }
    },
    "margo": {
        "default": {
            "male": [
                "Эй, сладкий, не проходи мимо!",
		"Давай повеселимся немного, ты же знаешь кто я, не правда ли? Вы называете нас «mulier stupri», но мне больше нравится «ночная бабочка», я же похожа на бабочку правда? Шелковистые крылышки, лёгкость во всём теле, необычайная красота, а главное… Я тоже дарю людям удовольствие… Ну что, крепкий парень нуждается в отдыхе? Или, может, просто посмотришь?",
            ],
            "female": [
                "Золотце? Ты не ошиблась дверью?",
		"О, не стесняйся ты так, я всё поняла по твоим глазам, ни слова больше. Меня зовут Марго, и я та, кто тебе нужен. Я вижу напряжение и скованность, поверь, ты пришла точно по адресу, сейчас мы будем с этим бороться. Женщина должна выпустить себя наружу. Показать себя миру, избавившись от предрассудков. Проходи, милая, присаживайся на кровать, я не кусаюсь.",
            ]
        },
        "empire": {
            "male": [
                "Сладенький, проходи, не стесняйся.",
		"Если ты пришел сюда, думаю ты знаешь, кто я и какие услуги предоставляю. Меня зовут Марго. Присядь на кровать, расслабься. Ты ведь хочешь расслабиться? Я знаю, что вы, верные Императору мужчины, недолюбливаете таких, как я, но отбрось свои предрассудки и просто прими наслаждение...",
            ],
            "female": [
                "Да-да? Вам что-то нужно?",
		"Марго, это я. Путана. Девушка лёгкого поведения, скажем так. Вас это смущает? Да, я вижу, что смущает. Любого Имперца это смутит. Но… постойте, не отворачивайтесь. Я вижу… я вижу, что вы все таки ко мне. Простите меня за такую поспешность. Это место, знаете ли, немного нестабильно. Что бы ни говорил Чарльз - Империя и Конфедерация останутся врагами, даже если закинуть нас на необитаемый остров. Но вы не переживайте. Я лояльна ко всем своим клиентам, и бережно храню многие секреты. Сбросить напряжение со мной лучше, чем с местными потными мужланами."
            ]
        },
        "confederation": {
            "male": [
                "Милый, не стесняйся, заходи.",
		"Ох, какой напор! Я сразу почуяла в тебе настоящего самца, даже твоя походка заставляет мои ноги дрожать. Ты, конечно, пришел не просто так? В конце концов, благодаря таким как ты, мои услуги вновь стали легальны даже в имперских владениях. Меня зовут Марго, но можешь называть меня как хочешь, главное расслабься и получай удовольствие...",
            ],
            "female": [
                "Заходи, детка, Марго всегда рада таким симпатичным девочкам, как ты.",
		"В этом Имперском царстве потных грязных мужиков иногда хочется просто немного расслабиться, подурачиться и сбросить напряжение, правда? Наша профессия, \"muloer stupri\", как нас называют, она учит этому, учит давать людям то, что они хотят. А сейчас ты хочешь побыть здесь со мной, я угадала? Прыгай на кровать и забудь свои заботы, я сама все сделаю...",
            ]
        },
        "actions": {
            "Buy sex": "Воспользоваться услугами путаны (10 золота)",
        }
    },
    "bruno": {
        "default": {
            "male": [
                "Добро пожаловать в мою скромную лавку!",
		"Мое имя Бруно, буду рад помочь тебе выбрать подходящую одежду или ткани. Я лучший портной во всей Империи, буду рад услужить.",
            ],
            "female": [
                "Дорогуша, не проходи мимо, загляни ко мне!",
		"Меня зовут Бруно, и это моя лавка. Здесь ты можешь купить одежду или ткани - выбирай, найдется на любой вкус и цвет.",
            ]
        },
        "empire": {
            "male": [
                "Гражданин!",
		"Мое имя Бруно, я местный портной, если вам потребуется новая одежда или ткани - обратитесь ко мне, я всегда рад услужить гражданину Империи.",
            ],
            "female": [
                "Госпожа, загляните ко мне!",
		"Всегда приятно видеть лицо верного Императору человека, особенно такое прелестное. Мое имя Бруно, и если вам нужна одежда для каждодневных дел или для аудиенции у Императора, неважно, - у меня найдется на любой случай."
            ]
        },
        "confederation": {
            "male": [
                "Эй, парень!",
		"У вас, Конфедератов, совсем вкуса нет? Прости, но ходишь ты в каких-то обносках! Мое имя Бруно, заглядывай ко мне, я подберу тебе простую и изящную одежду на любой случай.",
            ],
            "female": [
                "Эй, красавица!",
		"Хоть ты и на службе у Конфедератов, нельзя не признать твоей природной красоты. А вот одежка тебе совсем не к лицу. Мое имя Бруно, и я лучший имперский портной! Проходи, выбирай, что душе угодно. Только послушай моего совета - не наряжайся как Марго. Тебе такое не идет.",
            ]
        },
        "actions": {
            "Trade": "Я хочу посмотреть на твои товары.",
        }
    },
    "ahper": {
        "default": {
            "male": [
                "А ведь когда-то я целые валуны в миг сносил... Хе-хе. Ой, прости.", //Это кто?
            ]
        },
        "actions": {
            "Trade": "Я хочу посмотреть на твои товары.",
        },
    },
    "cosmas": {
        "default": {
            "male": [
                "Здравствуй. Это моя кузница. Может быть, тебе нужны доспехи или оружие? Эх... Вам ведь только гвозди да обода подавай...",
            ]
        },
        "actions": {
            "Trade": "Я хочу взглянуть на твои товары.",
        },
    },
    "boris": {
        "default": {
            "male": [
                "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		"Иерей Борис, настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Быть может, ты пришел отпустить свои грехи?",
            ],
            "female": [
                "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		"Иерей Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Наверное, ты пришла исповедаться?",
            ]
        },
        "empire": {
            "male": [
                "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		"Иерей Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Быть может, ты пришел отпустить свои грехи?",
            ],
            "female": [
                "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		"Иерей Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Наверное, ты пришла исповедаться?"
            ]
        },
        "confederation": {
            "male": [
                "Заходи, сын мой, в нашей церкви всегда рады новым прихожанам.",
		"Иерей Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Быть может, ты пришел отпустить свои грехи? ",
            ],
            "female": [
                "Заходи, дочь моя, в нашей церкви всегда рады новым прихожанам.",
		"Иерей Борис, я настоятель этой святой обители. Здесь, в новых землях, я несу свет всем людям, кто в нем нуждается. Наверное, ты пришла исповедаться?",
            ]
        },
        "actions": {
            "Trade": "Я хочу купить индульгенцию",
        }
    },
    "bertran": {
        "default": {
            "male": [
                "Фааарш....",
                "Не проходи мимо, милос-с-стивый гос-с-сподин, загляни к Бертрану. Я местный мяс-с-сник и я хорошо разделываю туш-ш-ш-ши. Могу порез-з-зать твою туш-ш-шу. Я имел ввиду не тебя с-самого, не бойс-ся. Во всяком с-случае пока ты ж-ж-жив. Я не люблю резать кричащ-щ-щую плоть. Больш-ш-ше не люблю. Ты мож-ж-жешь купить у меня мяс-с-с-со, а мож-жешь научитьс-с-ся хорош-ш-шо готовить.",
            ],
            "female": [
                "Какая с-с-сочная...",
                "Какая с-с-сочная, говорю, у меня тут выр-р-резка. Обожаю выр-р-резку. Её очень приятно рез-з-з-зать. Простите, лед-ди, я совс-с-сем забылс-с-ся. Меня зовут Бертр-ран, я мес-с-стный мяс-с-сник. Вы мож-жете купить у меня немного мяс-с-са. Я могу научить вас-с готовить. Либо... Хотя нет, я вас-с ещё слиш-шком плохо знаю.",
            ]
        },
        "actions": {
            "Trade": "Я хочу взглянуть на твои товары.",
        }

    },
    "vendor": {
        "default": {
            "male": [
                "Добро пожаловать в мою скромную лавку, сударь.",
            ],
            "female": [
                "Добро пожаловать в мою скромную лавку, сударыня.",
            ],
        },
        "actions": {
            "Trade": "Я хочу взглянуть на твои товары.",
        },
    },
    "ded-moroz": {
        "default": {
            "male": [
                "Привет, Я - Дедушка Мороз, слыхал про такого?",
                "Это я на всякий случай спрашиваю - народец местный уж больно странный. Кто-то снега не видел, кто-то в волшебство не верит… Меня дома, на Зимнем Острове, пытались подготовить к тому, что вы все тут странные, но такого я не ожидал, скажу тебе… Ну ладно, продолжим.",
                "Скоро Новый Год! А в Новый Год сбываются все мечты и каждому полагается подарок. Ты, кстати, мальчик или девочка? Хочешь подарок?… ЖДИ ДО НОВОГО ГОДА!",
                "Хо-хо-хо! Ну, хорошо. Могу тебе и пораньше кое-что подарить. Но для начала мне нужна помощь в одном дельце. Смекаешь?",
                "Кстати, у внучки моей, Снегурочки, тоже есть кое-какие поручения для тебя.",
                "Поговори с ней, она девочка хорошая. Правда, немного странная - на бедняжку в детстве шкаф с книгами детских стихотворений упал.",
            ],
        },
    },
    "snegurochka": {
        "default": {
            "male": [
                "Это кто сюда идёт? Громко топает, поёт?",
                "И за кем бегут гурьбой и кричат наперебой",
                "Сто чудовищ, двести наг и один убийца-маг?",
                "Подходи, не бойся, мальчик - я сегодня рада всем",
                "У меня подарки есть - ты таких не купишь здесь.",
                "Из волшебной Вал Халы принесла вам топоры,",
                "И мечей и палок разных и похмельных зелий красных,",
                "Пирогов для именин",
                "И резиновых женщин.",
                "Только есть одна проблема - ",
                "Не могу нигде замены отыскать.",
                "А нужен мне человек, да посмелей",
                "Чтоб пробрался в лес былинный ",
                "И вернулся невредимым",
                "Знаешь ты таких? Тогда",
                "Посылай их всех сюда",
                "Слишком быстро люди мрут ",
                "В этих землях - там и тут.",
                "Не поможешь нам - беда",
                "Не минует никогда.",
                "А чудесный Новый Год",
                "Просто так без нас пройдёт!",
                "Ну, что скажешь?",
                "Не молчи - и зубами не стучи.",
                "Я - холодная натура.",
                "Оттого температуру здесь вокруг снижаю я",
            ],
            "female": [
                "Это кто сюда бежит так, что вся земля дрожит?",
                "За диетой не следила и вокруг тут наследила!",
                "Подходи, не бойся, крошка. Я не буду убивать",
                "Снегурка будет всех сегодня пирожками угощать.",
                "Шоколадки, кексы, травка - ",
                "У меня всего полно. ",
                "Хватит, чтобы ненадолго",
                "Позабыть, что жизнь - не очень",
                "Вот что я скажу, красотка -",
                "Помоги мне и тогда ",
                "Тётя Снерука без труда",
                "Одарит тебя речами",
                "И полезными вещами.",
                "Не поможешь нам - беда",
                "Не минует никогда.",
                "А чудесный Новый Год",
                "Просто так без нас пройдёт!",
                "Ну, что скажешь?",
                "Не молчи и зубами не стучи.",
                "Я - холодная натура.",
                "Оттого температуру здесь вокруг снижаю я",
            ],
        },
    },
    "ivan": {
        "default": {
            "male": [
                "Привет! Подходи, не стесняйся!",
                "Меня зовут Иван, я местный плотник. Если ты ищешь где бы купить хороший топор или пилу, а так же прочие предметы для этой нелегкой профессии, обращайся, найду тебе что-нибудь!",
            ],
        },
    },
    "plato": {
        "default": {
            "male": [
                "Добрый день, друг.",
                "Меня зовут Платон, я занимаюсь тем, что обучаю основам выживания в этих землях всех сюда прибывших. Не важно, по своей воле ты здесь, или же тебя сослал Император за провинность перед законом, слушай меня внимательно, и ты не станешь обедом для диких животных, когда выйдешь за пределы города.",
            ],
        },
    },
    "athena": {
        "default": {
            "male": [
                "Ха-ха! Свежая кровь для арены!",
		"Меня зовут Афина, я распорядитель боев на арене. Мне не важно, какого ты пола, возраста, каких вглядов, я лишь хочу видеть жажду честного сражения в твоих глазах! Здесь, на арене, можно помериться силой с другими жителями этих земель."
            ]
        },
    },
    "alfred": {
        "default": {
            "male": [
                "Добро пожаловать, путник.",
                "Мое имя Альфред, я содержатель этой скромной гостиницы. Если вам нужна теплая постель и уют, вы найдете его именно здесь. Конечно, это не королевские покои, но спокойный сон на удобной кровати вам обеспечен.",
            ],
        },
    },
    "angelina": {
        "default": {
            "male": [
                "У-у-у-у!!!",
                "Что, и ты меня совсем не боишься? Эх, вот опять... Мое имя Ангела, и я уж-ж-асный призрак! Ладно, может и не такой уж и ужасный... Приезжим всегда интересны местные байки и всякая жуть, а я вообще-то больше стихи люблю. Ну, присаживайся, если хочешь послушать, я и тебе что-нибудь расскажу. Призракам жутко скучно, знаешь ли. Наверное, поэтому большинство и балуются, распугивая детей и старушек.",
            ],
        },
    },
};
