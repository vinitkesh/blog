---
title: No.1page
layout: page
---
<script setup>
import { useData } from "vitepress";
const { theme } = useData();
const page = theme.value.page;
const posts = theme.value.posts.slice(0,7);
</script>

<Page :posts="posts" :pageConfig="page" :pageCurrent="1" :pageTotal="1" :index="false" :pageMax="page?.max || 5" :pinned="page?.pinned || '[pin]'"/>