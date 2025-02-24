"use client"
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import Link from 'next/link';

const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
    color:
        theme.palette.mode === 'light'
            ? theme.palette.grey[400]
            : theme.palette.grey[200],

    [`& .${treeItemClasses.content}`]: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: theme.spacing(0.5),
        padding: theme.spacing(0.9, 1),
        margin: theme.spacing(0.2, 0),
        [`& .${treeItemClasses.label}`]: {
            fontSize: '0.8rem',
            fontWeight: 500,
        },
        //custom style-------------
        backgroundColor: "transparent",
        transition: 'background-color 0.3s',
        [`&:hover`]: {
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
        },
        [`&.${treeItemClasses.selected}`]: {
            backgroundColor: alpha(theme.palette.primary.main, 0.5),
            // color: theme.palette.primary.main,
            fontWeight: 'bold',
        },
    },
    [`& .${treeItemClasses.iconContainer}`]: {
        order: 1,
        marginLeft: 'auto',
        borderRadius: '50%',
        backgroundColor: "transparent",
        // theme.palette.mode === 'light'
        //     ? alpha(theme.palette.primary.main, 0.25)
        //     : theme.palette.primary.dark,
        color: theme.palette.mode === 'dark' && theme.palette.primary.contrastText,
        padding: theme.spacing(0, 1.2),
    },
    [`& .${treeItemClasses.groupTransition}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        // borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.1)}`,
        // borderLeft: `1px dashed #94a3b8`,
    },
}));

const Sidebar = () => {
    return (
        <div className='bg-[#1f2937] w-[250px] 14i:w-[300px] h-screen'>
            <div className='h-[100px] flex items-center pl-5'>
                <p className='text-white text-4xl font-bold'>Sikhor</p>
            </div>
            <Box sx={{ width: "100%", paddingX: "20px" }}>
                <SimpleTreeView defaultExpandedItems={['']}>
                    <Link href={"/"}><CustomTreeItem itemId="Home" label="Home" /></Link>
                    <Link href={"/orders"}><CustomTreeItem itemId="Order" label="Order" /></Link>
                    <CustomTreeItem itemId="Products" label="Products">
                        <Link href={"/all_products"}><CustomTreeItem itemId="All" label="All" /></Link>
                        <Link href={"/add_product"}><CustomTreeItem itemId="Add" label="Add" /></Link>
                        <Link href={"/category"}><CustomTreeItem itemId="Category" label="Category" /></Link>
                    </CustomTreeItem>
                </SimpleTreeView>
            </Box>
        </div>
    );
}
export default Sidebar