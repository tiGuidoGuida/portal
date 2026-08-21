/**
 * AVA Hospitalar - Estrutura de Dados
 * Contém a configuração de todos os setores e o cadastro de treinamentos.
 */

const setoresConfig = {
  recepcao: {
    id: "recepcao",
    nome: "Recepção",
    url: "recep.html",
    icone: "user-check",
    descricao: "Controle de fluxo de pacientes, abertura de fichas, atendimento inicial e cadastro no sistema.",
    corDestaque: "#0b5860"
  },
  triagem: {
    id: "triagem",
    nome: "Triagem",
    url: "triagem.html",
    icone: "heart-pulse",
    descricao: "Protocolo de Manchester, avaliação de sinais vitais e classificação de risco clínico.",
    corDestaque: "#0e7490"
  },
  med_cli: {
    id: "med_cli",
    nome: "Atendimento Médico",
    url: "med_cli.html",
    icone: "stethoscope",
    descricao: "Condutas clínicas, preenchimento de prontuários, diretrizes institucionais e prescrições.",
    corDestaque: "#0f766e"
  },
  med: {
    id: "med",
    nome: "Medicação",
    url: "med.html",
    icone: "syringe",
    descricao: "Administração de medicamentos, diluição segura, cuidados de enfermagem e dupla checagem.",
    corDestaque: "#115e59"
  },
  emergencia: {
    id: "emergencia",
    nome: "Emergência",
    url: "emg.html",
    icone: "shield-alert",
    descricao: "Protocolos de reanimação (RCP), trauma, atendimento emergencial e sala vermelha.",
    corDestaque: "#991b1b"
  },
  med_inf: {
    id: "med_inf",
    nome: "Medicação Infantil",
    url: "med_inf.html",
    icone: "baby",
    descricao: "Dosagens pediátricas por peso, técnicas de abordagem infantil e administração de fármacos.",
    corDestaque: "#0369a1"
  },
  observacao: {
    id: "observacao",
    nome: "Observação",
    url: "obs.html",
    icone: "clock",
    descricao: "Monitoramento contínuo de pacientes, evolução de enfermagem e passagens de plantão.",
    corDestaque: "#374151"
  },
  suporte: {
    id: "suporte",
    nome: "Suporte",
    url: "suporte.html",
    icone: "help-circle",
    descricao: "Treinamentos sobre o sistema integrado de saúde, suporte de TI e segurança da informação.",
    corDestaque: "#4d7c0f"
  }
};

