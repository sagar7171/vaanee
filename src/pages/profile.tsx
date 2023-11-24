import DashLayout from '@/components/containers/dashboard/DashLayout'
import React from 'react'
import  WithAuth  from '@/components/common/WithAuth';
import { Flex } from '@chakra-ui/react';

function Profile() {
    return (
        <DashLayout>
            <Flex h={"100%"} justifyContent={"center"} alignItems={"center"}>Profile coming soon.</Flex>
        </DashLayout>

    )
}

export default WithAuth(Profile)