<script>
    import Button from "$lib/Button/index.svelte";
    import LandingBento from "$lib/LandingBento/index.svelte";
    import Slide from "$lib/Slide/index.svelte";
    import Heading from "$lib/LandingBento/heading.svelte";
    import Image from "$lib/LandingBento/image.svelte";
</script>


<Slide/>
<div class="bg-background h-[98vh] relative cursor-default hide-scrollbar">
    <div class="flex flex-col items-center justify-center w-full h-full">
        <div class="flex flex-row items-center justify-center w-full h-full p-32 gap-32">
            <LandingBento uniqueId="0">
                <Heading>Story</Heading>
                <Image src="./cat.gif"/>
            </LandingBento>
            <LandingBento uniqueId="1">
                No
            </LandingBento>
        </div>
        <div class="flex flex-row items-center justify-center w-full h-full p-32 gap-32">
            <LandingBento uniqueId="2">
                Note
            </LandingBento>
            <LandingBento uniqueId="3">
                Not
            </LandingBento>
        </div>
    </div>

    <div class="absolute inset-0 flex z-0 flex-col text-center items-center justify-center gap-4">
        <div class="text-text text-6xl medievalsharp-regular font-extrabold tracking-tight underline">Naughty Little
            Cheater
        </div>
        <div class="mb-2 text-subText text-xl w-[50%] tracking-tight leading-tight">Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
        </div>
        <Button url="/search">Search</Button>
    </div>
</div>