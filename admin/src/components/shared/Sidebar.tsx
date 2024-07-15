"use client"
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

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
        borderLeft: `1px dashed #94a3b8`,
    },
}));

const Sidebar = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 bg-[#1f2937] w-[300px]'>
            <Box sx={{ width: "100%" }}>
                <SimpleTreeView defaultExpandedItems={['']}>
                    <CustomTreeItem itemId="grid" label="Data Grid">
                        <CustomTreeItem itemId="grid-community" label="@mui/x-data-grid" />
                        <CustomTreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                        <CustomTreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="pickers" label="Date and Time Pickers">
                        <CustomTreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                        <CustomTreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                    </CustomTreeItem>
                    <CustomTreeItem itemId="charts" label="Charts">
                        <CustomTreeItem itemId="charts-community" label="@mui/x-charts" />
                        <CustomTreeItem itemId="tree-view" label="Tree View">
                            <CustomTreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                        </CustomTreeItem>
                    </CustomTreeItem>
                </SimpleTreeView>
            </Box>
        </div>
    );
}
export default Sidebar