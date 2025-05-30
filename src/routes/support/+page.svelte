<script>
    import Faq from '$lib/components/Faq.svelte';

    import { faq } from '$lib/constants/faq.svelte';
</script>

<section class="light" id="support">
    <div class="container">
        <h1>Support & FAQs</h1>
        <div class="faq-sections">
            {#each Object.keys(faq) as key}
                <div class="faq-card">
                    <Faq topic={faq[key]} />
                </div>
            {/each}
            <div class="contact-card">
                <h2>Can't find what are are looking for?</h2>
                <span>Send us email support@servicex.com</span>
            </div>
        </div>
    </div>
</section>

<style>
    #support :global {
        & .faq-card {
            margin-bottom: 3rem;
        }
        
        & .contact-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            background-color: #000;
            margin: 4rem 0;
            padding: 6rem 4rem;

            & h2 {
                color: #fff;
                font-size: 2rem;
                margin-bottom: 2rem;
            }
            & span {
                color: #fff;
                font-size: 1.25rem;
                line-height: 1.5;
                margin-bottom: 1rem;
            }
        }
    }

    .faq-sections {
        margin: 2rem 0;
    }
</style>