const treinamentos = {
  recepcao: [
    {
      id: 1,
      titulo: "Atendimento Recepção",
      descricao: "Treinamento prático sobre o fluxo completo de recepção, abertura de fichas e cadastro inicial de pacientes.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=zmBRNFT0HVU",
      destaque: true
    },
    {
      id: 2,
      titulo: "Verificar Exames",
      descricao: "Como consultar e conferir solicitações de exames de laboratório e imagem anexados no painel da recepção.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=XsJwEA-59uU",
      destaque: false
    },
    {
      id: 3,
      titulo: "Declaração de Hora",
      descricao: "Fluxo completo de emissão, registro e impressão de declarações de comparecimento no sistema.",
      categoria: "Procedimentos",
      youtube: "https://www.youtube.com/watch?v=IrXXpoMarBA",
      destaque: false
    },
    {
      id: 4,
      titulo: "Fila de Atendimento",
      descricao: "Como gerenciar e ordenar o fluxo do painel de senhas e a fila de espera na recepção hospitalar.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=H7m7NSHFJbM",
      destaque: false
    }
  ],

  triagem: [
    {
      id: 1,
      titulo: "Atendimento Triagem",
      descricao: "Como realizar o registro inicial e o fluxo completo de atendimento de triagem no sistema eletrônico.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=FsXwbwjH9MY",
      destaque: true
    },
    {
      id: 2,
      titulo: "Fila de Atendimento",
      descricao: "Treinamento para gerenciar, priorizar e monitorar o fluxo da fila de pacientes no painel de triagem.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=H7m7NSHFJbM",
      destaque: false
    },
    {
      id: 3,
      titulo: "Teste de Dengue",
      descricao: "Protocolo clínico para aplicação, leitura e inserção de resultados do teste rápido de Dengue na triagem.",
      categoria: "Procedimentos",
      youtube: "",
      destaque: false
    },
    {
      id: 4,
      titulo: "Medicação Externa",
      descricao: "Fluxo de verificação e liberação de administração de medicamentos trazidos de fora do hospital.",
      categoria: "Procedimentos",
      youtube: "https://www.youtube.com/watch?v=MOeyjnALoxI",
      destaque: false
    }
  ],

  med_cli: [
    {
      id: 1,
      titulo: "Atendimento Clínico",
      descricao: "Treinamento prático sobre o fluxo completo de atendimento clínico no prontuário eletrônico (PEP).",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=FsXwbwjH9MY",
      destaque: true
    },
    {
      id: 2,
      titulo: "Atestado Médico",
      descricao: "Instruções passo a passo sobre a emissão e preenchimento seguro de atestados médicos no sistema.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=_SEtx1ffOPM",
      destaque: false
    },
    {
      id: 3,
      titulo: "Evolução Médica",
      descricao: "Boas práticas e fluxo do sistema para o registro diário de evolução clínica de pacientes internados.",
      categoria: "Prontuário",
      youtube: "https://www.youtube.com/watch?v=VUzh7IFEJJc",
      destaque: false
    },
    {
      id: 4,
      titulo: "Receituário Especial",
      descricao: "Orientações sobre a emissão de prescrições de controle especial e receituários restritos de alta vigilância.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=9f9vz4GyA6w",
      destaque: false
    },
    {
      id: 5,
      titulo: "Verificar Exames",
      descricao: "Como consultar e monitorar resultados de exames laboratoriais e laudos de imagem diretamente no PEP.",
      categoria: "Prontuário",
      youtube: "https://www.youtube.com/watch?v=XsJwEA-59uU",
      destaque: false
    }
  ],

  med: [
    {
      id: 1,
      titulo: "Atendimento Medicação",
      descricao: "Treinamento prático sobre o fluxo completo de atendimento e registro de administração de medicamentos no prontuário eletrônico.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=R-N_YtMq9LY",
      destaque: true
    },
    {
      id: 2,
      titulo: "Movimentar para Retorno",
      descricao: "Como realizar a movimentação e encaminhamento do paciente de volta ao atendimento médico no painel do sistema.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=UPIAQhq9hjM",
      destaque: false
    }
  ],

  emergencia: [
    {
      id: 1,
      titulo: "Em Breve",
      descricao: "Este treinamento estará disponível em breve.",
      categoria: "Procedimentos",
      youtube: "",
      destaque: false
    },
    {
      id: 2,
      titulo: "Em Breve",
      descricao: "Este treinamento estará disponível em breve.",
      categoria: "Procedimentos",
      youtube: "",
      destaque: false
    }
  ],

  med_inf: [
    {
      id: 1,
      titulo: "Atendimento Infantil",
      descricao: "Treinamento prático sobre o fluxo completo de atendimento infantil e registro pediátrico no prontuário eletrônico.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=32Wj-0tOZAM",
      destaque: true
    },
    {
      id: 2,
      titulo: "Retorno Médico",
      descricao: "Instruções passo a passo sobre o agendamento, recepção e fluxo clínico de retornos médicos pediátricos.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=UPIAQhq9hjM",
      destaque: false
    }
  ],

  observacao: [
    {
      id: 1,
      titulo: "Evolução Enfermagem",
      descricao: "Fluxo completo de preenchimento e registro de evolução de enfermagem no prontuário eletrônico.",
      categoria: "Enfermagem",
      youtube: "",
      destaque: true
    },
    {
      id: 2,
      titulo: "Evolução Multidisciplinar",
      descricao: "Treinamento para registro integrado e evolução multidisciplinar da equipe de saúde.",
      categoria: "Multidisciplinar",
      youtube: "",
      destaque: false
    },
    {
      id: 3,
      titulo: "Controles Gerais",
      descricao: "Uso do sistema para registro de controles gerais, balanço hídrico e monitoramento clínico.",
      categoria: "Procedimentos",
      youtube: "",
      destaque: false
    },
    {
      id: 4,
      titulo: "Anotação Enfermagem",
      descricao: "Como lançar anotações rápidas, intercorrências e observações de enfermagem no PEP.",
      categoria: "Enfermagem",
      youtube: "",
      destaque: false
    },
    {
      id: 5,
      titulo: "Evolução Multidisciplinar II",
      descricao: "Diretrizes e fluxo de preenchimento de evolução clínica multidisciplinar complementar.",
      categoria: "Multidisciplinar",
      youtube: "",
      destaque: false
    }
  ],

  suporte: [
    {
      id: 1,
      titulo: "Abertura de Chamados de TI e Suporte Técnico",
      descricao: "Como reportar falhas de computadores, impressoras térmicas e acessos ao sistema hospitalar pelo portal de chamados.",
      categoria: "Sistemas",
      youtube: "https://www.youtube.com/watch?v=S8pSMNskFns",
      destaque: true
    },
    {
      id: 2,
      titulo: "LGPD e Segurança da Informação no Hospital",
      descricao: "Normas sobre proteção de dados de pacientes, bloqueio de telas, senhas corporativas e descarte de fichas físicas.",
      categoria: "Segurança",
      youtube: "https://www.youtube.com/watch?v=r32W6V6Q5S4",
      destaque: false
    }
  ]
};

// Helper para obter a contagem de vídeos por setor
function getVideosCount(setorId) {
  return treinamentos[setorId] ? treinamentos[setorId].length : 0;
}
