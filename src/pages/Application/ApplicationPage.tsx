import { Stack } from "@mui/material"
import { UsePaginationProps } from "@mui/material/usePagination/usePagination"
import { FC, useEffect, useState } from "react"
import { ApplicationTable } from "../../components/ApplicationTable"
import { Layout } from "../../components/Layout"
import { ApplicationT, ApplicationTableT } from "../../types/Application"
import { useAuth, useHttp } from "../../providers"
import { ApiResponse } from "../../types/Api"

const ApplicationPage: FC = () => {
    const [limit] = useState(10)
    const [totalCount, setTotalCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [applications, setApplications] = useState<Array<ApplicationT>>([])
    const { getApi } = useHttp()
    const { access_token } = useAuth()

    const getApplications = async (config?: {
        page: number,
        limit: number,
        search: string | number | null
    }) => {
        await getApi<ApiResponse<any>>(`/items/application?fields=*.*.*.*`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${access_token}`
            },
            params: {
                limit: config?.limit || 100,
                page: config?.page || 1
            }
        })
            .then((res) => {
                if (res.data.meta) {
                    setTotalCount(res.data.meta.total_count)
                    const pageCount = res.data.meta?.total_count / limit

                    if (pageCount < 1) {
                        setPageCount(1)
                    }
                    else {
                        setPageCount(Math.ceil(pageCount))
                    }
                }

                setApplications(res.data.data)
            })
    }

    useEffect(() => {
        getApplications()
    }, [])

    const handlePageChange: UsePaginationProps["onChange"] = (_, page) => {
        setCurrentPage(page)
        getApplications({
            page: page,
            limit: limit,
            search: ""
        })
    }

    const handleSearch = () => {
        
    }

    const handleFilter: ApplicationTableT["onFilter"] = ({ name: _, value }) => {
        getApplications({
            page: currentPage,
            limit: limit,
            search: value
        })
    }

    return (
        <Layout>
            <Stack direction={"column"} justifyContent={"space-between"}>
                <ApplicationTable
                    isLoading={false}
                    data={applications}
                    currentPage={currentPage}
                    limit={limit}
                    total={totalCount}
                    pageCount={pageCount}
                    onSearch={handleSearch}
                    onFilter={handleFilter}
                    onPageChange={handlePageChange}
                />
            </Stack>
        </Layout>
    )
}

export { ApplicationPage }