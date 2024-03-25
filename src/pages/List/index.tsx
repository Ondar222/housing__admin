import {  Stack } from "@mui/material";
import { ApplicationTable } from "../../components/ApplicationTable";
import { Layout } from "../../components/Layout";
import { useAppDispatch, useAppSelector } from "../../store/hooks/useAppDispatch";
import { getApplications } from "../../store/slices/application/thunks";
import { useEffect, useState } from "react";
import { UsePaginationProps } from "@mui/material/usePagination/usePagination";
import { ApplicationTableT } from "../../types/Application";


export const ListPage = () => {
    const [limit] = useState(10)
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)

    const { applications, isLoading } = useAppSelector((state) => state.application)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getApplications({ page: currentPage, limit: limit }))
    }, [])

    useEffect(() => {
        if (applications.meta) {
            setTotalCount(applications.meta?.total_count || applications.data.length)
            const pageCount = applications.meta?.total_count / limit

            if (pageCount < 1) {
                setPageCount(1)
            }
            else {
                setPageCount(Math.ceil(pageCount))
            }


        }
    }, [applications])

    const handlePageChange: UsePaginationProps["onChange"] = (_, page) => {
        setCurrentPage(page)
        dispatch(getApplications({
            page: page,
            limit: limit
        }))
    }

    const handleSearch = () => {

    }

    const handleFilter: ApplicationTableT["onFilter"] = ({ name, value }) => {
        console.log(name, value)

        dispatch(getApplications({
            page: currentPage,
            limit: limit,
            search: value
        }))
    }

    return (
        <Layout>
            <Stack direction={"column"} justifyContent={"space-between"}>

                <ApplicationTable
                    isLoading={isLoading}
                    data={applications.data}
                    currentPage={currentPage}
                    limit={limit}
                    total={totalCount}
                    pageCount={pageCount}
                    onSearch={handleSearch}
                    onFilter={handleFilter}
                    onPageChange={handlePageChange} />


            </Stack>
        </Layout>
    )
}