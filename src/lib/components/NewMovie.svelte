<script>
    import { createMovie } from "./api";
  
    let title = "";
    let director = "";
    let release_year = 0;
    let genre = "";
    let posterFile = null;
  
    const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("director", director);
    formData.append("release_year", release_year);
    formData.append("genre", genre);
    formData.append("poster", posterFile);

    await createMovie(formData);
    alert("Succes!!")
    location.reload(true); // Reload page on submitting
    // Handle successful submission, e.g., redirect or show a success message
  } catch (error) {
    console.error(error.message);
    alert(error.message)
    // Handle error, e.g., show an error message to the user
  }
};

  </script>
  
  <h1>Add new movie</h1>
  <form method="POST" on:submit|preventDefault={handleSubmit} enctype="multipart/form-data">
    <input bind:value={title} type="text" name="title" placeholder="Title..." />
    <input bind:value={director} type="text" name="director" placeholder="Director..." />
    <input bind:value={release_year} type="number" name="release_year" placeholder="Release year..." />
    <input bind:value={genre} type="text" name="genre" placeholder="Genre..." />
    <input type="file" on:change={(event) => (posterFile = event.target.files[0])} accept="image/*" />
  
    <button type="submit">Submit</button>
  </form>
  