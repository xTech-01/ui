<script lang="ts">
    let { data } = $props();
</script>

<section class="dark" id="blog">
    <h1>blog</h1>

    <ul>
        {#each data.summaries as { slug, title }}
            <li><a href="/blog/{slug}">{title}</a></li>
        {/each}
    </ul>
</section>