"use client"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useQuery } from '@tanstack/react-query';
import { fetchAllCategory } from '@/utils/getAllCategory';
import QueryError from './QueryError';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';



const MenuDrawer = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ["sidebar-category"], queryFn: fetchAllCategory })
    const [open, setOpen] = useState(false);

    if (error) {
        return <QueryError err={error.message} cls='hidden'></QueryError>
    }

    if (isLoading) {
        return <IconButton
            color="inherit"
            aria-label="open drawer"
            disabled
        >
            <MenuIcon />
        </IconButton>
    }

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };


    const DrawerList = (
        <Box sx={{ width: "80vw" }} role="presentation">
            <div>
                {
                    data?.map(ele => {
                        return (
                            // ---------------------------parent accoedion----------------------------------------
                            <Accordion disableGutters sx={{ boxShadow: "none" }} key={ele.id}>
                                <AccordionSummary
                                    expandIcon={ele.subCategories?.length ? <ExpandMoreIcon /> : null}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    {
                                        ele.subCategories?.length
                                            ?
                                            <p >{ele.name}</p>
                                            :
                                            <Link href={`/category/${ele.name}`}>
                                                <p onClick={toggleDrawer(false)} className='w-full'>{ele.name}</p>
                                            </Link>
                                    }
                                </AccordionSummary>
                                {
                                    ele.subCategories?.length
                                        ?
                                        <AccordionDetails>
                                            {
                                                ele.subCategories.map((e, i) => {
                                                    return <div key={i}>
                                                        {/* -----------------nested accordion to show sub categories-------------- */}
                                                        <Accordion disableGutters sx={{ boxShadow: "none" }}>
                                                            <AccordionSummary
                                                                expandIcon={e.subSubCategories?.length ? <ExpandMoreIcon /> : null}
                                                                aria-controls="panel1-content"
                                                                id="panel1-header"
                                                                sx={!e.subSubCategories?.length ? {
                                                                    '& .MuiAccordionSummary-content': {
                                                                        margin: 0,
                                                                    },
                                                                    padding: 0
                                                                } : {}}
                                                            >
                                                                {
                                                                    e.subSubCategories?.length
                                                                        ?
                                                                        <p>{e.name}</p>
                                                                        :
                                                                        <Link href={`/category/${e.name}`}>
                                                                            <ListItemButton onClick={toggleDrawer(false)}>
                                                                                <ListItemText primary={e.name} />
                                                                            </ListItemButton>
                                                                        </Link>
                                                                }
                                                            </AccordionSummary>
                                                            {
                                                                e.subSubCategories?.length
                                                                    ?
                                                                    <AccordionDetails>
                                                                        {
                                                                            e.subSubCategories.map((element, index) => {
                                                                                return <div key={index}>
                                                                                    <Link href={`/category/${element}`}>
                                                                                        <ListItemButton onClick={toggleDrawer(false)}>
                                                                                            <ListItemText primary={element} />
                                                                                        </ListItemButton>
                                                                                    </Link>
                                                                                </div>
                                                                            })

                                                                        }
                                                                    </AccordionDetails>
                                                                    :
                                                                    null
                                                            }
                                                        </Accordion>
                                                    </div>
                                                })
                                            }
                                        </AccordionDetails>
                                        :
                                        null
                                }
                            </Accordion>
                        )
                    })
                }
            </div>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                // edge="start"
                onClick={toggleDrawer(true)}
            // sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
export default MenuDrawer