import "./App.css";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";

export default function App() {
  let users = [
    {
      img : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText : "Satisfied",
      color: "#eb34c6",
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText : "Underserved",
      color: "#9234eb",
    },
    {
      img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText : "UnderBank",
      color: "#ba34eb",
    },
  ]
  return (
    <>
      <Section01 users={users} />
      <Section02 />
    </>
  );
}

// "rafce" helps to write boilercode in react, just like "!" in html;
