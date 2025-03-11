export interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  tags?: string[];
  readTime: string;
  heroImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and how to set up your first project. We'll cover routing, data fetching, and more.",
    date: "2023-05-15",
    slug: "getting-started-with-nextjs",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    readTime: "5 min read",
    heroImage: "/images/blog/nextjs-intro.jpg",
    content: `
      <p>Next.js has emerged as one of the most popular React frameworks for building modern web applications. With its powerful features like server-side rendering, static site generation, and API routes, Next.js provides developers with the tools they need to create fast, SEO-friendly websites.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>There are several reasons why developers are choosing Next.js for their projects:</p>
      <ul>
        <li><strong>Performance</strong>: Next.js optimizes your application for production right out of the box.</li>
        <li><strong>SEO</strong>: Server-side rendering improves search engine visibility.</li>
        <li><strong>Developer Experience</strong>: Hot reloading, automatic routing, and TypeScript support make development a breeze.</li>
        <li><strong>Scalability</strong>: Whether you're building a small blog or a large e-commerce site, Next.js can handle it.</li>
      </ul>
      
      <h2>Setting Up Your First Next.js Project</h2>
      <p>Getting started with Next.js is simple. You can create a new project using the following command:</p>
      <pre><code>npx create-next-app@latest my-next-app</code></pre>
      
      <p>This will create a new Next.js project with all the necessary files and dependencies. Once the installation is complete, you can navigate to the project directory and start the development server:</p>
      <pre><code>cd my-next-app
npm run dev</code></pre>
      
      <p>Your Next.js application will be running at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
      
      <h2>Understanding Next.js Routing</h2>
      <p>Next.js uses a file-based routing system. Each file in the 'pages' directory automatically becomes a route. For example:</p>
      <ul>
        <li><code>pages/index.js</code> maps to the '/' route</li>
        <li><code>pages/about.js</code> maps to the '/about' route</li>
        <li><code>pages/blog/[slug].js</code> maps to dynamic routes like '/blog/my-post'</li>
      </ul>
      
      <p>This intuitive routing system makes it easy to organize your application and add new pages without the need for complex router configurations.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a solid foundation for building modern web applications. Its focus on performance, SEO, and developer experience makes it an excellent choice for both beginners and experienced developers. As you continue your journey with Next.js, you'll discover more advanced features that will help you take your applications to the next level.</p>
    `
  },
  {
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for using Tailwind CSS in your projects. Learn how to build modern, responsive interfaces efficiently.",
    date: "2023-06-20",
    slug: "mastering-tailwind-css",
    category: "Design",
    tags: ["CSS", "Tailwind", "UI Design"],
    readTime: "6 min read",
    heroImage: "/images/blog/tailwind-css.jpg",
    content: `
      <p>Tailwind CSS has revolutionized the way developers approach styling in web applications. Instead of writing custom CSS, Tailwind provides utility classes that can be composed to build any design directly in your markup.</p>
      
      <h2>Why Tailwind CSS?</h2>
      <p>Traditional CSS frameworks often come with predefined components that can be difficult to customize. Tailwind takes a different approach:</p>
      <ul>
        <li><strong>Utility-First</strong>: Build custom designs without leaving your HTML.</li>
        <li><strong>Responsive Design</strong>: Built-in responsive modifiers make it easy to build responsive interfaces.</li>
        <li><strong>Customizable</strong>: Tailor Tailwind to your design system through configuration.</li>
        <li><strong>Performance</strong>: Only include the CSS you use in production with PurgeCSS.</li>
      </ul>
      
      <h2>Setting Up Tailwind CSS</h2>
      <p>Getting started with Tailwind CSS is straightforward. First, install Tailwind via npm:</p>
      <pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
      
      <p>Next, configure your template paths in tailwind.config.js:</p>
      <pre><code>module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}</code></pre>
      
      <p>Finally, add the Tailwind directives to your CSS file:</p>
      <pre><code>@tailwind base;
@tailwind components;
@tailwind utilities;</code></pre>
      
      <h2>Responsive Design with Tailwind</h2>
      <p>Tailwind makes responsive design simple with its built-in responsive modifiers:</p>
      <pre><code>&lt;div class="text-sm md:text-base lg:text-lg"&gt;
  This text will be small on mobile, medium on tablets, and large on desktops.
&lt;/div&gt;</code></pre>
      
      <h2>Extending Tailwind with Custom Utilities</h2>
      <p>You can extend Tailwind with your own custom utilities by modifying the tailwind.config.js file:</p>
      <pre><code>module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        'brand': '#FF0000',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS provides a unique approach to styling that can significantly speed up your development process. By learning to effectively use Tailwind's utility classes and customization options, you can create beautiful, responsive interfaces without writing a single line of custom CSS.</p>
    `
  },
  {
    title: "Optimizing Website Performance",
    description: "Learn essential techniques to improve your website's performance, including image optimization, code splitting, and lazy loading.",
    date: "2023-07-25",
    slug: "optimizing-website-performance",
    category: "Performance",
    tags: ["Web Performance", "Optimization", "Speed"],
    readTime: "8 min read",
    heroImage: "/images/blog/performance.jpg",
    content: `
      <p>Website performance is critical for user experience and SEO. Slow-loading websites lead to higher bounce rates and lower conversion rates. In this article, we'll explore practical techniques to optimize your website's performance.</p>
      
      <h2>Why Performance Matters</h2>
      <p>Studies have shown that:</p>
      <ul>
        <li>53% of users abandon sites that take longer than 3 seconds to load</li>
        <li>Every 100ms of latency costs 1% in sales</li>
        <li>Google uses page speed as a ranking factor</li>
      </ul>
      
      <h2>Image Optimization</h2>
      <p>Images often account for the largest portion of a page's size. Here are some ways to optimize them:</p>
      <ul>
        <li><strong>Choose the right format</strong>: Use JPEG for photographs, PNG for images with transparency, and WebP for both.</li>
        <li><strong>Compress images</strong>: Use tools like Squoosh, TinyPNG, or ImageOptim to reduce file size without significant quality loss.</li>
        <li><strong>Responsive images</strong>: Use the srcset attribute to serve different image sizes based on the device.</li>
        <li><strong>Lazy loading</strong>: Load images only when they enter the viewport.</li>
      </ul>
      
      <pre><code>&lt;img 
  src="small.jpg" 
  srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w" 
  sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px" 
  loading="lazy" 
  alt="Responsive image"
&gt;</code></pre>
      
      <h2>JavaScript Optimization</h2>
      <p>JavaScript can significantly impact performance if not optimized properly:</p>
      <ul>
        <li><strong>Code splitting</strong>: Split your JavaScript into smaller chunks that load on demand.</li>
        <li><strong>Tree shaking</strong>: Remove unused code from your bundle.</li>
        <li><strong>Defer non-critical JavaScript</strong>: Use defer or async attributes to prevent render-blocking.</li>
      </ul>
      
      <h2>Caching Strategies</h2>
      <p>Implementing effective caching can dramatically improve load times for returning visitors:</p>
      <ul>
        <li><strong>Browser caching</strong>: Set appropriate cache headers for static assets.</li>
        <li><strong>Service workers</strong>: Cache assets and serve them even when offline.</li>
      </ul>
      
      <h2>Measuring Performance</h2>
      <p>Use these tools to measure and monitor your website's performance:</p>
      <ul>
        <li>Google PageSpeed Insights</li>
        <li>Lighthouse</li>
        <li>WebPageTest</li>
        <li>Chrome DevTools Performance panel</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process, not a one-time task. Regularly audit your website, identify bottlenecks, and implement improvements. The performance gains will translate to better user experience, higher conversion rates, and improved SEO rankings.</p>
    `
  }
]; 