---
layout: home
hero:
  image : "/grass.jpg"
  name: Vinit's Blog
  text: ""
  tagline: A place where I place my thoughts and opinions

features:
  - icon: 📚
    title: My Blog
    details: Explore my 2 cents on tech and life.
    link: page-1
  - icon: 👨‍💻
    title: About me
    details: Find out more about me and reach out.
---

<!-- <Home imgUrl="/grass.jpg" 
      title="Vinit's Blog" 
      desc="Less is more." 
      :links="[{ url: 'https://github.com/izhichao/vitepress-theme-minimalism', text: 'Github ->' }]" 
/> -->
<br>




<h1 style="text-align: center; align-self: center;">My Blogs</h1>


<script setup>
  import { useData } from "vitepress";
  const { theme } = useData();
  const page = theme.value.page;
  const posts = theme.value.posts.slice(0,7);
</script>

<Page :posts="posts" :pageConfig="page" :pageCurrent="1" :pageTotal="2" :index="false" :pageMax="page?.max || 5" :pinned="page?.pinned || '[pin]'"/>

<a href="./J" style="text-decoration:none;"> shh </a>