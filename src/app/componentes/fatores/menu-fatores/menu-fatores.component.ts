import { Component, Input, OnInit } from "@angular/core";
import { Fator } from "../fator";

@Component({
  selector: "app-menu-fatores",
  templateUrl: "./menu-fatores.component.html",
  styleUrls: ["./menu-fatores.component.css"],
})
export class MenuFatoresComponent implements OnInit {
  objetoPai?: Fator;
  fichaAberta = false;
  abrirFicha(item: Fator) {
    this.objetoPai = item;
    console.log(this.objetoPai);
    this.fichaAberta = true;
  }
  listaFatores: Fator[] = [
    {
      id: 1,
      titulo: "Espaçamento",
      par1: "Organizar o espaço em uma horta é essencial para garantir um crescimento saudável das plantas, facilitar os cuidados e otimizar o uso do espaço disponível. Aqui estão algumas dicas sobre como organizar uma horta:",
      par2: "Escolha do local: Selecione um local que receba luz solar adequada durante o dia, idealmente pelo menos 6 horas de sol direto. Certifique-se de que o local tenha um bom sistema de drenagem para evitar o acúmulo de água.",
      par3: "Layout: Planeje o layout da sua horta com antecedência. Considere fatores como a altura das plantas, o espaço que cada uma precisa para crescer, e se você planeja usar canteiros elevados, recipientes ou plantar diretamente no solo.",
      par4: "Divisão de áreas: Divida sua horta em áreas distintas para diferentes tipos de plantas, como vegetais, ervas, frutas, flores, etc. Isso ajudará na organização e na rotação de culturas para manter o solo saudável.",
      par5: "Caminhos: Deixe espaços entre os canteiros ou áreas de plantio para criar caminhos. Isso facilitará o acesso às plantas para cuidar delas, colher os produtos e evitar compactação do solo.",
      par6: "Compatibilidade de plantas: Agrupe plantas que tenham requisitos de crescimento semelhantes, como necessidades de água e luz solar, juntas. Isso facilitará o manejo e permitirá que as plantas se beneficiem mutuamente, como por meio da polinização cruzada ou da repulsão de insetos.",
      par7: "Suporte vertical: Para maximizar o espaço, considere o uso de suportes verticais, como treliças, estacas ou grades, para plantas trepadeiras ou que precisem de suporte, como tomateiros, pepinos e ervilhas.",
      par8: "Rotação de culturas: Planeje a rotação de culturas para evitar o esgotamento do solo e reduzir o risco de doenças e pragas. Isso envolve alternar o tipo de planta cultivada em cada canteiro ou área a cada estação de cultivo.",
      par9: "Acessórios: Tenha à mão ferramentas de jardinagem essenciais, como regadores, enxadas, pás, luvas e tesouras de poda, e mantenha-as organizadas em um local acessível.",
      par10:
        "Ao organizar sua horta com cuidado, você poderá criar um ambiente propício para o crescimento saudável das plantas e tornar a experiência de jardinagem mais eficiente e gratificante.",
      img: "../../../../assets/img/canteiro.jpg",
    },
    {
      id: 2,
      titulo: "Solo",
      par1: "Preparar o solo corretamente é fundamental para o sucesso de uma horta. Aqui estão os passos básicos para preparar o solo:",
      par2: "Limpeza da área: Remova todas as plantas daninhas, pedras e detritos da área onde você planeja criar sua horta. Isso ajuda a evitar a competição por nutrientes e espaço.",
      par3: "Teste do solo: Faça um teste de pH do solo para determinar se é ácido, neutro ou alcalino. Isso ajudará a determinar quais ajustes de pH podem ser necessários para as plantas que você deseja cultivar. Você pode obter kits de teste de solo em lojas de jardinagem.",
      par4: "Adição de matéria orgânica: A matéria orgânica, como composto, esterco bem curtido ou restos de plantas decompostos, é essencial para melhorar a estrutura do solo, fornecer nutrientes e reter a umidade. Espalhe uma camada generosa de matéria orgânica sobre a área da horta e incorpore-a ao solo usando uma enxada ou um garfo de jardim.",
      par5: "Aeração do solo: Use um garfo de jardim ou uma enxada para soltar o solo até uma profundidade de cerca de 20 a 30 centímetros. Isso ajuda a melhorar a drenagem, permitir que as raízes se espalhem facilmente e promover a circulação de ar no solo.",
      par6: "Adição de fertilizantes: Baseado nos resultados do teste de solo e nas necessidades específicas das plantas que você deseja cultivar, adicione fertilizantes orgânicos ou minerais conforme necessário. Siga as instruções de dosagem do fabricante e misture-os bem ao solo.",
      par7: "Nivelamento: Nivele o solo com uma enxada ou um ancinho para garantir uma superfície uniforme e facilitar o plantio e a irrigação.",
      par8: "Irrigação: Regue bem o solo preparado para garantir que ele esteja úmido antes de começar a plantar. Isso ajudará a estabelecer as condições ideais para o crescimento das plantas desde o início.",
      par9: "",
      par10:
        "Ao seguir esses passos para preparar o solo, você estará criando um ambiente favorável para o crescimento saudável das plantas em sua horta. Lembre-se de que a manutenção contínua do solo, como a adição regular de matéria orgânica e a monitorização dos níveis de nutrientes, é fundamental para o sucesso a longo prazo de sua horta.",
      img: "../../../../assets/img/solo.jpeg",
    },
    {
      id: 3,
      titulo: "Iluminação",
      par1: "A iluminação adequada é essencial para o crescimento saudável das plantas em uma horta, especialmente se você estiver cultivando em ambientes internos ou em áreas com pouca luz natural. Aqui estão algumas maneiras de organizar a iluminação em uma horta:",
      par2: "Escolha do local: Se possível, escolha um local para sua horta que receba luz solar direta por pelo menos 6 horas por dia. Se não houver acesso a luz solar suficiente, considere a instalação de iluminação artificial.",
      par3: "Iluminação natural: Para aproveitar ao máximo a luz natural, posicione sua horta em uma área que receba luz solar direta. Evite sombras de árvores, edifícios ou outras estruturas que possam bloquear a luz.",
      par4: "Iluminação artificial: Se você estiver cultivando em ambientes internos ou em áreas com pouca luz natural, será necessário usar iluminação artificial para complementar a luz do sol. As lâmpadas de crescimento LED são uma escolha popular, pois são eficientes em termos de energia e podem fornecer o espectro de luz adequado para o crescimento das plantas.",
      par5: "Posicionamento das luzes: Posicione as luzes de crescimento a uma altura adequada acima das plantas para garantir uma distribuição uniforme da luz. A altura ideal dependerá do tipo de lâmpada e das necessidades específicas das plantas que você está cultivando. Geralmente, mantenha as luzes a uma distância de cerca de 15 a 30 centímetros das plantas.",
      par6: "Tempo de iluminação: As plantas precisam de um período adequado de luz e de escuro para crescerem saudáveis. Em geral, a maioria das plantas precisa de cerca de 12 a 16 horas de luz por dia para um crescimento ideal. Use temporizadores para controlar o tempo de iluminação e garantir consistência.",
      par7: "Espectro de luz: As plantas têm necessidades específicas de espectro de luz em diferentes estágios de crescimento. As luzes de crescimento LED geralmente podem ser ajustadas para fornecer o espectro de luz adequado para cada estágio, incluindo luzes azuis para o crescimento vegetativo e luzes vermelhas para a floração e frutificação.",
      par8: "Monitoramento: Monitore regularmente suas plantas para garantir que estejam recebendo luz suficiente. Observe qualquer sinal de estiolamento (alongamento das hastes das plantas) ou descoloração das folhas, o que pode indicar falta ou excesso de luz.",
      par9: "",
      par10:
        "Organizar a iluminação em sua horta de maneira adequada garantirá que suas plantas recebam a quantidade certa de luz para um crescimento saudável e produtivo, independentemente das condições de iluminação naturais.",
      img: "../../../../assets/img/iluminacao.jpg",
    },
    {
      id: 4,
      titulo: "Irrigação",
      par1: "Organizar a irrigação em uma horta de forma eficiente é crucial para garantir que as plantas recebam a quantidade adequada de água para crescerem saudáveis e produtivas. Aqui estão algumas maneiras de organizar a irrigação em uma horta:",
      par2: "Escolha do sistema de irrigação: Existem diferentes sistemas de irrigação disponíveis, incluindo irrigação por gotejamento, aspersão, mangueiras porosas e regadores manuais. Escolha o sistema que melhor atenda às necessidades da sua horta com base no tamanho, tipo de plantas e disponibilidade de água.",
      par3: "Planejamento da distribuição: Determine onde você precisa de irrigação em sua horta e como deseja distribuir a água. Considere fatores como o tipo de solo, a inclinação do terreno e as necessidades específicas de água de diferentes plantas.",
      par4: "Instalação do sistema: Instale o sistema de irrigação de acordo com o plano elaborado. Certifique-se de que as linhas de irrigação estejam posicionadas de forma a alcançar todas as áreas da horta e que os emissores de água estejam espaçados uniformemente para garantir uma cobertura adequada.",
      par5: "Automatização: Se possível, automatize o sistema de irrigação usando temporizadores ou sensores de umidade do solo. Isso garantirá que suas plantas recebam água na quantidade certa e nos momentos adequados, mesmo quando você não estiver presente.",
      par6: "Conservação de água: Adote práticas de conservação de água, como a instalação de sistemas de captação de água da chuva, o uso de cobertura morta para reduzir a evaporação da água do solo e a escolha de plantas tolerantes à seca sempre que possível.",
      par7: "Monitoramento: Monitore regularmente o sistema de irrigação para garantir seu funcionamento adequado. Verifique se não há vazamentos, entupimentos ou áreas da horta que não estão recebendo água suficiente.",
      par8: "Ajustes sazonais: Faça ajustes no sistema de irrigação conforme necessário com base nas mudanças sazonais, como aumento da temperatura ou precipitação. Ajuste a frequência e a duração da irrigação para atender às necessidades das plantas em diferentes épocas do ano.",
      par9: "Ao organizar a irrigação em sua horta de maneira eficiente, você estará garantindo o fornecimento consistente de água para suas plantas, o que é essencial para o crescimento saudável e a produção abundante.",
      par10: "",
      img: "../../../../assets/img/irrigacao.jpg",
    },
    {
      id: 5,
      titulo: "Pragas",
      par1: "Controlar pragas em uma horta é essencial para proteger suas plantas e garantir uma colheita saudável. Aqui estão algumas estratégias eficazes para o controle de pragas:",
      par2: "Identificação das pragas: Aprenda a identificar as pragas comuns em sua região e em suas plantas. Observe sinais de danos nas folhas, caules e frutos, bem como a presença de insetos adultos, larvas, ovos ou excrementos.",
      par3: "Práticas culturais: Adote boas práticas culturais, como rotação de culturas, plantio de variedades resistentes a pragas, manutenção da saúde do solo, remoção de plantas doentes ou danificadas e limpeza regular da horta para reduzir abrigos para as pragas.",
      par4: "Controle manual: Inspeccione regularmente suas plantas em busca de pragas e remova-as manualmente sempre que possível. Isso pode incluir apanhar insetos à mão, podar partes danificadas das plantas ou sacudir as plantas para remover insetos.",
      par5: "Barreiras físicas: Use barreiras físicas, como redes de proteção, cobertura de fileiras com tecidos leves ou cilindros de papel ao redor dos caules, para impedir que as pragas alcancem suas plantas.",
      par6: "Controle biológico: Introduza predadores naturais das pragas em sua horta, como joaninhas, louva-a-deus, vespas parasitoides e nematóides predadores. Isso pode ser feito comprando esses insetos ou plantando plantas atrativas para eles.",
      par7: "Inimigos naturais: Atraia inimigos naturais das pragas para sua horta plantando flores que forneçam néctar e pólen, como a lavanda, margaridas e erva-doce. Isso ajudará a manter um equilíbrio natural entre as pragas e seus predadores.",
      par8: "Tratamentos orgânicos: Use tratamentos orgânicos, como spray de óleo de neem, extrato de pimenta, sabão inseticida ou bicarbonato de sódio, para controlar pragas de forma segura e eficaz.",
      par9: "Armadilhas: Coloque armadilhas adesivas, armadilhas de feromônio ou armadilhas de cor amarela na horta para atrair e capturar pragas, reduzindo sua população.",
      par10:
        "Ao combinar várias estratégias de controle de pragas, você pode manter sua horta saudável e produtiva, minimizando o uso de produtos químicos e protegendo o meio ambiente.",
      img: "../../../../assets/img/pragas.jpg",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
