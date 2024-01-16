<script>
    import { onMount } from "svelte";

    let movies = [];
    onMount(() => {
        fetch("http://localhost:1337/movies")
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((data) => {
            movies = data;
        
            console.log(movies);
    });
});

</script>



{#if movies}
    <ul>
        {#each movies as movie}
            <li>
                <img src="{movie.poster_path}" alt="help"> {movie.title} <button>{movie.genre}</button>
            </li>
        {/each}
    </ul>
{:else}
    <p>Loading...</p>
{/if}


<style>
    img{
        width: 300px;
        height: 500px;
        object-fit: cover;
    }
    button{
        padding: 15px 20px;
        border-radius: 3px;
        border: rgb(44, 222, 145) 2px solid;        
        background-color: black;
        transition: 0.2s;
        color: white;
        cursor: pointer;
        width: 300px;
    }
    button:hover{
        background-color: rgb(86, 86, 86);
        box-shadow: 0 1px 20px rgb(44, 222, 145);
    }
    ul{
        margin-top: 50px;
        display: flex;
        justify-content: center;
        list-style-type: none;
        border-radius: 3px;
        align-items: center;
        gap: 50px;
    }
    li{
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 1.1rem;
        color: white;
        text-align: center;
    }
</style>