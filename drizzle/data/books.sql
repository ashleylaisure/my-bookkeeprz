INSERT INTO book (
  id, user_id, title, description, page_count, audio_hours, genre, cover_url,
  status, rating, date_started, date_finished, current_page, format, notes, re_read,
  created_at, updated_at
)
VALUES
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'The Name of the Wind',
    'A fantasy novel about Kvothe, a gifted young man who grows into a legendary figure.',
    662, NULL, 'High fantasy',
    'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    'read', 5, '2023-01-10', '2023-01-25', 662,
    'physical_hardcover', 'Loved the worldbuilding.', false, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Project Hail Mary',
    'An astronaut wakes up alone on a spaceship tasked with saving humanity.',
    496, 20, 'Hard sci-fi',
    'https://covers.openlibrary.org/b/id/10523389-L.jpg',
    'read', 5, '2023-03-01', '2023-03-12', 496,
    'audiobook', 'Funny and smart.', true, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Circe',
    'A reimagining of the Greek myth about Circe, daughter of Helios, who discovers her own power.',
    400, 12, 'Mythic fantasy',
    'https://covers.openlibrary.org/b/id/9258294-L.jpg',
    'currently_reading', 4, '2023-07-05', NULL, 150,
    'ebook', 'Beautiful prose so far.', false, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Mistborn: The Final Empire',
    'A fantasy novel about a world ruled by an immortal tyrant and a group of rebels who challenge him.',
    541, NULL, 'Heroic fantasy',
    'https://covers.openlibrary.org/b/id/9251831-L.jpg',
    'want_to_read', NULL, NULL, NULL, 0,
    'physical_paperback', NULL, false, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'The Midnight Library',
    'A woman explores alternate lives she could have lived between life and death.',
    304, 10, 'Contemporary fiction',
    'https://covers.openlibrary.org/b/id/10413158-L.jpg',
    'paused', 3, '2023-05-02', NULL, 120,
    'ebook', 'Taking a break, pacing is slow.', false, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Educated',
    'A memoir about a woman who grows up in a strict and abusive household in rural Idaho and eventually escapes through education.',
    352, 12, 'Autobiography/Memoir',
    'https://covers.openlibrary.org/b/id/8935046-L.jpg',
    'read', 4, '2022-11-01', '2022-11-15', 352,
    'audiobook', 'Eye-opening and powerful.', false, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'The House in the Cerulean Sea',
    'A caseworker for magical children is sent to evaluate a special orphanage.',
    394, 12, 'Fantasy romance (Romantasy)',
    'https://covers.openlibrary.org/b/id/10310882-L.jpg',
    'read', 5, '2022-09-10', '2022-09-20', 394,
    'physical_paperback', 'Heartwarming story.', true, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Atomic Habits',
    'A practical guide to building good habits and breaking bad ones.',
    320, 8, 'Self-help',
    'https://covers.openlibrary.org/b/id/9255566-L.jpg',
    'read', 4, '2021-08-01', '2021-08-10', 320,
    'audiobook', 'Useful, but a bit repetitive.', false, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Fourth Wing',
    'A romantasy about dragon riders, deadly trials, and political intrigue.',
    528, NULL, 'Fantasy romance (Romantasy)',
    'https://covers.openlibrary.org/b/id/13238824-L.jpg',
    'currently_reading', 5, '2023-08-15', NULL, 250,
    'physical_hardcover', 'Dragons!!', true, NOW(), NOW()
  ),
  (
    gen_random_uuid(), 'KjDd1WbGrUY1U8GyXkdms2w25paI4109',
    'Tomorrow, and Tomorrow, and Tomorrow',
    'Two friends bond over video games and create a game that changes their lives.',
    416, 13, 'Literary fiction',
    'https://covers.openlibrary.org/b/id/12698584-L.jpg',
    'dnf', 2, '2023-02-01', NULL, 100,
    'ebook', 'Couldn’t get into it.', false, NOW(), NOW()
  );
