import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      setAssessments(await AssessmentService.getList());
    };
    fetchAssessments();
  }, []);
  const columns = [
    {
      accessorKey: `catName`,
      header: `Name`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `catDateOfBirth`,
      header: `Date of Birth`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `score`,
      header: `Score`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `riskLevel`,
      header: `Risk Level`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `createdAt`,
      header: `Record Created`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `updatedAt`,
      header: `Last Updated`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `instrumentType`,
      header: `Instrument Type`,
      // eslint-disable-next-line sort-keys
      cell: (props) => <p>{props.getValue()}</p>,
    },
  ];

  const table = useReactTable({
    assessments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box>
      <Box className="table">
        {table.getHeaderGroups().map((headerGroup) =>
          <Box className="tr" key={headerGroup.id}>
            {headerGroup.headers.map((header) =>
              <Box className="th" key={header.id}>
                {header.column.columnDef.header}
              </Box>)}
          </Box>)}
      </Box>
    </Box>
  );
};
