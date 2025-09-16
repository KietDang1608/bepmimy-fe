'use client';

import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';
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
        const res = await fetch('/api/ingredient-cost', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch data');
        const data: Recipe[] = await res.json();
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
    {
      field: 'price',
      headerName: 'Giá (VND)',
      renderCell: (params) => (
        <Typography color="primary" fontFamily={'MyFont'} textAlign={'center'} mt={1}>
          {params.value != null
            ? params.value.toLocaleString('vi-VN')
            : ''}
        </Typography>
      ),
    },
  ];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height={160}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <Box p={3} 
    sx={{
      fontFamily: 'MyFont',
    }} >
      <Typography variant="h4" gutterBottom 
      sx={{
        fontFamily: 'MyFont',
        fontWeight: 'bold',
        textAlign: 'center',
        mb: 3,
      }}>
        TÍNH TOÁN CHI PHÍ NGUYÊN LIỆU
      </Typography>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={recipes}
          columns={columns}
          pageSizeOptions={[5, 10]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          sx={{ fontFamily: 'MyFont' }}
          
        />
      </Box>
    </Box>
  );
};

export default CostCalculator;
