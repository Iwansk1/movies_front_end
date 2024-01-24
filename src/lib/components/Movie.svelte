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
<link rel="stylesheet" href="C:\Users\iwanb\Desktop\School\Jaar_3\TNW\FullStackDev\moviedb-backend\Public\Uploads" />


{#if movies}
  <ul>
    {#each movies as movie}
      <li>
        {#if movie.poster_path !== null} <img src={`http://localhost:1337${movie.poster_path}`} alt="Movie Poster">{/if}
 {movie.title} <button>{movie.genre}</button>
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
        border-radius: 3px;
        transition: 0.3s;
        margin-bottom: 20px;
        cursor: pointer;
    }
    img:hover{
        filter:drop-shadow(lightgrey 1px 1px 5px);
        scale: 105%;
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
        margin-top: 10px;
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
        font-size: 1.2rem;
        color: white;
        text-align: center;
    }
   
</style>