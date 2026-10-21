
/**
 * AVA Hospitalar - Player exclusivo da Farmácia
 * Os demais setores continuam usando o app.js original.
 */

document.addEventListener("click", function (event) {
    // Executa somente na página da Farmácia.
    if (document.body.getAttribute("data-setor") !== "farmacia") {
      return;
    }
  
    const card = event.target.closest(".video-card");
  
    if (!card) return;
  
    // Interrompe o player original somente nesta página.
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  
    const titulo = card.querySelector(".video-card-title")?.textContent.trim();
  
    const treinamento = (treinamentos.farmacia || []).find(
      video => video.titulo === titulo
    );
  
    if (!treinamento || !treinamento.video) {
      alert("Vídeo não cadastrado para este treinamento.");
      return;
    }
  
    abrirVideoFarmacia(treinamento);
  }, true);
  
  function abrirVideoFarmacia(treinamento) {
    // Evita criar dois modais ao mesmo tempo.
    document.getElementById("farmacia-video-modal")?.remove();
  
    const modal = document.createElement("div");
    modal.id = "farmacia-video-modal";
    modal.className = "modal-overlay";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
  
    modal.innerHTML = `
      <div class="modal-container">
        <div class="modal-header">
          <div class="modal-title-wrapper">
            <span class="modal-category">
              ${escaparHTML(treinamento.categoria || "Farmácia")}
            </span>
            <h2 class="modal-title">
              ${escaparHTML(treinamento.titulo)}
            </h2>
          </div>
  
          <button
            type="button"
            class="modal-close"
            id="fechar-video-farmacia"
            aria-label="Fechar vídeo">
            &times;
          </button>
        </div>
  
        <div class="modal-body">
          <video
            controls
            autoplay
            playsinline
            preload="metadata"
            style="display:block;width:100%;max-height:75vh;background:#000;">
            <source
              src="${escaparHTML(treinamento.video)}"
              type="video/mp4">
            Seu navegador não consegue reproduzir este vídeo.
          </video>
        </div>
  
        <div class="modal-desc-panel">
          <p class="modal-desc-text">
            ${escaparHTML(treinamento.descricao || "")}
          </p>
        </div>
      </div>
    `;
  
    document.body.appendChild(modal);
  
    requestAnimationFrame(() => {
      modal.classList.add("open");
    });
  
    const player = modal.querySelector("video");
    const botaoFechar = modal.querySelector("#fechar-video-farmacia");
  
    function fecharModal() {
      player.pause();
      player.removeAttribute("src");
  
      player.querySelectorAll("source").forEach(source => {
        source.removeAttribute("src");
      });
  
      player.load();
      modal.remove();
  
      document.removeEventListener("keydown", teclaEscape);
    }
  
    function teclaEscape(event) {
      if (event.key === "Escape") {
        fecharModal();
      }
    }
  
    botaoFechar.addEventListener("click", fecharModal);
  
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        fecharModal();
      }
    });
  
    document.addEventListener("keydown", teclaEscape);
  }
  
  function escaparHTML(valor) {
    return String(valor).replace(/[&<>"']/g, caractere => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[caractere]);
  }
  