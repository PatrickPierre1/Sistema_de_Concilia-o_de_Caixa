import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getCaixas } from '@/services/caixaService';
import type { Caixa } from '@/types/caixa';

export function Index() {
  console.log('Componente Index renderizou.'); // Adicione esta linha

  const [caixas, setCaixas] = useState<Caixa[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCaixas();
        setCaixas(data);
      } catch (err) {
        setError('Falha ao buscar os dados dos caixas.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'aberto':
        return 'default';
      case 'ag. retorno':
        return 'destructive';
      case 'fechado':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (loading) {
    return <div className="p-4">Carregando...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Caixas</CardTitle>
          <CardDescription>
            Lista de caixas disponíveis para conciliação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loja</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Total de Vendas</TableHead>
                <TableHead>Total de Depósitos</TableHead>
                <TableHead>Saldo</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caixas.length > 0 ? (
                caixas.map((caixa) => (
                  <TableRow key={caixa.id}>
                    <TableCell className="font-medium">{caixa.loja}</TableCell>
                    <TableCell>{formatDate(caixa.data)}</TableCell>
                    <TableCell>{formatCurrency(caixa.totalVendas)}</TableCell>
                    <TableCell>
                      {formatCurrency(caixa.totalDepositos)}
                    </TableCell>
                    <TableCell
                      className={caixa.saldo < 0 ? 'text-red-500' : ''}
                    >
                      {formatCurrency(caixa.saldo)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={getStatusVariant(caixa.status)}>
                        {caixa.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Nenhum caixa encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}