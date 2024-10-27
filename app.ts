interface PageInfo {
  title: string;
}

const pages: Record<string, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

const homePage = pages.home;

console.log(homePage.title);
