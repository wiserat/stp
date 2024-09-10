<script>
    import "../app.css";
    import Footer from "$lib/Footer/index.svelte"
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap" rel="stylesheet">
</svelte:head>

<slot/>
<Footer/>
