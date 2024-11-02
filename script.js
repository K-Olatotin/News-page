function openNews(newsId) {
  const newsContent = {
    news1: {
      title: "Reviving Retro PCs",
      content: "Discover the fascinating world of retro PCs and how they're being upgraded with modern technology."
    },
    news2: {
      title: "Top 10 Laptops of 2022",
      content: "Explore our curated list of the best laptops of 2022, featuring performance, design, and value."
    },
    news3: {
      title: "The Growing of Gaming",
      content: "Learn how the gaming industry has evolved during the pandemic and what opportunities lie ahead."
    },
  };

  const article = newsContent[newsId];
  
  if (article) {
    alert(`${article.title}\n\n${article.content}`);
  } else {
    alert("Article not found.");
  }
}
