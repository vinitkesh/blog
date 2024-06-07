---
title: No.2page
layout: page
---
<script setup>
import { useData } from "vitepress";
const { theme } = useData();
const page = theme.value.page;
const posts = theme.value.posts.slice(7,14);
</script>

<Page :posts="posts" :pageConfig="page" :pageCurrent="2" :pageTotal="2" :index="false" :pageMax="page?.max || 5" :pinned="page?.pinned || '[pin]'"/>