export const createMovie = async (formData) => {
    try {
      const response = await fetch("http://localhost:1337/newmovie", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        const errorMessage = `Failed to create a new movie. Status: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }      
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };