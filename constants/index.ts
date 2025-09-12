import ROUTES from "./routes";
import { 
    BarChart3, 
    BookMarked, 
    BookOpen, 
    DollarSign, 
    Heart, 
    LibraryBig, 
    PenTool, 
    Quote, 
    Search, 
    TrendingUp, 
    User 
} from "lucide-react";

export const sidebarLinks = [
    {
        label: 'Dashboard',
        route: ROUTES.DASHBOARD,
        icon: TrendingUp
    }, 
    {
        label: 'My Books',
        route: ROUTES.MY_BOOKS,
        icon: BookOpen
    }, 
    {
        label: "Authors",
        route: ROUTES.AUTHORS,
        icon: BookMarked
    },
    {
        label: 'Bookshelves',
        route: ROUTES.BOOKSHELVES,
        icon: LibraryBig,
    }, 
    {
        label: 'Series',
        route: ROUTES.SERIES,
        icon: LibraryBig,
    }, 
    {
        label: 'Journal',
        route: ROUTES.JOURNAL,
        icon: PenTool,
    }, 
    {
        label: "Quotes",
        route: ROUTES.QUOTES,
        icon: Quote
    }, 
    {
        label: 'Whishlist',
        route: ROUTES.WHISHLIST,
        icon: Heart,
    },
    {
        label: 'Budget',
        route: ROUTES.BUDGET,
        icon: DollarSign,

    },
    {
        label: 'Analytics',
        route: ROUTES.ANALYTICS,
        icon: BarChart3
    }, 
    {
        label: 'Search Books',
        route: ROUTES.SEARCH,
        icon: Search,
    }, 
    {
        label: 'Profile',
        route: ROUTES.PROFILE,
        icon: User,
    }
]

export const genreArray = [
    "Action thriller", "Action/Adventure fiction", "Apocalyptic sci-fi",
    "Art & photography", "Autobiography/Memoir", "Biography", "Body horror",
    "Caper", "Children’s fiction", "Classic fiction", "Colonization sci-fi",
    "Comedy horror", "Conspiracy thriller", "Contemporary fiction", "Contemporary romance",
    "Cozy mystery", "Dark fantasy", "Dark romance", "Disaster thriller",
    "Erotic romance", "Espionage thriller", "Essays", "Fairy tales",
    "Fantasy", "Fantasy romance (Romantasy)", "Folktales", "Food & drink",
    "Forensic thriller", "Gothic horror", "Gothic romance", "Graphic novel",
    "Gumshoe/Detective mystery", "Hard sci-fi", "Heroic fantasy", "High fantasy",
    "Historical fantasy", "Historical fiction", "Historical mystery", "Historical romance",
    "Historical thriller", "History", "Horror", "Howdunnits", "How-To/Guides",
    "Humanities & social sciences", "Humor", "Legal thriller", "LGBTQ+",
    "Literary fiction", "Locked room mystery", "Lovecraftian/Cosmic horror",
    "Low fantasy", "Magical realism", "Military sci-fi", "Mind uploading sci-fi",
    "Mystery", "Mythic fantasy", "New adult", "Noir", "Parallel world sci-fi",
    "Paranormal horror", "Paranormal romance", "Paranormal thriller", "Parenting",
    "Philosophy", "Post-apocalyptic horror", "Procedural/Hard-boiled mystery",
    "Psychological horror", "Psychological thriller", "Quiet horror", "Regency",
    "Religion & spirituality", "Religious thriller", "Romance", "Romantic comedy",
    "Romantic suspense", "Satire", "Science & technology", "Science fiction",
    "Sci-fi romance", "Self-help", "Short story", "Slasher", "Soft sci-fi",
    "Space opera", "Space western", "Steampunk", "Supernatural mystery",
    "Thriller", "Travel", "True crime", "Urban fantasy", "Western",
    "Women’s fiction", "Young adult"
]