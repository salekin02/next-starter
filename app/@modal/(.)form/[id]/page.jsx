"use client"
import FormContent from "@/components/elements/FormContent"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Form = ({ params, ...props }) => {
    const [open, setOpen] = useState(true)
    const route = useRouter()
    console.log('Form', params);
    useEffect(() => {
        if (!open) route.back()
    }, [open])
    return (

        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when youre done.
                    </SheetDescription>
                </SheetHeader>
                <FormContent />
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default Form