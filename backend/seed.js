const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando a população do banco de dados...');

  await prisma.transacao.deleteMany();
  await prisma.conciliacao.deleteMany();
  await prisma.caixa.deleteMany();


  const caixaCentro = await prisma.caixa.create({
    data: {
      nomeLoja: 'Loja Centro - SP',
      status: 'aberto',
      transacoes: {
        create: [
          { data: new Date(), tipo: 'venda', valor: 1500.00, codigo: 'V-001' },
          { data: new Date(), tipo: 'venda', valor: 350.50, codigo: 'V-002' },
          { data: new Date(), tipo: 'venda', valor: 2800.00, codigo: 'V-003' },
          
          { 
            data: new Date(), 
            tipo: 'deposito', 
            valor: 1000.00, 
            codigo: 'DEP-999', 
            depositoConferido: true
          },
          { 
            data: new Date(), 
            tipo: 'deposito', 
            valor: 2000.00, 
            codigo: 'DEP-888', 
            depositoConferido: false
          },
        ],
      },
    },
  });

  const caixaShopping = await prisma.caixa.create({
    data: {
      nomeLoja: 'Loja Shopping Morumbi',
      status: 'ag. retorno',
      transacoes: {
        create: [
          { data: new Date(), tipo: 'venda', valor: 5000.00, codigo: 'V-100' },
          { 
            data: new Date(), 
            tipo: 'deposito', 
            valor: 4500.00, 
            codigo: 'DEP-ERROR', 
            depositoConferido: false,
            mensagemAnalista: 'Valor divergente do sistema. Favor enviar comprovante.' 
          },
        ],
      },
      conciliacoes: {
        create: {
          data: new Date(),
          analistaResponsavel: 'Carlos Financeiro',
          status: true,
        }
      }
    },
  });

  const caixaNorte = await prisma.caixa.create({
    data: {
      nomeLoja: 'Loja Zona Norte',
      status: 'fechado',
    }
  });

  const conciliacaoNorte = await prisma.conciliacao.create({
    data: {
      data: new Date('2023-10-01'),
      analistaResponsavel: 'Ana Gerente',
      status: false,
      caixaId: caixaNorte.id
    }
  });

  await prisma.transacao.create({
    data: {
      data: new Date('2023-10-01'),
      tipo: 'venda',
      valor: 10000.00,
      caixaId: caixaNorte.id,
      conciliacaoId: conciliacaoNorte.id,
      depositoConferido: true
    }
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });