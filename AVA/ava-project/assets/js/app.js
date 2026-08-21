/**
 * AVA Hospitalar - Lógica Front-End e Componentização Dinâmica (Versão Sidebar Premium)
 * Desenvolvedor Front-End Sênior / UI-UX Designer
 */

document.addEventListener("DOMContentLoaded", () => {
  const sectorId = document.body.getAttribute("data-setor") || "home";
  
  // 1. Dicionário de Ícones SVG Críspidos e Leves (Sem dependência de rede)
  const svgIcons = {
    home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    "user-check": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
    "heart-pulse": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-5 2 10 1.5-5h3.1"/></svg>`,
    stethoscope: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4.8z"/><path d="M10 2v2a6 6 0 0 0 12 0V2"/><path d="M22 2h-4"/><path d="M12 2H8"/><path d="M12 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/><path d="M5.5 16h3"/><path d="M7 14.5v3"/></svg>`,
    syringe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-.2.2-.5.3-.7.3H5v-3c0-.3.1-.5.3-.7L15 5.5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/></svg>`,
    "shield-alert": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    baby: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 5 6.3"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="M22 12h-2"/><path d="M4 12H2"/></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    "help-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    "chevron-down": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    "log-out": `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    "arrow-up": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
    "arrow-right": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    "alert-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
  };

  let activeCategory = "Todos";
  let activeSearchTerm = "";
  let lastFocusedElement = null;

  // Injetar Sidebar, Header Mobile, Área Institucional, Footer e Botão Topo
  injectSidebarAndMobileHeader();
  injectInstitutionalArea();
  injectFooter();
  injectBackToTopButton();

  // Tratamento específico de cada página com base em body[data-setor]
  if (sectorId === "home") {
    initHomePage();
  } else {
    initSectorPage();
  }

  /* ==========================================================================
     INJEÇÕES DE COMPONENTES REUTILIZÁVEIS
     ========================================================================== */

  // Injeção da Sidebar e do Header Móvel
  function injectSidebarAndMobileHeader() {
    // 1. Criar Mobile Header
    const mobileHeader = document.createElement("header");
    mobileHeader.className = "mobile-header";
    mobileHeader.innerHTML = `
      <div class="mobile-brand">
        <div class="mobile-brand-icon">${svgIcons.home}</div>
        <div class="mobile-brand-text">AVA <span>Hospitalar</span></div>
      </div>
      <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu de setores" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    `;
    document.body.insertBefore(mobileHeader, document.body.firstChild);

    // 2. Criar Sidebar Lateral
    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";
    sidebar.id = "sidebar";

    // Gerar links de setores
    let sectorLinksHTML = "";
    Object.values(setoresConfig).forEach(s => {
      const activeClass = s.id === sectorId ? "active" : "";
      const vCount = getVideosCount(s.id);
      sectorLinksHTML += `
        <a href="${s.url}" class="sidebar-link ${activeClass}">
          <span class="sidebar-link-icon">${svgIcons[s.icone]}</span>
          <span class="sidebar-link-text">${s.nome}</span>
          <span class="sidebar-link-count">${vCount}</span>
        </a>
      `;
    });

    sidebar.innerHTML = `
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-brand">
          <div class="sidebar-brand-icon">${svgIcons.home}</div>
          <div class="sidebar-brand-text">AVA <span>Hospitalar</span></div>
        </a>
      </div>
      <nav class="sidebar-nav" aria-label="Navegação Lateral">
        <a href="index.html" class="sidebar-link ${sectorId === "home" ? "active" : ""}">
          <span class="sidebar-link-icon">${svgIcons.home}</span>
          <span class="sidebar-link-text">Painel Inicial</span>
        </a>
        
        <div class="sidebar-section-title">Setores</div>
        ${sectorLinksHTML}
      </nav>
      <div class="sidebar-footer">
        <a href="http://192.168.1.5/index.html" class="sidebar-logout" id="btn-logout">
          ${svgIcons["log-out"]} Sair do AVA
        </a>
      </div>
    `;
    document.body.insertBefore(sidebar, document.body.firstChild);

    // 3. Criar Overlay da Sidebar (Mobile)
    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    overlay.id = "sidebar-overlay";
    document.body.appendChild(overlay);

    // Lógica do Menu Hambúrguer (Mobile)
    const menuToggle = document.getElementById("menu-toggle");
    
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.toggle("open");
        menuToggle.classList.toggle("open");
        overlay.classList.toggle("visible");
        menuToggle.setAttribute("aria-expanded", isOpen);
      });

      overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        menuToggle.classList.remove("open");
        overlay.classList.remove("visible");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    }

    // Configuração de logout amigável local/externo
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", (e) => {
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.protocol === "file:") {
          e.preventDefault();
          alert("Efetuando logout do sistema... (Em produção seria redirecionado para a página inicial corporativa)");
          window.location.href = "index.html";
        }
      });
    }
  }

  // Injeção da Faixa Institucional de Logos (Inserida no topo de tudo, antes do hero ou main-content)
  function injectInstitutionalArea() {
    const targetEl = document.querySelector(".hero") || document.querySelector(".main-content");
    if (!targetEl) return;

    const instSection = document.createElement("div");
    instSection.className = "institutional-area";
    instSection.innerHTML = `
      <div class="container">
        <div class="institutional-container">
          <div class="logo-wrapper" title="Instituto Alpha">
            <img src="assets/img/logo-alpha.png" alt="Instituto Alpha" loading="lazy">
          </div>
          <div class="logo-wrapper" title="Brasão do Hospital">
            <img src="assets/img/logo-hospital.png" alt="Brasão Institucional do Hospital" loading="lazy">
          </div>
        </div>
      </div>
    `;

    targetEl.parentNode.insertBefore(instSection, targetEl);
  }

  // Injeção do Footer Padrão
  function injectFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <div class="footer-copyright">
            Desenvolvido por <strong>Luiz Henrique</strong> | &copy; ${new Date().getFullYear()} Instituto Alpha & Hospital Parceiro. Todos os direitos reservados.
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
  }

  // Injeção e Comportamento do Botão Voltar ao Topo
  function injectBackToTopButton() {
    const btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.id = "back-to-top";
    btn.setAttribute("aria-label", "Voltar ao topo da página");
    btn.innerHTML = svgIcons["arrow-up"];
    
    document.body.appendChild(btn);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ==========================================================================
     LOGICA DA PÁGINA INICIAL (HOME)
     ========================================================================== */
  function initHomePage() {
    const gridContainer = document.getElementById("sectors-grid");
    if (!gridContainer) return;

    // Gerar Cards de Setor Dinamicamente
    let sectorsHTML = "";
    Object.values(setoresConfig).forEach(s => {
      const vCount = getVideosCount(s.id);
      sectorsHTML += `
        <a href="${s.url}" class="sector-card" style="--primary-color: ${s.corDestaque}" aria-label="Acessar setor ${s.nome}, possui ${vCount} treinamentos.">
          <div>
            <div class="sector-card-header">
              <div class="sector-card-icon" style="background-color: ${s.corDestaque}15; color: ${s.corDestaque}">
                ${svgIcons[s.icone]}
              </div>
              <span class="sector-card-count" style="background-color: ${s.corDestaque}15; color: ${s.corDestaque}">
                ${vCount} ${vCount === 1 ? "vídeo" : "vídeos"}
              </span>
            </div>
            <h3 class="sector-card-title">${s.nome}</h3>
            <p class="sector-card-desc">${s.descricao}</p>
          </div>
          <div class="sector-card-footer" style="color: ${s.corDestaque}">
            Acessar Setor ${svgIcons["arrow-right"]}
          </div>
        </a>
      `;
    });
    gridContainer.innerHTML = sectorsHTML;
  }

  // Gera a lista geral de vídeos com flag destaque = true
  function renderFeaturedTrainings() {
    const featuredContainer = document.getElementById("featured-grid");
    if (!featuredContainer) return;

    // Obter todos os vídeos em destaque de todos os setores
    const featuredVideos = [];
    Object.keys(treinamentos).forEach(secId => {
      const secName = setoresConfig[secId] ? setoresConfig[secId].nome : "Setor";
      treinamentos[secId].forEach(video => {
        if (video.destaque) {
          featuredVideos.push({
            ...video,
            setorId: secId,
            setorNome: secName
          });
        }
      });
    });

    if (featuredVideos.length === 0) {
      featuredContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">${svgIcons["alert-circle"]}</div>
          <h4 class="empty-state-title">Nenhum destaque no momento</h4>
          <p class="empty-state-desc">Os treinamentos em destaque de cada setor aparecerão automaticamente aqui.</p>
        </div>
      `;
      return;
    }

    // Renderizar Skeleton Loader
    renderSkeletons(featuredContainer, 3);

    // Carregamento simulado de 600ms para UX
    setTimeout(() => {
      let videosHTML = "";
      featuredVideos.forEach(v => {
        const ytId = extractYoutubeId(v.youtube);
        const thumbUrl = ytId 
          ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
          : "assets/img/logo-alpha.png"; // Fallback se URL falhar

        videosHTML += `
          <article class="video-card">
            <div class="video-card-thumb-wrapper" data-youtube="${v.youtube}" data-title="${v.titulo}" data-category="${v.categoria}" data-desc="${v.descricao}">
              <img src="${thumbUrl}" alt="Thumbnail de ${v.titulo}" class="video-card-thumb" loading="lazy">
              <span class="video-card-badge">${v.setorNome}</span>
              <span class="video-card-badge-destaque">${svgIcons.star} Destaque</span>
              <div class="video-card-play-overlay">
                <div class="video-card-play-btn" aria-hidden="true">${svgIcons.play}</div>
              </div>
            </div>
            <div class="video-card-body">
              <span class="video-card-category">${v.categoria}</span>
              <h4 class="video-card-title">${v.titulo}</h4>
              <p class="video-card-desc">${v.descricao}</p>
              <button class="video-card-action" data-youtube="${v.youtube}" data-title="${v.titulo}" data-category="${v.categoria}" data-desc="${v.descricao}">
                ${svgIcons.play} Assistir treinamento
              </button>
            </div>
          </article>
        `;
      });
      featuredContainer.innerHTML = videosHTML;

      // Evento de clique para abrir o player de vídeo
      attachVideoEvents(featuredContainer);
    }, 600);
  }

  /* ==========================================================================
     LOGICA DAS PÁGINAS DE SETOR INTERNAS
     ========================================================================== */
  function initSectorPage() {
    const config = setoresConfig[sectorId];
    if (!config) return;

    const mainContainer = document.querySelector(".main-content .container");
    if (!mainContainer) return;

    // 1. Injetar Breadcrumb
    const breadcrumb = document.createElement("div");
    breadcrumb.className = "breadcrumb";
    breadcrumb.innerHTML = `
      <a href="index.html">Início</a>
      <span class="breadcrumb-separator">${svgIcons.chevronRight}</span>
      <span>Setores</span>
      <span class="breadcrumb-separator">${svgIcons.chevronRight}</span>
      <span class="breadcrumb-current">${config.nome}</span>
    `;
    mainContainer.insertBefore(breadcrumb, mainContainer.firstChild);

    // 2. Injetar Setor Header (Introdução) - Inserido logo após a Área Institucional de Logos
    const introSection = document.createElement("section");
    introSection.className = "sector-intro";
    introSection.innerHTML = `
      <div class="sector-intro-content">
        <span class="sector-intro-badge">Setor Hospitalar</span>
        <h1 class="sector-intro-title">Treinamentos — ${config.nome}</h1>
        <p class="sector-intro-desc">${config.descricao}</p>
      </div>
    `;
    breadcrumb.after(introSection);

    // 3. Injetar Painel de Busca e Filtros
    const controlsPanel = document.createElement("div");
    controlsPanel.className = "controls-panel";
    controlsPanel.innerHTML = `
      <div class="search-box-wrapper">
        <div class="search-box-icon">${svgIcons.search}</div>
        <input type="text" id="search-input" class="search-input" placeholder="Buscar treinamento por título, descrição ou categoria..." aria-label="Buscar treinamento">
      </div>
      <div class="filters-container" id="filters-container">
        <!-- Injetado dinamicamente -->
      </div>
    `;
    introSection.after(controlsPanel);

    // 4. Renderizar Filtros Iniciais e Vídeos
    generateCategoryFilters();
    renderSectorVideos();

    // Eventos de Busca
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearchTerm = e.target.value.toLowerCase().trim();
        renderSectorVideos(false); // Renderizar direto sem simulação de delay para maior responsividade ao digitar
      });
    }
  }

  // Gera tags de categoria com base nos vídeos cadastrados do setor
  function generateCategoryFilters() {
    const filtersContainer = document.getElementById("filters-container");
    if (!filtersContainer) return;

    const sectorVideos = treinamentos[sectorId] || [];
    const categoriesSet = new Set();
    
    // Extrai as categorias únicas
    sectorVideos.forEach(v => {
      if (v.categoria) categoriesSet.add(v.categoria);
    });

    const categoriesArray = ["Todos", ...Array.from(categoriesSet)];

    if (categoriesArray.length <= 1) {
      filtersContainer.innerHTML = "";
      filtersContainer.style.display = "none";
      return;
    }

    let filtersHTML = `<span class="filter-label">Filtros:</span>`;
    categoriesArray.forEach(cat => {
      const activeClass = cat === activeCategory ? "active" : "";
      filtersHTML += `
        <button class="filter-btn ${activeClass}" data-category="${cat}">
          ${cat}
        </button>
      `;
    });

    filtersContainer.innerHTML = filtersHTML;

    // Escutar eventos de cliques nas categorias
    filtersContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        filtersContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.getAttribute("data-category");
        renderSectorVideos(true); // Exibe skeleton ao trocar categoria para visual premium
      });
    });
  }

  // Renderiza a listagem de vídeos do setor atual
  function renderSectorVideos(showSkeleton = true) {
    const gridContainer = document.getElementById("videos-grid");
    if (!gridContainer) return;

    const videosList = treinamentos[sectorId] || [];

    // Filtrar vídeos por Busca e Categoria
    const filteredVideos = videosList.filter(v => {
      const matchCategory = activeCategory === "Todos" || v.categoria === activeCategory;
      const matchSearch = activeSearchTerm === "" || 
        v.titulo.toLowerCase().includes(activeSearchTerm) || 
        v.descricao.toLowerCase().includes(activeSearchTerm) || 
        v.categoria.toLowerCase().includes(activeSearchTerm);

      return matchCategory && matchSearch;
    });

    // Se a lista geral de vídeos estiver vazia (Setor sem treinamentos cadastrados ainda)
    if (videosList.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">${svgIcons["alert-circle"]}</div>
          <h4 class="empty-state-title">Nenhum treinamento disponível</h4>
          <p class="empty-state-desc">Novos treinamentos e tutoriais serão adicionados em breve pelo departamento de desenvolvimento profissional.</p>
        </div>
      `;
      return;
    }

    // Se filtros não encontrarem nenhum vídeo
    if (filteredVideos.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">${svgIcons["alert-circle"]}</div>
          <h4 class="empty-state-title">Nenhum resultado encontrado</h4>
          <p class="empty-state-desc">Nenhum treinamento atende aos critérios da busca ou filtro selecionado. Tente digitar outro termo.</p>
        </div>
      `;
      return;
    }

    if (showSkeleton) {
      renderSkeletons(gridContainer, Math.min(3, filteredVideos.length));
      
      // Delay visual de 600ms para carregar
      setTimeout(() => {
        displayCards();
      }, 600);
    } else {
      displayCards();
    }

    function displayCards() {
      let cardsHTML = "";
      filteredVideos.forEach(v => {
        const ytId = extractYoutubeId(v.youtube);
        const thumbUrl = ytId 
          ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` 
          : "assets/img/logo-alpha.png";

        cardsHTML += `
          <article class="video-card" data-youtube="${v.youtube}" data-title="${v.titulo}" data-category="${v.categoria}" data-desc="${v.descricao}">
            <div class="video-card-thumb-wrapper">
              <img src="${thumbUrl}" alt="Thumbnail de ${v.titulo}" class="video-card-thumb" loading="lazy">
              ${v.destaque ? `<span class="video-card-badge-destaque">${svgIcons.star} Destaque</span>` : ""}
              <div class="video-card-play-overlay">
                <div class="video-card-play-btn" aria-hidden="true">${svgIcons.play}</div>
              </div>
            </div>
            <div class="video-card-body">
              <span class="video-card-category">${v.categoria}</span>
              <h3 class="video-card-title">${v.titulo}</h3>
              <p class="video-card-desc">${v.descricao}</p>
              <button class="video-card-action" aria-label="Assistir treinamento ${v.titulo}">
                ${svgIcons.play} Assistir treinamento
              </button>
            </div>
          </article>
        `;
      });
      gridContainer.innerHTML = cardsHTML;

      // Eventos dos cards de vídeo
      attachVideoEvents(gridContainer);
    }
  }

  /* ==========================================================================
     SKELETON CARDS GENERATOR
     ========================================================================== */
  function renderSkeletons(container, count) {
    let skeletonsHTML = "";
    for (let i = 0; i < count; i++) {
      skeletonsHTML += `
        <div class="skeleton-card" aria-hidden="true">
          <div class="skeleton-thumb"></div>
          <div class="skeleton-body">
            <div class="skeleton-line sm"></div>
            <div class="skeleton-line lg"></div>
            <div class="skeleton-line desc-1"></div>
            <div class="skeleton-line desc-2"></div>
            <div class="skeleton-line btn"></div>
          </div>
        </div>
      `;
    }
    container.innerHTML = skeletonsHTML;
  }

  /* ==========================================================================
     MODAL DE VÍDEO COMPACTO E ACESSÍVEL (A11Y)
     ========================================================================== */
  function attachVideoEvents(container) {
    const cards = container.querySelectorAll(".video-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const ytUrl = card.getAttribute("data-youtube") ? card.getAttribute("data-youtube").trim() : "";
        const title = card.getAttribute("data-title");
        const category = card.getAttribute("data-category");
        const desc = card.getAttribute("data-desc");

        lastFocusedElement = card; // Armazenar foco original para a11y
        openVideoModal(ytUrl, title, category, desc);
      });
    });
  }

  function openVideoModal(url, title, category, desc) {
    const ytId = extractYoutubeId(url);

    // Criar modal dinamicamente no body para evitar bugs de fluxo
    let modalOverlay = document.getElementById("video-modal-overlay");
    if (!modalOverlay) {
      modalOverlay = document.createElement("div");
      modalOverlay.id = "video-modal-overlay";
      modalOverlay.className = "modal-overlay";
      modalOverlay.setAttribute("role", "dialog");
      modalOverlay.setAttribute("aria-modal", "true");
      document.body.appendChild(modalOverlay);
    }

    let modalBodyHTML = "";
    if (ytId) {
      modalBodyHTML = `
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&rel=0&modestbranding=1" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen 
          title="${title}">
        </iframe>
      `;
    } else {
      // Placeholder elegante para vídeos ainda não cadastrados
      modalBodyHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: #0f172a; color: #94a3b8; padding: 2rem; text-align: center; gap: 1rem;">
          <div style="color: var(--warning); display: flex; align-items: center; justify-content: center;">
            ${svgIcons["alert-circle"]}
          </div>
          <h3 style="color: var(--white); font-size: 1.15rem; font-weight: 700; margin: 0;">Treinamento em Breve</h3>
          <p style="font-size: 0.9rem; max-width: 420px; line-height: 1.5; margin: 0;">O conteúdo em vídeo e os materiais auxiliares deste módulo estão sendo finalizados pela equipe e estarão disponíveis em breve na plataforma.</p>
        </div>
      `;
    }

    modalOverlay.innerHTML = `
      <div class="modal-container" id="modal-container">
        <div class="modal-header">
          <div class="modal-title-wrapper">
            <span class="modal-category">${category}</span>
            <h2 class="modal-title" id="modal-video-title">${title}</h2>
          </div>
          <button class="modal-close" id="modal-close-btn" aria-label="Fechar modal de treinamento">
            ${svgIcons.close}
          </button>
        </div>
        <div class="modal-body">
          ${modalBodyHTML}
        </div>
        <div class="modal-desc-panel">
          <p class="modal-desc-text">${desc}</p>
        </div>
      </div>
    `;

    // Exibir o modal com efeito CSS
    setTimeout(() => {
      modalOverlay.classList.add("open");
      const closeBtn = document.getElementById("modal-close-btn");
      if (closeBtn) closeBtn.focus();
    }, 50);

    // Lógica para fechar modal
    const closeBtn = document.getElementById("modal-close-btn");
    
    function closeModal() {
      // Remover a classe open para transição suave de fade out
      modalOverlay.classList.remove("open");
      
      // Destruir o player de vídeo imediatamente para cortar o áudio
      const iframe = modalOverlay.querySelector("iframe");
      if (iframe) iframe.remove();

      // Devolver foco ao elemento anterior para navegação por teclado (a11y)
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }

      // Remover o HTML interno após a animação de encerramento
      setTimeout(() => {
        modalOverlay.innerHTML = "";
      }, 300);

      // Limpar listeners globais do modal
      document.removeEventListener("keydown", handleKeyDown);
      modalOverlay.removeEventListener("click", handleOverlayClick);
    }

    // Fechar ao clicar no botão fechar
    closeBtn.addEventListener("click", closeModal);

    // Fechar ao pressionar ESC ou fazer Focus Trap
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        closeModal();
      }
      
      // Focus Trap
      if (e.key === "Tab") {
        const focusableElements = modalOverlay.querySelectorAll('button, [tabindex="0"], iframe');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Se Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else { // Se Tab simples
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    }

    // Fechar clicando fora do modal (Overlay)
    function handleOverlayClick(e) {
      const modalContainer = document.getElementById("modal-container");
      if (modalContainer && !modalContainer.contains(e.target)) {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    modalOverlay.addEventListener("click", handleOverlayClick);
  }

  /* ==========================================================================
     HELPERS AUXILIARES
     ========================================================================== */
  
  // Extrai o código identificador de 11 caracteres de URLs de vídeos do YouTube
  function extractYoutubeId(url) {
    if (!url) return null;
    const cleanUrl = url.trim();
    
    // Se o valor fornecido já for diretamente o ID de 11 caracteres do YouTube
    if (cleanUrl.length === 11 && !cleanUrl.includes('/') && !cleanUrl.includes('.')) {
      return cleanUrl;
    }
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = cleanUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }
});
