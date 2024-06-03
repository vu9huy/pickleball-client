// next-sitemap.config.js
const checkPath = (path) => {
    const chunk = path.split("/");
    // Homepage
    if(path === "/") return 1;
    if(path.includes("icon.ico")) return 0.3;
    if(chunk.length === 2) return 0.7;
    if(chunk.length === 3) return 0.5;
    if(chunk.length >= 4) return 0.3;
    return 0.3;
}

module.exports = {
    siteUrl: 'https://www.sanpickleball.com', // Replace with your actual site URL
    generateRobotsTxt: true, // Generate robots.txt file
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ["/search?", "/admin/"]
        },
        // {
        //   userAgent: 'test-bot',
        //   allow: ['/path', '/path-2'],
        // },
        // {
        //   userAgent: 'black-listed-bot',
        //   disallow: ['/sub-path-1', '/path-2'],
        // },
      ]
    },
    // Exclude specific routes from the sitemap
    generateIndexSitemap: false,
    exclude: ['/secret-page'],
    // Add dynamic paths to the sitemap
    additionalPaths: async (config) => {
      const dynamicPaths = await getDynamicPaths();
      let pathList = [];
      for (let i = 0; i < dynamicPaths.length; i++) {
        const path = await config.transform(config, dynamicPaths[i]);
        pathList.push(path);
      }
      return pathList;
    },
    transform: async (config, path) => {
    const check = checkPath(path);
      return {
        loc: path, 
        changefreq: 'weekly',
        priority: check,
        lastmod: new Date().toISOString(),
      };
    },
  };
  
  // Mock function to illustrate fetching dynamic paths from your data source
  async function getDynamicPaths() {
    // Fetch paths dynamically from your database, CMS, or API
    // Example:
    const allProduct = await fetch('https://fakestoreapi.com/products').then((res)=> res.json());
    const productPaths= allProduct.map(product => `/product/${product.id}`)
    const dynamicPaths = [
        '/dynamic-page1',
        '/dynamic-page2',
        '/product/test-1',
        '/product/test-2',
        '/product/test-3',
        ...productPaths
      // Add more dynamic paths as needed
    ];
    return dynamicPaths;
  }
  