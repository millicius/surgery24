import mongoDBConnect from "@/lib/mongodb"
import Surgery from "@/models/Surgery"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default async function DataForm() {
    const create = async (formData) => {
        'use server'
        const { title, description } = Object.fromEntries(formData)
        //console.log('Zdarova', title, description)
        try {
            mongoDBConnect()
            const newSurgery = new Surgery({
              title,
              description
            })
            await newSurgery.save()
          } catch (err) {
            console.log(err)
            throw new Error('Failed...')  
          }

        revalidatePath('/new')
        redirect('/')
    }
    
  return (
    <div>
        <form action={create}>
            <input type="text" name="title" placeholder="Title" required/>
            <input type="text" name="description" placeholder="Description" required/>
            <button>Roll</button>
        </form>
    </div>
  )
}
