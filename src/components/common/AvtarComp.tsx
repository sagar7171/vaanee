import React from 'react'
import { useRouter } from 'next/router';
import { toggleUploadVideoModal } from '../store/actions/modalActions';
import { logout } from '../store/actions/authActions';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../hooks/redux-hooks';
import { Avatar, Divider, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';

function AvatarComp() {
    const dispatch = useAppDispatch()
    const router = useRouter();
    const list = [
        {
            label: 'Create A Project',
            href: "",
            onClick: () => {
                dispatch(toggleUploadVideoModal());
            },
        },
        {
            href: "/dashboard",
            label: 'Dashboard',
            onClick: () => {
                // router.push('/dashboard');
            },
        },
        {
            label: 'Logout',
            href: "",
            onClick: () => {
                dispatch(logout());
                toast.success('Logout successfully.');
            },
        },
    ]
    return (
        <Menu>
            <MenuButton>
                <Avatar />
            </MenuButton>
            <MenuList>
                {list.map((item, key) => {
                    return <React.Fragment key={key}>
                        <MenuItem
                            onClick={key !== 1 ? item.onClick:()=>{}}>
                            {
                                key === 1 ? <Link href={item.href}>
                                    {item.label}
                                </Link> : <>{item.label}</>
                            }
                        </MenuItem>
                        {key === 0 && <Flex px={".6rem"}><Divider /></Flex>}
                    </React.Fragment>
                })}
            </MenuList>
        </Menu>
    )
}

export default AvatarComp