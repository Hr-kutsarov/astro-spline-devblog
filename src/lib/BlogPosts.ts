interface BlogPostProps {
  title: string;
  subtitle?: string;
  content: string;
  example?: string;
  dateCreated: string;
  topic: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  sourceUrl?: string;
}

const blogPosts: BlogPostProps[] = [
  {
    title: "What is new in JS?",
    subtitle: "The new ES2024 is approved",
    content:
      "There is officially a new version of the language JavaScript. You may have seen most of these features already but they are now officially approved and standardized.",
    dateCreated: "24/07/2024",
    topic: "conference news",
    primary: true,
    sourceUrl: "https://www.youtube.com/watch?v=tKHdASf_OOI",
  },
  {
    title: "Unicode-related utilities",
    content:
      "Assert if strings are valid before searching the database and avoid invalid encoding errors. Use the new .isWellFormed property to test the validity of an emoji or use v.test(emoji) for regex.",
    dateCreated: "24/07/2024",
    topic: "JS",
    secondary: true,
  },
  {
    title: "Raw memory and multithreading",
    subtitle: "Atomics.waitAsync",
    content:
      "Resizable and growable (Shared)ArrayBuffers and ArrayBuffer transfer",
    dateCreated: "24/07/2024",
    topic: "JS",
    secondary: true,
  },
  {
    title: "Promise.withResolvers",
    subtitle: "Convenience method",
    content:
      "New way of creating promises that might be useful when working with some non-promise based APIs.",
    dateCreated: "24/07/2024",
    topic: "tech",
    secondary: true,
  },
  {
    title: "Object.groupBy",
    subtitle: "New convenience method",
    content:
      "Created a new object where each key represents each key property and its value is an array of all objects with that property.",
    example: "<html lang='en'><head><title>My Homepage</title></head><body><h1>Welcome to my website!</h1></body></html>",
    dateCreated: "24/07/2024",
    topic: "JS",
    tertiary: true,
  },
  {
    title: "Working with sets",
    content:
      "Set objects now get all methods that other languages provide. Check out .intersection(), .union() and the docs.",
    example:
      "<html lang='en'><head><title>My Homepage</title></head><body><h1>Welcome to my website!</h1></body></html>",
    dateCreated: "24/07/2024",
    topic: "JS",
    tertiary: true,
  },
];

export { blogPosts };
export type { BlogPostProps };
