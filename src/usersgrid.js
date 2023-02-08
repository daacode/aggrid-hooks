import React, {useState, useEffect, useMemo} from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {getData} from "./getdata";


export function UsersGrid() {

   const [rowData, setRowData] = useState([]);

   const colDefs = useMemo(()=> [
        {field: 'first_name'},
        {field: 'last_name'},
        {field: 'email', editable:'true'},
    ],[]);

   useEffect(() => {
        setRowData(getData(5000));
   },[]);

   return (  
       <div className="ag-theme-alpine" style={{height:400, width:600, margin:200}}>
          <AgGridReact
               defaultColDef = {{sortable: true, filter: true }}
               pagination = {true}
               rowData = {rowData}
               columnDefs = {colDefs}>
          </AgGridReact>       
       </div>
   )
     
}