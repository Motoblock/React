import { CardCatProps } from './../../component/UI/card/Card';

const catsData: Array<CardCatProps> = [
  {
    id: 1,
    breed: 'Абиссинская',
    price: 20000,
    discont: 0,
    sex: 0,
    name: 'Бенедикт',
    color: [3],
    colorOption: '',
    age: 12,
    raiting: 3.1,
    catterys: 'Tany Mur',
    counts: 11,
    description: `Ласковый и игривый, умный и красивый. Любит играть, спать и кушать. Тянуться к человеку, очень
    любознателен. Будет всегда рядом, хороший помощник и верный друг.`,
    image: './src/assets/images/cats/1/1.jpg',
  },
  {
    id: 2,
    breed: 'Американский бобтейл',
    price: 25000,
    discont: 15000,
    sex: 0,
    name: 'Винсент',
    color: [3],
    colorOption: 'полосатый',
    age: 11,
    raiting: 3.4,
    catterys: 'Fluffy Company',
    counts: 4,
    description: `По природе – чуть щеночек и чуть маленький котик, маленькая обезьянка и маленький ребёнок.
    Утративший агрессию, любящий, нежный и общительный.`,
    image: './src/assets/images/cats/2/1.jpg',
  },
  {
    id: 3,
    breed: 'Американский бобтейл',
    price: 25000,
    discont: 0,
    sex: 0,
    name: 'Джеффри',
    color: [3],
    colorOption: 'мрамор',
    age: 18,
    raiting: 3.5,
    catterys: 'DonLeon',
    counts: 3,
    description: `Любит играть и лазать по вершинам, бесстрашный. Шикарная мраморная шуба, зеленые глаза и преданность, не оставит Вас равнодушным.`,
    image: './src/assets/images/cats/3/1.jpg',
  },
  {
    id: 4,
    breed: 'Мейнкун',
    price: 25000,
    discont: 0,
    sex: 0,
    name: 'Джокер',
    color: [8],
    colorOption: '',
    age: 2,
    raiting: 3.8,
    catterys: 'Liebecoon',
    counts: 9,
    description: `Хорош собой! Отвечает всем породним данным мейн-кунов. Хорошая шуба, много серебра, отличный профиль. Глаза уже зеленые. По характеру мягче и спокойней. Малыш хорош для выставочной карьеры! Игрив и ласков.`,
    image: './src/assets/images/cats/4/1.png',
  },
  {
    id: 5,
    breed: 'Мейнкун',
    price: 35000,
    discont: 0,
    sex: 1,
    name: 'Джейн',
    color: [3],
    colorOption: 'черепаховый',
    age: 2,
    raiting: 3.5,
    catterys: 'Liebecoon',
    counts: 8,
    description: `Мягкая и густая шуба, зеленые глаза и нежный характер, Спокоен и ласков. Вот красавчик будет.`,
    image: './src/assets/images/cats/5/1.png',
  },
  {
    id: 6,
    breed: 'Мейнкун',
    price: 20000,
    discont: 0,
    sex: 1,
    name: 'Джульета',
    color: [3],
    colorOption: '',
    age: 2,
    raiting: 4.3,
    catterys: 'Liebecoon',
    counts: 8,
    description: `Очень милая и ласковая. Любит сидеть на руках и мурлыкать. Очень красивая, обладательница шикарной светлой шубки. Зеленоглазая красавица, ждёт встречи с хозяином.`,
    image: './src/assets/images/cats/6/1.png',
  },
  {
    id: 7,
    breed: 'Мейнкун',
    price: 15000,
    discont: 0,
    sex: 1,
    name: 'Клеопатра',
    color: [6],
    colorOption: '',
    age: 19,
    raiting: 3.8,
    catterys: 'Liebecoon',
    counts: 8,
    description: 'Изящная и очаровталеьная киса. Милая нежная, ласковая и мурлыкающая постоянно.',
    image: './src/assets/images/cats/7/1.png',
  },
  {
    id: 8,
    breed: 'Мейнкун',
    price: 35000,
    discont: 0,
    sex: 1,
    name: 'Дженефи',
    color: [3],
    colorOption: 'мрамор',
    age: 2,
    raiting: 4.7,
    catterys: 'Liebecoon',
    counts: 8,
    description: `Девочка, которая проникнет в сердце любому! Очень утонченная. Имеем густую и короткую, серебряную шерсть. Глаза — это два зеленых озера. Хвост длинный. По характеру — умна, красива, хитрюга и подлиза … Везде она первая, самая сообразительная в помете. Допрыгает и достанет всё о чем пожелает.`,
    image: './src/assets/images/cats/8/1.png',
  },
  {
    id: 9,
    breed: 'Мейнкун',
    price: 38000,
    discont: 0,
    sex: 0,
    name: 'Джассон',
    color: [3],
    colorOption: 'мрамор',
    age: 2,
    raiting: 3.2,
    catterys: 'Sunrise',
    counts: 11,
    description: `Малыш для выставочной карьеры. Ровный профиль, шуба шикарная: короткая и густая, серебряная. Спокойный по характеру, умен. Игрив. Осторожен.`,
    image: './src/assets/images/cats/9/1.png',
  },
  {
    id: 10,
    breed: 'Мейнкун',
    price: 18000,
    discont: 0,
    sex: 0,
    name: 'Джон',
    color: [6],
    colorOption: 'мрамор',
    age: 18,
    raiting: 3.9,
    catterys: 'Sunrise',
    counts: 11,
    description: `Добрый, игривый, окрас - огонь! Глаза в которых можно утонуть, уши с кисточками, будет любимым членом семьи!`,
    image: './src/assets/images/cats/10/1.jpg',
  },
  {
    id: 11,
    breed: 'Мейнкун',
    price: 18000,
    discont: 15000,
    sex: 0,
    name: 'Никки',
    color: [8],
    colorOption: '',
    age: 18,
    raiting: 4.4,
    catterys: 'Liebecoon',
    counts: 8,
    description: `Котик очень нежный и игривый, он очень любит играть с игрушками, если найдёт попрыгунчик или маленький мячик, то играть будет долго.`,
    image: './src/assets/images/cats/11/1.jpg',
  },
  {
    id: 12,
    breed: 'Мейнкун',
    price: 36000,
    discont: 0,
    sex: 0,
    name: 'Кит',
    color: [6],
    colorOption: 'мрамор',
    age: 2,
    raiting: 4.3,
    catterys: 'Liebecoon',
    counts: 8,
    description: `Большие уши, ровный профиль. Обладатель шикарной шубы с густым под шерстком. Глаза большие и голубые, иногда грустные.`,
    image: './src/assets/images/cats/12/1.png',
  },
  {
    id: 13,
    breed: 'Мейнкун',
    price: 44000,
    discont: 0,
    sex: 0,
    name: 'Кейтман',
    color: [6],
    colorOption: 'мрамор',
    age: 2,
    raiting: 3.8,
    catterys: 'Sunrise',
    counts: 13,
    description: `Будет большой с красивой породной головой, правильными кунскими глазами, большими кистями, отличной шерстью.`,
    image: './src/assets/images/cats/13/1.png',
  },
  {
    id: 14,
    breed: 'Мейнкун',
    price: 15000,
    discont: 10000,
    sex: 0,
    name: 'Бежик',
    color: [2],
    colorOption: '',
    age: 24,
    raiting: 3.7,
    catterys: 'Sunrise',
    counts: 11,
    description: `Очень умён и ласков, заглядывает в глаза, а смотрит в душу. Выбрав Бежика, не ошибётесь, друг на веки.`,
    image: './src/assets/images/cats/14/1.png',
  },
  {
    id: 15,
    breed: 'Бенгальская',
    price: 55000,
    discont: 0,
    sex: 1,
    name: 'Джун',
    color: [5],
    colorOption: 'пятнистый',
    age: 2,
    raiting: 4.8,
    catterys: 'Blossom Paradise',
    counts: 1,
    description: `Прехорошенький котенок ищет дом. Джун - ловкий скалолаз! Вытворяющий при этом забавные трюки.`,
    image: './src/assets/images/cats/15/1.jpg',
  },
  {
    id: 16,
    breed: 'Британская',
    price: 45000,
    discont: 0,
    sex: 1,
    name: 'Карамель',
    color: [5],
    colorOption: '',
    age: 2,
    raiting: 3.8,
    catterys: 'Blossom Paradise',
    counts: 1,
    description: `Шикарная красавица, обладательница роскошной шубки и невероятно выразительных глаз.`,
    image: './src/assets/images/cats/16/01.jpg',
  },
  {
    id: 17,
    breed: 'Гималайская',
    price: 45000,
    discont: 0,
    sex: 1,
    name: 'Жасмин',
    color: [7],
    colorOption: 'пойнт',
    age: 2,
    raiting: 3.3,
    catterys: 'Legocat',
    counts: 7,
    description: `Котенок живописного, фантастического окраса ищет дом.`,
    image: './src/assets/images/cats/17/1.jpg',
  },
  {
    id: 18,
    breed: 'Британская',
    price: 35000,
    discont: 30000,
    sex: 1,
    name: 'Кэрол',
    color: [3],
    colorOption: '',
    age: 2,
    raiting: 4.9,
    catterys: 'Helios',
    counts: 6,
    description: `Ласковая, игривая девочка. Очень любит сидеть на руках и мурлыкать, ждет ваши добрые надежные руки.`,
    image: './src/assets/images/cats/18/1.jpg',
  },
  {
    id: 19,
    breed: 'Британская',
    price: 48000,
    discont: 45000,
    sex: 0,
    name: 'Коди',
    color: [2],
    colorOption: '',
    age: 4,
    raiting: 5.0,
    catterys: 'Helios',
    counts: 6,
    description: `Спокойный и ласковый малыш.`,
    image: './src/assets/images/cats/19/1.jpg',
  },
  {
    id: 20,
    breed: 'Британская',
    price: 25000,
    discont: 0,
    sex: 0,
    name: 'Лион',
    color: [3],
    colorOption: '',
    age: 4,
    raiting: 4.9,
    catterys: 'Helios',
    counts: 6,
    description: `Милый, ласковый, игривый. Забияка и задира с братьями и сестрами. Если что-то надо, залезет на плечи и добьется своего.`,
    image: './src/assets/images/cats/20/1.jpg',
  },
  {
    id: 21,
    breed: 'Aмериканский кёрл',
    price: 50000,
    discont: 0,
    sex: 1,
    name: 'Мелисса',
    color: [4],
    colorOption: '',
    age: 2,
    raiting: 4.3,
    catterys: 'Fluffy Company',
    counts: 4,
    description: `Очень наблюдательная, активная и добрая девочка-мурчит, как трактор.`,
    image: './src/assets/images/cats/21/1.jpg',
  },
  {
    id: 22,
    breed: 'Мейнкун',
    price: 35000,
    discont: 0,
    sex: 1,
    name: 'Норин',
    color: [4],
    colorOption: 'черепаховый',
    age: 9,
    raiting: 4.6,
    catterys: 'Sunrise',
    counts: 11,
    description: `Роскошная мурчалка, умная и безумно ласковая.`,
    image: './src/assets/images/cats/22/1.jpg',
  },
  {
    id: 23,
    breed: 'Абиссинская',
    price: 60000,
    discont: 0,
    sex: 0,
    name: 'Маркус',
    color: [7],
    colorOption: 'колор поинт',
    age: 4,
    raiting: 3.9,
    catterys: 'Sharavi',
    counts: 12,
    description:
      'Настоящая бегающая любовь и радость. Если взять на руки, сразу начинает мурлыкать.',
    image: './src/assets/images/cats/23/1.jpg',
  },
  {
    id: 24,
    breed: 'Абиссинская',
    price: 45000,
    discont: 35000,
    sex: 0,
    name: 'Оскар',
    color: [7],
    colorOption: '',
    age: 12,
    raiting: 4.0,
    catterys: 'Tany Mur',
    counts: 13,
    description: `Ласковый невероятно красивого окраса мальчик ищет добрый дом. Ходит в лоток, дома ничего не портит.`,
    image: './src/assets/images/cats/24/1.jpg',
  },
  {
    id: 25,
    breed: 'Бенгальская',
    price: 23000,
    discont: 0,
    sex: 0,
    name: 'Енвер',
    color: [7],
    colorOption: 'пятнистый',
    age: 8,
    raiting: 5.0,
    catterys: 'Gramelissa',
    counts: 5,
    description: `Вам нужен котик для души, элегантный, разговорчивый, тактичный, очень чистоплотный, любящий обнимашки и целовашки? Это он!`,
    image: './src/assets/images/cats/25/1.jpg',
  },
  {
    id: 26,
    breed: 'Бенгальская',
    price: 26000,
    discont: 0,
    sex: 1,
    name: 'Памела',
    color: [7],
    colorOption: 'пятнистый',
    age: 6,
    raiting: 4.4,
    catterys: 'Gramelissa',
    counts: 5,
    description: 'Девочка-подросток, очень активна, непоседа.',
    image: './src/assets/images/cats/26/1.jpg',
  },
  {
    id: 27,
    breed: 'Бенгальская',
    price: 25000,
    discont: 0,
    sex: 0,
    name: 'Перл',
    color: [7],
    colorOption: 'пятнистый',
    age: 7,
    raiting: 4.5,
    catterys: 'Gramelissa',
    counts: 5,
    description: `Коммуникабельный, жизнерадостный, ласковый, абсолютно не агрессивный. Не боится воды, играет в мячики как футболист.`,
    image: './src/assets/images/cats/27/1.jpg',
  },
  {
    id: 28,
    breed: 'Бенгальская',
    price: 15000,
    discont: 0,
    sex: 1,
    name: 'Рокси',
    color: [3],
    colorOption: 'пятнистый',
    age: 12,
    raiting: 4.5,
    catterys: 'Gramelissa',
    counts: 5,
    description: 'Характер покладистый. Отлично ладит с кошачьими.',
    image: './src/assets/images/cats/28/1.jpg',
  },
  {
    id: 29,
    breed: 'Бенгальская',
    price: 23000,
    discont: 0,
    sex: 0,
    name: 'Ральф',
    color: [3],
    colorOption: 'пятнистый',
    age: 6,
    raiting: 3.9,
    catterys: 'Gramelissa',
    counts: 5,
    description: 'Умный, ласковый, игривый, знает лоток и когтеточку.',
    image: './src/assets/images/cats/29/1.jpg',
  },
  {
    id: 30,
    breed: 'Бенгальская',
    price: 18000,
    discont: 0,
    sex: 0,
    name: 'Проспер',
    color: [7],
    colorOption: 'пятнистый',
    age: 8,
    raiting: 4.1,
    catterys: 'Gramelissa',
    counts: 5,
    description: `Спокоен,не навязчив,игрив,не очень разговорчив,но ориентирован на человека. Ладит с детьми. Не кастрирован(пока).`,
    image: './src/assets/images/cats/30/1.jpg',
  },
  {
    id: 31,
    breed: 'Бенгальская',
    price: 18000,
    discont: 0,
    sex: 1,
    name: 'Роберта',
    color: [7],
    colorOption: 'пятнистый',
    age: 8,
    raiting: 3.8,
    catterys: 'Nabisben',
    counts: 9,
    description: `Милая, ласковая, игривая девочку. Очень любит сидеть на руках и мурлыкать, ждет ваши добрые надежные руки.`,
    image: './src/assets/images/cats/31/1.jpg',
  },
  {
    id: 32,
    breed: 'Бенгальская',
    price: 20000,
    discont: 0,
    sex: 1,
    name: 'Розмари',
    color: [8],
    colorOption: '',
    age: 8,
    raiting: 3.6,
    catterys: 'Nabisben',
    counts: 9,
    description: `Обладает потрясающей блестящей шубкой. Кошечка не липнет к рукам, но ласку очень любит. Обнимает лапками за шею и сразу мурчит. Игривая, красивая - настоящая кошь. Обязательно принесет радость и уют в дом.`,
    image: './src/assets/images/cats/32/1.jpg',
  },
  {
    id: 33,
    breed: 'Бенгальская',
    price: 25000,
    discont: 0,
    sex: 1,
    name: 'Селма',
    color: [7],
    colorOption: 'пятнистый',
    age: 6,
    raiting: 3.6,
    catterys: 'Nabisben',
    counts: 9,
    description: `Ходит в лоточек с наполнителем, очень любит влажный корм, внимание и почесушки. Игрунья, но также немного осторожна, ей нужно время, чтобы привыкнуть к новому дому.`,
    image: './src/assets/images/cats/33/1.jpg',
  },
  {
    id: 34,
    breed: 'Бенгальская',
    price: 25000,
    discont: 0,
    sex: 0,
    name: 'Руфус',
    color: [7],
    colorOption: 'пятнистый',
    age: 6,
    raiting: 3.9,
    catterys: 'Nabisben',
    counts: 9,
    description: `Очень игривый, любопытный и смышленый. Даёт лапку, как собачка. Внешне и по характеру похожа на оцикета. В лоток ходит без промахов. Знает когтеточку. Желательно единственным питомцем или с котёнком-подростком, компаньоном для активных игр.`,
    image: './src/assets/images/cats/34/1.jpg',
  },
  {
    id: 35,
    breed: 'Бенгальская',
    price: 30000,
    discont: 0,
    sex: 0,
    name: 'Реджинальд',
    color: [4],
    colorOption: '',
    age: 5,
    raiting: 3.6,
    catterys: 'Compliment',
    counts: 2,
    description: 'В активном поиске любящих хозяев короткошерстный ласковый плюшевый британец.',
    image: './src/assets/images/cats/35/1.jpg',
  },
  {
    id: 36,
    breed: 'Британская',
    price: 28000,
    discont: 25000,
    sex: 0,
    name: 'Саймон',
    color: [4],
    colorOption: '',
    age: 8,
    raiting: 4.6,
    catterys: 'Compliment',
    counts: 2,
    description: `Здоров, привит, кастрирован, никогда не промахивается мимо лотка и вообще, парень воспитанный и деликатный.`,
    image: './src/assets/images/cats/36/1.jpg',
  },
  {
    id: 37,
    breed: 'Британская',
    price: 35000,
    discont: 0,
    sex: 1,
    name: 'София',
    color: [1],
    colorOption: 'поинт',
    age: 6,
    raiting: 4.9,
    catterys: 'Compliment',
    counts: 2,
    description: 'Очень хороший, спокойный котик. К лотку приучен.',
    image: './src/assets/images/cats/37/1.jpg',
  },
  {
    id: 38,
    breed: 'Британская',
    price: 33000,
    discont: 0,
    sex: 0,
    name: 'Сэм',
    color: [7],
    colorOption: 'поинт',
    age: 4,
    raiting: 4.6,
    catterys: 'Compliment',
    counts: 2,
    description: `Бархатный подросток-малыш отличного породного достоинства, хорош для выставки и в разведение.`,
    image: './src/assets/images/cats/38/1.jpg',
  },
  {
    id: 39,
    breed: 'Британская',
    price: 15000,
    discont: 10000,
    sex: 0,
    name: 'Томас',
    color: [4],
    colorOption: '',
    age: 17,
    raiting: 3.6,
    catterys: 'Compliment',
    counts: 2,
    description: 'Любит дeтeй. Maльчик хаpактepный своеобразный, но добрый и ласковый.',
    image: './src/assets/images/cats/39/1.jpg',
  },
  {
    id: 40,
    breed: 'Британская',
    price: 40000,
    discont: 35000,
    sex: 1,
    name: 'Синтия',
    color: [1],
    colorOption: '',
    age: 5,
    raiting: 3.9,
    catterys: 'Compliment',
    counts: 2,
    description: `Родители титулованные (гранд интер чемпион и интер чемпион), имеются все ПЦР тесты. Котенок в новый дом переедет привитым, чипированным, с родословной и ветпаспортом. К лотку и когтеточке приучена.`,
    image: './src/assets/images/cats/40/1.jpg',
  },
  {
    id: 41,
    breed: 'Британская',
    price: 15000,
    discont: 7000,
    sex: 0,
    name: 'Уильям',
    color: [4],
    colorOption: '',
    age: 12,
    raiting: 3.7,
    catterys: 'Compliment',
    counts: 2,
    description: `Милый котик-подросток ждет хозяина. Лоток знает. Характер ласковый. Черный, глаза желтые.`,
    image: './src/assets/images/cats/41/1.jpg',
  },
  {
    id: 42,
    breed: 'Британская',
    price: 37000,
    discont: 0,
    sex: 1,
    name: 'Фелисия',
    color: [1],
    colorOption: '',
    age: 4,
    raiting: 5.0,
    catterys: 'Compliment',
    counts: 2,
    description: `Очень оригинальная, забавная и обязательно принесет капельку счастья и уюта в дом. Очень харизматичная кошечка. За ней интересно наблюдать — она всегда такая разная!`,
    image: './src/assets/images/cats/42/1.jpg',
  },
  {
    id: 43,
    breed: 'Британская',
    price: 12000,
    discont: 9000,
    sex: 0,
    name: 'Тимоти',
    color: [4],
    colorOption: '',
    age: 17,
    raiting: 3.6,
    catterys: 'Compliment',
    counts: 2,
    description: `Умный, ОЧЕНЬ добрый, благородный, чистоплотный, интеллигентный, спокойный, рассудительный и воспитанный котик.`,
    image: './src/assets/images/cats/43/1.jpg',
  },
  {
    id: 44,
    breed: 'Британская',
    price: 15000,
    discont: 10000,
    sex: 0,
    name: 'Феликс',
    color: [5],
    colorOption: '',
    age: 17,
    raiting: 3.6,
    catterys: 'Compliment',
    counts: 2,
    description: `Очень ласковый, игривый, мурчащий компаньон. Кушает все, когтеточкой и лотком пользуется уверенно. Вырастет в шикарного кота.`,
    image: './src/assets/images/cats/44/1.jpg',
  },
  {
    id: 45,
    breed: 'Британская',
    price: 9000,
    discont: 0,
    sex: 0,
    name: 'Фредерик',
    color: [4],
    colorOption: 'поинт',
    age: 12,
    raiting: 4.0,
    catterys: 'Noble Birth',
    counts: 1,
    description: 'Более ласкового, доверчивого и мурчательного котика вы никогда не встречали!!!',
    image: './src/assets/images/cats/45/1.jpg',
  },
  {
    id: 46,
    breed: 'Британская',
    price: 11000,
    discont: 0,
    sex: 1,
    name: 'Уитни',
    color: [7],
    colorOption: 'пятнистый',
    age: 24,
    raiting: 4.6,
    catterys: 'Noble Birth',
    counts: 2,
    description: `Пушистая красавица с потрясающими зелёными глазами и прекрасным характером. Котик игривый и ласковый, обожает игрушки с перышками и мышек, но всем игрушкам предпочтет обнимашки с любимым хозяином.`,
    image: './src/assets/images/cats/46/1.jpg',
  },
  {
    id: 47,
    breed: 'Британская',
    price: 12000,
    discont: 0,
    sex: 1,
    name: 'Хильда',
    color: [7],
    colorOption: 'мрамор',
    age: 23,
    raiting: 3.6,
    catterys: 'Noble Birth',
    counts: 2,
    description: `К другим животным дружелюбен и идёт на контакт, не проявляет агрессию даже в самых стрессовых ситуациях. Нет проблем с приемами у ветеринара, поладит с детьми и т. д. Пристраивается единственным котиком в семью. Без самовыгула.`,
    image: './src/assets/images/cats/47/1.jpg',
  },
  {
    id: 48,
    breed: 'Британская',
    price: 10000,
    discont: 0,
    sex: 0,
    name: 'Черити',
    color: [8],
    colorOption: '',
    age: 12,
    raiting: 3.8,
    catterys: 'Sunrise',
    counts: 11,
    description: 'полосатый',
    image: './src/assets/images/cats/48/1.jpg',
  },
  {
    id: 49,
    breed: 'Британская',
    price: 15000,
    discont: 13000,
    sex: 1,
    name: 'Шерил',
    color: [1],
    colorOption: '',
    age: 13,
    raiting: 4.4,
    catterys: 'Helios',
    counts: 6,
    description: `Здорова, стерилизована и привита. А уж какая красавица – оцените сами! Добрая, игривая, любит погонять игрушечных мышек и половить кошачью удочку). С другими кошками хорошо себя ведет, не ругается и не дерется. Может быть второй кошечкой в семье. Лада самодостаточная и не навязчивая, с характером истинной кошки. Захочет – придет обниматься-гладиться, а нет настроения – то и не приставайте). Умна, хорошо считывает все интонации человека и если ей спокойно, то доверяет, и это очень трогательно. Любит, когда с ней обращаются ласково и максимально нежно. Квартирная жительница, к лоточку и когтеточке приучена.`,
    image: './src/assets/images/cats/49/1.jpg',
  },
  {
    id: 50,
    breed: 'Британская',
    price: 15000,
    discont: 0,
    sex: 0,
    name: 'Версаж',
    color: [8],
    colorOption: '',
    age: 11,
    raiting: 4.7,
    catterys: 'Helios',
    counts: 6,
    description: `Безумно ласковый черный котик ищет дом. У него очень красивая мордочка и шерстка гладкая как шелк.`,
    image: './src/assets/images/cats/50/1.jpg',
  },
];

export default catsData;
