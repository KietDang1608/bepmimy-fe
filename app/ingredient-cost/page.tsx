'use client';

import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Recipe {
  id: number;
  name: string;
  unit: string;
  unitAmount: number;
  price: number;
}

const CostCalculator: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // gọi API khi load trang
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/ingredient-cost');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setRecipes(data);
      } catch (err: any) {
        setError(err.message || 'Error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Nguyên liệu', width: 200 },
    { field: 'unit', headerName: 'Đơn vị', width: 120 },
    { field: 'unitAmount', headerName: 'Định lượng', width: 150 },
    { field: 'price', headerName: 'Giá (VND)', width: 150 },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <div style={{ padding: '24px' }}>
      <Typography variant="h4" gutterBottom>
        TÍNH TOÁN CHI PHÍ NGUYÊN LIỆU
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={recipes}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
        />
      </div>
    </div>
  );
};

export default CostCalculator;
