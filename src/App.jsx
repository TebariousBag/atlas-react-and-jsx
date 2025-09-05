// Import Header we created
import Header from "./components/Header"
import Section from './components/Section';
import OpenLink from './components/OpenLink';
import CopyLink from './components/CopyLink';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app">
      <Header />
      <OpenLink link="https://www.google.com" />
      <CopyLink link="https://www.googledoodoo.com" />
      <Section title="What is React?">
        <p>
          React is an open-source JavaScript library for building user interfaces (UIs), particularly for single-page applications. It is maintained by Facebook and a community of individual developers and companies. React allows 
          developers to create reusable UI components and efficiently update the user interface when 
          data changes. It uses a virtual DOM to optimize rendering performance and follows a 
          component-based architecture that makes code more modular and maintainable.
        </p>
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>Declarative Programming: Developers describe how the UI should look based on the application's state, and React efficiently updates and renders the components when the underlying data changes.</li>
          <li>Component-Based Architecture: React encourages building UIs from small, isolated, and reusable pieces called components. Each component manages its own state and renders a part of the UI.</li>
          <li>Virtual DOM: React uses a virtual Document Object Model (DOM) to optimize UI updates. Instead of directly manipulating the browser's DOM, React first updates a lightweight virtual representation and then calculates the most efficient way to apply changes to the real DOM, leading to improved performance.</li>
          <li>JSX: React often uses JSX (JavaScript XML), a syntax extension that allows writing HTML-like code within JavaScript, making it easier to define UI structures within components.</li>
          <li>Unidirectional Data Flow: React typically follows a unidirectional data flow, where data flows in a single direction (from parent components to child components), simplifying debugging and state management.</li>
        </ul>
      </Section>
      <Section title="Helpful resources">
        <HelpfulResource link="https://www.w3schools.com/REACT/DEFAULT.ASP" label="W3 Schools - Learning by Examples" />
        <HelpfulResource link="https://www.codecademy.com/learn/react-101" label="Code Academy - React 101" />
        <HelpfulResource link="https://www.geeksforgeeks.org/reactjs/react/" label="Geeks for Geeks - React Tutorial" />
      </Section>
      <AboutMe />
    </div>
  );
}

export default App;
