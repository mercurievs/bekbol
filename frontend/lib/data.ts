export type FeaturedProduct = {
    id: string;
    title: string;
    description: string;
    price: string;
    category: string;
    master: string;
    location: string;
};

export type Feature = {
    tag: string;
    title: string;
    description: string;
};

export const featuredProducts: FeaturedProduct[] = [
    {
        id: "shyrdak-01",
        title: "Шырдак «Айкөл»",
        description: "Традиционный войлочный ковер с ручным орнаментом.",
        price: "28 000 сом",
        category: "Шырдаки",
        master: "Нурзат Төлөнова",
        location: "Нарын"
    },
    {
        id: "kalpak-01",
        title: "Калпак «Чолпон»",
        description: "Белоснежный калпак из натуральной шерсти.",
        price: "3 500 сом",
        category: "Калпаки",
        master: "Эрбол Бекмурза",
        location: "Ош"
    },
    {
        id: "felt-01",
        title: "Войлочный набор «Жайлоо»",
        description: "Подушки и пледы в теплой степной палитре.",
        price: "9 900 сом",
        category: "Войлок",
        master: "Айнагуль Жумабаева",
        location: "Иссык-Куль"
    },
    {
        id: "jewelry-01",
        title: "Серебряные серьги «Кочкор»",
        description: "Украшения с гравировкой национального орнамента.",
        price: "6 800 сом",
        category: "Украшения",
        master: "Айжан Сатыбалдиева",
        location: "Бишкек"
    },
    {
        id: "wood-01",
        title: "Деревянная шкатулка «Арча»",
        description: "Ручная резьба по дереву, натуральная отделка.",
        price: "4 200 сом",
        category: "Дерево",
        master: "Бакытбек Осмон",
        location: "Талас"
    },
    {
        id: "leather-01",
        title: "Кожаный кошелёк «Теңир»",
        description: "Глубокий цвет, тиснение орнамента, ручная прошивка.",
        price: "3 200 сом",
        category: "Кожа",
        master: "Руслан Жээнбеков",
        location: "Джалал-Абад"
    },
    {
        id: "textile-01",
        title: "Национальный жилет «Сайма»",
        description: "Ткань с вышивкой, традиционные мотивы.",
        price: "7 500 сом",
        category: "Одежда",
        master: "Салтанат Муратова",
        location: "Ош"
    },
    {
        id: "souvenir-01",
        title: "Сувенир «Тянь-Шань»",
        description: "Миниатюра горного пейзажа и войлочные детали.",
        price: "1 500 сом",
        category: "Сувениры",
        master: "Данияр Алымкулов",
        location: "Чолпон-Ата"
    }
];

export const features: Feature[] = [
    {
        tag: "Прозрачность",
        title: "Истории мастеров",
        description: "Каждое изделие сопровождается рассказом о семье и ремесле."
    },
    {
        tag: "Доверие",
        title: "Проверенные мастерские",
        description: "Модерация и рейтинг помогают выбирать лучших мастеров."
    },
    {
        tag: "Удобство",
        title: "Гибкая оплата",
        description: "Архитектура готова к Mbank и O!Money, а также картам."
    },
    {
        tag: "Поддержка",
        title: "Локальное сообщество",
        description: "Часть прибыли направляется на развитие ремёсел."
    }
];
