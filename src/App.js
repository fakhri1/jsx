import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from './imageInSrc.jpg';
import Video from './video.mp4';
function App() {
  return (
    <div className="App">
      <div className="checkpoint" style={{border:"solid 1px black",maxWidth:"100vw",}}>
        <h1 className={"title red"}> fakhri khedim  </h1>
        <br/>
        <img src={imageInSrc} alt='image in the src folder'/>
        <br/>
        <img src="/imageInPublic.jpg" alt='image in the public folder'/>

</div>
<video width="320" heights="240" controls>
  <source src={Video} type="video/mp4"/>
</video>






    </div>
  );
}

export default App;
