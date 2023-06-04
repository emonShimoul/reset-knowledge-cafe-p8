import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <div>
        <div className="question">
          <h2>Ques 1: Write down the differences between props and state.</h2>
          <h3>State:</h3> <br />
          <ul>
            <li>The state is used to containt the data.</li>
            <li>State can be used in the component where it is declared.</li>
            <li>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              States is mutable. We can change its value using the state's
              setter function.
            </li>
          </ul>{" "}
          <br />
          <br />
          <h3>Props:</h3> <br />
          <ul>
            <li>The props is used to pass any data in another components.</li>
            <li>
              Props can be used in various components as it is passed as a
              parameter into any component.
            </li>
            <li>Props is immutable. Its value can not be change.</li>
          </ul>
        </div>
        <div className="question">
          <h2>Ques 2: How useState works?</h2>
          <p>
            A <b>useState</b> hook is used to manage the states in functional
            components. It takes an initial value which can be any data type
            such as number, string, array, object even a function. The
            useState() does not return a variable it is also return a function
            which is used to update the value of state variable. <br />
            There have to give two value using destructuring when a state is
            created. First one is a <b>state variable</b> and second one is a
            <b> function</b>. This function can be used to update the value of
            state variable when it is needed. It is a good practice to name the
            second value (function) with a prefix{" "}
            <b>
              <em>set</em>
            </b>
            .
          </p>
        </div>
        <div className="question">
          <h2>Ques 3: What can do useEffect except data loading?</h2>
          <p>
            A <b>useEffect</b> hook can be used in various purposes without data
            loading. Whenever we need any types of side effect in our website we
            can use <b>useEffect</b> hook. Any kind of asynchronous operation
            can be done using useEffect hook.
            <br />
            Such as: read data from the <b>Local Storage</b>, use of{" "}
            <b>setInterval()</b> and <b>setTimeOut()</b> function or interact
            with the <b>Browser API</b>.
            <br />
            <br />
            If we need any side effect have to run for only one time after the
            initial rended it can be done by using useEffect. Also if we want to
            run a side effect after every render we can do it using the
            useEffect hook. We can re-render a component based on a state, porps
            or any context change using the dependency array of useEffect.
          </p>
        </div>
        <div className="question">
          <h2>Ques 4: How does react works?</h2>
          <p>
            <b>React</b> uses the <b>JSX syntax</b> which is not actual HTML but
            look like exactly HTML code. By using JSX react can combine HTML and
            JavaScript easily. Browser cannot understand the JSX. The JSX code
            is converted to pure JavaScript code so that browser can work with
            it. To translate the the JSX code into JavaScript syntax a
            <b> transpiler</b> is used such as <b>babel</b>.
            <br /> <br />
            React works with its own tree structure which is called{" "}
            <b>Virtual DOM</b>. It is an exact copy of the real DOM created by
            react. When we change anything react create a new virtual DOM and
            compare the changes with the old virtual DOM and update the changes
            to the actual DOM. Then added the results to the UI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
