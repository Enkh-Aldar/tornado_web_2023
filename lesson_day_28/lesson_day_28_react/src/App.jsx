import ImageContainer from './components/ImageContainer'
import './App.css'
function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageContainer imgSrc="image12.jpg" altText="Description of first image" containerId="image1" />
      <ImageContainer imgSrc="image8.jpg" altText="Description of second image" containerId="image2" />
      <ImageContainer imgSrc="image9.jpg" altText="Description of third image" containerId="image3" />
    </div>
  );
}

export default App;
