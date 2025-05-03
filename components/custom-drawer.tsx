import { Button, CloseButton, Drawer, Link, Portal } from "@chakra-ui/react";
import styles from "./../styles/drawer.module.css"

export default function CustomDrawer({ setOpen }: { setOpen: any }) {

    return (
        <Drawer.Root open={true} onOpenChange={(e) => setOpen(e.open)}>
            <Drawer.Trigger asChild>
                <Button variant="outline" size="xs">
                    Open Drawer
                </Button>
            </Drawer.Trigger>
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title></Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body className={styles.menu_body}>

                            <div><Link className="heading_3" href="/">Home</Link></div>
                            <div><Link className="heading_3" href="/about">About Us</Link></div>
                            <div><Link className="heading_3" href="/product/list">All products</Link></div>

                        </Drawer.Body>
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}