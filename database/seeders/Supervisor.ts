import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Supervisor from 'App/Models/Supervisor'

export default class SupervisorSeeder extends BaseSeeder {
  public async run() {
    await Supervisor.createMany([
      {
        category: 'PIS/PASEP e COFINS',
        name: 'Agricultura e Agroindústria – crédito presumido',
        description:
          'Crédito presumido para agroindústria na compra de insumos de produtor pessoa física, cooperativas, produtor pessoa jurídica. Base legal: Lei n° 10.925/2004, art. 8°.',
      },
      {
        category: 'PIS/PASEP e COFINS',
        name: 'Agricultura e Agroindústria – Defensivos agropecuários',
        description:
          'Redução a zero das alíquotas do PIS e COFINS sobre importação ou venda no mercado interno de defensivos agropecuários classificados na posição 38.08 da TIPI e suas matérias-primas. Base legal: Lei 10.925/04, arts. 1º, INCISO II.',
      },
      {
        category: 'PIS/PASEP e COFINS',
        name: 'Agricultura e Agroindústria – Desoneração Cesta Básica',
        description:
          'Redução a zero das alíquotas do PIS e COFINS sobre importação ou venda no mercado interno de: adubos, fertilizantes e suas matérias-primas; sementes e mudas; corretivo de solo; feijão, arroz, farinha de mandioca e batata-doce; inoculantes agrícolas; vacina veterinária; milho; pintos de 1 (um) dia; leite, bebidas lácteas; queijos; soro de leite; farinha de trigo; trigo; pão; produtos hortícolas, frutas e ovos; sementes e embriões; acetona; massas alimentícias; carne bovina, suína, ovina, caprina, ave, peixe; café; açúcar; óleo de soja; manteiga; margarina; sabão; pasta de dente; fio dental; papel higiênico. Base legal: Lei 10.925/04, arts. 1º, 8º, 9º; Decreto nº 5.630/05; Lei 10.865/04, art. 28 e art. 8º § 12; Lei 11.727/08, art. 25; Lei 12.839/13.',
      },
      {
        category: 'PIS/PASEP e COFINS',
        name: 'Álcool',
        description:
          'Crédito presumido de PIS/COFINS para as pessoas jurídicas importadora ou produtora de álcool, inclusive pra fins carburantes. Base legal: Lei 12.859/13, art. 1º a 4º, Decreto 7.997/13.',
      },
      {
        category: 'PIS/PASEP e COFINS',
        name: 'Biodiesel',
        description:
          'Redução das alíquotas do PIS/COFINS sobre a venda de biodiesel pela aplicação de coeficientes de redução definidos pelo Poder Executivo. Crédito presumido de PIS/COFINS calculado sobre o valor das matérias-primas adquiridas de pessoa física, de cooperado pessoa física, de pessoa jurídica que exerça atividade agropecuária, de cooperativa de produção agropecuária ou de cerealista e utilizados como insumo na produção de biodiesel. Suspensão do PIS/COFINS sobre a venda de matéria-prima in natura de origem vegetal, destinada à produção de biodiesel. Base legal: Lei 11.116/05, arts. 1º ao 13; Decreto 5.297/04, art. 4º  ',
      },
      {
        category: 'IRPJ – IMPOSTO DE RENDA PESSOA JURÍDICA',
        name: 'SUDAM – Isenção Projeto Industrial / Agrícola',
        description:
          'Isenção do IRPJ para empreendimento industrial ou agrícola que tenha sido instalado, ampliado, modernizado ou diversificado, até 31 de dezembro de 1997 ou cujo projeto tenha sido aprovado ou protocolizado até 14 de novembro de 1997. Base legal: Lei 9.532/97, art. 3º; Lei 9.808/99, art. 13.',
      },
      {
        category: 'IRPJ – IMPOSTO DE RENDA PESSOA JURÍDICA',
        name: 'SUDAM – Redução 75% Projeto Setor Prioritário',
        description:
          'Redução de 75% do IRPJ para empreendimentos, com projetos protocolizados e aprovados após 23 de agosto de 2000, enquadrados em setores da economia considerados, em ato do Poder Executivo, prioritários para o desenvolvimento regional. Aprovação até 31/12/2018 e uso por dez anos. Base Legal: MP 2.199-14/01, art. 1º; Lei 12.715/12, art. 69, Lei 12.995/14, art. 10; Lei 13.799/2019; Decreto 9.682/2019.',
      },
      {
        category: 'IRPJ – IMPOSTO DE RENDA PESSOA JURÍDICA',
        name: 'SUDENE – Isenção Projeto Industrial / Agrícola',
        description:
          'Isenção do IRPJ para empreendimento industrial ou agrícola que tenha sido instalado, ampliado, modernizado ou diversificado, até 31 de dezembro de 1997 ou cujo projeto tenha sido aprovado ou protocolizado até 14 de novembro de 1997. Base legal: Lei 9.532/97, art. 3º; Lei 9.808/99, art. 13.',
      },
      {
        category: 'IRPJ – IMPOSTO DE RENDA PESSOA JURÍDICA',
        name: 'SUDENE – Redução 75% Projeto Setor Prioritário',
        description:
          'Redução de 75% do IRPJ para empreendimentos, com projetos protocolizados e aprovados após 23 de agosto de 2000, enquadrados em setores da economia considerados, em ato do Poder Executivo, prioritários para o desenvolvimento regional. Aprovação até 31/12/2018 e uso por dez anos. Base legal: MP 2.199-14/01, art. 1º; Lei 12.715/12, art. 69, Lei 12.995/14, art. 10.  ',
      },
    ])
  }
}
