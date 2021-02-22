import "tailwindcss/tailwind.css";
import "../styles/marked.css";
import "../styles/highlight.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
