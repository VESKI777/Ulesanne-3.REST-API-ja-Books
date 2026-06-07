import { Book } from '../models/Book';
import { genres } from './genres';

export const books: Book[] = [
  {
    id: '101',
    title: 'Война и мир. Том 1',
    isbn: '9785170914782',
    publishedYear: 1867,
    pageCount: 1300,
    language: 'Russian',
    description: 'Эпический роман о русском обществе в эпоху Наполеоновских войн',
    authorId: 'a01',
    publisherId: 'p03',
    genres: [genres[6], genres[9]], // Classic, Drama
    createdAt: new Date('2025-02-10'),
    updatedAt: new Date('2025-02-10')
  },
  {
    id: '102',
    title: 'Мастер и Маргарита',
    isbn: '9785171180902',
    publishedYear: 1966,
    pageCount: 480,
    language: 'Russian',
    description: 'Мистический роман о дьяволе, посетившем Москву 1930-х',
    authorId: 'a02',
    publisherId: 'p01',
    genres: [genres[0], genres[3], genres[8]], // Fantasy, Horror, Satire
    createdAt: new Date('2025-02-11'),
    updatedAt: new Date('2025-02-11')
  },
  {
    id: '103',
    title: '1984',
    isbn: '9780451524935',
    publishedYear: 1949,
    pageCount: 328,
    language: 'English',
    description: 'Антиутопия о тотальном контроле и потере личности',
    authorId: 'a03',
    publisherId: 'p02',
    genres: [genres[8], genres[9]], // Dystopian, Political
    createdAt: new Date('2025-02-12'),
    updatedAt: new Date('2025-02-12')
  },
  {
    id: '104',
    title: 'Сто лет одиночества',
    isbn: '9788466334899',
    publishedYear: 1967,
    pageCount: 496,
    language: 'Spanish',
    description: 'Магический реализм в истории семьи Буэндиа',
    authorId: 'a04',
    publisherId: 'p04',
    genres: [genres[0], genres[6]], // Fantasy, Classic
    createdAt: new Date('2025-02-13'),
    updatedAt: new Date('2025-02-13')
  },
  {
    id: '105',
    title: 'Убить пересмешника',
    isbn: '9780061120084',
    publishedYear: 1960,
    pageCount: 336,
    language: 'English',
    description: 'Драма о расовой несправедливости глазами ребёнка',
    authorId: 'a05',
    publisherId: 'p05',
    genres: [genres[6], genres[7]], // Classic, Legal drama
    createdAt: new Date('2025-02-14'),
    updatedAt: new Date('2025-02-14')
  },
  {
    id: '106',
    title: 'Преступление и наказание',
    isbn: '9780143058144',
    publishedYear: 1866,
    pageCount: 671,
    language: 'Russian',
    description: 'Психологический роман о теории «сверхчеловека»',
    authorId: 'a06',
    publisherId: 'p03',
    genres: [genres[6], genres[9]], // Classic, Psychological
    createdAt: new Date('2025-02-15'),
    updatedAt: new Date('2025-02-15')
  },
  {
    id: '107',
    title: 'Анна Каренина',
    isbn: '9780143035008',
    publishedYear: 1877,
    pageCount: 864,
    language: 'Russian',
    description: 'Трагическая любовь на фоне высшего света России',
    authorId: 'a01',
    publisherId: 'p06',
    genres: [genres[5], genres[6]], // Romance, Classic
    createdAt: new Date('2025-02-16'),
    updatedAt: new Date('2025-02-16')
  },
  {
    id: '108',
    title: 'Моби Дик',
    isbn: '9780553213119',
    publishedYear: 1851,
    pageCount: 624,
    language: 'English',
    description: 'Охота на гигантского белого кита',
    authorId: 'a07',
    publisherId: 'p07',
    genres: [genres[5], genres[9]], // Adventure, Classic
    createdAt: new Date('2025-02-17'),
    updatedAt: new Date('2025-02-17')
  },
  {
    id: '109',
    title: 'Три товарища',
    isbn: '9783458337247',
    publishedYear: 1936,
    pageCount: 464,
    language: 'German',
    description: 'Дружба и любовь в Германии между войнами',
    authorId: 'a08',
    publisherId: 'p08',
    genres: [genres[5], genres[6]], // Romance, Classic
    createdAt: new Date('2025-02-18'),
    updatedAt: new Date('2025-02-18')
  },
  {
    id: '110',
    title: 'Скотный двор',
    isbn: '9780451526342',
    publishedYear: 1945,
    pageCount: 112,
    language: 'English',
    description: 'Аллегория на тему тоталитаризма через историю животных',
    authorId: 'a03',
    publisherId: 'p09',
    genres: [genres[8], genres[9]], // Satire, Political
    createdAt: new Date('2025-02-19'),
    updatedAt: new Date('2025-02-19')
  },
  {
    id: '111',
    title: 'Лолита',
    isbn: '9780679723165',
    publishedYear: 1955,
    pageCount: 336,
    language: 'English',
    description: 'Скандальный роман о наваждении и одержимости',
    authorId: 'a09',
    publisherId: 'p10',
    genres: [genres[5], genres[6]], // Romance, Classic
    createdAt: new Date('2025-02-20'),
    updatedAt: new Date('2025-02-20')
  },
  {
    id: '112',
    title: 'Имя розы',
    isbn: '9780151446476',
    publishedYear: 1980,
    pageCount: 536,
    language: 'Italian',
    description: 'Детектив в средневековом монастыре',
    authorId: 'a10',
    publisherId: 'p11',
    genres: [genres[2], genres[6]], // Mystery, Classic
    createdAt: new Date('2025-02-21'),
    updatedAt: new Date('2025-02-21')
  },
  {
    id: '113',
    title: 'Над пропастью во ржи',
    isbn: '9780316769488',
    publishedYear: 1951,
    pageCount: 234,
    language: 'English',
    description: 'История подросткового бунта и отчуждения',
    authorId: 'a11',
    publisherId: 'p12',
    genres: [genres[6], genres[8]], // Classic, Coming-of-age
    createdAt: new Date('2025-02-22'),
    updatedAt: new Date('2025-02-22')
  },
  {
    id: '114',
    title: 'Гарри Поттер и Дары Смерти',
    isbn: '9780545010221',
    publishedYear: 2007,
    pageCount: 759,
    language: 'English',
    description: 'Финальная битва с Волан-де-Мортом',
    authorId: 'a12',
    publisherId: 'p13',
    genres: [genres[0], genres[5]], // Fantasy, Adventure
    createdAt: new Date('2025-02-23'),
    updatedAt: new Date('2025-02-23')
  },
  {
    id: '115',
    title: 'Портрет Дориана Грея',
    isbn: '9780141439570',
    publishedYear: 1890,
    pageCount: 254,
    language: 'English',
    description: 'Философский роман о красоте, морали и разврате',
    authorId: 'a13',
    publisherId: 'p14',
    genres: [genres[3], genres[6]], // Horror, Classic
    createdAt: new Date('2025-02-24'),
    updatedAt: new Date('2025-02-24')
  }
];