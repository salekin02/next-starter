'use client';
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
const Form = dynamic(() => import("@/app/form/[id]/page"));
import { useSelectedLayoutSegments } from 'next/navigation'
export default function Home() {
  const searchParams = useSearchParams()
  const segments = useSelectedLayoutSegments()

  console.log('segments', segments)
  const handleSheeOpen = (open) => {
    console.log(open)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">
        <Button className="mb-8">Home</Button>
      </Link>
      <Link href="/form/1">
        <Button className="mb-8">Go to Form</Button>
      </Link>
      <Link href="?form/1=sidebar">
        <Button className="mb-8">Go to Form with sidebar</Button>
      </Link>

    

      <Sheet defaultOpen={false} onOpenChange={handleSheeOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when youre done.
            </SheetDescription>
          </SheetHeader>
          <Form />
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </main>
  );
}
