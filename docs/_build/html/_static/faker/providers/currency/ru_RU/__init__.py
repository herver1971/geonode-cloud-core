from .. import Provider as CurrencyProvider


class Provider(CurrencyProvider):
    # Format: (code, name)
    # See currency names in Russian: https://ru.wikipedia.org/wiki/Список_существующих_валют#Валюты
    currencies = (
        ("AED", "Дирхам ОАЭ"),
        ("AFN", "Афгани"),
        ("ALL", "Лек"),
        ("AMD", "Армянский драм"),
        ("ANG", "Нидерландский антильский гульден"),
        ("AOA", "Кванза"),
        ("ARS", "Аргентинское песо"),
        ("AUD", "Австралийский доллар"),
        ("AWG", "Арубанский флорин"),
        ("AZN", "Азербайджанский манат"),
        ("BAM", "Конвертируемая марка Боснии и Герцеговины"),
        ("BBD", "Барбадосский доллар"),
        ("BDT", "Така"),
        ("BGN", "Болгарский лев"),
        ("BHD", "Бахрейнский динар"),
        ("BIF", "Бурундийский франк"),
        ("BMD", "Бермудский доллар"),
        ("BND", "Брунейский доллар"),
        ("BOB", "Боливиано"),
        ("BRL", "Бразильский реал"),
        ("BSD", "Багамский доллар"),
        ("BTN", "Нгултрум"),
        ("BWP", "Пула"),
        ("BYR", "Белорусский рубль"),
        ("BZD", "Белизский доллар"),
        ("CAD", "Канадский доллар"),
        ("CDF", "Конголезский франк"),
        ("CHF", "Швейцарский франк"),
        ("CLP", "Чилийское песо"),
        ("CNY", "Юань"),
        ("COP", "Колумбийское песо"),
        ("CRC", "Коста-риканский колон"),
        ("CUC", "Кубанское конвертируемое песо"),
        ("CUP", "Кубанское песо"),
        ("CVE", "Эскудо Кабо-Верде"),
        ("CZK", "Чешская крона"),
        ("DJF", "Франк Джибути"),
        ("DKK", "Датская крона"),
        ("DOP", "Доминиканское песо"),
        ("DZD", "Алжирский динар"),
        ("EGP", "Египетский фунт"),
        ("ERN", "Накфа"),
        ("ETB", "Эфиопский быр"),
        ("EUR", "Евро"),
        ("FJD", "Доллар Фиджи"),
        ("FKP", "Фунт Фолклендских островов"),
        ("GBP", "Фунт стерлингов"),
        ("GEL", "Лари"),
        ("GGP", "Гернсийский фунт"),
        ("GHS", "Ганский седи"),
        ("GIP", "Гибралтарский фунт"),
        ("GMD", "Даласи"),
        ("GNF", "Гвинейский франк"),
        ("GTQ", "Кетсаль"),
        ("GYD", "Гайанский доллар"),
        ("HKD", "Гонконгский доллар"),
        ("HNL", "Лемпира"),
        ("HRK", "Хорватская куна"),
        ("HTG", "Гурд"),
        ("HUF", "Форинт"),
        ("IDR", "Индонезийская рупия"),
        ("ILS", "Новый израильский шекель"),
        ("NIS", "Новый израильский шекель"),
        ("IMP", "Фунт острова Мэн"),
        ("INR", "Индийская рупия"),
        ("IQD", "Иракский динар"),
        ("IRR", "Иранский риал"),
        ("ISK", "Исландская крона"),
        ("JEP", "Джерсийский фунт"),
        ("JMD", "Ямайский доллар"),
        ("JOD", "Иорданский динар"),
        ("JPY", "Иена"),
        ("KES", "Кенийский шиллинг"),
        ("KGS", "Сом"),
        ("KHR", "Риель"),
        ("KMF", "Франк Комор"),
        ("KPW", "Северокорейская вона"),
        ("KRW", "Южнокорейская вона"),
        ("KWD", "Кувейтский динар"),
        ("KYD", "Доллар Островов Кайман"),
        ("KZT", "Тенге"),
        ("LAK", "Кип"),
        ("LBP", "Ливийский фунт"),
        ("LKR", "Шри-ланкийская рупия"),
        ("LRD", "Либерийский доллар"),
        ("LSL", "Лоти"),
        ("LTL", "Литовский лит"),
        ("LYD", "Ливийский динар"),
        ("MAD", "Марокканский дирхам"),
        ("MDL", "Молдавский лей"),
        ("MGA", "Малагасийский ариари"),
        ("MKD", "Денар"),
        ("MMK", "Кьят"),
        ("MNT", "Тугрик"),
        ("MOP", "Патака"),
        ("MRO", "Угия"),
        ("MUR", "Маврикийская рупия"),
        ("MVR", "Рувия"),
        ("MWK", "Квача"),
        ("MXN", "Мексиканское песо"),
        ("MYR", "Малайзийский ринггит"),
        ("MZN", "Мозамбикский метикал"),
        ("NAD", "Доллар Намибии"),
        ("NGN", "Найра"),
        ("NIO", "Кордоба"),
        ("NOK", "Норвежская крона"),
        ("NPR", "Непальская рупия"),
        ("NZD", "Новозеландский доллар"),
        ("OMR", "Оманский риал"),
        ("PAB", "Бальбоа"),
        ("PEN", "Соль"),
        ("PGK", "Кина"),
        ("PHP", "Филиппинское песо"),
        ("PKR", "Пакистанская рупия"),
        ("PLN", "Злотый"),
        ("PYG", "Гуарани"),
        ("QAR", "Катарский риал"),
        ("RON", "Румынский лей"),
        ("RSD", "Сербский динар"),
        ("RUB", "Российский рубль"),
        ("RWF", "Франк Руанды"),
        ("SAR", "Саудовский риял"),
        ("SBD", "Доллар Соломоновых Островов"),
        ("SCR", "Сейшельская рупия"),
        ("SDG", "Суданский фунт"),
        ("SEK", "Шведская крона"),
        ("SGD", "Сингапурский доллар"),
        ("SHP", "Фунт Святой Елены"),
        ("SLL", "Леоне"),
        ("SOS", "Сомалийский шиллинг"),
        ("SPL", "Луиджино"),
        ("SRD", "Суринамский доллар"),
        ("STD", "Добра"),
        ("SVC", "Сальвадорский колон"),
        ("SYP", "Сирийский фунт"),
        ("SZL", "Лилангени"),
        ("THB", "Бат"),
        ("TJS", "Сомони"),
        ("TMT", "Новый туркменский манат"),
        ("TND", "Тунисский динар"),
        ("TOP", "Паанга"),
        ("TRY", "Турецкая лира"),
        ("TTD", "Доллар Тринидада и Тобаго"),
        ("TVD", "Доллар Тувалу"),
        ("TWD", "Новый тайваньский доллар"),
        ("TZS", "Танзанийский шиллинг"),
        ("UAH", "Гривна"),
        ("UGX", "Угандийский шиллинг"),
        ("USD", "Доллар США"),
        ("UYU", "Уругвайское песо"),
        ("UZS", "Узбекский сум"),
        ("VEF", "Суверенный боливар"),
        ("VND", "Донг"),
        ("VUV", "Вату"),
        ("WST", "Тала"),
        ("XAF", "Франк КФА ВЕАС"),
        ("XCD", "Восточно-карибский доллар"),
        ("XDR", "СДР"),
        ("XOF", "Франк КФА ВСЕАО"),
        ("XPF", "Франк КФП"),
        ("YER", "Йеменский риал"),
        ("ZAR", "Рэнд"),
        ("ZMW", "Замбийская квача"),
        ("ZWD", "Доллар Зимбабве"),
    )

    price_formats = ["#,##", "%#,##", "%##,##", "% ###,##", "%# ###,##"]

    def pricetag(self) -> str:
        return (
            self.numerify(self.random_element(self.price_formats)) + "\N{no-break space}\N{cyrillic small letter er}."
        )
