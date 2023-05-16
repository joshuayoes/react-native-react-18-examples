// Note: the way you would do data fetching depends on
// the framework that you use together with Suspense.
// Normally, the caching logic would be inside a framework.

export interface Album {
  id: number;
  title: string;
  year: number;
}

let cache = new Map<string, Promise<Album[]>>();

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url)!;
}

async function getData(url: string) {
  if (url.startsWith('/search?q=')) {
    return await getSearchResults(url.slice('/search?q='.length));
  }
  if (url === '/the-beatles/albums') {
    return await getAlbums();
  }

  throw Error('Not implemented');
}

export const allAlbums: Album[] = [
  {
    id: 13,
    title: 'Let It Be',
    year: 1970,
  },
  {
    id: 12,
    title: 'Abbey Road',
    year: 1969,
  },
  {
    id: 11,
    title: 'Yellow Submarine',
    year: 1969,
  },
  {
    id: 10,
    title: 'The Beatles',
    year: 1968,
  },
  {
    id: 9,
    title: 'Magical Mystery Tour',
    year: 1967,
  },
  {
    id: 8,
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    year: 1967,
  },
  {
    id: 7,
    title: 'Revolver',
    year: 1966,
  },
  {
    id: 6,
    title: 'Rubber Soul',
    year: 1965,
  },
  {
    id: 5,
    title: 'Help!',
    year: 1965,
  },
  {
    id: 4,
    title: 'Beatles For Sale',
    year: 1964,
  },
  {
    id: 3,
    title: "A Hard Day's Night",
    year: 1964,
  },
  {
    id: 2,
    title: 'With The Beatles',
    year: 1963,
  },
  {
    id: 1,
    title: 'Please Please Me',
    year: 1963,
  },
];

async function getSearchResults(query = '') {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });

  const lowerQuery = query.trim().toLowerCase();
  return allAlbums.filter(album => {
    const lowerTitle = album.title.toLowerCase();
    return (
      lowerTitle.startsWith(lowerQuery) ||
      lowerTitle.indexOf(' ' + lowerQuery) !== -1
    );
  });
}

async function getAlbums() {
  // Add a fake delay to make waiting noticeable.
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  return allAlbums;
}
