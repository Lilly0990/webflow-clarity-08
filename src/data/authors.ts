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
    id: "vlad-rulikovskiy",
    name: "Vlad Rulikovskiy",
    role: "Webflow Developer",
    bio: "Expert in Webflow development with focus on enterprise solutions and high-performance websites.",
    avatar: "/images/team/vlad-logo.png",
    social: {
      linkedin: "https://linkedin.com/in/vlad-rulikovskiy"
    }
  }
];

export const getAuthorById = (id: string): Author | undefined => {
  return authors.find(author => author.id === id);
};
