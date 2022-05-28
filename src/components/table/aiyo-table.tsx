import React, { ReactNode } from "react";
import './aiyo-table.css'

interface Props {
    dataSource: any[];
    colunms: any[];
}

export const AiyoTable = (props: Props) => {
    /*  const tableHead: ReactNode[] = [];
     const renderTableHead = props.colunms.map((item, index) => {
         return (<tr><th key={index}>{item}</th></tr>);
     }); */
    const renderRow = (rowData: any) => {
        const row: ReactNode[] = [];
        Object.keys(rowData).map(key => {
            const el = <td>{rowData[key]}</td>
            row.push(el);
        });
        return row;
    }
    return (
        <div className="aiyo-table">
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr className="table-head">
                        {props.colunms.map((item, index) => {
                            return (<th key={index}>{item}</th>);
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.dataSource.map((row, index) => {
                        return (
                            <tr key={index}>
                                {typeof row === 'object' ? renderRow(row) : (<td>{row}</td>)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
