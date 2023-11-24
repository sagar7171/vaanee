import { ProjectDataObj } from '@/components/store/models/redux-models';
import { Text } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react'

function useColAllProject() {
    return (
        [
            {
                title: "Project Name",
                render: (rowData: ProjectDataObj) => {
                    const {project_name}=rowData;
                    return (
                        <Text>{project_name}</Text>
                    );
                },
            },
            {
                title: "Date Created",
                render: (rowData: ProjectDataObj) => {
                    const {created_on}=rowData;
                    return (
                        <Text>{moment(created_on).format("DD MMM YYYY")}</Text>
                    );
                },
            },
            {
                title: "Project Type",
                render: (rowData: ProjectDataObj) => {
                    const {project_type}=rowData;
                    return (
                        <Text>{project_type}</Text>
                    );
                },
            },
            {
                title: "Status",
                render: (rowData: ProjectDataObj) => {
                    const {status}=rowData;
                    return (
                        <Text>{status}</Text>
                    );
                },
            }
        ]
    )
}

export default useColAllProject