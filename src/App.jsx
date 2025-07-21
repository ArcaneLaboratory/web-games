import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Link} from "react-router-dom"
import checkersLogo from "./assets/Checkers.png";
import siteLogo from "./assets/arcanelab32.png"
import "./index.css";
import CheckersGame from "./checkersGame.jsx";

const router = createBrowserRouter([
  {path: "/web-games", element: <MainApp />},
  {path: "/web-games/checkers", element: <CheckersGame />}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

function MainApp() {
  return (
    <>
      <header>
        <h1>Simple Games by ArcaneLaboratory</h1>
      </header>
      <main id="flexcontainer">
        <div class="gamecontainer">
          <h2>Checkers</h2>
          <Link to="/web-games/checkers">
            <img className="gamePreview" src={checkersLogo} alt="Game Preview"  />
          </Link>
        </div>
        <div class="gamecontainer">
          <h2>Coming Soon</h2>
          <a href="">
            <img className="gamePreview" src={siteLogo} alt="Game Preview"  />
          </a>
        </div>
        <div class="gamecontainer">
          <h2>Coming Soon</h2>
          <a href="">
            <img className="gamePreview" src={siteLogo} alt="Game Preview"  />
          </a>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default MainApp;
