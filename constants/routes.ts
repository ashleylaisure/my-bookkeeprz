const ROUTES = {
    HOME: '/',
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',

    DASHBOARD: '/dashboard',
    My_BOOKS: '/my_books',
    AUTHORS: '/authors',
    SEARCH: '/search',
    BOOKSHELVES: '/bookshelves',
    WHISHLIST: '/wishlist',
    BUDGET: '/budget',
    JOURNAL: '/journal',
    QUOTES: '/quotes',
    ANALYTICS: '/analytics',
    PROFILE: '/profile',

    IMPORT: '/import',
    PROFILE_EDIT: (id: string) => `/profile/${id}/edit`,
    SETTINGS: '/settings',
    NOT_FOUND: '/404',
};

export default ROUTES;