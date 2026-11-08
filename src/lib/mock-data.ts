// Mock content for the first front-end build. Replace with API data later.

export type Route = {
  id: string;
  title: string;
  priceFrom: string; // formatted
  image: string;
  distance: string;
  minPeople: string;
  stops: string;
  best?: boolean;
};

export const routes: Route[] = [
  { id: "charyn", title: "Чарынский каньон", priceFrom: "от 0000 тг за человека", image: "/images/route-1.webp", distance: "0000 км", minPeople: "от 1 чел.", stops: "2 остановки", best: true },
  { id: "astana", title: "Астана", priceFrom: "от 0000 тг за человека", image: "/images/route-2.webp", distance: "0000 км", minPeople: "от 2 чел.", stops: "6 остановок" },
  { id: "turkestan", title: "Туркестан", priceFrom: "от 0000 тг за человека", image: "/images/route-3.webp", distance: "0000 км", minPeople: "от 1 чел.", stops: "5 остановок" },
  { id: "charyn-2", title: "Чарынский каньон", priceFrom: "от 0000 тг за человека", image: "/images/route-1.webp", distance: "0000 км", minPeople: "от 1 чел.", stops: "2 остановки", best: true },
  { id: "astana-2", title: "Астана", priceFrom: "от 0000 тг за человека", image: "/images/route-2.webp", distance: "0000 км", minPeople: "от 2 чел.", stops: "6 остановок" },
  { id: "turkestan-2", title: "Туркестан", priceFrom: "от 0000 тг за человека", image: "/images/route-3.webp", distance: "0000 км", minPeople: "от 1 чел.", stops: "5 остановок" },
];

export type Car = { id: string; title: string; image: string; tags: string[] };

export const cars: Car[] = [1, 2, 3, 4, 5].map((n) => ({
  id: `car-${n}`,
  title: `АВТОМОБИЛЬ ${n}`,
  image: "/images/car.webp",
  tags: ["Премиум", "6 чел", "Дальние поездки"],
}));

export const steps = [
  { icon: "/images/step-1.svg", iconSm: "/images/step-1-sm.svg", title: "Выберите маршрут", text: "Готовый или свой — укажите дату, время и место подачи." },
  { icon: "/images/step-2.svg", iconSm: "/images/step-2-sm.svg", title: "Настройте поездку", text: "Добавьте опции: гид/переводчик, остановки по пути, детское кресло, минивэн." },
  { icon: "/images/step-3.svg", iconSm: "/images/step-3-sm.svg", title: "Зафиксируйте бронирование", text: "Подтвердите заказ и оплатите удобным способом." },
  { icon: "/images/step-4.svg", iconSm: "/images/step-4-sm.svg", title: "Поезжайте с комфортом", text: "Водитель приедет к месту подачи, вы едете в своём темпе." },
];

export const extras = [
  {
    id: "guide",
    title: "Гид / Переводчик",
    text: "Гид-переводчик переводит речь, помогает общаться с местными жителями, ориентироваться в городе и глубже познакомиться с культурой",
    image: "/images/extra-guide.webp",
    imageMobile: "/images/extra-guide-m.webp",
  },
  {
    id: "places",
    title: "Места по пути",
    text: "Добавляйте места по пути — достопримечательности, кафе или нужные адреса — чтобы заранее спланировать маршрут",
    image: "/images/extra-places.webp",
    imageMobile: "/images/extra-places-m.webp",
  },
];

export const partners: { id: string; name: string; logo?: string }[] = [
  { id: "2gis", name: "2GIS", logo: "/images/partner-2gis.png" },
  { id: "p2", name: "Партнёр" },
  { id: "p3", name: "Партнёр" },
  { id: "p4", name: "Партнёр" },
];

const lorem =
  "Это пример текстового блока, который используется для демонстрации структуры и внешнего вида контента. Здесь может находиться описание функции, услуги или дополнительная информация для пользователя";

export const faq = [
  { q: "Сейчас ответим на ваши вопросы", a: lorem },
  { q: "Пример текстового описания", a: lorem },
  { q: "Пример текстового описания", a: lorem },
  { q: "Пример текстового описания", a: lorem },
];

export const nav = [
  { label: "О нас", href: "#about" },
  { label: "Маршруты", href: "#routes" },
  { label: "Помощь", href: "#faq" },
  { label: "Новости", href: "#news" },
];

export const footerColumns = [
  { title: "Категории", links: ["О компании", "Privacy Policy", "Помощь", "Новости"] },
  { title: "Контакты", links: ["Заказать поездку", "Адреса", "Партнерство", "Водителям"] },
];

// Driver / partner CTA copy. "partner" text is a placeholder — the Figma only has the driver version.
export const joinCopy = {
  driver: {
    tab: "Я водитель",
    title: "Хотите стать водителем?",
    text: "Зарабатывайте до 0000 тг в неделю как наш водитель. Присоединяйтесь к сообществу, выбирайте удобный вам график и зарабатывайте деньги за рулём!",
  },
  partner: {
    tab: "Я партнёр",
    title: "Хотите стать партнёром?",
    text: "Размещайте свои места и услуги на маршрутах ALGA trip и получайте новых гостей со всего Казахстана.",
  },
};
