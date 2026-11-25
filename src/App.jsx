
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Image,
  CalendarDays,
  Settings,
  Link,
  Sparkles,
  ShoppingBag,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [pagina, setPagina] = useState("Painel");
  const [menuAberto, setMenuAberto] = useState(false);
  const [produtoLink, setProdutoLink] = useState("");

  const menus = [
    { nome: "Painel", icone: LayoutDashboard },
    { nome: "Analisar produto", icone: Package },
    { nome: "Criar conteúdo", icone: Sparkles },
    { nome: "Biblioteca", icone: Image },
    { nome: "Agendamentos", icone: CalendarDays },
    { nome: "Configurações", icone: Settings }
  ];

  return (
    <div className="app">
      <aside className={`sidebar ${menuAberto ? "aberto" : ""}`}>
        <div className="marca">
          <div className="marca-icone"><ShoppingBag /></div>
          <div>
            <strong>Afiliados IA</strong>
            <small>Seu marketing inteligente</small>
          </div>
          <button className="fechar-menu" onClick={() => setMenuAberto(false)}>
            <X />
          </button>
        </div>

        <p className="menu-titulo">MENU PRINCIPAL</p>

        <nav>
          {menus.map((item) => {
            const Icone = item.icone;
            return (
              <button
                key={item.nome}
                className={`menu-item ${pagina === item.nome ? "ativo" : ""}`}
                onClick={() => {
                  setPagina(item.nome);
                  setMenuAberto(false);
                }}
              >
                <Icone size={19} />
                <span>{item.nome}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-rodape">
          <Sparkles size={18} />
          <span>Transforme produtos em vendas.</span>
        </div>
      </aside>

      {menuAberto && (
        <div className="fundo-menu" onClick={() => setMenuAberto(false)} />
      )}

      <main className="principal">
        <header className="topo">
          <button className="abrir-menu" onClick={() => setMenuAberto(true)}>
            <Menu />
          </button>
          <div>
            <span className="saudacao">SUA CENTRAL DE AFILIADOS</span>
            <h1>{pagina}</h1>
          </div>
          <div className="avatar">IA</div>
        </header>

        {pagina === "Painel" && (
          <>
            <section className="boas-vindas">
              <div>
                <span className="etiqueta">
                  <Sparkles size={14} /> INTELIGÊNCIA ARTIFICIAL
                </span>
                <h2>Seu negócio de afiliados começa aqui.</h2>
                <p>
                  Organize produtos, crie conteúdos e prepare suas campanhas em um só lugar.
                </p>
                <button
                  className="botao-principal"
                  onClick={() => setPagina("Analisar produto")}
                >
                  <Package size={18} /> Analisar meu primeiro produto
                </button>
              </div>
              <div className="ilustracao"><ShoppingBag size={76} /></div>
            </section>

            <section className="indicadores">
              <div className="indicador">
                <Package />
                <span>Produtos analisados</span>
                <strong>0</strong>
              </div>
              <div className="indicador">
                <Image />
                <span>Conteúdos criados</span>
                <strong>0</strong>
              </div>
              <div className="indicador">
                <CalendarDays />
                <span>Publicações agendadas</span>
                <strong>0</strong>
              </div>
            </section>

            <section className="bloco">
              <h3>Comece por aqui</h3>
              <p>Escolha uma etapa para começar a organizar sua divulgação.</p>
              <div className="atalhos">
                <button onClick={() => setPagina("Analisar produto")}>
                  <Link /><strong>Adicionar produto</strong>
                  <small>Comece com um link de produto.</small>
                </button>
                <button onClick={() => setPagina("Criar conteúdo")}>
                  <Sparkles /><strong>Criar conteúdo</strong>
                  <small>Prepare textos para suas campanhas.</small>
                </button>
                <button onClick={() => setPagina("Agendamentos")}>
                  <CalendarDays /><strong>Organizar publicações</strong>
                  <small>Planeje seu calendário.</small>
                </button>
              </div>
            </section>
          </>
        )}

        {pagina === "Analisar produto" && (
          <section className="bloco pagina-conteudo">
            <span className="etiqueta">
              <Link size={14} /> IMPORTAÇÃO DE PRODUTOS
            </span>
            <h2>Adicione um produto</h2>
            <p>Cole o link do produto que deseja divulgar.</p>
            <label htmlFor="link-produto">Link do produto</label>
            <input
              id="link-produto"
              value={produtoLink}
              onChange={(e) => setProdutoLink(e.target.value)}
              placeholder="Cole aqui o link da Shopee, Amazon, Mercado Livre..."
            />
            <button
              className="botao-principal"
              onClick={() => alert("A interface está pronta. A integração para buscar os dados do produto será conectada em uma próxima etapa.")}
              disabled={!produtoLink.trim()}
            >
              <Sparkles size={18} /> Analisar produto
            </button>
            <p className="aviso">
              Nesta primeira versão, a análise automática ainda será conectada às APIs das lojas.
            </p>
          </section>
        )}

        {pagina !== "Painel" && pagina !== "Analisar produto" && (
          <section className="bloco pagina-conteudo">
            <Sparkles size={34} />
            <h2>{pagina}</h2>
            <p>Esta área está preparada. Vamos desenvolver suas funções nas próximas etapas.</p>
          </section>
        )}

        <footer>Afiliados IA · Sua central inteligente de marketing</footer>
      </main>
    </div>
  );
}
