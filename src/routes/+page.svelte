<script>
    import Grid from "$lib/components/Grid.svelte";
    import LinkButton from "$lib/components/LinkButton.svelte";
    import Badge from "$lib/components/Badge.svelte";
    import Faq from "$lib/components/Faq.svelte";
    import { faq } from "$lib/constants/faq.svelte";

    import GoogleImg from "$lib/images/google-logo.png";
    import service1Icon from "$lib/icons/features/s1s.svg?raw";
    import service2Icon from "$lib/icons/features/s2s.svg?raw";
</script>


<svelte:head>
    <link rel="preload" as="image" href={GoogleImg[0]} />
</svelte:head>


<section class="dark" id="hero">
    <div class="container">
        <h1>hero h1</h1>
        <h2 class='muted'>h2 muted</h2>
        <Grid columns={2} rowGap="3rem">
            <img 
                src={GoogleImg} 
                loading="lazy" 
                alt="x service" 
            />
             <div>
                <div class="mb-2">
                    <Grid columns={2} columnGap="1rem" rowGap="1.25rem" size="small" wrapMode="none">
                        <div class="feature-item">
                            {@html service1Icon}
                            <span>feature <br /> span1</span>
                        </div>
                        <div class="feature-item">
                            {@html service2Icon}
                            <span>feature<br /> span2</span>
                        </div>
                    </Grid>
                </div>
                <LinkButton href="/service" fullWidth={true} style="accent">
                link
                </LinkButton>
             </div>
        </Grid>
        <h1 class="mt-4">h1</h1>
        <h3 class="muted">h3 muted</h3>
    </div>
</section>

<section class="dark" id="price">
    <div class="container">
        <Badge style="dark" display="inline">service</Badge><Badge style="light" display="inline">sub</Badge>
        <Grid alignItems="stretch">
            <div class="price-card">
                <div><Badge style="accent">Deep</Badge>
                </div>
                <span>$39/t</span>
                <div class="muted">deep</div>
                <div class="muted">*subject to..</div>
            </div>
            <div class="price-card">
                    <div><Badge style="dark">Basic</Badge></div>
                    <span>$29/t</span>
                    <div class="muted">minimum</div>
                    <div class="muted">sub</div>
            </div>
        </Grid>

        <div class="free-trial">
            <Grid alignItems="center" columnGap="3rem">
                <div>
                    <h2>Free 1st</h2>
                    <LinkButton href="/service" style="secondary">Link</LinkButton>
                </div>
            </Grid>
        </div>
    </div>
</section>

<section class="light" id="faq">
    <div class="container">
        <Faq topic={faq.service} title="Frequently asked questions" />
    </div>
</section>

<style>
    #hero {
        & img {
                border: 1px solid #000;
                width: 52px;
                margin-right: 0.5rem;
                padding: 0.375rem;
                display: inline-block;
            }

        & .feature-item {
            align-items: center;
            display: flex;
            color: #fff;

            & span {
                color: var(--color-muted);
                text-transform: uppercase;
                flex: 1;
                font-family: JetBrains Mono, monospace;
                font-size: 1rem;
                font-weight: 400;
                line-height:1.25;
                margin-left: 1rem;
            }
        }

        & h3 {
            line-height: 1.4;
        }

        @media screen and (max-width: 375px) {
            & .feature-item span {
                font-size: 0.75rem;
            }
        }
    }

    #price {
        & .price-card {
            display: flex;
            flex-direction: column;
            padding: 3rem;
            margin-top: 1rem;
            align-items: center;
            justify-content: center;
            color: #fff;
            border: 1px solid #fff;

            & span {
                font-size: 2rem;
                margin-top: 1.5rem;
            }

            & .muted {
                opacity: 0.65;
                margin-top: 0.75rem;
                line-height: 1.5;
                text-align: center;
            }
        }

        & .free-trial {
            padding: 6rem 0 0;
        }

        @media screen and (max-width: 480px) {
            & .free-trial a {
                width: 100%;
                box-sizing: border-box;
            }
        }
    }
</style>

