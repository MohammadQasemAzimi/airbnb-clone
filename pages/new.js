
export default function Home(props)

{ 
  <a href="index">back</a>
  
  return ( <>
        <h1>Create new Flats</h1>
        <form method="POST" action="/api/flat/new">
          <label htmlFor="title">title:</label><br />
          <input type="text" id="title" name="title" /><br />
          <label htmlFor="description">description:</label><br />
          <input type="text" id="description" name="description" /><br /><br />
          <label htmlFor="location">location:</label><br />
          <input type="text" id="location" name="location" /><br /><br />
          <label htmlFor="price">price:</label><br />
          <input type="Number" id="price" name="price" /><br /><br />
          <label htmlFor="codeNo">codeNo:</label><br />
          <input type="number" id="codeNo" name="codeNo" /><br /><br />
          <label htmlFor="image">Upload Image:</label><br/>
          <input type="file" id="image" name="image"></input>
          <input type="submit" value="Submit" />
        </form>
    </>)
}