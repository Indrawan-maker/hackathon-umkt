import { serviceSpaData } from "@/api/spaService"
import CardSpa from "@/components/atoms/CardSpa"

export default function CardSpaList() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-x-4 gap-y-6">
              {
                  serviceSpaData.map((data) => (
                      <CardSpa
                       key={data.id} 
                       judulSpa={data.name} 
                       deskripsiSpa={data.description} 
                       gambarSpa={data.gambar}/>
                    ))
            }
                </div>
    )
}