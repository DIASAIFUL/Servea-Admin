import Dashboard from "../components/dashboard/Dashboard";
import Users from "../components/users/Users";
import Providers from "../components/providers/Providers";
import Transactions from "../components/transactions/Transactions";
import Careers from "../components/careers/Careers";
import Community from "../components/community/Community";
import NewsletterSubscribers from "../components/newsletter/NewsletterSubscribers";
import Chats from "../components/chats/Chats";
import Settings from "../components/settings/Settings";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
];

export const protectedRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/providers",
    element: <Providers />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/newsletter-subscribers",
    element: <NewsletterSubscribers />,
  },
  {
    path: "/chats",
    element: <Chats />,
  },
  {
    path: "/settings",
    element: <Settings />,
  }
];