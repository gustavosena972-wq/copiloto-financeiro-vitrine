import { useEffect, useState } from "react";
import Home from "./pages/index.jsx";
import Planos from "./pages/planos.jsx";
import Duvidas from "./pages/duvidas.jsx";
import Excluir from "./pages/excluir.jsx";
import Privacidade from "./pages/privacidade.jsx";
import Seguranca from "./pages/seguranca.jsx";
import Sobre from "./pages/sobre.jsx";
import Termos from "./pages/termos.jsx";

function routeFor(hash) {
  const pathname = hash.replace(/^#\/?/, "/").split("?")[0];
  if (pathname === "/" || pathname === "") return Home;
  if (pathname === "/planos") return Planos;
  if (pathname === "/duvidas" || pathname === "/perguntas-frequentes") return Duvidas;
  if (pathname === "/excluir" || pathname === "/excluir-conta") return Excluir;
  if (pathname === "/privacidade") return Privacidade;
  if (pathname === "/seguranca") return Seguranca;
  if (pathname === "/sobre") return Sobre;
  if (pathname === "/termos") return Termos;
  return Home;
}

export default function App() {
  const [path, setPath] = useState(window.location.hash);

  useEffect(() => {
    const onChange = () => setPath(window.location.hash);
    addEventListener("hashchange", onChange);
    return () => removeEventListener("hashchange", onChange);
  }, []);

  const Page = routeFor(path);
  return <Page />;
}
