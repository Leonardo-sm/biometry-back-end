import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pesticede from 'App/Models/Pesticede'

export default class PesticedeSeeder extends BaseSeeder {
  public async run() {
    await Pesticede.createMany([
      {
        name: 'ALDRIM',
        use: 'Inseticida 309-00-2',
        status: 'BANIDO',
        description: 'Alta persistência ambiental e/ou periculosidade',
      },
      {
        name: 'BHC (HCH)',
        use: 'Fungicida Inseticida 118-74-1',
        status: 'BANIDO',
        description: 'Alta persistência ambiental e/ou periculosidade',
      },
      {
        name: 'CARBOFURANO',
        use: 'Inseticida 1563-66-2',
        status: 'BANIDO',
        description:
          'Alta toxicidade aguda; alta persistência ambiental e/ou periculosidade, teratogenicidade e neutotoxicidade',
      },
      {
        name: 'DDT',
        use: 'Inseticida 50-29-3',
        status: 'BANIDO',
        description:
          'Alta persistência ambiental e/ou periculosidade, carcinogenicidade, distúrbios hormonais',
      },
      {
        name: 'ENDOSULFAN',
        use: 'Fungicida Inseticida 115-29-7',
        status: 'BANIDO',
        description:
          'Alta persistência ambiental e/ou periculosidade; distúrbios hormonais; câncer',
      },
      {
        name: 'LINDANO',
        use: 'Inseticida 58-89-9',
        status: 'BANIDO',
        description: 'Alta persistência ambiental e/ou periculosidade; neurotoxicidade',
      },
      {
        name: 'METAMIDOFOS',
        use: 'Inseticida 10265-92-6',
        status: 'BANIDO',
        description: 'Alta toxicidade aguda e neurotoxicidade',
      },
      {
        name: 'PARATION',
        use: 'Inseticida 56-38-2',
        status: 'BANIDO',
        description: 'Neurotoxicidade, câncer, Causa danos ao sistema reprodutor',
      },
      {
        name: 'PARATIONA METILICA',
        use: 'Inseticida 298-00-0',
        status: 'BANIDO',
        description: 'Mutagênico; Causa danos ao sistema reprodutor; distúrbios hormonais',
      },
      {
        name: 'PENTACLOROFENOL',
        use: 'Fungicida Inseticida Moluscicida 87-86-5',
        status: 'BANIDO',
        description: 'Hepatotoxicidade, nefrotoxicidade, distúrbios hormonais',
      },
    ])
  }
}
