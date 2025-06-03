import React, { Fragment, useState } from 'react'
import CardContainer from './CardContainer'
import { TableContainer } from './TableContainer'
import { Button } from './button/Button'
import { IconFilterAlt2 } from '../assets/icons/InterfaceIcons'
import { cn } from '../utils/utils'
import { POSITION_VARIENTS } from '../utils/tabelUtils'

const DataTableAlt = ({
      columns = [],
  data = [],
  onRowClick = null,
  isLoading = true,
  pagination = {
    onPrev: () => {},
    onNext: () => {},
    currPage: 1,
    totalPages: 10,
  },
  showPagination = true,
  className = "",
  emptyStateConfig = {},
  containerClassName = "",
  onSort = null,
  tableClasses = {
    thead: "",

  },
}) => {
     const [inlineSort, setInlineSort] = useState({
    sortKey: "",
    sortType: null, // true | false | null
  });

      const handleRowClick = (e, data) => {
    e.stopPropagation();
    if (!onRowClick) return;
    onRowClick?.(data);
  };
      const handleSort = () => {
    const { sortKey, sortType } = inlineSort;
    if (sortType === null) return data;
    if (onSort) {
      return onSort(sortKey, sortType, data);
    }
    return sortArr([...data], sortKey, sortType);
  };

    const tableData = handleSort();
  return (
    <>
      <div
        className={cn(
          `w-full max-w-full max-h-full rounded-xl flex flex-col`,
          className
        )}
      >
        <div
          className={cn(
            `px-4 w-full max-w-full max-h-full   bg-white overflow-auto  panel-scrollbar ${
              isLoading ? "overflow-hidden" : "overflow-auto"
            }`,
            containerClassName
          )}
        >
          <table className="mt-2 main-table-alt min-w-full table-auto text-sm text-gray-800">
            <thead
              className={cn(
                "sticky top-0 z-30 h-6 bg-[#f8f5f5]",
                tableClasses?.thead
              )}
            >
              <tr className="">
                {columns?.map((column) => {
                  const {
                    id,
                    head,
                    isSortable,
                    isFixed,
                    isLeftFixed = true,
                    align,
                    key,
                  } = column;
                  return (
                    <th
                      key={id}
                      onClick={() => handleSortBtnClick(column)}
                      className={`${
                        isSortable && "cursor-pointer bg-white border-b  border-gray-200 hover:bg-[#F8FAFC]"
                      } ${
                        isFixed && isLeftFixed
                          ? "sticky left-0 z-10 bg-[#F8FAFC]"
                          : isFixed &&
                            !isLeftFixed &&
                            "sticky right-0 z-30 bg-[#F8FAFC]"
                      } relative whitespace-nowrap group text-fe duration-300`}
                      title={head}
                    >
                      <div
                        className={`flex items-center ${POSITION_VARIENTS[align]}  gap-3  px-4 py-2 pb-2.5`}
                      >
                        <p className={`font-semibold text-[#030229]`}>
                          {head || "empty"}
                        </p>
                        {isSortable && inlineSort?.sortKey === key && (
                          <span
                            className={`flex-shrink-0 ${
                              {
                                true: "rotate-180",
                                false: "rotate-0",
                                null: "rotate-0",
                              }[inlineSort?.sortType]
                            }`}
                          >
                            <IconFilterAlt2 size="9" />
                          </span>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <>
                  {Array.from({ length: 20 }, (_, index) => {
                    return (
                      <Fragment key={index}>
                        <tr className="h-[10px]"></tr>

                        <tr className="bg-gray-300 animate-pulse rounded-lg">
                          {columns?.map((_, index) => (
                            <td
                              key={index}
                              className="h-11 px-4 py-2 first:rounded-l-[10px] last:rounded-r-[10px]"
                            ></td>
                          ))}
                        </tr>

                        <tr className="h-[10px] hidden last:table-row"></tr>
                      </Fragment>
                    );
                  })}
                </>
              ) : (
                <>
                  {tableData?.map((data, index) => {
                    return (
                      <>
                        <tr className="h-[10px] first:sr-only"></tr>

                        <tr
                          key={index}
                          onClick={(e) => handleRowClick(e, data)}
                          className={`min-h-11 bg-white ${
                            onRowClick &&
                            "cursor-pointer hover:bg-gray-100 clickable-row"
                          } duration-300`}
                        >
                          {columns?.map((column) => {
                            const {
                              id,
                              key,
                              render,
                              isFixed,
                              isLeftFixed = true,
                              align,
                            } = column;
                            return (
                              <td
                                className={`fixed-td first:rounded-l-[10px] last:rounded-r-[10px]  ${
                                  isFixed && isLeftFixed
                                    ? "sticky left-0 z-20"
                                    : isFixed &&
                                      !isLeftFixed &&
                                      "sticky right-0 z-20"
                                } relative w-inherit`}
                                key={id}
                                title={data[key]}
                              >
                                {render ? (
                                  render(data, column)
                                ) : (
                                  <div
                                    className={`min-h-11 min-w-[] max-w-[500px] line-clamp-2 px-4 py-2 flex items-center ${POSITION_VARIENTS[align]}`}
                                  >
                                    {data[key] || (
                                      <div
                                        icon=""
                                        message="notavailable"
                                      />
                                    )}
                                  </div>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                        <tr className="h-[10px] hidden last:table-row"></tr>
                      </>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
        {showPagination && (
          <div className="sticky inset-x-0 bottom-0 z-30 p-4 flex items-center  rounded-b-xl  justify-between gap-4 border-t border-gray-200 bg-white">
            <p className="text-sm font-medium text-gray-500">
              {"page"} {pagination?.currPage}
            </p>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                title="Previous Page"
                onClick={() => {
                  pagination?.onPrev();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                disabled={pagination?.currPage < 2}
              >
                Previos
              </Button>
              <Button
                size="sm"
                variant="secondary"
                title="Next Page"
                onClick={() => {
                  pagination?.onNext();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
    
  )
}

export default DataTableAlt