/* eslint-disable sort-keys */
import React, { useEffect, useState } from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { AssessmentService } from '../../services/AssessmentService';
import styles from './styles.css';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {
      const assessmentData = await AssessmentService.getList();
      setAssessments(assessmentData);
      setLoading(false);
    };
    fetchAssessments();
  }, []);

  // Function to handle delete action
  const handleDelete = async (assessment) => {

    await AssessmentService.remove(assessment);
    setAssessments(prevAssessments => prevAssessments.filter(a => a.id !== assessment.id));
  };

  const columns = [
    {
      accessorKey: `catName`,
      header: `Name`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `catDateOfBirth`,
      header: `Date of Birth`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `score`,
      header: `Score`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `riskLevel`,
      header: `Risk Level`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `createdAt`,
      header: `Record Created`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `updatedAt`,
      header: `Last Updated`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `instrumentType`,
      header: `Instrument Type`,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: `deleteButton`,
      header: ``,
      cell: (props) =>
        <button style={{ color: `red` }} onClick={() => handleDelete(props.row.original)}>Delete</button>
      ,
    },
  ];

  const table = useReactTable({
    data: assessments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup =>
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header =>
                <th style={{ border: `1px black solid` }} className="text-center" key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>)}
            </tr>)}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row =>
            <tr key={row.id}>
              {
                row.getAllCells().map(cell =>
                  <td style={{ border: `1px black solid` }} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>)
              }
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};
