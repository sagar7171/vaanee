import React from "react";
import { ColsType, GlobalTableProps } from "../store/models/page-props";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

/**
const cols = [
    renderHeadTitle: () => {  // if wanted to render some component on table header
        return (<></>);
    },
    title: '', // if just wanted to render simple title on table header
    thClassName: '', // for th class
    tdClassName: '', // for td class
    render: (rowData) => {
        return ( <> </>);
    },
    renderTdForAction: (rowData, key) => { // if want to render some action dropdown with its own td
                return (<></>);
            },
},
]

 */

const GlobalTable = ({
    tableClassName,
    trClassName,
    headStyle,
    cols,
    data,
    emptyPlaceholder,
    tableRef,
    tableStyle,
    loadingMsg,
    rowId,
    colorScheme,
    variant
}: GlobalTableProps) => {
    return (
        // <>
        //     <table
        //         ref={tableRef}
        //         className={tableClassName ? tableClassName : ""}
        //         style={tableStyle ? tableStyle : {}}
        //     >
        //         <thead>
        //             <tr style={headStyle ? headStyle : {}}>
        //                 {cols.map((headerItem: ColsType, index: number) => (
        //                     <th
        //                         style={
        //                             headerItem.thStyle ? headerItem.thStyle : {}
        //                         }
        //                         className={
        //                             headerItem.thClassName
        //                                 ? headerItem.thClassName
        //                                 : ""
        //                         }
        //                         key={index}
        //                         onClick={() => {
        //                             headerItem.onClick && headerItem.onClick();
        //                         }}
        //                         id={headerItem.thId ? headerItem.thId : ""}
        //                         onDragStart={(e) => {
        //                             headerItem.onDragStart &&
        //                                 headerItem.onDragStart(e, index - 1);
        //                         }}
        //                         onDragOver={(e) => {
        //                             headerItem.onDragOver &&
        //                                 headerItem.onDragOver(e);
        //                         }}
        //                         onDrop={(e) => {
        //                             headerItem.onDrop &&
        //                                 headerItem.onDrop(e, index - 1);
        //                         }}
        //                         draggable={headerItem.draggable}
        //                     >
        //                         {headerItem.renderHeadTitle
        //                             ? headerItem.renderHeadTitle()
        //                             : headerItem.title}
        //                         {headerItem?.extraContent
        //                             ? headerItem?.extraContent
        //                             : ""}
        //                     </th>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {data && data.length > 0 ? (
        //                 data.map((item, index) => (
        //                     <tr
        //                         className={`${trClassName ? trClassName : ""}${rowId && rowId === item.id ? "active" : ""
        //                             }`}
        //                         key={index}
        //                     >
        //                         {cols.map((col, key) =>
        //                             col.renderTdForAction ? (
        //                                 col.renderTdForAction(item, key, index)
        //                             ) : (
        //                                 <td
        //                                     className={
        //                                         col.tdClassName
        //                                             ? col.tdClassName
        //                                             : ""
        //                                     }
        //                                     key={key}
        //                                 >
        //                                     {col.render &&
        //                                         col.render(item, index)}
        //                                 </td>
        //                             )
        //                         )}
        //                     </tr>
        //                 ))
        //             ) : (
        //                 <>
        //                     {loadingMsg && !Array.isArray(data) ? (
        //                         <tr>
        //                             <td colSpan={11} align="center">
        //                                 <b>{loadingMsg}</b>
        //                             </td>
        //                         </tr>
        //                     ) : (
        //                         <tr>
        //                             <td colSpan={11} align="center">
        //                                 <b>
        //                                     {emptyPlaceholder
        //                                         ? emptyPlaceholder
        //                                         : "No Record"}
        //                                 </b>
        //                             </td>
        //                         </tr>
        //                     )}
        //                 </>
        //             )}
        //         </tbody>
        //     </table>
        // </>
        <TableContainer overflowX="unset" overflowY="unset">
            <Table variant={variant??'simple'} colorScheme={colorScheme}
                ref={tableRef}
                // size={"lg"}
                className={tableClassName ? tableClassName : ""}
                style={tableStyle ? tableStyle : {    borderCollapse: "collapse"   }}
            >
                <Thead position="sticky" top={0} zIndex="docked" background={"gray.100"}>
                    <Tr style={headStyle ? headStyle : {}}>
                        {cols.map((headerItem: ColsType, index: number) => (
                            <Th
                                style={
                                    headerItem.thStyle ? headerItem.thStyle : { }
                                }
                                className={
                                    headerItem.thClassName
                                        ? headerItem.thClassName
                                        : ""
                                }
                                key={index}
                                onClick={() => {
                                    headerItem.onClick && headerItem.onClick();
                                }}
                                id={headerItem.thId ? headerItem.thId : ""}
                                onDragStart={(e) => {
                                    headerItem.onDragStart &&
                                        headerItem.onDragStart(e, index - 1);
                                }}
                                onDragOver={(e) => {
                                    headerItem.onDragOver &&
                                        headerItem.onDragOver(e);
                                }}
                                onDrop={(e) => {
                                    headerItem.onDrop &&
                                        headerItem.onDrop(e, index - 1);
                                }}
                                draggable={headerItem.draggable}
                            >
                                {headerItem.renderHeadTitle
                                    ? headerItem.renderHeadTitle()
                                    : headerItem.title}
                                {headerItem?.extraContent
                                    ? headerItem?.extraContent
                                    : ""}
                            </Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data && data.length > 0 ? (
                        data.map((item, index) => (
                            <Tr
                                className={`${trClassName ? trClassName : ""}${rowId && rowId === item.id ? "active" : ""
                                    }`}
                                key={index}
                            >
                                {cols.map((col, key) => 
                                    col.renderTdForAction ? (
                                        col.renderTdForAction(item, key, index)
                                    ) : (
                                        <Td
                                            className={
                                                col.tdClassName
                                                    ? col.tdClassName
                                                    : ""
                                            }
                                            key={key}
                                        >
                                            {col.render &&
                                                col.render(item, index)}
                                        </Td>
                                    )
                                )}
                            </Tr>
                        ))
                    ) : (
                        <>
                            {loadingMsg && !Array.isArray(data) ? (
                                <Tr>
                                    <Td colSpan={11} align="center">
                                        <b>{loadingMsg}</b>
                                    </Td>
                                </Tr>
                            ) : (
                                <Tr>
                                    <Td colSpan={11} align="center">
                                        <b>
                                            {emptyPlaceholder
                                                ? emptyPlaceholder
                                                : "No Record"}
                                        </b>
                                    </Td>
                                </Tr>
                            )}
                        </>
                    )}
                </Tbody>
            </Table>
        </TableContainer >

    );
};

export default GlobalTable;
