export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export const authors: Author[] = [
  {
    id: "egor-dvortsevoy",
    name: "Egor Dvortsevoy",
    role: "Webflow Developer",
    bio: "Expert in Webflow development with focus on enterprise solutions and high-performance websites.",
    avatar: "/images/team/egor.jpg",
    social: {
      linkedin: "https://linkedin.com/in/egor-dvortsevoy"
    }
  }
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};
